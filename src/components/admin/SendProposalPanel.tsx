"use client";

import { useActionState } from "react";
import { sendProposalAction } from "@/app/admin/actions";
import { cls } from "./ui";
import { SubmitButton } from "./SubmitButton";

type State = { error?: string; ok?: boolean; sentTo?: string } | null;

export function SendProposalPanel({
  proposalId,
  clientEmail,
  defaultSubject,
}: {
  proposalId: string;
  clientEmail: string;
  defaultSubject: string;
}) {
  const [state, action] = useActionState(sendProposalAction, null as State);

  return (
    <form action={action} className="space-y-3">
      <input type="hidden" name="id" value={proposalId} />
      <p className="text-sm text-slate-500">
        Email + PDF akan dikirim ke <strong className="text-slate-700">{clientEmail}</strong>.
      </p>
      <div>
        <label className={cls.label}>Subjek</label>
        <input name="subject" defaultValue={defaultSubject} className={cls.input} />
      </div>
      <div>
        <label className={cls.label}>Pesan tambahan (opsional)</label>
        <textarea name="message" rows={3} className={cls.input} placeholder="Catatan pribadi yang muncul di awal email…" />
      </div>

      {state?.ok ? (
        <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
          ✓ Terkirim ke {state.sentTo}.
        </p>
      ) : null}
      {state?.error ? (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{state.error}</p>
      ) : null}

      <SubmitButton pendingText="Mengirim…">Kirim email + PDF</SubmitButton>
    </form>
  );
}
