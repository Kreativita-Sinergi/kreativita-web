import Link from "next/link";
import { listClients } from "@/lib/admin/repo";
import { ProposalForm } from "@/components/admin/ProposalForm";
import { cls } from "@/components/admin/ui";

export const dynamic = "force-dynamic";

export default async function NewProposalPage({
  searchParams,
}: {
  searchParams: Promise<{ client?: string }>;
}) {
  const { client } = await searchParams;
  const clients = await listClients();

  if (clients.length === 0) {
    return (
      <div className="mx-auto max-w-2xl space-y-4">
        <h1 className="text-2xl font-extrabold text-slate-900">Buat penawaran</h1>
        <div className={cls.card + " text-center text-slate-500"}>
          <p>Tambahkan klien terlebih dahulu sebelum membuat penawaran.</p>
          <Link href="/admin/clients/new" className={cls.btnPrimary + " mt-4"}>+ Tambah klien</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <Link href="/admin/proposals" className="text-sm text-slate-400 hover:text-slate-600">← Penawaran</Link>
        <h1 className="mt-1 text-2xl font-extrabold text-slate-900">Buat penawaran</h1>
      </div>
      <ProposalForm clients={clients} presetClientId={client} />
    </div>
  );
}
