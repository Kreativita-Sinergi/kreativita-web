import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { getDictionary } from "@/i18n";
import { siteDetails } from "@/data/siteDetails";

export function generateMetadata(): Metadata {
  const dict = getDictionary("en");
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: "/en",
      languages: {
        id: "/",
        en: "/en",
        "x-default": "/",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${siteDetails.siteUrl}/en`,
      locale: "en_US",
    },
  };
}

export default function HomeEn() {
  return <HomePage lang="en" />;
}
