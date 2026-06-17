import { techStack } from "@/data/about";

export default function TechStack() {
  // duplicate the list so the marquee loops seamlessly (-50% translate)
  const items = [...techStack, ...techStack];

  return (
    <section className="py-9 border-y border-slate-100 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-widest text-slate-400 uppercase mb-6">
          Teknologi yang kami gunakan
        </p>
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track gap-x-12">
            {items.map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="shrink-0 text-lg font-bold text-slate-400 hover:text-brand-600 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
