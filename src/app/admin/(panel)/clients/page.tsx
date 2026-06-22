import Link from "next/link";
import { listClients } from "@/lib/admin/repo";
import { StatusBadge, cls } from "@/components/admin/ui";
import { deleteClientAction } from "../../actions";

export const dynamic = "force-dynamic";

export default async function ClientsPage() {
  const clients = await listClients();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Klien</h1>
          <p className="text-sm text-slate-500">{clients.length} kontak calon & klien.</p>
        </div>
        <Link href="/admin/clients/new" className={cls.btnPrimary}>+ Tambah klien</Link>
      </div>

      {clients.length === 0 ? (
        <div className={cls.card + " py-12 text-center text-slate-400"}>
          Belum ada klien. <Link href="/admin/clients/new" className="text-brand-600 hover:underline">Tambah yang pertama →</Link>
        </div>
      ) : (
        <div className={cls.card + " overflow-x-auto p-0"}>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-xs uppercase tracking-wide text-slate-400">
                <th className="px-4 py-3 font-medium">Kontak</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Negara</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {clients.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/60">
                  <td className="px-4 py-3">
                    <Link href={`/admin/clients/${c.id}`} className="font-medium text-slate-800 hover:text-brand-600">
                      {c.name}
                    </Link>
                    {c.company ? <div className="text-xs text-slate-400">{c.company}</div> : null}
                  </td>
                  <td className="px-4 py-3 text-slate-600">{c.email}</td>
                  <td className="px-4 py-3 text-slate-600">
                    {c.country ?? "—"} <span className="ml-1 text-xs uppercase text-slate-400">{c.language}</span>
                  </td>
                  <td className="px-4 py-3"><StatusBadge status={c.status} /></td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-2">
                      <Link href={`/admin/proposals/new?client=${c.id}`} className="text-xs font-medium text-brand-600 hover:underline">
                        Buat penawaran
                      </Link>
                      <Link href={`/admin/clients/${c.id}`} className="text-xs font-medium text-slate-500 hover:underline">Edit</Link>
                      <form action={deleteClientAction}>
                        <input type="hidden" name="id" value={c.id} />
                        <button className="text-xs font-medium text-red-500 hover:underline">Hapus</button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
