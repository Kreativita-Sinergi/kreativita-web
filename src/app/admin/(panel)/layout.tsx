import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/admin/auth";
import { logoutAction } from "../actions";
import { siteDetails } from "@/data/siteDetails";

export const dynamic = "force-dynamic";

const nav = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/clients", label: "Klien" },
  { href: "/admin/proposals", label: "Penawaran" },
];

export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col">
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white/90 px-5 py-3 backdrop-blur">
          <div className="flex items-center gap-6">
            <Link href="/admin" className="grad-brand text-lg font-extrabold">
              {siteDetails.siteName}
            </Link>
            <nav className="hidden gap-1 sm:flex">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
          <form action={logoutAction}>
            <button className="text-sm font-medium text-slate-500 transition hover:text-red-600">
              Keluar
            </button>
          </form>
        </header>

        <nav className="flex gap-1 border-b border-slate-200 bg-white px-5 py-2 sm:hidden">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600">
              {n.label}
            </Link>
          ))}
        </nav>

        <main className="px-5 py-7">{children}</main>
      </div>
    </div>
  );
}
