"use client";

import { useActionState } from "react";
import { loginAction } from "../actions";
import { cls } from "@/components/admin/ui";
import { SubmitButton } from "@/components/admin/SubmitButton";
import { siteDetails } from "@/data/siteDetails";

export default function LoginPage() {
  const [state, action] = useActionState(loginAction, null as { error?: string } | null);

  return (
    <main className="grad-hero flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-sm">
        <div className="mb-6 text-center">
          <div className="grad-brand text-2xl font-extrabold">{siteDetails.siteName}</div>
          <p className="mt-1 text-sm text-slate-500">Panel Admin · Penawaran & Klien</p>
        </div>
        <form action={action} className={cls.card + " space-y-4"}>
          <div>
            <label className={cls.label} htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required autoComplete="username" className={cls.input} />
          </div>
          <div>
            <label className={cls.label} htmlFor="password">Password</label>
            <input id="password" name="password" type="password" required autoComplete="current-password" className={cls.input} />
          </div>
          {state?.error ? (
            <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">{state.error}</p>
          ) : null}
          <SubmitButton pendingText="Masuk…" className="w-full">Masuk</SubmitButton>
        </form>
        <p className="mt-4 text-center text-xs text-slate-400">
          Akses terbatas untuk tim {siteDetails.siteName}.
        </p>
      </div>
    </main>
  );
}
