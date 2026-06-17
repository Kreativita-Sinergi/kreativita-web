import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteDetails } from "@/data/siteDetails";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteDetails.siteUrl),
  title: {
    default: siteDetails.metadata.title,
    template: `%s | ${siteDetails.siteName}`,
  },
  description: siteDetails.metadata.description,
  keywords: siteDetails.metadata.keywords,
  applicationName: siteDetails.siteName,
  authors: [{ name: siteDetails.siteName, url: siteDetails.siteUrl }],
  creator: siteDetails.siteName,
  publisher: siteDetails.siteName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    siteName: siteDetails.siteName,
    locale: siteDetails.locale,
    type: "website",
    images: [
      {
        url: siteDetails.metadata.ogImage,
        width: 1200,
        height: 630,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: [siteDetails.metadata.ogImage],
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteDetails.siteUrl}/#organization`,
      name: siteDetails.siteName,
      url: siteDetails.siteUrl,
      logo: `${siteDetails.siteUrl}/logo-icon.png`,
      description: siteDetails.metadata.description,
      email: siteDetails.contact.email,
      telephone: siteDetails.contact.phoneDisplay,
      areaServed: "ID",
      sameAs: ["https://www.lokakasir.id"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: siteDetails.contact.email,
        telephone: siteDetails.contact.phoneDisplay,
        areaServed: "ID",
        availableLanguage: ["id"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteDetails.siteUrl}/#website`,
      url: siteDetails.siteUrl,
      name: siteDetails.siteName,
      inLanguage: siteDetails.locale,
      publisher: { "@id": `${siteDetails.siteUrl}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      name: siteDetails.siteName,
      image: `${siteDetails.siteUrl}/logo-icon.png`,
      url: siteDetails.siteUrl,
      priceRange: "$$",
      areaServed: "Indonesia",
      makesOffer: [
        "Jasa Pembuatan Website",
        "Jasa Pembuatan Aplikasi Mobile",
        "Sistem Custom & Integrasi API",
        "UI/UX Design",
      ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteDetails.language}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jakarta.variable} text-slate-800 bg-white`}>{children}</body>
    </html>
  );
}
