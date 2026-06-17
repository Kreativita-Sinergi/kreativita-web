// Blog data-driven untuk SEO. Tambahkan artikel baru di array `posts`.
// Konten ditulis sebagai blok sederhana agar tidak perlu library markdown.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string; // ISO, contoh "2026-06-17"
  category: string;
  readingTime: string; // contoh "6 menit"
  keywords: string[];
  content: Block[];
};

export const posts: BlogPost[] = [
  {
    slug: "jasa-pembuatan-website-untuk-umkm",
    title: "Jasa Pembuatan Website untuk UMKM: Panduan & Estimasi Biaya 2026",
    description:
      "Panduan lengkap memilih jasa pembuatan website untuk UMKM — jenis website, estimasi biaya, fitur penting, dan tips agar tidak salah pilih vendor.",
    excerpt:
      "Mau punya website untuk bisnis tapi bingung mulai dari mana dan berapa biayanya? Simak panduan lengkap memilih jasa pembuatan website untuk UMKM berikut.",
    date: "2026-06-17",
    category: "Website",
    readingTime: "7 menit",
    keywords: [
      "jasa pembuatan website",
      "jasa pembuatan website UMKM",
      "biaya pembuatan website",
      "website untuk bisnis",
    ],
    content: [
      {
        type: "p",
        text: "Di era digital, website bukan lagi kemewahan — ia adalah etalase utama bisnis Anda yang buka 24 jam. Namun banyak pelaku UMKM ragu memulai karena bingung soal jenis website, biaya, dan cara memilih vendor yang tepat. Artikel ini merangkum semua yang perlu Anda ketahui sebelum memesan jasa pembuatan website.",
      },
      { type: "h2", text: "Kenapa UMKM Butuh Website?" },
      {
        type: "p",
        text: "Media sosial memang penting, tapi Anda tidak memiliki kendali penuh atasnya. Website adalah aset digital milik Anda sendiri — tampil profesional, mudah ditemukan di Google, dan membangun kepercayaan calon pelanggan. Sebuah toko dengan website yang rapi terlihat jauh lebih kredibel dibanding yang hanya mengandalkan chat WhatsApp.",
      },
      { type: "h2", text: "Jenis Website yang Umum untuk UMKM" },
      {
        type: "ul",
        items: [
          "Landing Page — satu halaman fokus untuk promosi produk atau menangkap leads.",
          "Company Profile — beberapa halaman berisi profil, layanan, dan kontak bisnis.",
          "Toko Online (E-commerce) — katalog produk dengan keranjang dan pembayaran.",
          "Web App Custom — sistem khusus sesuai alur bisnis, seperti booking atau dashboard.",
        ],
      },
      { type: "h2", text: "Estimasi Biaya Pembuatan Website" },
      {
        type: "p",
        text: "Biaya sangat bergantung pada kompleksitas. Sebagai gambaran kasar di pasar Indonesia: landing page mulai dari ratusan ribu hingga jutaan rupiah, company profile beberapa juta, sementara toko online dan web app custom bisa lebih tinggi tergantung fitur. Hindari harga yang terlalu murah tanpa kejelasan — biasanya berujung pada biaya tersembunyi atau hasil seadanya.",
      },
      { type: "h2", text: "Fitur Penting yang Wajib Ada" },
      {
        type: "ul",
        items: [
          "Responsif — tampil rapi di HP, tablet, dan desktop.",
          "Cepat — kecepatan memengaruhi peringkat Google dan kenyamanan pengguna.",
          "SEO-friendly — struktur yang mudah diindeks mesin pencari.",
          "Mudah dihubungi — tombol WhatsApp, form kontak, atau peta lokasi.",
        ],
      },
      { type: "h2", text: "Tips Memilih Jasa Pembuatan Website" },
      {
        type: "p",
        text: "Pilih vendor yang transparan soal harga dan timeline, mau mendengarkan kebutuhan Anda, serta memberikan dukungan setelah website jadi. Mintalah contoh portofolio dan pastikan Anda mendapatkan akses penuh ke domain dan hosting. Komunikasi yang jelas dari awal adalah indikator terbaik bahwa proyek akan berjalan lancar.",
      },
      {
        type: "p",
        text: "Kreativita Sinergi membantu UMKM membangun website profesional dengan harga terjangkau dan pendampingan penuh. Konsultasi awal gratis — ceritakan kebutuhan Anda dan kami bantu petakan solusinya.",
      },
    ],
  },
  {
    slug: "biaya-membuat-aplikasi-mobile-di-indonesia",
    title: "Berapa Biaya Membuat Aplikasi Mobile di Indonesia? (2026)",
    description:
      "Rincian faktor yang menentukan biaya pembuatan aplikasi mobile Android & iOS di Indonesia, plus cara menghemat tanpa mengorbankan kualitas.",
    excerpt:
      "Ingin punya aplikasi Android & iOS tapi takut mahal? Pahami faktor penentu biaya dan cara menghematnya sebelum memulai proyek aplikasi Anda.",
    date: "2026-06-17",
    category: "Aplikasi Mobile",
    readingTime: "6 menit",
    keywords: [
      "biaya membuat aplikasi",
      "jasa pembuatan aplikasi mobile",
      "biaya aplikasi Android iOS",
      "harga buat aplikasi",
    ],
    content: [
      {
        type: "p",
        text: "Pertanyaan pertama yang hampir selalu muncul saat ingin membuat aplikasi adalah: berapa biayanya? Jawabannya tidak tunggal, karena biaya aplikasi sangat bergantung pada fitur, platform, dan tingkat kerumitannya. Mari kita uraikan faktor-faktornya agar Anda bisa menyusun anggaran yang realistis.",
      },
      { type: "h2", text: "Faktor yang Menentukan Biaya Aplikasi" },
      {
        type: "ul",
        items: [
          "Jumlah & kompleksitas fitur — login, pembayaran, chat, peta, dan notifikasi menambah waktu pengerjaan.",
          "Platform — Android saja, iOS saja, atau keduanya.",
          "Desain UI/UX — desain custom membutuhkan riset dan iterasi.",
          "Integrasi sistem — koneksi ke server, payment gateway, atau API pihak ketiga.",
          "Maintenance — pembaruan dan perbaikan setelah rilis.",
        ],
      },
      { type: "h2", text: "Cara Cerdas Menghemat Biaya" },
      {
        type: "p",
        text: "Salah satu cara paling efektif menghemat adalah menggunakan teknologi cross-platform seperti Flutter. Dengan satu basis kode, aplikasi bisa berjalan di Android dan iOS sekaligus — menghemat waktu dan biaya dibanding membangun dua aplikasi terpisah. Selain itu, mulailah dari MVP (versi minimum dengan fitur inti), lalu kembangkan bertahap sesuai respons pengguna.",
      },
      { type: "h2", text: "MVP: Mulai Kecil, Tumbuh Bertahap" },
      {
        type: "p",
        text: "Daripada membangun aplikasi raksasa sekaligus, lebih bijak meluncurkan MVP dengan fitur paling penting terlebih dahulu. Anda menghemat biaya di awal, mendapat umpan balik nyata dari pengguna, dan menghindari risiko membuang dana untuk fitur yang ternyata tidak dibutuhkan.",
      },
      { type: "h2", text: "Jangan Hanya Lihat Harga Termurah" },
      {
        type: "p",
        text: "Aplikasi adalah investasi jangka panjang. Vendor termurah belum tentu paling hemat jika hasilnya bermasalah dan harus dibangun ulang. Pertimbangkan rekam jejak, kualitas komunikasi, dan dukungan pasca-rilis. Kreativita Sinergi mengembangkan aplikasi mobile dengan Flutter untuk efisiensi biaya, plus pendampingan agar aplikasi Anda terus berjalan optimal.",
      },
    ],
  },
  {
    slug: "website-vs-aplikasi-mobile-untuk-bisnis",
    title: "Website vs Aplikasi Mobile: Mana yang Tepat untuk Bisnis Anda?",
    description:
      "Bingung pilih website atau aplikasi mobile untuk bisnis? Bandingkan kelebihan, kekurangan, biaya, dan kapan sebaiknya memilih masing-masing.",
    excerpt:
      "Website dulu atau langsung aplikasi? Keputusan ini menentukan arah investasi digital Anda. Berikut panduan memilih yang paling tepat.",
    date: "2026-06-17",
    category: "Strategi Digital",
    readingTime: "5 menit",
    keywords: [
      "website vs aplikasi",
      "pilih website atau aplikasi",
      "strategi digital bisnis",
      "transformasi digital UMKM",
    ],
    content: [
      {
        type: "p",
        text: "Banyak pemilik bisnis bertanya: sebaiknya membuat website dulu atau langsung aplikasi mobile? Tidak ada jawaban yang benar untuk semua orang — pilihan terbaik bergantung pada tujuan, anggaran, dan perilaku pelanggan Anda. Mari bandingkan keduanya.",
      },
      { type: "h2", text: "Kapan Sebaiknya Pilih Website?" },
      {
        type: "ul",
        items: [
          "Anda butuh kehadiran online cepat dan terjangkau.",
          "Tujuan utamanya ditemukan di Google (SEO).",
          "Pelanggan cukup mengakses informasi atau membeli sesekali.",
          "Anggaran masih terbatas dan ingin mulai bertahap.",
        ],
      },
      { type: "h2", text: "Kapan Sebaiknya Pilih Aplikasi Mobile?" },
      {
        type: "ul",
        items: [
          "Pelanggan Anda menggunakan layanan secara rutin dan berulang.",
          "Anda butuh notifikasi push untuk menjaga keterlibatan.",
          "Ada fitur yang memanfaatkan perangkat: kamera, GPS, atau mode offline.",
          "Pengalaman pengguna yang mulus jadi keunggulan kompetitif.",
        ],
      },
      { type: "h2", text: "Bisakah Keduanya Sekaligus?" },
      {
        type: "p",
        text: "Tentu. Banyak bisnis sukses memulai dari website untuk membangun kehadiran dan SEO, lalu menambah aplikasi saat basis pelanggan tumbuh. Pendekatan bertahap ini menjaga anggaran tetap sehat sambil memastikan setiap investasi benar-benar dibutuhkan.",
      },
      { type: "h2", text: "Kesimpulan" },
      {
        type: "p",
        text: "Jika ragu, mulailah dari website — lebih cepat, lebih murah, dan langsung membantu Anda ditemukan calon pelanggan. Saat bisnis berkembang, aplikasi mobile bisa menjadi langkah berikutnya. Kreativita Sinergi siap membantu Anda menentukan strategi yang paling sesuai, mulai dari konsultasi gratis hingga eksekusi.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
