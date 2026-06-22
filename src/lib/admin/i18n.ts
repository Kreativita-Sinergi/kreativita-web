import type { Locale } from "./types";

// Label dwibahasa untuk dokumen penawaran, email, dan halaman publik.
const dict = {
  proposalDoc: { id: "PENAWARAN", en: "PROPOSAL" },
  preparedFor: { id: "Ditujukan kepada", en: "Prepared for" },
  date: { id: "Tanggal", en: "Date" },
  validUntil: { id: "Berlaku hingga", en: "Valid until" },
  overview: { id: "Ringkasan", en: "Overview" },
  scope: { id: "Rincian Pekerjaan", en: "Scope of Work" },
  description: { id: "Deskripsi", en: "Description" },
  qty: { id: "Qty", en: "Qty" },
  unitPrice: { id: "Harga", en: "Unit price" },
  amount: { id: "Jumlah", en: "Amount" },
  subtotal: { id: "Subtotal", en: "Subtotal" },
  discount: { id: "Diskon", en: "Discount" },
  tax: { id: "Pajak", en: "Tax" },
  total: { id: "Total", en: "Total" },
  terms: { id: "Syarat & Ketentuan", en: "Terms & Conditions" },
  downloadPdf: { id: "Unduh PDF", en: "Download PDF" },
  acceptCta: { id: "Tertarik? Hubungi kami", en: "Interested? Contact us" },
  greetingHi: { id: "Halo", en: "Hi" },
  emailIntro: {
    id: "Terima kasih atas waktunya. Berikut penawaran yang kami siapkan untuk Anda.",
    en: "Thank you for your time. Please find below the proposal we have prepared for you.",
  },
  viewOnline: { id: "Lihat penawaran online", en: "View proposal online" },
  pdfAttached: {
    id: "PDF penawaran terlampir pada email ini.",
    en: "A PDF copy of the proposal is attached to this email.",
  },
  regards: { id: "Salam hangat", en: "Best regards" },
  totalValue: { id: "Nilai penawaran", en: "Proposal value" },
} as const;

type Key = keyof typeof dict;

export function t(lang: Locale, key: Key): string {
  return dict[key][lang] ?? dict[key].id;
}
