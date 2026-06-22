import "server-only";
import { randomBytes, scryptSync, timingSafeEqual } from "crypto";
import { sql, ensureSchema } from "./db";

// Format hash: "scrypt$<saltHex>$<hashHex>" — pakai crypto bawaan Node,
// tidak perlu dependency tambahan (bcrypt/argon).
export function hashPassword(password: string): string {
  const salt = randomBytes(16);
  const hash = scryptSync(password, salt, 64);
  return `scrypt$${salt.toString("hex")}$${hash.toString("hex")}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const parts = stored.split("$");
  if (parts.length !== 3 || parts[0] !== "scrypt") return false;
  const salt = Buffer.from(parts[1], "hex");
  const expected = Buffer.from(parts[2], "hex");
  const actual = scryptSync(password, salt, expected.length);
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export async function countAdminUsers(): Promise<number> {
  await ensureSchema();
  const [row] = await sql`SELECT count(*)::int AS n FROM admin_users`;
  return (row?.n as number) ?? 0;
}

export async function getAdminPasswordHash(email: string): Promise<string | null> {
  await ensureSchema();
  const rows = await sql`
    SELECT password_hash FROM admin_users
    WHERE lower(email) = ${email.trim().toLowerCase()} LIMIT 1
  `;
  return rows[0] ? (rows[0].password_hash as string) : null;
}

// Buat / perbarui admin (upsert berdasarkan email). Dipakai skrip seed.
export async function upsertAdminUser(email: string, password: string): Promise<void> {
  await ensureSchema();
  const normalized = email.trim().toLowerCase();
  const hash = hashPassword(password);
  await sql`
    INSERT INTO admin_users (email, password_hash)
    VALUES (${normalized}, ${hash})
    ON CONFLICT (email) DO UPDATE
      SET password_hash = EXCLUDED.password_hash, updated_at = now()
  `;
}

// Secret penanda-tangan sesi. Urutan: env AUTH_SECRET → app_settings →
// generate & simpan otomatis. Jadi login produksi jalan tanpa set env apa pun.
export async function getOrCreateAuthSecret(): Promise<string> {
  const fromEnv = process.env.AUTH_SECRET;
  if (fromEnv) return fromEnv;
  await ensureSchema();
  const rows = await sql`SELECT value FROM app_settings WHERE key = 'auth_secret' LIMIT 1`;
  if (rows[0]) return rows[0].value as string;
  const generated = randomBytes(32).toString("hex");
  await sql`
    INSERT INTO app_settings (key, value) VALUES ('auth_secret', ${generated})
    ON CONFLICT (key) DO NOTHING
  `;
  const [row] = await sql`SELECT value FROM app_settings WHERE key = 'auth_secret' LIMIT 1`;
  return (row?.value as string) ?? generated;
}
