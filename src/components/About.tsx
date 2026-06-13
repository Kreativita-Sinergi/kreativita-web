import { about } from "@/data/about";

export default function About() {
  return (
    <section id="tentang" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            {about.highlights.map((h, i) => (
              <div key={h.value} className={`rounded-2xl p-6 ${h.color} ${i % 2 === 1 ? "mt-8" : ""}`}>
                <div className="text-3xl font-extrabold">{h.value}</div>
                <p className="text-sm text-slate-600 mt-1">{h.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-brand-600 font-semibold text-sm">{about.eyebrow}</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight">{about.title}</h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="mt-5 text-slate-600 leading-relaxed first:mt-5 [&:not(:first-of-type)]:mt-4">
              {p}
            </p>
          ))}
          <ul className="mt-7 space-y-3 text-sm">
            {about.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="grid place-items-center w-6 h-6 rounded-full bg-brand-100 text-brand-600 text-xs font-bold shrink-0">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
