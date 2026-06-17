export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string; // nama ikon, dipetakan di komponen
  color: string; // kelas warna tailwind untuk wadah ikon
  // Konten halaman detail (/layanan/[slug]) + SEO
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  hero: string; // paragraf pembuka di halaman detail
  includes: string[]; // "apa yang Anda dapat"
  benefits: { title: string; desc: string }[];
};

export const services: Service[] = [
  {
    slug: "pembuatan-website",
    title: "Pembuatan Website",
    description:
      "Company profile, landing page, toko online, hingga web app custom yang cepat, responsif, dan SEO-friendly.",
    icon: "globe",
    color: "bg-brand-50 text-brand-600",
    seoTitle: "Jasa Pembuatan Website Profesional & SEO-Friendly",
    seoDescription:
      "Jasa pembuatan website untuk UMKM hingga perusahaan — company profile, landing page, toko online, dan web app custom. Cepat, responsif, SEO-friendly, harga terjangkau.",
    keywords: [
      "jasa pembuatan website",
      "jasa bikin website",
      "pembuatan website UMKM",
      "jasa website company profile",
      "jasa pembuatan toko online",
    ],
    hero:
      "Website adalah etalase digital bisnis Anda yang buka 24 jam. Kami membangun website yang cepat, tampil rapi di semua perangkat, dan dioptimalkan agar mudah ditemukan di Google.",
    includes: [
      "Desain modern & responsif (HP, tablet, desktop)",
      "Optimasi kecepatan & SEO on-page",
      "Domain, hosting, dan setup SSL",
      "Integrasi WhatsApp, form kontak & Google Maps",
      "Panel kelola konten yang mudah",
      "Pendampingan & maintenance setelah live",
    ],
    benefits: [
      { title: "Kredibilitas", desc: "Tampil profesional dan tepercaya di mata calon pelanggan." },
      { title: "Ditemukan di Google", desc: "Struktur SEO-friendly agar bisnis muncul saat dicari." },
      { title: "Aset milik sendiri", desc: "Berbeda dari media sosial, website sepenuhnya milik Anda." },
    ],
  },
  {
    slug: "aplikasi-mobile",
    title: "Aplikasi Mobile",
    description:
      "Aplikasi Android & iOS dengan Flutter — satu kode, dua platform. Performa native, biaya lebih hemat.",
    icon: "phone",
    color: "bg-indigo-50 text-indigo-600",
    seoTitle: "Jasa Pembuatan Aplikasi Mobile Android & iOS",
    seoDescription:
      "Jasa pembuatan aplikasi mobile Android & iOS dengan Flutter — satu basis kode untuk dua platform, performa native, biaya lebih hemat. Dari MVP hingga aplikasi skala penuh.",
    keywords: [
      "jasa pembuatan aplikasi mobile",
      "jasa bikin aplikasi Android",
      "jasa pembuatan aplikasi iOS",
      "developer aplikasi Flutter",
      "jasa buat aplikasi",
    ],
    hero:
      "Jangkau pelanggan langsung dari genggaman mereka. Kami membangun aplikasi Android & iOS dengan Flutter — satu basis kode untuk dua platform, sehingga lebih cepat dan hemat biaya.",
    includes: [
      "Aplikasi Android & iOS sekaligus (Flutter)",
      "Desain UI/UX yang mulus dan intuitif",
      "Integrasi backend, pembayaran & notifikasi",
      "Mode offline & sinkronisasi data",
      "Publikasi ke Play Store / App Store",
      "Pemeliharaan & pembaruan berkala",
    ],
    benefits: [
      { title: "Hemat Biaya", desc: "Satu kode untuk dua platform memangkas waktu & biaya." },
      { title: "Mulai dari MVP", desc: "Luncurkan fitur inti dulu, kembangkan bertahap." },
      { title: "Engagement Tinggi", desc: "Notifikasi push menjaga pelanggan tetap kembali." },
    ],
  },
  {
    slug: "sistem-custom-api",
    title: "Sistem Custom & API",
    description:
      "Backend, dashboard admin, integrasi pembayaran, dan sistem internal sesuai alur bisnis Anda.",
    icon: "code",
    color: "bg-sky-50 text-sky-600",
    seoTitle: "Jasa Pembuatan Sistem Custom & Integrasi API",
    seoDescription:
      "Jasa pembuatan sistem custom: backend, dashboard admin, integrasi payment gateway dan API pihak ketiga, sesuai alur bisnis Anda. Skalabel, aman, dan andal.",
    keywords: [
      "jasa pembuatan sistem",
      "sistem informasi custom",
      "jasa integrasi API",
      "pembuatan dashboard admin",
      "jasa backend developer",
    ],
    hero:
      "Setiap bisnis punya alur kerja unik. Kami membangun sistem custom — backend, dashboard, hingga integrasi — yang dirancang persis sesuai kebutuhan operasional Anda.",
    includes: [
      "Backend & API yang skalabel dan aman",
      "Dashboard admin sesuai kebutuhan tim",
      "Integrasi payment gateway & layanan pihak ketiga",
      "Otomatisasi alur kerja & laporan",
      "Manajemen hak akses pengguna (role)",
      "Dokumentasi & dukungan teknis",
    ],
    benefits: [
      { title: "Sesuai Proses Anda", desc: "Sistem mengikuti alur bisnis, bukan sebaliknya." },
      { title: "Efisiensi", desc: "Otomatisasi tugas manual yang memakan waktu." },
      { title: "Siap Tumbuh", desc: "Arsitektur yang siap menskalakan saat bisnis membesar." },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Desain antarmuka yang menarik dan mudah digunakan, dirancang dari riset pengguna hingga prototype.",
    icon: "shield",
    color: "bg-slate-100 text-slate-600",
    seoTitle: "Jasa UI/UX Design — Desain Antarmuka & Prototype",
    seoDescription:
      "Jasa UI/UX design untuk website dan aplikasi — dari riset pengguna, wireframe, hingga prototype interaktif. Desain yang menarik, konsisten, dan mudah digunakan.",
    keywords: [
      "jasa UI UX design",
      "jasa desain aplikasi",
      "jasa desain UI website",
      "prototype Figma",
      "desain antarmuka aplikasi",
    ],
    hero:
      "Tampilan yang indah saja tidak cukup — produk harus mudah digunakan. Kami merancang antarmuka yang menarik sekaligus intuitif, mulai dari riset pengguna hingga prototype interaktif.",
    includes: [
      "Riset pengguna & analisis kebutuhan",
      "Wireframe & user flow",
      "Desain visual & design system",
      "Prototype interaktif (Figma)",
      "Uji kegunaan (usability testing)",
      "Hand-off siap untuk developer",
    ],
    benefits: [
      { title: "Konversi Lebih Tinggi", desc: "Alur yang jelas mendorong pengguna mengambil aksi." },
      { title: "Konsisten", desc: "Design system menjaga tampilan rapi di semua halaman." },
      { title: "Hemat Revisi", desc: "Validasi lewat prototype sebelum masuk pengembangan." },
    ],
  },
  {
    slug: "hosting-maintenance",
    title: "Hosting & Maintenance",
    description:
      "Deploy, domain, keamanan, dan perawatan rutin agar aplikasi Anda selalu online dan up-to-date.",
    icon: "server",
    color: "bg-brand-50 text-brand-600",
    seoTitle: "Jasa Hosting & Maintenance Website/Aplikasi",
    seoDescription:
      "Jasa hosting, deployment, dan maintenance website serta aplikasi — keamanan, backup, pembaruan, dan monitoring agar layanan Anda selalu online dan optimal.",
    keywords: [
      "jasa hosting website",
      "jasa maintenance website",
      "perawatan aplikasi",
      "jasa deploy aplikasi",
      "kelola server website",
    ],
    hero:
      "Membangun aplikasi hanyalah awal — menjaganya tetap online dan aman adalah pekerjaan berkelanjutan. Kami urus hosting, keamanan, dan perawatan agar Anda fokus ke bisnis.",
    includes: [
      "Setup domain, hosting & SSL",
      "Deployment & konfigurasi server",
      "Backup berkala & pemulihan data",
      "Update keamanan & patch rutin",
      "Monitoring uptime & performa",
      "Dukungan teknis responsif",
    ],
    benefits: [
      { title: "Selalu Online", desc: "Monitoring menjaga layanan tetap dapat diakses." },
      { title: "Aman", desc: "Update & backup rutin melindungi data Anda." },
      { title: "Tanpa Pusing", desc: "Urusan teknis kami tangani, Anda fokus jualan." },
    ],
  },
  {
    slug: "konsultasi-digital",
    title: "Konsultasi Digital",
    description:
      "Bingung mulai dari mana? Kami bantu petakan kebutuhan teknologi dan strategi digitalisasi bisnis Anda.",
    icon: "bolt",
    color: "bg-indigo-50 text-indigo-600",
    seoTitle: "Konsultasi Digital & Strategi Teknologi Bisnis",
    seoDescription:
      "Konsultasi digital untuk membantu memetakan kebutuhan teknologi dan menyusun strategi transformasi digital bisnis Anda — terarah, realistis, dan sesuai anggaran.",
    keywords: [
      "konsultasi digital",
      "konsultan IT",
      "strategi transformasi digital",
      "konsultasi teknologi bisnis",
      "digitalisasi UMKM",
    ],
    hero:
      "Tidak yakin teknologi apa yang Anda butuhkan? Kami bantu memetakan masalah, peluang, dan langkah digitalisasi yang paling tepat untuk bisnis Anda — tanpa over-engineering.",
    includes: [
      "Audit kebutuhan & proses bisnis",
      "Rekomendasi solusi & teknologi",
      "Perencanaan fitur & prioritas (roadmap)",
      "Estimasi biaya & timeline realistis",
      "Strategi digitalisasi bertahap",
      "Pendampingan eksekusi",
    ],
    benefits: [
      { title: "Arah yang Jelas", desc: "Tahu persis langkah pertama hingga akhir." },
      { title: "Hemat Anggaran", desc: "Hindari investasi pada fitur yang tak perlu." },
      { title: "Keputusan Tepat", desc: "Pilihan berbasis kebutuhan nyata, bukan tebakan." },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
