import type { MetadataRoute } from "next";
import { siteDetails } from "@/data/siteDetails";
import { services } from "@/data/services";
import { posts, getCategories, totalBlogPages } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteDetails.siteUrl;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/layanan/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const categoryPages: MetadataRoute.Sitemap = getCategories().map((c) => ({
    url: `${base}/blog/kategori/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Halaman paginasi blog (2..N)
  const paginationPages: MetadataRoute.Sitemap = Array.from(
    { length: Math.max(0, totalBlogPages() - 1) },
    (_, i) => ({
      url: `${base}/blog/page/${i + 2}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.4,
    })
  );

  return [...staticPages, ...servicePages, ...categoryPages, ...paginationPages, ...blogPages];
}
