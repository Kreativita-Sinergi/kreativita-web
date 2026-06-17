import { processSteps } from "@/data/process";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="proses" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <Reveal className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-brand-600 font-semibold text-sm">CARA KERJA</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight">
            4 Langkah Mudah Mewujudkan Proyek
          </h2>
        </Reveal>
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* connecting line behind the step badges (desktop only) */}
          <div
            className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-300 via-purple-300 to-green-300"
            aria-hidden
          />
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 100} className="relative text-center">
              <div
                className={`mx-auto grid place-items-center w-14 h-14 rounded-2xl text-white font-extrabold text-xl mb-4 ring-4 ring-slate-50 shadow-lg ${s.color}`}
              >
                {s.step}
              </div>
              <h3 className="font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600">{s.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
