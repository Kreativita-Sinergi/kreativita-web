import Link from "next/link";
import { notFound } from "next/navigation";
import { getProposal, listClients } from "@/lib/admin/repo";
import { ProposalForm } from "@/components/admin/ProposalForm";

export const dynamic = "force-dynamic";

export default async function EditProposalPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [p, clients] = await Promise.all([getProposal(id), listClients()]);
  if (!p) notFound();

  return (
    <div className="space-y-6">
      <div>
        <Link href={`/admin/proposals/${p.id}`} className="text-sm text-slate-400 hover:text-slate-600">← Kembali</Link>
        <h1 className="mt-1 text-2xl font-extrabold text-slate-900">Edit penawaran</h1>
      </div>
      <ProposalForm clients={clients} proposal={p} />
    </div>
  );
}
