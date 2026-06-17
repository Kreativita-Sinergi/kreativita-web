import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { posts, getPost, type Block } from "@/data/blog";
import { siteDetails } from "@/data/siteDetails";
import { waLink } from "@/lib/contact";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${siteDetails.siteUrl}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [siteDetails.siteName],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="text-2xl font-bold tracking-tight mt-10 mb-4">
          {block.text}
        </h2>
      );
    case "ul":
      return (
        <ul key={i} className="my-5 space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-slate-700">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return (
        <p key={i} className="my-4 text-slate-700 leading-relaxed">
          {block.text}
        </p>
      );
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${siteDetails.siteUrl}/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: siteDetails.locale,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: siteDetails.siteName, url: siteDetails.siteUrl },
    publisher: {
      "@type": "Organization",
      name: siteDetails.siteName,
      logo: { "@type": "ImageObject", url: `${siteDetails.siteUrl}/logo-icon.png` },
    },
  };

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <article className="max-w-2xl mx-auto px-5 lg:px-8">
          <Link href="/blog" className="text-sm font-semibold text-brand-600 hover:underline">
            ← Kembali ke Blog
          </Link>

          <header className="mt-6 mb-8">
            <span className="inline-flex items-center rounded-full bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-3 text-sm text-slate-400">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>•</span>
              <span>{post.readingTime} baca</span>
            </div>
          </header>

          <div className="text-[17px]">{post.content.map(renderBlock)}</div>

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-gradient-to-br from-brand-600 to-purple-700 text-white p-7 text-center">
            <h3 className="text-xl font-bold">Punya proyek digital?</h3>
            <p className="mt-2 text-white/90 text-sm">
              Konsultasi gratis dengan tim Kreativita Sinergi — tanpa biaya, balasan cepat.
            </p>
            <a
              href={waLink("Halo Kreativita Sinergi, saya ingin konsultasi setelah baca artikel blog.")}
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-slate-900 font-semibold px-6 py-3 hover:bg-slate-100 transition"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-14">
              <h3 className="text-lg font-bold mb-5">Artikel Lainnya</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="rounded-xl border border-slate-100 p-5 hover:border-brand-300 transition-colors"
                  >
                    <span className="text-xs font-semibold text-brand-600">{r.category}</span>
                    <p className="mt-1.5 font-bold text-sm leading-snug">{r.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
