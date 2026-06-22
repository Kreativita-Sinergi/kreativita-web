// Tipe domain untuk panel admin Kreativita (klien, penawaran, log email).

export type Locale = "id" | "en";
export type Currency = "IDR" | "USD";

export type ClientStatus = "lead" | "contacted" | "proposal" | "won" | "lost";
export const CLIENT_STATUSES: ClientStatus[] = [
  "lead",
  "contacted",
  "proposal",
  "won",
  "lost",
];

export type Client = {
  id: string;
  name: string;
  company: string | null;
  email: string;
  phone: string | null;
  country: string | null; // mis. "Indonesia", "Singapore"
  language: Locale;
  status: ClientStatus;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ProposalStatus = "draft" | "sent" | "viewed" | "accepted" | "rejected";
export const PROPOSAL_STATUSES: ProposalStatus[] = [
  "draft",
  "sent",
  "viewed",
  "accepted",
  "rejected",
];

export type LineItem = {
  description: string;
  qty: number;
  unitPrice: number;
};

export type Proposal = {
  id: string;
  token: string; // untuk link publik /proposal/[token]
  clientId: string;
  title: string;
  summary: string | null; // ringkasan / pengantar
  language: Locale;
  currency: Currency;
  items: LineItem[];
  taxPercent: number; // 0 = tanpa pajak (umum untuk klien luar negeri)
  discount: number; // potongan nominal
  notes: string | null; // syarat & ketentuan
  validUntil: string | null; // tanggal (YYYY-MM-DD)
  status: ProposalStatus;
  createdAt: string;
  updatedAt: string;
  sentAt: string | null;
  viewedAt: string | null;
};

export type ProposalWithClient = Proposal & { client: Client };

export type EmailLog = {
  id: string;
  clientId: string | null;
  proposalId: string | null;
  toEmail: string;
  subject: string;
  status: "sent" | "failed";
  error: string | null;
  createdAt: string;
};

// --- Perhitungan total ---
export function lineTotal(item: LineItem): number {
  return (item.qty || 0) * (item.unitPrice || 0);
}

export function proposalTotals(p: Pick<Proposal, "items" | "taxPercent" | "discount">) {
  const subtotal = p.items.reduce((sum, it) => sum + lineTotal(it), 0);
  const afterDiscount = Math.max(0, subtotal - (p.discount || 0));
  const tax = afterDiscount * ((p.taxPercent || 0) / 100);
  const total = afterDiscount + tax;
  return { subtotal, discount: p.discount || 0, tax, total };
}

export function formatMoney(amount: number, currency: Currency): string {
  if (currency === "USD") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(amount);
  }
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}
