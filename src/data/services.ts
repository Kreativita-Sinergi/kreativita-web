export type Service = {
  title: string;
  description: string;
  icon: string; // nama ikon, dipetakan di komponen
  color: string; // kelas warna tailwind untuk wadah ikon
};

export const services: Service[] = [
  {
    title: "Pembuatan Website",
    description:
      "Company profile, landing page, toko online, hingga web app custom yang cepat, responsif, dan SEO-friendly.",
    icon: "globe",
    color: "bg-brand-50 text-brand-600",
  },
  {
    title: "Aplikasi Mobile",
    description:
      "Aplikasi Android & iOS dengan Flutter — satu kode, dua platform. Performa native, biaya lebih hemat.",
    icon: "phone",
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Sistem Custom & API",
    description:
      "Backend, dashboard admin, integrasi pembayaran, dan sistem internal sesuai alur bisnis Anda.",
    icon: "code",
    color: "bg-accent/10 text-accent",
  },
  {
    title: "UI/UX Design",
    description:
      "Desain antarmuka yang menarik dan mudah digunakan, dirancang dari riset pengguna hingga prototype.",
    icon: "shield",
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Hosting & Maintenance",
    description:
      "Deploy, domain, keamanan, dan perawatan rutin agar aplikasi Anda selalu online dan up-to-date.",
    icon: "server",
    color: "bg-pink-50 text-pink-600",
  },
  {
    title: "Konsultasi Digital",
    description:
      "Bingung mulai dari mana? Kami bantu petakan kebutuhan teknologi dan strategi digitalisasi bisnis Anda.",
    icon: "bolt",
    color: "bg-yellow-50 text-yellow-600",
  },
];
