import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { ServiceIcon } from "@/components/icons";
import { services, getService } from "@/data/services";
import { siteDetails } from "@/data/siteDetails";
import { waLink } from "@/lib/contact";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.keywords,
    alternates: { canonical: `/layanan/${service.slug}` },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `${siteDetails.siteUrl}/layanan/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.seoTitle,
    description: service.seoDescription,
    serviceType: service.title,
    areaServed: "Indonesia",
    provider: {
      "@type": "Organization",
      name: siteDetails.siteName,
      url: siteDetails.siteUrl,
    },
    url: `${siteDetails.siteUrl}/layanan/${service.slug}`,
  };

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <Link href="/#layanan" className="text-sm font-semibold text-brand-600 hover:underline">
            ← Semua Layanan
          </Link>

          {/* Hero */}
          <header className="mt-6 mb-12">
            <div className={`grid place-items-center w-14 h-14 rounded-2xl mb-6 ${service.color}`}>
              <ServiceIcon name={service.icon} className="w-7 h-7" />
            </div>
            <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight">{service.title}</h1>
            <p className="mt-5 text-lg text-slate-600 max-w-2xl leading-relaxed">{service.hero}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={waLink(`Halo Kreativita Sinergi, saya tertarik dengan layanan ${service.title}.`)}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold px-7 py-3.5 shadow-lg shadow-brand-600/25 transition"
              >
                Konsultasi Gratis
              </a>
              <Link
                href="/#harga"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 hover:border-brand-300 text-slate-800 font-semibold px-7 py-3.5 transition"
              >
                Lihat Harga
              </Link>
            </div>
          </header>

          {/* Apa yang Anda dapat */}
          <section className="grid lg:grid-cols-2 gap-10 mb-14">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-5">Apa yang Anda Dapatkan</h2>
              <ul className="space-y-3">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <span className="grid place-items-center w-6 h-6 rounded-full bg-brand-100 text-brand-600 text-xs font-bold shrink-0">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-5">Kenapa Penting</h2>
              <div className="space-y-4">
                {service.benefits.map((b) => (
                  <div key={b.title} className="rounded-2xl border border-slate-100 bg-white p-5">
                    <h3 className="font-bold mb-1">{b.title}</h3>
                    <p className="text-sm text-slate-600">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-indigo-700 text-white p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight">
              Siap mulai {service.title.toLowerCase()}?
            </h2>
            <p className="mt-3 text-white/90 max-w-xl mx-auto">
              Ceritakan kebutuhan Anda — konsultasi gratis, tanpa biaya, dan kami bantu petakan
              solusi terbaiknya.
            </p>
            <a
              href={waLink(`Halo Kreativita Sinergi, saya ingin konsultasi layanan ${service.title}.`)}
              target="_blank"
              rel="noopener"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white text-slate-900 font-semibold px-7 py-3.5 hover:bg-slate-100 transition"
            >
              Mulai Sekarang
            </a>
          </div>

          {/* Layanan lain */}
          <div className="mt-16">
            <h2 className="text-lg font-bold mb-5">Layanan Lainnya</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/layanan/${o.slug}`}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 p-4 hover:border-brand-300 transition-colors"
                >
                  <span className={`grid place-items-center w-9 h-9 rounded-lg shrink-0 ${o.color}`}>
                    <ServiceIcon name={o.icon} className="w-4 h-4" />
                  </span>
                  <span className="text-sm font-semibold">{o.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
