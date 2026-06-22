// Buat / perbarui akun admin di database (bukan di environment).
//
// Pakai:
//   node scripts/create-admin.mjs <email> <password>
//   node scripts/create-admin.mjs                # baca ADMIN_EMAIL / ADMIN_PASSWORD dari .env.local
//
// Membaca DATABASE_URL dari .env.local (loader yang sama dengan Next.js),
// jadi seed ini langsung mengisi database produksi (Neon) yang dipakai situs.
import { randomBytes, scryptSync } from "node:crypto";
import { createRequire } from "node:module";
const { loadEnvConfig } = createRequire(import.meta.url)("@next/env");
import postgres from "postgres";

loadEnvConfig(process.cwd());

const email = (process.argv[2] ?? process.env.ADMIN_EMAIL ?? "").trim().toLowerCase();
const password = process.argv[3] ?? process.env.ADMIN_PASSWORD ?? "";

if (!email || !password) {
  console.error("Pakai: node scripts/create-admin.mjs <email> <password>");
  console.error("Atau set ADMIN_EMAIL & ADMIN_PASSWORD di .env.local.");
  process.exit(1);
}
if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL belum di-set di .env.local.");
  process.exit(1);
}

function hashPassword(pw) {
  const salt = randomBytes(16);
  const hash = scryptSync(pw, salt, 64);
  return `scrypt$${salt.toString("hex")}$${hash.toString("hex")}`;
}

const sql = postgres(process.env.DATABASE_URL, { ssl: "require", max: 1 });

try {
  await sql`
    CREATE TABLE IF NOT EXISTS admin_users (
      id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email         TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  await sql`
    INSERT INTO admin_users (email, password_hash)
    VALUES (${email}, ${hashPassword(password)})
    ON CONFLICT (email) DO UPDATE
      SET password_hash = EXCLUDED.password_hash, updated_at = now()
  `;
  console.log(`✓ Admin tersimpan di database: ${email}`);
} catch (err) {
  console.error("Gagal:", err.message);
  process.exitCode = 1;
} finally {
  await sql.end();
}
