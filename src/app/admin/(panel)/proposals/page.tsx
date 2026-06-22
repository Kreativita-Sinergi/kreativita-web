import Link from "next/link";
import { listProposals } from "@/lib/admin/repo";
import { formatMoney, proposalTotals } from "@/lib/admin/types";
import { StatusBadge, cls } from "@/components/admin/ui";

export const dynamic = "force-dynamic";

export default async function ProposalsPage() {
  const proposals = await listProposals();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Penawaran</h1>
          <p className="text-sm text-slate-500">{proposals.length} penawaran dibuat.</p>
        </div>
        <Link href="/admin/proposals/new" className={cls.btnPrimary}>+ Buat penawaran</Link>
      </div>

      {proposals.length === 0 ? (
        <div className={cls.card + " py-12 text-center text-slate-400"}>
          Belum ada penawaran. <Link href="/admin/proposals/new" className="text-brand-600 hover:underline">Buat yang pertama →</Link>
        </div>
      ) : (
        <div className={cls.card + " overflow-x-auto p-0"}>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-wide text-slate-400">
                <th className="px-4 py-3 font-medium">Penawaran</th>
                <th className="px-4 py-3 font-medium">Klien</th>
                <th className="px-4 py-3 font-medium text-right">Nilai</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {proposals.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50/60">
                  <td className="px-4 py-3">
                    <Link href={`/admin/proposals/${p.id}`} className="font-medium text-slate-800 hover:text-brand-600">{p.title}</Link>
                    <div className="text-xs text-slate-400">{new Date(p.createdAt).toLocaleDateString("id-ID")}</div>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{p.client.company || p.client.name}</td>
                  <td className="px-4 py-3 text-right font-semibold text-slate-800">{formatMoney(proposalTotals(p).total, p.currency)}</td>
                  <td className="px-4 py-3"><StatusBadge status={p.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
