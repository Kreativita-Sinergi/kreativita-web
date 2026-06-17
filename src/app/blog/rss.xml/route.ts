import { postsSortedByDate } from "@/data/blog";
import { siteDetails } from "@/data/siteDetails";

// Konten berasal dari data build-time, jadi feed bisa di-prerender statis.
export const dynamic = "force-static";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const base = siteDetails.siteUrl;
  const posts = postsSortedByDate();
  const lastBuild = posts.length ? new Date(posts[0].date).toUTCString() : new Date().toUTCString();

  const items = posts
    .map((p) => {
      const url = `${base}/blog/${p.slug}`;
      return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <category>${escapeXml(p.category)}</category>
      <description>${escapeXml(p.excerpt)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog ${escapeXml(siteDetails.siteName)}</title>
    <link>${base}/blog</link>
    <description>Tips &amp; panduan seputar website, aplikasi mobile, dan strategi digital untuk bisnis.</description>
    <language>${siteDetails.language}</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${base}/blog/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
