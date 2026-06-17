export type Plan = {
  name: string;
  subtitle: string;
  price: string;
  priceNote?: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    subtitle: "Untuk UMKM & personal",
    price: "Mulai Rp 500rb",
    priceNote: "/proyek",
    features: [
      "Landing page 1 halaman",
      "Desain responsif (HP & desktop)",
      "Form kontak & WhatsApp",
      "Gratis revisi 2x",
    ],
    cta: "Pilih Starter",
  },
  {
    name: "Business",
    subtitle: "Website / web app lengkap",
    price: "Rp 5jt",
    priceNote: "/proyek",
    popular: true,
    features: [
      "Multi halaman / dashboard admin",
      "Integrasi database & API",
      "Panel kelola konten (CMS)",
      "SEO & optimasi kecepatan",
      "Gratis maintenance 1 bulan",
    ],
    cta: "Pilih Business",
  },
  {
    name: "Custom",
    subtitle: "Aplikasi mobile & sistem besar",
    price: "Custom",
    features: [
      "Aplikasi Android & iOS",
      "Sistem ERP / POS custom",
      "Integrasi pembayaran & pihak ke-3",
      "Dukungan & SLA prioritas",
    ],
    cta: "Minta Penawaran",
  },
];
