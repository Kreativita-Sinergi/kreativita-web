import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import { posts, getCategories, getPostsForPage, totalBlogPages } from "@/data/blog";
import { siteDetails } from "@/data/siteDetails";

export const metadata: Metadata = {
  title: "Blog — Tips Website, Aplikasi & Strategi Digital",
  description:
    "Artikel & panduan seputar pembuatan website, aplikasi mobile, dan strategi digital untuk UMKM dan bisnis dari Kreativita Sinergi.",
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": "/blog/rss.xml" },
  },
  openGraph: {
    title: "Blog Kreativita Sinergi",
    description:
      "Tips & panduan seputar website, aplikasi mobile, dan transformasi digital untuk bisnis.",
    url: `${siteDetails.siteUrl}/blog`,
    type: "website",
  },
};

export default function BlogIndex() {
  const categories = getCategories();
  const pagePosts = getPostsForPage(1);
  const totalPages = totalBlogPages();

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <header className="max-w-2xl mb-10">
            <span className="text-brand-600 font-semibold text-sm">BLOG</span>
            <h1 className="mt-3 text-4xl lg:text-5xl font-extrabold tracking-tight">
              Wawasan Digital untuk Bisnis Anda
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Tips, panduan, dan strategi seputar website, aplikasi mobile, dan teknologi untuk
              membantu bisnis Anda tumbuh.
            </p>
          </header>

          {/* Filter kategori */}
          <nav className="mb-12 flex flex-wrap gap-2.5" aria-label="Kategori artikel">
            <span className="rounded-full bg-brand-600 text-white text-sm font-semibold px-4 py-2">
              Semua ({posts.length})
            </span>
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

          <Pagination currentPage={1} totalPages={totalPages} />
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
