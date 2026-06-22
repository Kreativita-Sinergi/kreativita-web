import "server-only";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import {
  countAdminUsers,
  getAdminPasswordHash,
  getOrCreateAuthSecret,
  upsertAdminUser,
  verifyPassword,
} from "./users";

const COOKIE = "kreativita_admin";
const MAX_AGE = 60 * 60 * 24 * 7; // 7 hari

async function secret(): Promise<Uint8Array> {
  return new TextEncoder().encode(await getOrCreateAuthSecret());
}

// Bila DB belum punya admin sama sekali, seed satu kali dari env
// (ADMIN_EMAIL/ADMIN_PASSWORD) jika tersedia — memudahkan setup lokal.
// Di produksi, admin dibuat lewat `npm run admin:create`.
async function seedAdminFromEnvIfEmpty(): Promise<void> {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password) return;
  if ((await countAdminUsers()) > 0) return;
  await upsertAdminUser(email, password);
}

export async function verifyCredentials(email: string, password: string): Promise<boolean> {
  await seedAdminFromEnvIfEmpty();
  const hash = await getAdminPasswordHash(email);
  if (!hash) return false;
  return verifyPassword(password, hash);
}

export async function createSession(email: string): Promise<void> {
  const token = await new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${MAX_AGE}s`)
    .sign(await secret());

  const store = await cookies();
  store.set(COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function destroySession(): Promise<void> {
  const store = await cookies();
  store.delete(COOKIE);
}

export async function getSession(): Promise<{ email: string } | null> {
  const store = await cookies();
  const token = store.get(COOKIE)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, await secret());
    return { email: String(payload.email) };
  } catch {
    return null;
  }
}
