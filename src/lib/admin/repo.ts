import "server-only";
import { randomBytes } from "crypto";
import { sql, ensureSchema } from "./db";
import type {
  Client,
  ClientStatus,
  EmailLog,
  Locale,
  Currency,
  LineItem,
  Proposal,
  ProposalStatus,
  ProposalWithClient,
} from "./types";

const iso = (v: unknown): string =>
  v instanceof Date ? v.toISOString() : v ? String(v) : "";
const isoOrNull = (v: unknown): string | null =>
  v == null ? null : v instanceof Date ? v.toISOString() : String(v);

/* eslint-disable @typescript-eslint/no-explicit-any */
function mapClient(r: any): Client {
  return {
    id: r.id,
    name: r.name,
    company: r.company,
    email: r.email,
    phone: r.phone,
    country: r.country,
    language: (r.language as Locale) ?? "id",
    status: (r.status as ClientStatus) ?? "lead",
    notes: r.notes,
    createdAt: iso(r.created_at),
    updatedAt: iso(r.updated_at),
  };
}

function mapProposal(r: any): Proposal {
  return {
    id: r.id,
    token: r.token,
    clientId: r.client_id,
    title: r.title,
    summary: r.summary,
    language: (r.language as Locale) ?? "id",
    currency: (r.currency as Currency) ?? "IDR",
    items: Array.isArray(r.items) ? (r.items as LineItem[]) : [],
    taxPercent: Number(r.tax_percent) || 0,
    discount: Number(r.discount) || 0,
    notes: r.notes,
    validUntil: r.valid_until ? iso(r.valid_until).slice(0, 10) : null,
    status: (r.status as ProposalStatus) ?? "draft",
    createdAt: iso(r.created_at),
    updatedAt: iso(r.updated_at),
    sentAt: isoOrNull(r.sent_at),
    viewedAt: isoOrNull(r.viewed_at),
  };
}
/* eslint-enable @typescript-eslint/no-explicit-any */

// ---------- Clients ----------

export type ClientInput = {
  name: string;
  company?: string | null;
  email: string;
  phone?: string | null;
  country?: string | null;
  language?: Locale;
  status?: ClientStatus;
  notes?: string | null;
};

export async function listClients(): Promise<Client[]> {
  await ensureSchema();
  const rows = await sql`SELECT * FROM clients ORDER BY created_at DESC`;
  return rows.map(mapClient);
}

export async function getClient(id: string): Promise<Client | null> {
  await ensureSchema();
  const rows = await sql`SELECT * FROM clients WHERE id = ${id} LIMIT 1`;
  return rows[0] ? mapClient(rows[0]) : null;
}

export async function createClient(input: ClientInput): Promise<Client> {
  await ensureSchema();
  const rows = await sql`
    INSERT INTO clients (name, company, email, phone, country, language, status, notes)
    VALUES (${input.name}, ${input.company ?? null}, ${input.email}, ${input.phone ?? null},
            ${input.country ?? null}, ${input.language ?? "id"}, ${input.status ?? "lead"},
            ${input.notes ?? null})
    RETURNING *
  `;
  return mapClient(rows[0]);
}

export async function updateClient(id: string, input: ClientInput): Promise<Client | null> {
  await ensureSchema();
  const rows = await sql`
    UPDATE clients SET
      name = ${input.name},
      company = ${input.company ?? null},
      email = ${input.email},
      phone = ${input.phone ?? null},
      country = ${input.country ?? null},
      language = ${input.language ?? "id"},
      status = ${input.status ?? "lead"},
      notes = ${input.notes ?? null},
      updated_at = now()
    WHERE id = ${id}
    RETURNING *
  `;
  return rows[0] ? mapClient(rows[0]) : null;
}

export async function deleteClient(id: string): Promise<void> {
  await ensureSchema();
  await sql`DELETE FROM clients WHERE id = ${id}`;
}

// ---------- Proposals ----------

export type ProposalInput = {
  clientId: string;
  title: string;
  summary?: string | null;
  language?: Locale;
  currency?: Currency;
  items: LineItem[];
  taxPercent?: number;
  discount?: number;
  notes?: string | null;
  validUntil?: string | null;
};

export async function listProposals(): Promise<ProposalWithClient[]> {
  await ensureSchema();
  const rows = await sql`
    SELECT p.*, row_to_json(c.*) AS client
    FROM proposals p JOIN clients c ON c.id = p.client_id
    ORDER BY p.created_at DESC
  `;
  return rows.map((r) => ({ ...mapProposal(r), client: mapClient(r.client) }));
}

export async function getProposal(id: string): Promise<ProposalWithClient | null> {
  await ensureSchema();
  const rows = await sql`
    SELECT p.*, row_to_json(c.*) AS client
    FROM proposals p JOIN clients c ON c.id = p.client_id
    WHERE p.id = ${id} LIMIT 1
  `;
  return rows[0] ? { ...mapProposal(rows[0]), client: mapClient(rows[0].client) } : null;
}

export async function getProposalByToken(token: string): Promise<ProposalWithClient | null> {
  await ensureSchema();
  const rows = await sql`
    SELECT p.*, row_to_json(c.*) AS client
    FROM proposals p JOIN clients c ON c.id = p.client_id
    WHERE p.token = ${token} LIMIT 1
  `;
  return rows[0] ? { ...mapProposal(rows[0]), client: mapClient(rows[0].client) } : null;
}

export async function createProposal(input: ProposalInput): Promise<Proposal> {
  await ensureSchema();
  const token = randomBytes(12).toString("hex");
  const rows = await sql`
    INSERT INTO proposals (token, client_id, title, summary, language, currency, items,
                           tax_percent, discount, notes, valid_until)
    VALUES (${token}, ${input.clientId}, ${input.title}, ${input.summary ?? null},
            ${input.language ?? "id"}, ${input.currency ?? "IDR"},
            ${sql.json(input.items as unknown as never)}, ${input.taxPercent ?? 0},
            ${input.discount ?? 0}, ${input.notes ?? null}, ${input.validUntil || null})
    RETURNING *
  `;
  return mapProposal(rows[0]);
}

export async function updateProposal(id: string, input: ProposalInput): Promise<Proposal | null> {
  await ensureSchema();
  const rows = await sql`
    UPDATE proposals SET
      client_id = ${input.clientId},
      title = ${input.title},
      summary = ${input.summary ?? null},
      language = ${input.language ?? "id"},
      currency = ${input.currency ?? "IDR"},
      items = ${sql.json(input.items as unknown as never)},
      tax_percent = ${input.taxPercent ?? 0},
      discount = ${input.discount ?? 0},
      notes = ${input.notes ?? null},
      valid_until = ${input.validUntil || null},
      updated_at = now()
    WHERE id = ${id}
    RETURNING *
  `;
  return rows[0] ? mapProposal(rows[0]) : null;
}

export async function deleteProposal(id: string): Promise<void> {
  await ensureSchema();
  await sql`DELETE FROM proposals WHERE id = ${id}`;
}

export async function markProposalSent(id: string): Promise<void> {
  await ensureSchema();
  await sql`
    UPDATE proposals
    SET status = CASE WHEN status IN ('accepted','rejected') THEN status ELSE 'sent' END,
        sent_at = COALESCE(sent_at, now()),
        updated_at = now()
    WHERE id = ${id}
  `;
}

export async function markProposalViewed(token: string): Promise<void> {
  await ensureSchema();
  await sql`
    UPDATE proposals
    SET status = CASE WHEN status = 'sent' THEN 'viewed' ELSE status END,
        viewed_at = COALESCE(viewed_at, now())
    WHERE token = ${token}
  `;
}

export async function setProposalStatus(id: string, status: ProposalStatus): Promise<void> {
  await ensureSchema();
  await sql`UPDATE proposals SET status = ${status}, updated_at = now() WHERE id = ${id}`;
}

// ---------- Email logs ----------

export async function logEmail(entry: {
  clientId?: string | null;
  proposalId?: string | null;
  toEmail: string;
  subject: string;
  status: "sent" | "failed";
  error?: string | null;
}): Promise<void> {
  await ensureSchema();
  await sql`
    INSERT INTO email_logs (client_id, proposal_id, to_email, subject, status, error)
    VALUES (${entry.clientId ?? null}, ${entry.proposalId ?? null}, ${entry.toEmail},
            ${entry.subject}, ${entry.status}, ${entry.error ?? null})
  `;
}

export async function recentEmails(limit = 20): Promise<EmailLog[]> {
  await ensureSchema();
  const rows = await sql`SELECT * FROM email_logs ORDER BY created_at DESC LIMIT ${limit}`;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  return rows.map((r: any) => ({
    id: r.id,
    clientId: r.client_id,
    proposalId: r.proposal_id,
    toEmail: r.to_email,
    subject: r.subject,
    status: r.status,
    error: r.error,
    createdAt: iso(r.created_at),
  }));
  /* eslint-enable @typescript-eslint/no-explicit-any */
}

export async function dashboardStats() {
  await ensureSchema();
  const [clients] = await sql`SELECT count(*)::int AS n FROM clients`;
  const [open] = await sql`SELECT count(*)::int AS n FROM clients WHERE status NOT IN ('won','lost')`;
  const [won] = await sql`SELECT count(*)::int AS n FROM clients WHERE status = 'won'`;
  const [proposals] = await sql`SELECT count(*)::int AS n FROM proposals`;
  const [sent] = await sql`SELECT count(*)::int AS n FROM proposals WHERE sent_at IS NOT NULL`;
  return {
    clients: clients.n as number,
    openLeads: open.n as number,
    won: won.n as number,
    proposals: proposals.n as number,
    sent: sent.n as number,
  };
}
