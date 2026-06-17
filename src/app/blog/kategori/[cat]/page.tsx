import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BlogCard from "@/components/BlogCard";
import Breadcrumb from "@/components/Breadcrumb";
import { getCategories, getCategoryBySlug, getPostsByCategory } from "@/data/blog";
import { siteDetails } from "@/data/siteDetails";

export function generateStaticParams() {
  return getCategories().map((c) => ({ cat: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cat: string }>;
}): Promise<Metadata> {
  const { cat } = await params;
  const category = getCategoryBySlug(cat);
  if (!category) return {};
  const title = `Artikel ${category.name}`;
  const description = `Kumpulan artikel & panduan kategori ${category.name} dari Kreativita Sinergi — tips praktis untuk bisnis Anda.`;
  return {
    title,
    description,
    alternates: { canonical: `/blog/kategori/${category.slug}` },
    openGraph: {
      title,
      description,
      url: `${siteDetails.siteUrl}/blog/kategori/${category.slug}`,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ cat: string }> }) {
  const { cat } = await params;
  const category = getCategoryBySlug(cat);
  if (!category) notFound();

  const categoryPosts = getPostsByCategory(cat).sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  );
  const others = getCategories().filter((c) => c.slug !== cat);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <Breadcrumb
            items={[
              { name: "Beranda", href: "/" },
              { name: "Blog", href: "/blog" },
              { name: category.name },
            ]}
          />

          <header className="mt-6 max-w-2xl mb-10">
            <span className="text-brand-600 font-semibold text-sm">KATEGORI</span>
            <h1 className="mt-3 text-4xl lg:text-5xl font-extrabold tracking-tight">{category.name}</h1>
            <p className="mt-4 text-lg text-slate-600">
              {category.count} artikel seputar {category.name.toLowerCase()} untuk membantu bisnis
              Anda tumbuh.
            </p>
          </header>

          {/* Kategori lain */}
          <nav className="mb-12 flex flex-wrap gap-2.5" aria-label="Kategori lain">
            <Link
              href="/blog"
              className="rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold px-4 py-2 hover:border-brand-300 hover:text-brand-600 transition-colors"
            >
              Semua
            </Link>
            <span className="rounded-full bg-brand-600 text-white text-sm font-semibold px-4 py-2">
              {category.name}
            </span>
            {others.map((c) => (
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
            {categoryPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
