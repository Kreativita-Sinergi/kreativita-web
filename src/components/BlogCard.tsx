import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/data/blog";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="grad-border card-hover group relative h-full rounded-2xl border border-slate-100 bg-white overflow-hidden flex flex-col">
      <Image
        src={`/blog/og/${post.slug}.png`}
        alt={post.title}
        width={1200}
        height={630}
        className="w-full aspect-[1200/630] object-cover border-b border-slate-100"
      />
      <div className="p-7 flex flex-col flex-1">
        <span className="inline-flex self-start items-center rounded-full bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 mb-4">
          {post.category}
        </span>
        <h2 className="text-xl font-bold tracking-tight">
          {/* stretched link: bikin seluruh kartu bisa diklik */}
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors group-hover:text-brand-600 after:absolute after:inset-0 after:content-['']"
          >
            {post.title}
          </Link>
        </h2>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">{post.excerpt}</p>
        <div className="mt-5 flex items-center gap-3 text-xs text-slate-400">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>•</span>
          <span>{post.readingTime} baca</span>
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
          Baca selengkapnya
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" d="M5 12h14m-6-6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </article>
  );
}
