import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { posts } from "@/data/blog";
import { siteDetails } from "@/data/siteDetails";

export const metadata: Metadata = {
  title: "Blog — Tips Website, Aplikasi & Strategi Digital",
  description:
    "Artikel & panduan seputar pembuatan website, aplikasi mobile, dan strategi digital untuk UMKM dan bisnis dari Kreativita Sinergi.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog Kreativita Sinergi",
    description:
      "Tips & panduan seputar website, aplikasi mobile, dan transformasi digital untuk bisnis.",
    url: `${siteDetails.siteUrl}/blog`,
    type: "website",
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogIndex() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <header className="max-w-2xl mb-14">
            <span className="text-brand-600 font-semibold text-sm">BLOG</span>
            <h1 className="mt-3 text-4xl lg:text-5xl font-extrabold tracking-tight">
              Wawasan Digital untuk Bisnis Anda
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Tips, panduan, dan strategi seputar website, aplikasi mobile, dan teknologi untuk
              membantu bisnis Anda tumbuh.
            </p>
          </header>

          <div className="grid sm:grid-cols-2 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="grad-border card-hover h-full rounded-2xl border border-slate-100 bg-white p-7 flex flex-col"
              >
                <span className="inline-flex self-start items-center rounded-full bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 mb-4">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold tracking-tight">
                  <Link href={`/blog/${post.slug}`} className="hover:text-brand-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">{post.excerpt}</p>
                <div className="mt-5 flex items-center gap-3 text-xs text-slate-400">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>•</span>
                  <span>{post.readingTime} baca</span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:gap-2.5 transition-all"
                >
                  Baca selengkapnya
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" d="M5 12h14m-6-6l6 6-6 6" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
