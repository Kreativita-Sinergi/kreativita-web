import type { MetadataRoute } from "next";
import { siteDetails } from "@/data/siteDetails";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteDetails.siteName,
    short_name: "Kreativita",
    description: siteDetails.metadata.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1f47f5",
    icons: [
      { src: "/logo-icon.png", sizes: "256x256", type: "image/png" },
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
