import Link from "next/link";
import { getDictionary } from "@/i18n";
import { localizedHref, type Locale } from "@/i18n/config";
import { ServiceIcon } from "./icons";
import Reveal from "./Reveal";

export default function Services({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).services;
  return (
    <section id="layanan" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-brand-600 font-semibold text-sm">{t.eyebrow}</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight">{t.title}</h2>
          <p className="mt-4 text-slate-600">{t.desc}</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 90}>
              <Link
                href={localizedHref(lang, `/layanan/${s.slug}`)}
                className="grad-border card-hover group h-full flex flex-col rounded-2xl border border-slate-100 bg-white p-7"
              >
                <div className={`grid place-items-center w-12 h-12 rounded-xl mb-5 ${s.color}`}>
                  <ServiceIcon name={s.icon} className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">{s.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  {t.more}
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
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
