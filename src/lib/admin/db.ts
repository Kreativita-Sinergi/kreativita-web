import "server-only";
import postgres from "postgres";

declare global {
  // eslint-disable-next-line no-var
  var __kreativitaSql: ReturnType<typeof postgres> | undefined;
  // eslint-disable-next-line no-var
  var __kreativitaSchemaReady: Promise<void> | undefined;
}

function createClient() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL belum di-set. Salin .env.example ke .env.local dan isi koneksi Postgres (Neon/Supabase).",
    );
  }
  return postgres(url, {
    ssl: "require",
    max: 5,
    idle_timeout: 20,
    connect_timeout: 10,
  });
}

// Inisialisasi koneksi secara lazy (jangan saat import — agar build tanpa
// DATABASE_URL tetap jalan). Reuse antar hot-reload / invocation serverless.
function instance(): ReturnType<typeof postgres> {
  return (global.__kreativitaSql ??= createClient());
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export const sql = new Proxy((() => {}) as any, {
  apply: (_t, _this, args: any[]) => (instance() as any)(...args),
  get: (_t, prop) => (instance() as any)[prop],
}) as ReturnType<typeof postgres>;
/* eslint-enable @typescript-eslint/no-explicit-any */

// Buat tabel sekali (idempoten). Dipanggil lazily oleh repository.
export function ensureSchema(): Promise<void> {
  if (!global.__kreativitaSchemaReady) {
    global.__kreativitaSchemaReady = migrate().catch((err) => {
      // reset agar bisa dicoba ulang pada request berikutnya
      global.__kreativitaSchemaReady = undefined;
      throw err;
    });
  }
  return global.__kreativitaSchemaReady;
}

async function migrate() {
  await sql`
    CREATE TABLE IF NOT EXISTS clients (
      id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name        TEXT NOT NULL,
      company     TEXT,
      email       TEXT NOT NULL,
      phone       TEXT,
      country     TEXT,
      language    TEXT NOT NULL DEFAULT 'id',
      status      TEXT NOT NULL DEFAULT 'lead',
      notes       TEXT,
      created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS proposals (
      id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      token       TEXT NOT NULL UNIQUE,
      client_id   UUID NOT NULL REFERENCES clients(id) ON DELETE CASCADE,
      title       TEXT NOT NULL,
      summary     TEXT,
      language    TEXT NOT NULL DEFAULT 'id',
      currency    TEXT NOT NULL DEFAULT 'IDR',
      items       JSONB NOT NULL DEFAULT '[]'::jsonb,
      tax_percent NUMERIC NOT NULL DEFAULT 0,
      discount    NUMERIC NOT NULL DEFAULT 0,
      notes       TEXT,
      valid_until DATE,
      status      TEXT NOT NULL DEFAULT 'draft',
      created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
      sent_at     TIMESTAMPTZ,
      viewed_at   TIMESTAMPTZ
    )
  `;

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
    CREATE TABLE IF NOT EXISTS app_settings (
      key        TEXT PRIMARY KEY,
      value      TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS email_logs (
      id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      client_id   UUID REFERENCES clients(id) ON DELETE SET NULL,
      proposal_id UUID REFERENCES proposals(id) ON DELETE SET NULL,
      to_email    TEXT NOT NULL,
      subject     TEXT NOT NULL,
      status      TEXT NOT NULL,
      error       TEXT,
      created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
}
