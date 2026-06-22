"use client";

import { useActionState } from "react";
import Link from "next/link";
import { saveClientAction } from "@/app/admin/actions";
import { cls } from "./ui";
import { SubmitButton } from "./SubmitButton";
import { CLIENT_STATUSES, type Client } from "@/lib/admin/types";

const STATUS_LABEL: Record<string, string> = {
  lead: "Lead", contacted: "Dihubungi", proposal: "Penawaran", won: "Deal", lost: "Batal",
};

export function ClientForm({ client }: { client?: Client }) {
  const [state, action] = useActionState(saveClientAction, null as { error?: string } | null);

  return (
    <form action={action} className={cls.card + " space-y-5"}>
      {client ? <input type="hidden" name="id" value={client.id} /> : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={cls.label}>Nama kontak *</label>
          <input name="name" required defaultValue={client?.name ?? ""} className={cls.input} placeholder="mis. Budi Santoso" />
        </div>
        <div>
          <label className={cls.label}>Perusahaan</label>
          <input name="company" defaultValue={client?.company ?? ""} className={cls.input} placeholder="mis. PT Maju Jaya" />
        </div>
        <div>
          <label className={cls.label}>Email *</label>
          <input name="email" type="email" required defaultValue={client?.email ?? ""} className={cls.input} placeholder="nama@email.com" />
        </div>
        <div>
          <label className={cls.label}>Telepon / WhatsApp</label>
          <input name="phone" defaultValue={client?.phone ?? ""} className={cls.input} placeholder="+62…" />
        </div>
        <div>
          <label className={cls.label}>Negara</label>
          <input name="country" defaultValue={client?.country ?? "Indonesia"} className={cls.input} placeholder="Indonesia / Singapore / …" />
        </div>
        <div>
          <label className={cls.label}>Bahasa komunikasi</label>
          <select name="language" defaultValue={client?.language ?? "id"} className={cls.input}>
            <option value="id">Indonesia</option>
            <option value="en">English</option>
          </select>
        </div>
        <div>
          <label className={cls.label}>Status</label>
          <select name="status" defaultValue={client?.status ?? "lead"} className={cls.input}>
            {CLIENT_STATUSES.map((s) => (
              <option key={s} value={s}>{STATUS_LABEL[s]}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={cls.label}>Catatan</label>
        <textarea name="notes" rows={3} defaultValue={client?.notes ?? ""} className={cls.input} placeholder="Kebutuhan, anggaran, sumber lead, dll." />
      </div>

      {state?.error ? (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{state.error}</p>
      ) : null}

      <div className="flex gap-3">
        <SubmitButton pendingText="Menyimpan…">{client ? "Simpan perubahan" : "Tambah klien"}</SubmitButton>
        <Link href="/admin/clients" className={cls.btnGhost}>Batal</Link>
      </div>
    </form>
  );
}
