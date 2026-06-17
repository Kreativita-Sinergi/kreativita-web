import Link from "next/link";

function pageHref(page: number) {
  return page <= 1 ? "/blog" : `/blog/page/${page}`;
}

export default function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const base =
    "grid place-items-center min-w-10 h-10 px-3 rounded-xl text-sm font-semibold transition-colors";

  return (
    <nav className="mt-14 flex items-center justify-center gap-2" aria-label="Navigasi halaman">
      {currentPage > 1 && (
        <Link href={pageHref(currentPage - 1)} className={`${base} border border-slate-200 hover:border-brand-300 hover:text-brand-600`} aria-label="Halaman sebelumnya">
          ←
        </Link>
      )}

      {pages.map((p) =>
        p === currentPage ? (
          <span key={p} className={`${base} bg-brand-600 text-white`} aria-current="page">
            {p}
          </span>
        ) : (
          <Link key={p} href={pageHref(p)} className={`${base} border border-slate-200 text-slate-700 hover:border-brand-300 hover:text-brand-600`}>
            {p}
          </Link>
        )
      )}

      {currentPage < totalPages && (
        <Link href={pageHref(currentPage + 1)} className={`${base} border border-slate-200 hover:border-brand-300 hover:text-brand-600`} aria-label="Halaman berikutnya">
          →
        </Link>
      )}
    </nav>
  );
}
