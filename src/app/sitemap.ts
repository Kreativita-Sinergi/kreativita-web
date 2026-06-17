import type { MetadataRoute } from "next";
import { siteDetails } from "@/data/siteDetails";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteDetails.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
