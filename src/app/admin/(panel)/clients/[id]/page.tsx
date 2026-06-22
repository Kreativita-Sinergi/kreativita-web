import Link from "next/link";
import { notFound } from "next/navigation";
import { getClient } from "@/lib/admin/repo";
import { ClientForm } from "@/components/admin/ClientForm";

export const dynamic = "force-dynamic";

export default async function EditClientPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const client = await getClient(id);
  if (!client) notFound();

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/admin/clients" className="text-sm text-slate-400 hover:text-slate-600">← Klien</Link>
          <h1 className="mt-1 text-2xl font-extrabold text-slate-900">{client.name}</h1>
        </div>
        <Link href={`/admin/proposals/new?client=${client.id}`} className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">
          Buat penawaran
        </Link>
      </div>
      <ClientForm client={client} />
    </div>
  );
}
