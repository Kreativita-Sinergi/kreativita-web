import Link from "next/link";
import { notFound } from "next/navigation";
import { getProposal } from "@/lib/admin/repo";
import { formatMoney, lineTotal, proposalTotals, PROPOSAL_STATUSES } from "@/lib/admin/types";
import { StatusBadge, cls } from "@/components/admin/ui";
import { SendProposalPanel } from "@/components/admin/SendProposalPanel";
import { CopyButton } from "@/components/admin/CopyButton";
import { company, siteUrl } from "@/lib/admin/company";
import { deleteProposalAction, setProposalStatusAction } from "../../../actions";

export const dynamic = "force-dynamic";

const STATUS_LABEL: Record<string, string> = {
  draft: "Draft", sent: "Terkirim", viewed: "Dibuka", accepted: "Diterima", rejected: "Ditolak",
};

export default async function ProposalDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = await getProposal(id);
  if (!p) notFound();

  const totals = proposalTotals(p);
  const publicUrl = `${siteUrl()}/proposal/${p.token}`;
  const co = company();
  const defaultSubject =
    p.language === "en"
      ? `Proposal from ${co.name}: ${p.title}`
      : `Penawaran dari ${co.name}: ${p.title}`;

  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/proposals" className="text-sm text-slate-400 hover:text-slate-600">← Penawaran</Link>
        <div className="mt-1 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">{p.title}</h1>
            <p className="text-sm text-slate-500">
              {p.client.company ? `${p.client.company} · ` : ""}{p.client.name} · {p.client.email}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <StatusBadge status={p.status} />
            <Link href={`/admin/proposals/${p.id}/edit`} className={cls.btnGhost}>Edit</Link>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Ringkasan penawaran */}
        <div className="space-y-6 lg:col-span-2">
          <div className={cls.card}>
            {p.summary ? <p className="mb-4 text-sm leading-relaxed text-slate-600">{p.summary}</p> : null}
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-xs uppercase text-slate-400">
                  <th className="py-2 font-medium">Item</th>
                  <th className="py-2 text-right font-medium">Qty</th>
                  <th className="py-2 text-right font-medium">Harga</th>
                  <th className="py-2 text-right font-medium">Jumlah</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {p.items.map((it, i) => (
                  <tr key={i}>
                    <td className="py-2.5 pr-2 text-slate-700">{it.description}</td>
                    <td className="py-2.5 text-right text-slate-600">{it.qty}</td>
                    <td className="py-2.5 text-right text-slate-600">{formatMoney(it.unitPrice, p.currency)}</td>
                    <td className="py-2.5 text-right font-medium text-slate-800">{formatMoney(lineTotal(it), p.currency)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 ml-auto w-full max-w-xs space-y-1.5 text-sm">
              <div className="flex justify-between text-slate-500"><span>Subtotal</span><span>{formatMoney(totals.subtotal, p.currency)}</span></div>
              {totals.discount > 0 && <div className="flex justify-between text-slate-500"><span>Diskon</span><span>- {formatMoney(totals.discount, p.currency)}</span></div>}
              {p.taxPercent > 0 && <div className="flex justify-between text-slate-500"><span>Pajak ({p.taxPercent}%)</span><span>{formatMoney(totals.tax, p.currency)}</span></div>}
              <div className="flex justify-between border-t border-slate-200 pt-2 text-lg font-extrabold text-slate-900">
                <span>Total</span><span className="text-brand-600">{formatMoney(totals.total, p.currency)}</span>
              </div>
            </div>
          </div>

          {p.notes ? (
            <div className={cls.card}>
              <h3 className="mb-2 text-sm font-bold text-slate-900">Syarat & ketentuan</h3>
              <p className="whitespace-pre-wrap text-sm text-slate-600">{p.notes}</p>
            </div>
          ) : null}
        </div>

        {/* Aksi */}
        <div className="space-y-6">
          <div className={cls.card + " space-y-3"}>
            <h3 className="font-bold text-slate-900">Bagikan</h3>
            <div className="flex flex-wrap gap-2">
              <a href={`/api/proposal/${p.token}/pdf`} target="_blank" className={cls.btnPrimary}>Unduh PDF</a>
              <a href={publicUrl} target="_blank" className={cls.btnGhost}>Buka link publik</a>
            </div>
            <div className="rounded-lg bg-slate-50 px-3 py-2 text-xs break-all text-slate-500">{publicUrl}</div>
            <CopyButton text={publicUrl} />
            {p.sentAt ? <p className="text-xs text-slate-400">Terkirim {new Date(p.sentAt).toLocaleString("id-ID")}</p> : null}
            {p.viewedAt ? <p className="text-xs text-emerald-600">Dibuka klien {new Date(p.viewedAt).toLocaleString("id-ID")}</p> : null}
          </div>

          <div className={cls.card}>
            <h3 className="mb-3 font-bold text-slate-900">Kirim ke klien</h3>
            <SendProposalPanel proposalId={p.id} clientEmail={p.client.email} defaultSubject={defaultSubject} />
          </div>

          <div className={cls.card + " space-y-3"}>
            <h3 className="font-bold text-slate-900">Status</h3>
            <form action={setProposalStatusAction} className="flex gap-2">
              <input type="hidden" name="id" value={p.id} />
              <select name="status" defaultValue={p.status} className={cls.input}>
                {PROPOSAL_STATUSES.map((s) => <option key={s} value={s}>{STATUS_LABEL[s]}</option>)}
              </select>
              <button className={cls.btnGhost}>Ubah</button>
            </form>
            <form action={deleteProposalAction}>
              <input type="hidden" name="id" value={p.id} />
              <button className={cls.btnDanger + " w-full"}>Hapus penawaran</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
