import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import Link from "next/link";
import { getCategories, getPostsForPage, totalBlogPages } from "@/data/blog";
import { siteDetails } from "@/data/siteDetails";

// Hanya halaman 2..N (halaman 1 ada di /blog)
export function generateStaticParams() {
  const total = totalBlogPages();
  return Array.from({ length: Math.max(0, total - 1) }, (_, i) => ({ page: String(i + 2) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  const n = Number(page);
  const title = `Blog — Halaman ${n}`;
  const description = `Kumpulan artikel & panduan digital dari Kreativita Sinergi, halaman ${n}.`;
  return {
    title,
    description,
    alternates: { canonical: `/blog/page/${n}` },
    openGraph: { title, description, url: `${siteDetails.siteUrl}/blog/page/${n}`, type: "website" },
  };
}

export default async function BlogPaged({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const n = Number(page);
  const totalPages = totalBlogPages();

  // Validasi: harus angka, >= 2, <= total halaman
  if (!Number.isInteger(n) || n < 2 || n > totalPages) notFound();

  const pagePosts = getPostsForPage(n);
  const categories = getCategories();

  return (
    <>
      <Navbar lang="id" />
      <main className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <header className="max-w-2xl mb-10">
            <span className="text-brand-600 font-semibold text-sm">BLOG · HALAMAN {n}</span>
            <h1 className="mt-3 text-4xl lg:text-5xl font-extrabold tracking-tight">
              Wawasan Digital untuk Bisnis Anda
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Tips, panduan, dan strategi seputar website, aplikasi mobile, dan teknologi.
            </p>
          </header>

          <nav className="mb-12 flex flex-wrap gap-2.5" aria-label="Kategori artikel">
            <Link
              href="/blog"
              className="rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold px-4 py-2 hover:border-brand-300 hover:text-brand-600 transition-colors"
            >
              Semua
            </Link>
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/blog/kategori/${c.slug}`}
                className="rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold px-4 py-2 hover:border-brand-300 hover:text-brand-600 transition-colors"
              >
                {c.name} ({c.count})
              </Link>
            ))}
          </nav>

          <div className="grid sm:grid-cols-2 gap-6">
            {pagePosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <Pagination currentPage={n} totalPages={totalPages} />
        </div>
      </main>
      <Footer lang="id" />
      <FloatingWhatsApp />
    </>
  );
}
