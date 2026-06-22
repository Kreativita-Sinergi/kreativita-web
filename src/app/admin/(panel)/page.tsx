import Link from "next/link";
import { dashboardStats, listProposals, recentEmails } from "@/lib/admin/repo";
import { formatMoney, proposalTotals } from "@/lib/admin/types";
import { StatusBadge, cls } from "@/components/admin/ui";

export const dynamic = "force-dynamic";

function Stat({ label, value, hint }: { label: string; value: number; hint?: string }) {
  return (
    <div className={cls.card}>
      <div className="text-sm text-slate-500">{label}</div>
      <div className="mt-1 text-3xl font-extrabold text-slate-900">{value}</div>
      {hint ? <div className="mt-1 text-xs text-slate-400">{hint}</div> : null}
    </div>
  );
}

export default async function DashboardPage() {
  const [stats, proposals, emails] = await Promise.all([
    dashboardStats(),
    listProposals(),
    recentEmails(8),
  ]);
  const recent = proposals.slice(0, 6);

  return (
    <div className="space-y-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Dashboard</h1>
          <p className="text-sm text-slate-500">Ringkasan klien & penawaran Anda.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/admin/clients/new" className={cls.btnGhost}>+ Klien</Link>
          <Link href="/admin/proposals/new" className={cls.btnPrimary}>+ Penawaran</Link>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Stat label="Total klien" value={stats.clients} hint={`${stats.openLeads} masih berjalan`} />
        <Stat label="Deal" value={stats.won} hint="status menang" />
        <Stat label="Penawaran" value={stats.proposals} hint={`${stats.sent} terkirim`} />
        <Stat label="Email terkirim" value={stats.sent} />
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <div className={cls.card}>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-bold text-slate-900">Penawaran terbaru</h2>
            <Link href="/admin/proposals" className="text-sm font-medium text-brand-600 hover:underline">Semua →</Link>
          </div>
          {recent.length === 0 ? (
            <p className="py-6 text-center text-sm text-slate-400">Belum ada penawaran.</p>
          ) : (
            <ul className="divide-y divide-slate-100">
              {recent.map((p) => (
                <li key={p.id} className="flex items-center justify-between gap-3 py-2.5">
                  <Link href={`/admin/proposals/${p.id}`} className="min-w-0 flex-1">
                    <div className="truncate text-sm font-medium text-slate-800 hover:text-brand-600">{p.title}</div>
                    <div className="truncate text-xs text-slate-400">{p.client.company || p.client.name}</div>
                  </Link>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-slate-800">
                      {formatMoney(proposalTotals(p).total, p.currency)}
                    </div>
                    <StatusBadge status={p.status} />
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={cls.card}>
          <h2 className="mb-3 font-bold text-slate-900">Aktivitas email</h2>
          {emails.length === 0 ? (
            <p className="py-6 text-center text-sm text-slate-400">Belum ada email terkirim.</p>
          ) : (
            <ul className="divide-y divide-slate-100">
              {emails.map((e) => (
                <li key={e.id} className="flex items-center justify-between gap-3 py-2.5">
                  <div className="min-w-0">
                    <div className="truncate text-sm text-slate-700">{e.subject}</div>
                    <div className="truncate text-xs text-slate-400">{e.toEmail}</div>
                  </div>
                  <span className={`text-xs font-medium ${e.status === "sent" ? "text-emerald-600" : "text-red-600"}`}>
                    {e.status === "sent" ? "Terkirim" : "Gagal"}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
