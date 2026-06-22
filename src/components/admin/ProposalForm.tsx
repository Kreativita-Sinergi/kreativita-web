"use client";

import { useActionState, useMemo, useState } from "react";
import Link from "next/link";
import { saveProposalAction } from "@/app/admin/actions";
import { cls } from "./ui";
import { SubmitButton } from "./SubmitButton";
import {
  formatMoney,
  lineTotal,
  proposalTotals,
  type Client,
  type Currency,
  type LineItem,
  type Locale,
  type Proposal,
} from "@/lib/admin/types";

type ClientLite = Pick<Client, "id" | "name" | "company" | "language">;

const TEMPLATES = [
  "Pembuatan Website (company profile / landing page)",
  "Pengembangan Web App / Dashboard custom",
  "Aplikasi Mobile Android & iOS (Flutter)",
  "Backend & Integrasi API",
  "UI/UX Design & Prototype",
  "Hosting, Domain & Maintenance (per bulan)",
  "Konsultasi & Perencanaan Teknis",
];

const empty: LineItem = { description: "", qty: 1, unitPrice: 0 };

export function ProposalForm({
  clients,
  proposal,
  presetClientId,
}: {
  clients: ClientLite[];
  proposal?: Proposal;
  presetClientId?: string;
}) {
  const [state, action] = useActionState(saveProposalAction, null as { error?: string } | null);
  const [currency, setCurrency] = useState<Currency>(proposal?.currency ?? "IDR");
  const [items, setItems] = useState<LineItem[]>(
    proposal?.items?.length ? proposal.items : [{ ...empty }],
  );
  const [discount, setDiscount] = useState<number>(proposal?.discount ?? 0);
  const [taxPercent, setTaxPercent] = useState<number>(proposal?.taxPercent ?? 0);

  const totals = useMemo(
    () => proposalTotals({ items, discount, taxPercent }),
    [items, discount, taxPercent],
  );

  function update(i: number, patch: Partial<LineItem>) {
    setItems((prev) => prev.map((it, idx) => (idx === i ? { ...it, ...patch } : it)));
  }
  function addRow(desc = "") {
    setItems((prev) => [...prev, { ...empty, description: desc }]);
  }
  function removeRow(i: number) {
    setItems((prev) => (prev.length > 1 ? prev.filter((_, idx) => idx !== i) : prev));
  }

  return (
    <form action={action} className="space-y-5">
      {proposal ? <input type="hidden" name="id" value={proposal.id} /> : null}
      <input type="hidden" name="items" value={JSON.stringify(items)} />
      <input type="hidden" name="discount" value={discount} />
      <input type="hidden" name="taxPercent" value={taxPercent} />
      <input type="hidden" name="currency" value={currency} />

      <div className={cls.card + " space-y-4"}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={cls.label}>Klien *</label>
            <select
              name="clientId"
              required
              defaultValue={proposal?.clientId ?? presetClientId ?? ""}
              className={cls.input}
            >
              <option value="" disabled>Pilih klien…</option>
              {clients.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.company ? `${c.company} — ${c.name}` : c.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={cls.label}>Judul penawaran *</label>
            <input name="title" required defaultValue={proposal?.title ?? ""} className={cls.input} placeholder="mis. Pengembangan Website Company Profile" />
          </div>
        </div>
        <div>
          <label className={cls.label}>Ringkasan / pengantar</label>
          <textarea name="summary" rows={3} defaultValue={proposal?.summary ?? ""} className={cls.input} placeholder="Pengantar singkat: konteks, tujuan, dan nilai yang ditawarkan." />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className={cls.label}>Bahasa dokumen</label>
            <select name="language" defaultValue={proposal?.language ?? "id"} className={cls.input}>
              <option value="id">Indonesia</option>
              <option value="en">English</option>
            </select>
          </div>
          <div>
            <label className={cls.label}>Mata uang</label>
            <select value={currency} onChange={(e) => setCurrency(e.target.value as Currency)} className={cls.input}>
              <option value="IDR">IDR (Rp)</option>
              <option value="USD">USD ($)</option>
            </select>
          </div>
          <div>
            <label className={cls.label}>Berlaku hingga</label>
            <input name="validUntil" type="date" defaultValue={proposal?.validUntil ?? ""} className={cls.input} />
          </div>
        </div>
      </div>

      <div className={cls.card + " space-y-3"}>
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-slate-900">Rincian pekerjaan</h2>
          <select
            value=""
            onChange={(e) => { if (e.target.value) addRow(e.target.value); e.target.value = ""; }}
            className="rounded-lg border border-slate-300 px-2 py-1.5 text-xs text-slate-600"
          >
            <option value="">+ Dari template…</option>
            {TEMPLATES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div className="space-y-2">
          {items.map((it, i) => (
            <div key={i} className="grid grid-cols-12 items-center gap-2">
              <input
                value={it.description}
                onChange={(e) => update(i, { description: e.target.value })}
                placeholder="Deskripsi item / fitur"
                className={cls.input + " col-span-6"}
              />
              <input
                type="number" min={0} step="any"
                value={it.qty}
                onChange={(e) => update(i, { qty: Number(e.target.value) })}
                placeholder="Qty"
                className={cls.input + " col-span-1 text-right"}
              />
              <input
                type="number" min={0} step="any"
                value={it.unitPrice}
                onChange={(e) => update(i, { unitPrice: Number(e.target.value) })}
                placeholder="Harga"
                className={cls.input + " col-span-2 text-right"}
              />
              <div className="col-span-2 text-right text-sm font-medium text-slate-700">
                {formatMoney(lineTotal(it), currency)}
              </div>
              <button type="button" onClick={() => removeRow(i)} className="col-span-1 text-slate-300 hover:text-red-500" aria-label="Hapus">✕</button>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => addRow()} className="text-sm font-medium text-brand-600 hover:underline">
          + Tambah baris
        </button>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <div className={cls.card + " space-y-4"}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={cls.label}>Diskon (nominal)</label>
              <input type="number" min={0} step="any" value={discount} onChange={(e) => setDiscount(Number(e.target.value) || 0)} className={cls.input + " text-right"} />
            </div>
            <div>
              <label className={cls.label}>Pajak (%)</label>
              <input type="number" min={0} step="any" value={taxPercent} onChange={(e) => setTaxPercent(Number(e.target.value) || 0)} className={cls.input + " text-right"} />
            </div>
          </div>
          <div>
            <label className={cls.label}>Syarat & ketentuan / catatan</label>
            <textarea name="notes" rows={4} defaultValue={proposal?.notes ?? ""} className={cls.input} placeholder="mis. Termin pembayaran 50% di awal, estimasi pengerjaan 4 minggu, dll." />
          </div>
        </div>

        <div className={cls.card + " flex flex-col justify-between"}>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-slate-500"><span>Subtotal</span><span>{formatMoney(totals.subtotal, currency)}</span></div>
            {totals.discount > 0 && <div className="flex justify-between text-slate-500"><span>Diskon</span><span>- {formatMoney(totals.discount, currency)}</span></div>}
            {taxPercent > 0 && <div className="flex justify-between text-slate-500"><span>Pajak ({taxPercent}%)</span><span>{formatMoney(totals.tax, currency)}</span></div>}
            <div className="mt-2 flex justify-between border-t border-slate-200 pt-3 text-lg font-extrabold text-slate-900">
              <span>Total</span><span className="text-brand-600">{formatMoney(totals.total, currency)}</span>
            </div>
          </div>

          {state?.error ? (
            <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{state.error}</p>
          ) : null}

          <div className="mt-5 flex gap-3">
            <SubmitButton pendingText="Menyimpan…">{proposal ? "Simpan" : "Buat penawaran"}</SubmitButton>
            <Link href={proposal ? `/admin/proposals/${proposal.id}` : "/admin/proposals"} className={cls.btnGhost}>Batal</Link>
          </div>
        </div>
      </div>
    </form>
  );
}
