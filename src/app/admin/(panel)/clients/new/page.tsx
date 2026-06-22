import Link from "next/link";
import { ClientForm } from "@/components/admin/ClientForm";

export const dynamic = "force-dynamic";

export default function NewClientPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <Link href="/admin/clients" className="text-sm text-slate-400 hover:text-slate-600">← Klien</Link>
        <h1 className="mt-1 text-2xl font-extrabold text-slate-900">Tambah klien</h1>
      </div>
      <ClientForm />
    </div>
  );
}
