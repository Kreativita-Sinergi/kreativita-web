import { getDictionary } from "@/i18n";
import { localizedHref, type Locale } from "@/i18n/config";
import { waLink } from "@/lib/contact";
import Reveal from "./Reveal";

export default function Inventra({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).inventra;
  const statTones = [
    "bg-brand-50 text-brand-700",
    "bg-indigo-50 text-indigo-700",
    "bg-sky-50 text-sky-700",
  ];
  return (
    <section id="inventra" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px 300px at 10% 10%, #e0e9ff, transparent), radial-gradient(500px 300px at 100% 90%, #e6edff, transparent)",
        }}
      />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative grid lg:grid-cols-2 gap-14 items-center">
        <Reveal delay={150} className="relative lg:order-2">
          <div className="rounded-3xl bg-white border border-slate-100 p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="font-bold text-slate-800">{t.panelTitle}</span>
                <div className="text-xs text-slate-400">{t.panelSub}</div>
              </div>
              <span className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded-full font-semibold">
                ● {t.lowStockBadge}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {t.stats.map((s, i) => (
                <div key={s.label} className={`rounded-xl p-3 ${statTones[i % statTones.length]}`}>
                  <div className="text-[10px] font-medium opacity-80 leading-tight">{s.label}</div>
                  <div className="text-xl font-extrabold mt-1">{s.value}</div>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-slate-100 p-3">
              <div className="text-xs font-semibold text-slate-500 mb-2">{t.lowStockTitle}</div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-slate-800">{t.lowStockItem}</div>
                  <div className="text-[11px] text-slate-400">{t.lowStockWarehouse}</div>
                </div>
                <span className="text-[11px] bg-red-50 text-red-600 px-2 py-1 rounded-full font-semibold">
                  {t.lowStockBadge}
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold px-3 py-1.5 mb-5">
            {t.eyebrow}
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">{t.title}</h2>
          <p className="mt-5 text-slate-600 leading-relaxed">{t.description}</p>
          <ul className="mt-7 space-y-3 text-sm text-slate-700">
            {t.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="text-brand-600 mt-0.5">✓</span> {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={waLink(t.waMessage)}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 text-white font-semibold px-6 py-3 hover:bg-brand-700 transition"
            >
              {t.ctaDemo}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
              </svg>
            </a>
            <a
              href={localizedHref(lang, "/#kontak")}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 text-slate-700 font-semibold px-6 py-3 hover:bg-slate-100 transition"
            >
              {t.ctaAsk}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
