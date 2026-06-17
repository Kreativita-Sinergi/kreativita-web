import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { waLink } from "@/lib/contact";
import Reveal from "./Reveal";

export default function Pricing({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).pricing;
  return (
    <section id="harga" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-brand-600 font-semibold text-sm">{t.eyebrow}</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight">{t.title}</h2>
          <p className="mt-4 text-slate-600">{t.desc}</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {t.plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 100}
              className={`rounded-2xl bg-white p-8 flex flex-col relative transition-transform hover:-translate-y-1 ${
                plan.popular
                  ? "border-2 border-brand-600 shadow-xl shadow-brand-500/10 md:scale-[1.03]"
                  : "border border-slate-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  {t.popular}
                </span>
              )}
              <h3 className="font-bold text-lg">{plan.name}</h3>
              <p className="text-sm text-slate-500 mt-1">{plan.subtitle}</p>
              <div className="mt-5">
                <span className="text-3xl font-extrabold">{plan.price}</span>
                {plan.priceNote && <span className="text-slate-500 text-sm">{plan.priceNote}</span>}
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-600 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-brand-600">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`${plan.name}`)}
                target="_blank"
                rel="noopener"
                className={`mt-7 text-center rounded-full font-semibold py-3 transition ${
                  plan.popular
                    ? "bg-brand-600 hover:bg-brand-700 text-white"
                    : "border border-slate-200 hover:border-brand-300"
                }`}
              >
                {plan.cta}
              </a>
            </Reveal>
          ))}
        </div>
        <p className="text-center text-sm text-slate-500 mt-8">{t.note}</p>
      </div>
    </section>
  );
}
