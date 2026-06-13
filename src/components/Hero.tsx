import { stats } from "@/data/about";
import { waLink } from "@/lib/contact";

export default function Hero() {
  return (
    <section id="home" className="grad-hero pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500" /> Siap bantu wujudkan ide digital Anda
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Wujudkan <span className="grad-text">Website &amp; Aplikasi</span> Impian Bisnis Anda
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Kreativita adalah partner teknologi yang membantu UMKM hingga perusahaan membangun website,
            aplikasi mobile, dan semua kebutuhan IT — dengan harga yang{" "}
            <span className="font-semibold text-slate-800">terjangkau</span> dan kualitas profesional.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold px-7 py-3.5 transition"
            >
              Mulai Proyek Anda
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M5 12h14m-6-6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#produk"
              className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 hover:border-brand-300 text-slate-800 font-semibold px-7 py-3.5 transition"
            >
              Lihat Loka Kasir
            </a>
          </div>
          <div className="mt-10 flex items-center gap-8 text-sm text-slate-500">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-8">
                {i > 0 && <div className="w-px h-10 bg-slate-200" />}
                <div>
                  <div className="text-2xl font-extrabold text-slate-900">{s.value}</div>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="animate-float relative mx-auto max-w-md">
            <div className="rounded-3xl bg-white shadow-2xl shadow-brand-500/10 border border-slate-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="space-y-3">
                <div className="h-24 rounded-2xl bg-gradient-to-br from-brand-600 to-purple-600" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-16 rounded-xl bg-slate-100" />
                  <div className="h-16 rounded-xl bg-slate-100" />
                  <div className="h-16 rounded-xl bg-accent/20" />
                </div>
                <div className="h-3 rounded-full bg-slate-100 w-3/4" />
                <div className="h-3 rounded-full bg-slate-100 w-1/2" />
                <div className="h-10 rounded-xl bg-brand-600 w-1/3" />
              </div>
            </div>
            <div className="absolute -right-6 -bottom-6 rounded-2xl bg-white shadow-xl border border-slate-100 p-4 flex items-center gap-3">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-green-100 text-green-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 12a8 8 0 11-16 0 8 8 0 0116 0zm-8.7 3.7l5-5-1.4-1.4-3.6 3.6-1.6-1.6-1.4 1.4 3 3z" />
                </svg>
              </span>
              <div className="text-xs">
                <div className="font-bold text-slate-900">Launch Sukses</div>
                <div className="text-slate-500">Tepat waktu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
