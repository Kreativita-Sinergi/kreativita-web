import type { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";
import { getServices, getService } from "@/i18n";
import { siteDetails } from "@/data/siteDetails";

export function generateStaticParams() {
  return getServices("en").map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService("en", slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `/en/layanan/${service.slug}`,
      languages: {
        id: `/layanan/${service.slug}`,
        en: `/en/layanan/${service.slug}`,
        "x-default": `/layanan/${service.slug}`,
      },
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `${siteDetails.siteUrl}/en/layanan/${service.slug}`,
      type: "website",
      locale: "en_US",
    },
  };
}

export default async function ServicePageEn({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ServiceDetail lang="en" slug={slug} />;
}
