import { lokaKasir } from "@/data/lokaKasir";
import { waLink } from "@/lib/contact";
import Reveal from "./Reveal";

export default function LokaKasir() {
  return (
    <section id="produk" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(600px 300px at 90% 10%, #3366ff, transparent), radial-gradient(500px 300px at 0% 90%, #7c3aed, transparent)",
        }}
      />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white text-xs font-semibold px-3 py-1.5 mb-5">
            {lokaKasir.eyebrow}
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">{lokaKasir.title}</h2>
          <p className="mt-5 text-slate-300 leading-relaxed">{lokaKasir.description}</p>
          <ul className="mt-7 space-y-3 text-sm">
            {lokaKasir.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="text-green-400 mt-0.5">✓</span> {f}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={waLink("Halo Kreativita, saya tertarik dengan Loka Kasir.")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 font-semibold px-6 py-3 hover:bg-slate-100 transition"
            >
              Coba Loka Kasir
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white font-semibold px-6 py-3 hover:bg-white/10 transition"
            >
              Tanya Tim
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur">
            <div className="rounded-2xl bg-white text-slate-800 p-5 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold">Kasir</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                  ● Online
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[
                  { name: "Kopi", c: "bg-brand-100" },
                  { name: "Roti", c: "bg-accent/20" },
                  { name: "Teh", c: "bg-purple-100" },
                ].map((p) => (
                  <div key={p.name} className="rounded-xl border border-slate-100 p-2 text-center">
                    <div className={`h-10 rounded-lg mb-1 ${p.c}`} />
                    <span className="text-[10px]">{p.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                <div>
                  <div className="text-xs text-slate-400">Total</div>
                  <div className="font-extrabold text-lg">Rp 48.000</div>
                </div>
                <button className="rounded-xl bg-brand-600 text-white text-sm font-semibold px-4 py-2">
                  Bayar
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
