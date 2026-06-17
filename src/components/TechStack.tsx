import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

export default function TechStack({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).techStack;
  const items = [...t.items, ...t.items];

  return (
    <section className="py-9 border-y border-slate-100 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-widest text-slate-400 uppercase mb-6">
          {t.label}
        </p>
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track gap-x-12">
            {items.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="shrink-0 text-lg font-bold text-slate-400 hover:text-brand-600 transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
