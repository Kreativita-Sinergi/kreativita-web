// Kelas & komponen UI bersama untuk panel admin (selaras palet biru situs).

export const cls = {
  input:
    "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100 placeholder:text-slate-400",
  label: "mb-1.5 block text-sm font-medium text-slate-700",
  btnPrimary:
    "inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-60",
  btnGhost:
    "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50",
  btnDanger:
    "inline-flex items-center justify-center gap-2 rounded-lg border border-red-200 bg-white px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50",
  card: "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",
};

const STATUS_STYLE: Record<string, string> = {
  lead: "bg-slate-100 text-slate-600",
  contacted: "bg-sky-100 text-sky-700",
  proposal: "bg-amber-100 text-amber-700",
  won: "bg-emerald-100 text-emerald-700",
  lost: "bg-red-100 text-red-700",
  draft: "bg-slate-100 text-slate-600",
  sent: "bg-sky-100 text-sky-700",
  viewed: "bg-indigo-100 text-indigo-700",
  accepted: "bg-emerald-100 text-emerald-700",
  rejected: "bg-red-100 text-red-700",
};

const STATUS_LABEL: Record<string, string> = {
  lead: "Lead",
  contacted: "Dihubungi",
  proposal: "Penawaran",
  won: "Deal",
  lost: "Batal",
  draft: "Draft",
  sent: "Terkirim",
  viewed: "Dibuka",
  accepted: "Diterima",
  rejected: "Ditolak",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
        STATUS_STYLE[status] ?? "bg-slate-100 text-slate-600"
      }`}
    >
      {STATUS_LABEL[status] ?? status}
    </span>
  );
}
