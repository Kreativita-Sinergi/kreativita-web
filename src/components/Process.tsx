import { processSteps } from "@/data/process";

export default function Process() {
  return (
    <section id="proses" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-brand-600 font-semibold text-sm">CARA KERJA</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight">
            4 Langkah Mudah Mewujudkan Proyek
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((s) => (
            <div key={s.step} className="text-center">
              <div className={`mx-auto grid place-items-center w-14 h-14 rounded-2xl text-white font-extrabold text-xl mb-4 ${s.color}`}>
                {s.step}
              </div>
              <h3 className="font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-slate-600">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
