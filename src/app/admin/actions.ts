"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  createSession,
  destroySession,
  getSession,
  verifyCredentials,
} from "@/lib/admin/auth";
import * as repo from "@/lib/admin/repo";
import { sendProposalEmail } from "@/lib/admin/email";
import type {
  ClientStatus,
  Currency,
  LineItem,
  Locale,
  ProposalStatus,
} from "@/lib/admin/types";

async function requireSession() {
  const s = await getSession();
  if (!s) redirect("/admin/login");
}

// ---------- Auth ----------

export async function loginAction(_prev: unknown, form: FormData) {
  const email = String(form.get("email") ?? "");
  const password = String(form.get("password") ?? "");
  try {
    if (!(await verifyCredentials(email, password))) {
      return { error: "Email atau password salah." };
    }
    await createSession(email);
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Gagal masuk." };
  }
  redirect("/admin");
}

export async function logoutAction() {
  await destroySession();
  redirect("/admin/login");
}

// ---------- Clients ----------

function clientFrom(form: FormData) {
  return {
    name: String(form.get("name") ?? "").trim(),
    company: (String(form.get("company") ?? "").trim() || null) as string | null,
    email: String(form.get("email") ?? "").trim(),
    phone: (String(form.get("phone") ?? "").trim() || null) as string | null,
    country: (String(form.get("country") ?? "").trim() || null) as string | null,
    language: (String(form.get("language") ?? "id") as Locale),
    status: (String(form.get("status") ?? "lead") as ClientStatus),
    notes: (String(form.get("notes") ?? "").trim() || null) as string | null,
  };
}

export async function saveClientAction(_prev: unknown, form: FormData) {
  await requireSession();
  const id = String(form.get("id") ?? "");
  const data = clientFrom(form);
  if (!data.name || !data.email) {
    return { error: "Nama dan email wajib diisi." };
  }
  if (id) await repo.updateClient(id, data);
  else await repo.createClient(data);
  revalidatePath("/admin/clients");
  redirect("/admin/clients");
}

export async function deleteClientAction(form: FormData) {
  await requireSession();
  const id = String(form.get("id") ?? "");
  if (id) await repo.deleteClient(id);
  revalidatePath("/admin/clients");
}

// ---------- Proposals ----------

function parseItems(raw: string): LineItem[] {
  try {
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return [];
    return arr
      .map((it) => ({
        description: String(it.description ?? "").trim(),
        qty: Number(it.qty) || 0,
        unitPrice: Number(it.unitPrice) || 0,
      }))
      .filter((it) => it.description !== "");
  } catch {
    return [];
  }
}

function proposalFrom(form: FormData) {
  return {
    clientId: String(form.get("clientId") ?? ""),
    title: String(form.get("title") ?? "").trim(),
    summary: (String(form.get("summary") ?? "").trim() || null) as string | null,
    language: (String(form.get("language") ?? "id") as Locale),
    currency: (String(form.get("currency") ?? "IDR") as Currency),
    items: parseItems(String(form.get("items") ?? "[]")),
    taxPercent: Number(form.get("taxPercent")) || 0,
    discount: Number(form.get("discount")) || 0,
    notes: (String(form.get("notes") ?? "").trim() || null) as string | null,
    validUntil: (String(form.get("validUntil") ?? "").trim() || null) as string | null,
  };
}

export async function saveProposalAction(_prev: unknown, form: FormData) {
  await requireSession();
  const id = String(form.get("id") ?? "");
  const data = proposalFrom(form);
  if (!data.clientId || !data.title) {
    return { error: "Klien dan judul penawaran wajib diisi." };
  }
  if (data.items.length === 0) {
    return { error: "Tambahkan minimal satu item penawaran." };
  }
  let proposalId = id;
  if (id) await repo.updateProposal(id, data);
  else {
    const created = await repo.createProposal(data);
    proposalId = created.id;
  }
  revalidatePath("/admin/proposals");
  redirect(`/admin/proposals/${proposalId}`);
}

export async function deleteProposalAction(form: FormData) {
  await requireSession();
  const id = String(form.get("id") ?? "");
  if (id) await repo.deleteProposal(id);
  revalidatePath("/admin/proposals");
  redirect("/admin/proposals");
}

export async function setProposalStatusAction(form: FormData) {
  await requireSession();
  const id = String(form.get("id") ?? "");
  const status = String(form.get("status") ?? "") as ProposalStatus;
  if (id && status) await repo.setProposalStatus(id, status);
  revalidatePath(`/admin/proposals/${id}`);
}

export async function sendProposalAction(_prev: unknown, form: FormData) {
  await requireSession();
  const id = String(form.get("id") ?? "");
  const p = await repo.getProposal(id);
  if (!p) return { error: "Penawaran tidak ditemukan." };

  const result = await sendProposalEmail(p, {
    subject: String(form.get("subject") ?? "").trim() || undefined,
    message: String(form.get("message") ?? "").trim() || undefined,
  });

  if (!result.ok) {
    return { error: `Gagal mengirim email: ${result.error}` };
  }
  await repo.markProposalSent(id);
  revalidatePath(`/admin/proposals/${id}`);
  return { ok: true as const, sentTo: p.client.email };
}
