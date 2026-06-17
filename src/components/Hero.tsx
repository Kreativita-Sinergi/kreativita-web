import { waLink } from "@/lib/contact";
import { getDictionary } from "@/i18n";
import { localizedHref, type Locale } from "@/i18n/config";
import Reveal from "./Reveal";

export default function Hero({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).hero;
  return (
    <section id="home" className="grad-hero relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-slate-200 text-brand-700 text-xs font-semibold px-3 py-1.5 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
              </span>
              {t.badge}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              {t.titlePre}
              <span className="grad-brand">{t.titleHighlight}</span>
              {t.titlePost}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              {t.desc1}
              <span className="font-semibold text-slate-800">{t.descEmphasis}</span>
              {t.desc2}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold px-7 py-3.5 shadow-lg shadow-brand-600/25 transition"
              >
                {t.ctaPrimary}
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" d="M5 12h14m-6-6l6 6-6 6" />
                </svg>
              </a>
              <a
                href={localizedHref(lang, "/#produk")}
                className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 hover:border-brand-300 text-slate-800 font-semibold px-7 py-3.5 transition"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex items-center gap-8 text-sm text-slate-500">
              {t.stats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-10 bg-slate-200" />}
                  <div>
                    <div className="text-2xl font-extrabold text-slate-900">{s.value}</div>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="animate-float relative mx-auto max-w-md">
            <div className="absolute -inset-6 -z-10 opacity-60 blur-2xl" aria-hidden>
              <div className="absolute left-0 top-4 h-24 w-24 rounded-full bg-brand-500/40" />
              <div className="absolute right-2 top-0 h-20 w-20 rounded-full bg-indigo-400/30" />
              <div className="absolute left-10 bottom-0 h-24 w-24 rounded-full bg-brand-300/40" />
              <div className="absolute right-8 bottom-6 h-16 w-16 rounded-full bg-indigo-300/30" />
            </div>
            <div className="rounded-3xl bg-white shadow-2xl shadow-brand-500/10 border border-slate-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-slate-200" />
                <span className="w-3 h-3 rounded-full bg-slate-200" />
                <span className="w-3 h-3 rounded-full bg-slate-200" />
              </div>
              <div className="space-y-3">
                <div className="h-24 rounded-2xl bg-gradient-to-br from-brand-600 to-indigo-600" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-16 rounded-xl bg-slate-100" />
                  <div className="h-16 rounded-xl bg-slate-100" />
                  <div className="h-16 rounded-xl bg-brand-100" />
                </div>
                <div className="h-3 rounded-full bg-slate-100 w-3/4" />
                <div className="h-3 rounded-full bg-slate-100 w-1/2" />
                <div className="h-10 rounded-xl bg-brand-600 w-1/3" />
              </div>
            </div>
            <div className="absolute -right-6 -bottom-6 rounded-2xl bg-white shadow-xl border border-slate-100 p-4 flex items-center gap-3">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand-50 text-brand-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 12a8 8 0 11-16 0 8 8 0 0116 0zm-8.7 3.7l5-5-1.4-1.4-3.6 3.6-1.6-1.6-1.4 1.4 3 3z" />
                </svg>
              </span>
              <div className="text-xs">
                <div className="font-bold text-slate-900">{t.launchTitle}</div>
                <div className="text-slate-500">{t.launchSub}</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
