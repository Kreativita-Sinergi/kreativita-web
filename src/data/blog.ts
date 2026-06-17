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

// Penutup standar dengan soft-CTA ke Kreativita Sinergi
const cta = (text: string): Block => ({ type: "p", text });

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
      { type: "h2", text: "Tips Memilih Jasa Pembuatan Website" },
      {
        type: "p",
        text: "Pilih vendor yang transparan soal harga dan timeline, mau mendengarkan kebutuhan Anda, serta memberikan dukungan setelah website jadi. Mintalah contoh portofolio dan pastikan Anda mendapatkan akses penuh ke domain dan hosting. Komunikasi yang jelas dari awal adalah indikator terbaik bahwa proyek akan berjalan lancar.",
      },
      cta(
        "Kreativita Sinergi membantu UMKM membangun website profesional dengan harga terjangkau dan pendampingan penuh. Konsultasi awal gratis — ceritakan kebutuhan Anda dan kami bantu petakan solusinya."
      ),
    ],
  },
  {
    slug: "biaya-membuat-aplikasi-mobile-di-indonesia",
    title: "Berapa Biaya Membuat Aplikasi Mobile di Indonesia? (2026)",
    description:
      "Rincian faktor yang menentukan biaya pembuatan aplikasi mobile Android & iOS di Indonesia, plus cara menghemat tanpa mengorbankan kualitas.",
    excerpt:
      "Ingin punya aplikasi Android & iOS tapi takut mahal? Pahami faktor penentu biaya dan cara menghematnya sebelum memulai proyek aplikasi Anda.",
    date: "2026-06-15",
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
      cta(
        "Kreativita Sinergi mengembangkan aplikasi mobile dengan Flutter untuk efisiensi biaya, plus pendampingan agar aplikasi Anda terus berjalan optimal. Konsultasikan ide Anda secara gratis."
      ),
    ],
  },
  {
    slug: "website-vs-aplikasi-mobile-untuk-bisnis",
    title: "Website vs Aplikasi Mobile: Mana yang Tepat untuk Bisnis Anda?",
    description:
      "Bingung pilih website atau aplikasi mobile untuk bisnis? Bandingkan kelebihan, kekurangan, biaya, dan kapan sebaiknya memilih masing-masing.",
    excerpt:
      "Website dulu atau langsung aplikasi? Keputusan ini menentukan arah investasi digital Anda. Berikut panduan memilih yang paling tepat.",
    date: "2026-06-12",
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
      cta(
        "Jika ragu, mulailah dari website — lebih cepat, lebih murah, dan langsung membantu Anda ditemukan calon pelanggan. Kreativita Sinergi siap membantu menentukan strategi yang paling sesuai, mulai dari konsultasi gratis hingga eksekusi."
      ),
    ],
  },
  {
    slug: "cara-membuat-toko-online",
    title: "Cara Membuat Toko Online yang Laris: Panduan Langkah demi Langkah",
    description:
      "Panduan praktis membuat toko online dari nol — pilih platform, atur produk, pembayaran, hingga strategi agar toko Anda ramai pembeli.",
    excerpt:
      "Mau jualan online dengan toko sendiri, bukan cuma di marketplace? Ikuti langkah membangun toko online yang siap menerima pesanan.",
    date: "2026-06-09",
    category: "Bisnis Online",
    readingTime: "6 menit",
    keywords: [
      "cara membuat toko online",
      "bikin toko online",
      "jasa toko online",
      "website jualan online",
    ],
    content: [
      {
        type: "p",
        text: "Punya toko online sendiri memberi Anda kendali penuh atas brand, data pelanggan, dan margin keuntungan — tanpa harus bersaing harga di tengah ribuan penjual marketplace. Berikut langkah membangunnya dari awal.",
      },
      { type: "h2", text: "1. Tentukan Produk & Target Pasar" },
      {
        type: "p",
        text: "Sebelum menyentuh teknologi, pastikan Anda paham siapa pembeli ideal Anda dan masalah apa yang produk Anda selesaikan. Ini memengaruhi tampilan, copywriting, hingga metode pembayaran yang ditawarkan.",
      },
      { type: "h2", text: "2. Pilih Platform yang Tepat" },
      {
        type: "ul",
        items: [
          "Website custom — fleksibel penuh, cocok untuk brand yang ingin tampil beda.",
          "Platform siap pakai — cepat, tapi terbatas dan ada biaya bulanan.",
          "Hybrid — toko sendiri yang tetap terhubung ke marketplace & media sosial.",
        ],
      },
      { type: "h2", text: "3. Siapkan Produk, Pembayaran & Pengiriman" },
      {
        type: "p",
        text: "Unggah foto produk berkualitas, tulis deskripsi yang jujur dan menarik, lalu integrasikan payment gateway serta opsi ongkos kirim. Kemudahan checkout sangat menentukan apakah pengunjung jadi membeli atau kabur.",
      },
      { type: "h2", text: "4. Datangkan Pengunjung" },
      {
        type: "p",
        text: "Toko bagus tak berarti tanpa pengunjung. Kombinasikan SEO, media sosial, dan iklan berbayar. Pastikan website cepat dan ramah seluler karena mayoritas pembeli Indonesia berbelanja lewat HP.",
      },
      cta(
        "Kreativita Sinergi membangun toko online yang cepat, aman, dan SEO-friendly — lengkap dengan integrasi pembayaran. Konsultasi gratis untuk memulai."
      ),
    ],
  },
  {
    slug: "tips-memilih-jasa-pembuatan-aplikasi",
    title: "7 Tips Memilih Jasa Pembuatan Aplikasi agar Tidak Menyesal",
    description:
      "Panduan memilih jasa pembuatan aplikasi yang tepat — dari portofolio, komunikasi, hingga dukungan pasca-rilis. Hindari kesalahan mahal.",
    excerpt:
      "Salah pilih vendor aplikasi bisa berujung proyek gagal dan dana terbuang. Berikut 7 tips memilih jasa pembuatan aplikasi yang tepat.",
    date: "2026-06-05",
    category: "Aplikasi Mobile",
    readingTime: "5 menit",
    keywords: [
      "tips memilih jasa aplikasi",
      "jasa pembuatan aplikasi",
      "vendor aplikasi terpercaya",
      "developer aplikasi",
    ],
    content: [
      {
        type: "p",
        text: "Membuat aplikasi adalah investasi besar. Memilih vendor yang salah tidak hanya membuang uang, tapi juga waktu dan peluang bisnis. Gunakan tujuh tips berikut sebagai pegangan.",
      },
      { type: "h2", text: "Daftar Periksa Sebelum Memilih" },
      {
        type: "ul",
        items: [
          "Lihat portofolio nyata, bukan sekadar mockup.",
          "Pastikan mereka memahami tujuan bisnis Anda, bukan hanya teknis.",
          "Tanyakan teknologi yang dipakai dan alasannya.",
          "Cek kejelasan kontrak, timeline, dan rincian biaya.",
          "Pastikan ada komunikasi & update progres berkala.",
          "Tanyakan kepemilikan kode — pastikan jadi milik Anda.",
          "Pastikan ada dukungan & maintenance setelah rilis.",
        ],
      },
      { type: "h2", text: "Tanda Bahaya yang Harus Diwaspadai" },
      {
        type: "p",
        text: "Hati-hati dengan vendor yang menjanjikan harga sangat murah tanpa rincian, sulit dihubungi sejak awal, atau enggan menunjukkan portofolio. Komunikasi yang buruk di tahap penawaran biasanya berlanjut menjadi masalah selama proyek.",
      },
      cta(
        "Kreativita Sinergi mengedepankan komunikasi transparan dan dukungan pasca-rilis. Ceritakan ide aplikasi Anda dan dapatkan estimasi yang jelas, gratis."
      ),
    ],
  },
  {
    slug: "apa-itu-mvp-dan-kenapa-penting",
    title: "Apa Itu MVP dan Kenapa Penting untuk Startup & UMKM?",
    description:
      "Penjelasan MVP (Minimum Viable Product), manfaatnya untuk menghemat biaya, dan cara menentukan fitur inti produk digital Anda.",
    excerpt:
      "Sebelum membangun produk digital besar, kenali konsep MVP yang bisa menghemat biaya dan mengurangi risiko gagal.",
    date: "2026-05-30",
    category: "Strategi Digital",
    readingTime: "5 menit",
    keywords: ["apa itu MVP", "minimum viable product", "MVP startup", "validasi produk digital"],
    content: [
      {
        type: "p",
        text: "MVP atau Minimum Viable Product adalah versi paling sederhana dari produk yang sudah bisa digunakan dan memberikan nilai bagi pengguna. Alih-alih membangun semua fitur sekaligus, Anda meluncurkan inti produknya dulu untuk diuji ke pasar nyata.",
      },
      { type: "h2", text: "Kenapa MVP Penting?" },
      {
        type: "ul",
        items: [
          "Menghemat biaya — fokus dana pada fitur yang benar-benar penting.",
          "Lebih cepat ke pasar — peluang bisnis tidak menunggu lama.",
          "Validasi nyata — tahu apakah pengguna benar-benar membutuhkannya.",
          "Mengurangi risiko — hindari membangun fitur yang sia-sia.",
        ],
      },
      { type: "h2", text: "Cara Menentukan Fitur Inti" },
      {
        type: "p",
        text: "Tanyakan: tanpa fitur apa produk ini tidak ada gunanya? Itulah inti MVP. Fitur tambahan yang sifatnya 'enak kalau ada' bisa menyusul di iterasi berikutnya berdasarkan masukan pengguna.",
      },
      cta(
        "Kreativita Sinergi membantu Anda merancang MVP yang tepat sasaran — mulai dari memetakan fitur inti hingga membangunnya. Konsultasi gratis untuk memulai."
      ),
    ],
  },
  {
    slug: "panduan-seo-untuk-pemula",
    title: "Panduan SEO untuk Pemula: Cara Agar Website Muncul di Google",
    description:
      "Pelajari dasar SEO untuk pemula — riset kata kunci, SEO on-page, kecepatan, dan backlink agar website bisnis Anda muncul di halaman pertama Google.",
    excerpt:
      "Website sepi pengunjung? Mungkin belum dioptimasi untuk Google. Pelajari dasar SEO yang bisa langsung Anda terapkan.",
    date: "2026-05-26",
    category: "SEO",
    readingTime: "7 menit",
    keywords: ["panduan SEO pemula", "cara SEO website", "tips SEO", "optimasi Google"],
    content: [
      {
        type: "p",
        text: "SEO (Search Engine Optimization) adalah upaya membuat website Anda mudah ditemukan di mesin pencari seperti Google. Dengan SEO yang baik, Anda mendapat pengunjung secara gratis dan berkelanjutan — tanpa terus membayar iklan.",
      },
      { type: "h2", text: "1. Riset Kata Kunci" },
      {
        type: "p",
        text: "Mulailah dengan memahami apa yang diketik calon pelanggan saat mencari produk Anda. Targetkan kata kunci yang relevan dan realistis, terutama frasa spesifik (long-tail) yang persaingannya lebih ringan.",
      },
      { type: "h2", text: "2. Optimasi On-Page" },
      {
        type: "ul",
        items: [
          "Gunakan kata kunci di judul, heading, dan paragraf pembuka secara alami.",
          "Tulis meta title & description yang menarik untuk diklik.",
          "Gunakan URL yang bersih dan deskriptif.",
          "Tambahkan teks alternatif (alt) pada gambar.",
        ],
      },
      { type: "h2", text: "3. Kecepatan & Mobile-Friendly" },
      {
        type: "p",
        text: "Google mengutamakan website yang cepat dan nyaman di HP. Kompres gambar, gunakan hosting yang baik, dan pastikan tampilan responsif di semua perangkat.",
      },
      { type: "h2", text: "4. Konten Berkualitas & Backlink" },
      {
        type: "p",
        text: "Konten yang benar-benar membantu pembaca adalah fondasi SEO. Tambah artikel bermanfaat secara rutin, dan dapatkan tautan dari situs lain yang tepercaya untuk memperkuat otoritas domain Anda.",
      },
      cta(
        "Kreativita Sinergi membangun website yang SEO-friendly sejak fondasi dan bisa membantu strategi kontennya. Konsultasi gratis untuk mendongkrak visibilitas bisnis Anda."
      ),
    ],
  },
  {
    slug: "cara-membuat-website-cepat-dan-ringan",
    title: "Cara Membuat Website Cepat & Ringan (dan Kenapa Itu Penting)",
    description:
      "Kecepatan website memengaruhi peringkat Google dan konversi. Pelajari penyebab website lambat dan cara membuatnya cepat serta ringan.",
    excerpt:
      "Website lambat membuat pengunjung kabur dan peringkat Google turun. Ini cara membuat website Anda cepat dan ringan.",
    date: "2026-05-21",
    category: "Website",
    readingTime: "5 menit",
    keywords: ["website cepat", "optimasi kecepatan website", "website ringan", "core web vitals"],
    content: [
      {
        type: "p",
        text: "Penelitian menunjukkan pengunjung akan meninggalkan website yang butuh lebih dari beberapa detik untuk dimuat. Selain merugikan pengalaman pengguna, kecepatan juga menjadi faktor peringkat resmi Google. Mari bahas cara membuatnya kencang.",
      },
      { type: "h2", text: "Penyebab Umum Website Lambat" },
      {
        type: "ul",
        items: [
          "Gambar berukuran besar yang tidak dikompres.",
          "Terlalu banyak script & plugin yang tidak perlu.",
          "Hosting murah dengan performa rendah.",
          "Tidak menggunakan caching atau CDN.",
        ],
      },
      { type: "h2", text: "Cara Mempercepatnya" },
      {
        type: "p",
        text: "Kompres dan gunakan format gambar modern, minimalkan kode yang tidak perlu, aktifkan caching, dan gunakan hosting yang memadai. Teknologi modern seperti rendering statis (SSG) juga membuat halaman tampil hampir instan.",
      },
      cta(
        "Kreativita Sinergi membangun website dengan teknologi modern yang ringan dan cepat secara default. Konsultasikan kebutuhan Anda secara gratis."
      ),
    ],
  },
  {
    slug: "flutter-vs-react-native",
    title: "Flutter vs React Native: Mana yang Lebih Baik untuk Aplikasi Anda?",
    description:
      "Perbandingan Flutter dan React Native dari sisi performa, biaya, tampilan, dan ekosistem untuk membantu memilih teknologi aplikasi yang tepat.",
    excerpt:
      "Dua teknologi cross-platform paling populer: Flutter dan React Native. Mana yang cocok untuk proyek aplikasi Anda?",
    date: "2026-05-16",
    category: "Teknologi",
    readingTime: "6 menit",
    keywords: ["Flutter vs React Native", "teknologi aplikasi", "cross platform", "framework aplikasi mobile"],
    content: [
      {
        type: "p",
        text: "Saat membangun aplikasi mobile yang berjalan di Android dan iOS sekaligus, dua nama paling sering muncul: Flutter dan React Native. Keduanya bagus, namun punya karakter berbeda. Mari bandingkan.",
      },
      { type: "h2", text: "Flutter" },
      {
        type: "p",
        text: "Dikembangkan Google, Flutter menggambar UI-nya sendiri sehingga tampilan sangat konsisten di semua perangkat dan performanya mulus. Cocok untuk aplikasi yang mengutamakan desain custom dan animasi halus.",
      },
      { type: "h2", text: "React Native" },
      {
        type: "p",
        text: "Dikembangkan Meta, React Native memakai komponen native dan populer di kalangan tim yang sudah menguasai ekosistem JavaScript/React. Ekosistemnya matang dengan banyak pustaka pihak ketiga.",
      },
      { type: "h2", text: "Mana yang Sebaiknya Dipilih?" },
      {
        type: "p",
        text: "Tidak ada pemenang mutlak — pilihan bergantung pada kebutuhan, tim, dan ekosistem yang sudah dimiliki. Untuk banyak proyek bisnis baru, Flutter sering jadi pilihan karena konsistensi tampilan dan efisiensi pengembangannya.",
      },
      cta(
        "Kreativita Sinergi berpengalaman membangun aplikasi dengan Flutter untuk hasil yang konsisten dan hemat biaya. Diskusikan kebutuhan teknologi Anda secara gratis."
      ),
    ],
  },
  {
    slug: "estimasi-waktu-pembuatan-website",
    title: "Berapa Lama Waktu Pembuatan Website? Ini Rincian Tahapannya",
    description:
      "Estimasi waktu pembuatan website berdasarkan jenisnya, plus tahapan pengerjaan dari perencanaan hingga peluncuran.",
    excerpt:
      "Sudah butuh website kapan jadinya? Pahami tahapan dan estimasi waktu pembuatan website agar ekspektasi Anda realistis.",
    date: "2026-05-12",
    category: "Website",
    readingTime: "5 menit",
    keywords: ["lama pembuatan website", "tahapan pembuatan website", "proses bikin website", "timeline website"],
    content: [
      {
        type: "p",
        text: "Salah satu pertanyaan tersering setelah soal biaya adalah: berapa lama website saya jadi? Jawabannya bergantung pada kompleksitas, tapi memahami tahapannya membantu Anda menyusun ekspektasi yang realistis.",
      },
      { type: "h2", text: "Tahapan Pengerjaan Website" },
      {
        type: "ul",
        items: [
          "Perencanaan & pengumpulan kebutuhan — menentukan tujuan dan struktur.",
          "Desain — wireframe hingga tampilan visual final.",
          "Pengembangan — mengubah desain menjadi website fungsional.",
          "Pengisian konten — teks, gambar, dan produk.",
          "Uji coba & peluncuran — pengecekan akhir lalu go-live.",
        ],
      },
      { type: "h2", text: "Estimasi Berdasarkan Jenis" },
      {
        type: "p",
        text: "Sebagai gambaran umum, landing page bisa selesai dalam hitungan hari hingga satu-dua minggu, company profile beberapa minggu, sementara toko online atau sistem custom bisa lebih lama tergantung fitur. Kesiapan konten dari klien sering menjadi faktor penentu cepat-lambatnya proyek.",
      },
      cta(
        "Kreativita Sinergi memberi timeline yang jelas sejak awal proyek. Konsultasi gratis untuk mengetahui estimasi waktu website Anda."
      ),
    ],
  },
  {
    slug: "fitur-wajib-aplikasi-kasir",
    title: "10 Fitur Wajib Aplikasi Kasir (POS) untuk UMKM Modern",
    description:
      "Daftar fitur penting aplikasi kasir / POS yang wajib dimiliki UMKM — dari manajemen stok, laporan, hingga mode offline.",
    excerpt:
      "Mau pilih aplikasi kasir untuk usaha Anda? Pastikan fitur-fitur penting berikut ada agar operasional makin mudah.",
    date: "2026-05-07",
    category: "Bisnis Online",
    readingTime: "6 menit",
    keywords: ["fitur aplikasi kasir", "aplikasi POS UMKM", "software kasir", "aplikasi kasir terbaik"],
    content: [
      {
        type: "p",
        text: "Aplikasi kasir yang baik bukan sekadar mencatat transaksi, tapi membantu Anda memahami dan mengembangkan bisnis. Berikut fitur-fitur penting yang sebaiknya ada sebelum Anda memilih.",
      },
      { type: "h2", text: "Fitur yang Wajib Ada" },
      {
        type: "ul",
        items: [
          "Pencatatan transaksi cepat dengan tampilan yang sederhana.",
          "Manajemen produk, kategori, dan varian.",
          "Manajemen stok & inventori otomatis.",
          "Laporan penjualan dan keuangan real-time.",
          "Manajemen shift kasir & rekap kas.",
          "Cetak struk (printer Bluetooth/USB).",
          "Multi-metode pembayaran termasuk QRIS.",
          "Dukungan multi-outlet dari satu akun.",
          "Hak akses berbasis peran (pemilik, kasir).",
          "Mode offline dengan sinkronisasi otomatis.",
        ],
      },
      { type: "h2", text: "Kenapa Mode Offline Penting?" },
      {
        type: "p",
        text: "Koneksi internet di lapangan tidak selalu stabil. Aplikasi kasir dengan mode offline memastikan Anda tetap bisa berjualan, lalu otomatis menyinkronkan data saat koneksi kembali — tanpa transaksi yang hilang.",
      },
      cta(
        "Loka Kasir — aplikasi POS buatan Kreativita Sinergi — sudah dilengkapi fitur-fitur ini, termasuk mode offline & multi-outlet. Butuh sistem kasir khusus? Konsultasikan kebutuhan Anda secara gratis."
      ),
    ],
  },
  {
    slug: "cara-memilih-nama-domain",
    title: "Cara Memilih Nama Domain yang Tepat untuk Bisnis",
    description:
      "Tips memilih nama domain yang mudah diingat, profesional, dan baik untuk branding serta SEO bisnis Anda.",
    excerpt:
      "Nama domain adalah alamat digital bisnis Anda. Pilih yang tepat dengan panduan praktis berikut.",
    date: "2026-05-02",
    category: "Website",
    readingTime: "4 menit",
    keywords: ["cara memilih nama domain", "tips nama domain", "domain bisnis", "beli domain"],
    content: [
      {
        type: "p",
        text: "Nama domain adalah kesan pertama bisnis Anda di dunia digital. Domain yang tepat memudahkan orang mengingat, mengetik, dan mempercayai brand Anda. Berikut hal-hal yang perlu dipertimbangkan.",
      },
      { type: "h2", text: "Prinsip Memilih Domain" },
      {
        type: "ul",
        items: [
          "Singkat, mudah diucapkan, dan mudah diingat.",
          "Hindari angka dan tanda hubung yang membingungkan.",
          "Sebisa mungkin sesuai nama brand Anda.",
          "Pilih ekstensi yang tepat (.com untuk umum, .id untuk lokal).",
          "Pastikan tidak melanggar merek dagang pihak lain.",
        ],
      },
      { type: "h2", text: "Domain dan SEO" },
      {
        type: "p",
        text: "Meski kata kunci dalam domain tidak lagi sepenting dulu, domain yang relevan dan konsisten dengan brand tetap membantu membangun kepercayaan dan pengenalan. Yang terpenting, jaga satu domain utama secara konsisten.",
      },
      cta(
        "Kreativita Sinergi membantu mengurus domain, hosting, hingga peluncuran website Anda. Konsultasi gratis untuk memulai kehadiran online."
      ),
    ],
  },
  {
    slug: "pentingnya-ui-ux-untuk-konversi",
    title: "Kenapa UI/UX Menentukan Konversi Penjualan Anda",
    description:
      "Pahami peran UI/UX dalam meningkatkan konversi — bagaimana desain yang baik membuat pengunjung betah dan akhirnya membeli.",
    excerpt:
      "Desain bukan sekadar soal cantik. UI/UX yang baik bisa menentukan apakah pengunjung jadi membeli atau pergi.",
    date: "2026-04-27",
    category: "Desain",
    readingTime: "5 menit",
    keywords: ["pentingnya UI UX", "UX konversi", "desain aplikasi", "user experience"],
    content: [
      {
        type: "p",
        text: "Banyak bisnis fokus mendatangkan pengunjung, tapi lupa bahwa pengalaman saat berada di website atau aplikasi sama pentingnya. Di sinilah UI (tampilan) dan UX (pengalaman) berperan besar menentukan apakah pengunjung mengambil tindakan.",
      },
      { type: "h2", text: "UI vs UX" },
      {
        type: "p",
        text: "UI adalah bagaimana tampilannya — warna, tata letak, tipografi. UX adalah bagaimana rasanya digunakan — apakah alurnya jelas, mudah, dan tanpa hambatan. Keduanya harus berjalan beriringan.",
      },
      { type: "h2", text: "Dampak Desain pada Konversi" },
      {
        type: "ul",
        items: [
          "Alur yang jelas memandu pengguna menuju aksi (beli, daftar, hubungi).",
          "Navigasi sederhana mengurangi kebingungan dan rasa frustrasi.",
          "Tampilan profesional membangun kepercayaan.",
          "Tombol aksi yang jelas meningkatkan jumlah klik.",
        ],
      },
      cta(
        "Kreativita Sinergi merancang UI/UX yang bukan hanya indah, tapi terbukti mendorong konversi. Konsultasi gratis untuk produk digital Anda."
      ),
    ],
  },
  {
    slug: "landing-page-yang-efektif",
    title: "Cara Membuat Landing Page yang Efektif dan Banyak Menghasilkan Leads",
    description:
      "Anatomi landing page yang efektif — headline, penawaran, bukti sosial, dan call-to-action yang mendorong pengunjung mengambil tindakan.",
    excerpt:
      "Landing page yang tepat bisa mengubah pengunjung menjadi pelanggan. Pelajari elemen-elemen kuncinya.",
    date: "2026-04-22",
    category: "Bisnis Online",
    readingTime: "5 menit",
    keywords: ["landing page efektif", "cara membuat landing page", "landing page konversi", "jasa landing page"],
    content: [
      {
        type: "p",
        text: "Landing page adalah halaman dengan satu tujuan: membuat pengunjung mengambil satu tindakan spesifik. Karena fokusnya tunggal, setiap elemen harus mendukung tujuan tersebut. Berikut anatominya.",
      },
      { type: "h2", text: "Elemen Wajib Landing Page" },
      {
        type: "ul",
        items: [
          "Headline yang jelas menyampaikan manfaat utama.",
          "Sub-headline yang memperkuat dan menjelaskan.",
          "Penawaran yang spesifik dan menarik.",
          "Bukti sosial — testimoni, jumlah pengguna, atau logo klien.",
          "Call-to-action yang menonjol dan tidak ambigu.",
        ],
      },
      { type: "h2", text: "Hindari Kesalahan Umum" },
      {
        type: "p",
        text: "Terlalu banyak pilihan justru membingungkan. Hilangkan navigasi yang tidak perlu, hindari teks bertele-tele, dan pastikan halaman cepat dimuat. Fokuskan perhatian pengunjung pada satu aksi.",
      },
      cta(
        "Kreativita Sinergi membuat landing page yang fokus pada konversi — cepat, jelas, dan siap mendatangkan leads. Konsultasi gratis untuk kampanye Anda."
      ),
    ],
  },
  {
    slug: "transformasi-digital-umkm",
    title: "Transformasi Digital UMKM: Mulai dari Mana?",
    description:
      "Panduan langkah awal transformasi digital untuk UMKM — dari kehadiran online, digitalisasi operasional, hingga pemanfaatan data.",
    excerpt:
      "Transformasi digital terdengar rumit, padahal bisa dimulai dari langkah-langkah sederhana. Ini panduannya untuk UMKM.",
    date: "2026-04-17",
    category: "Strategi Digital",
    readingTime: "6 menit",
    keywords: ["transformasi digital UMKM", "digitalisasi UMKM", "go digital", "teknologi untuk UMKM"],
    content: [
      {
        type: "p",
        text: "Transformasi digital bukan berarti langsung membeli teknologi mahal. Bagi UMKM, ini soal menggunakan alat digital secara bertahap untuk melayani pelanggan lebih baik dan bekerja lebih efisien. Mari mulai dari yang mendasar.",
      },
      { type: "h2", text: "Langkah 1: Bangun Kehadiran Online" },
      {
        type: "p",
        text: "Mulailah dengan website dan profil media sosial yang rapi. Ini membuat bisnis Anda mudah ditemukan dan terlihat kredibel di mata calon pelanggan.",
      },
      { type: "h2", text: "Langkah 2: Digitalisasi Operasional" },
      {
        type: "p",
        text: "Gunakan alat digital untuk pencatatan transaksi, stok, dan keuangan — misalnya aplikasi kasir. Operasional yang tercatat rapi memudahkan pengambilan keputusan.",
      },
      { type: "h2", text: "Langkah 3: Manfaatkan Data" },
      {
        type: "p",
        text: "Setelah operasional digital, Anda punya data: produk terlaris, jam ramai, pelanggan setia. Gunakan data ini untuk menyusun strategi promosi dan stok yang lebih tepat.",
      },
      cta(
        "Kreativita Sinergi mendampingi UMKM bertransformasi digital secara bertahap dan terjangkau — dari website hingga sistem operasional. Konsultasi gratis untuk memetakan langkah Anda."
      ),
    ],
  },
  {
    slug: "keamanan-website-yang-perlu-diperhatikan",
    title: "Keamanan Website: Hal-Hal Penting yang Sering Diabaikan",
    description:
      "Panduan dasar keamanan website untuk bisnis — SSL, backup, update, dan pencegahan serangan agar data dan reputasi Anda terlindungi.",
    excerpt:
      "Website yang diretas bisa merusak reputasi dan kepercayaan pelanggan. Kenali aspek keamanan yang wajib diperhatikan.",
    date: "2026-04-11",
    category: "Teknologi",
    readingTime: "5 menit",
    keywords: ["keamanan website", "website aman", "SSL website", "cara mengamankan website"],
    content: [
      {
        type: "p",
        text: "Keamanan website sering baru dipikirkan setelah terjadi masalah. Padahal pencegahan jauh lebih murah daripada memperbaiki kerusakan reputasi akibat data bocor atau situs diretas. Berikut hal-hal mendasar yang wajib diperhatikan.",
      },
      { type: "h2", text: "Pondasi Keamanan Website" },
      {
        type: "ul",
        items: [
          "Sertifikat SSL (HTTPS) untuk mengenkripsi data.",
          "Backup berkala agar data bisa dipulihkan.",
          "Update rutin sistem dan komponen.",
          "Kata sandi kuat & autentikasi yang aman.",
          "Pembatasan hak akses sesuai peran pengguna.",
        ],
      },
      { type: "h2", text: "Pemantauan Berkelanjutan" },
      {
        type: "p",
        text: "Keamanan bukan pekerjaan sekali jadi. Pemantauan rutin terhadap aktivitas mencurigakan dan penerapan patch keamanan tepat waktu menjaga website tetap aman dalam jangka panjang.",
      },
      cta(
        "Layanan maintenance Kreativita Sinergi mencakup SSL, backup, update keamanan, dan pemantauan. Konsultasi gratis untuk menjaga website Anda tetap aman."
      ),
    ],
  },
  {
    slug: "progressive-web-app-pwa-untuk-bisnis",
    title: "Progressive Web App (PWA): Alternatif Hemat Sebelum Bikin Aplikasi",
    description:
      "Apa itu PWA, kelebihannya dibanding aplikasi native, dan kapan PWA jadi pilihan tepat dan hemat untuk bisnis Anda.",
    excerpt:
      "Belum siap dengan biaya aplikasi native? PWA bisa jadi jalan tengah yang hemat dan tetap terasa seperti aplikasi.",
    date: "2026-04-05",
    category: "Teknologi",
    readingTime: "5 menit",
    keywords: ["progressive web app", "apa itu PWA", "PWA untuk bisnis", "alternatif aplikasi mobile"],
    content: [
      {
        type: "p",
        text: "PWA atau Progressive Web App adalah website yang berperilaku seperti aplikasi: bisa dipasang di layar utama HP, bekerja meski koneksi terbatas, dan mengirim notifikasi. Bagi banyak bisnis, PWA jadi jalan tengah yang menarik.",
      },
      { type: "h2", text: "Kelebihan PWA" },
      {
        type: "ul",
        items: [
          "Lebih hemat dibanding membangun aplikasi native terpisah.",
          "Bisa diakses lewat browser tanpa unduh dari app store.",
          "Tetap berfungsi dalam kondisi koneksi buruk.",
          "Satu basis untuk semua perangkat.",
        ],
      },
      { type: "h2", text: "Kapan Memilih PWA?" },
      {
        type: "p",
        text: "PWA cocok jika Anda ingin pengalaman seperti aplikasi tanpa biaya dan kerumitan app store, atau sebagai langkah awal sebelum berinvestasi di aplikasi native penuh. Namun untuk fitur perangkat yang sangat dalam, aplikasi native tetap unggul.",
      },
      cta(
        "Kreativita Sinergi bisa membantu menentukan apakah PWA atau aplikasi native lebih tepat untuk Anda — sesuai kebutuhan dan anggaran. Konsultasi gratis."
      ),
    ],
  },
  {
    slug: "aplikasi-no-code-vs-custom",
    title: "Aplikasi No-Code vs Custom: Mana yang Cocok untuk Bisnis Anda?",
    description:
      "Perbandingan membangun aplikasi dengan platform no-code versus pengembangan custom — dari biaya, fleksibilitas, hingga skalabilitas.",
    excerpt:
      "Platform no-code menjanjikan cepat dan murah. Tapi apakah selalu jadi pilihan terbaik dibanding aplikasi custom?",
    date: "2026-03-30",
    category: "Teknologi",
    readingTime: "5 menit",
    keywords: ["no code vs custom", "aplikasi no code", "aplikasi custom", "bikin aplikasi tanpa coding"],
    content: [
      {
        type: "p",
        text: "Platform no-code memungkinkan Anda membangun aplikasi sederhana tanpa menulis kode. Cepat dan murah di awal, tapi tidak selalu cocok untuk setiap kebutuhan. Mari bandingkan dengan pengembangan custom.",
      },
      { type: "h2", text: "Kelebihan & Keterbatasan No-Code" },
      {
        type: "p",
        text: "No-code unggul untuk prototipe atau aplikasi internal sederhana — cepat jadi dan biaya awal rendah. Namun Anda terbatas pada fitur platform, sulit dikustomisasi mendalam, dan sering ada biaya langganan yang terus berjalan.",
      },
      { type: "h2", text: "Kapan Pilih Custom?" },
      {
        type: "ul",
        items: [
          "Saat alur bisnis Anda unik dan butuh fleksibilitas penuh.",
          "Saat skalabilitas jangka panjang penting.",
          "Saat butuh integrasi mendalam dengan sistem lain.",
          "Saat Anda ingin sepenuhnya memiliki produk dan datanya.",
        ],
      },
      cta(
        "Kreativita Sinergi membantu Anda memilih pendekatan yang paling masuk akal — dan membangun aplikasi custom saat itu pilihan terbaik. Konsultasi gratis untuk mendiskusikannya."
      ),
    ],
  },
  {
    slug: "integrasi-payment-gateway-indonesia",
    title: "Panduan Integrasi Payment Gateway untuk Website & Aplikasi",
    description:
      "Apa itu payment gateway, cara kerjanya, dan hal yang perlu diperhatikan saat mengintegrasikannya ke website atau aplikasi bisnis Anda.",
    excerpt:
      "Ingin terima pembayaran online otomatis di website atau aplikasi? Pahami dasar payment gateway dan integrasinya.",
    date: "2026-03-24",
    category: "Bisnis Online",
    readingTime: "5 menit",
    keywords: ["payment gateway", "integrasi pembayaran", "terima pembayaran online", "QRIS website"],
    content: [
      {
        type: "p",
        text: "Payment gateway adalah jembatan yang memungkinkan website atau aplikasi Anda menerima pembayaran secara otomatis — dari transfer bank, e-wallet, kartu, hingga QRIS. Integrasi yang baik membuat proses bayar mulus dan tepercaya.",
      },
      { type: "h2", text: "Cara Kerja Singkat" },
      {
        type: "p",
        text: "Saat pelanggan membayar, payment gateway memproses transaksi dengan aman, lalu mengirim konfirmasi ke sistem Anda sehingga pesanan bisa langsung diproses. Semua terjadi dalam hitungan detik.",
      },
      { type: "h2", text: "Yang Perlu Diperhatikan" },
      {
        type: "ul",
        items: [
          "Metode pembayaran yang didukung sesuai pelanggan Anda.",
          "Biaya transaksi per metode.",
          "Keamanan dan keandalan penyedia.",
          "Kemudahan rekonsiliasi dan pelaporan.",
        ],
      },
      cta(
        "Kreativita Sinergi berpengalaman mengintegrasikan berbagai metode pembayaran ke website dan aplikasi. Konsultasi gratis untuk kebutuhan transaksi online Anda."
      ),
    ],
  },
  {
    slug: "tips-maintenance-website",
    title: "Tips Maintenance Website agar Selalu Optimal dan Aman",
    description:
      "Kenapa website butuh maintenance rutin dan apa saja yang perlu dilakukan — dari update, backup, keamanan, hingga pemantauan performa.",
    excerpt:
      "Website bukan proyek sekali jadi. Tanpa perawatan, ia bisa lambat, rentan, dan ketinggalan. Ini tips merawatnya.",
    date: "2026-03-18",
    category: "Website",
    readingTime: "4 menit",
    keywords: ["maintenance website", "perawatan website", "tips merawat website", "jasa maintenance"],
    content: [
      {
        type: "p",
        text: "Banyak yang mengira pekerjaan selesai begitu website diluncurkan. Padahal, seperti kendaraan, website butuh perawatan rutin agar tetap cepat, aman, dan relevan. Berikut yang perlu dilakukan secara berkala.",
      },
      { type: "h2", text: "Checklist Maintenance Rutin" },
      {
        type: "ul",
        items: [
          "Update sistem, plugin, dan komponen keamanan.",
          "Backup data secara berkala.",
          "Pantau kecepatan dan perbaiki yang melambat.",
          "Cek tautan rusak dan perbarui konten lama.",
          "Pantau uptime agar website selalu dapat diakses.",
        ],
      },
      { type: "h2", text: "Kenapa Tidak Boleh Diabaikan" },
      {
        type: "p",
        text: "Website yang dibiarkan tanpa perawatan rentan diretas, lambat, dan kehilangan peringkat di Google. Perawatan rutin jauh lebih murah dan tenang daripada memperbaiki masalah besar yang sudah terlanjur terjadi.",
      },
      cta(
        "Kreativita Sinergi menyediakan layanan maintenance agar website Anda selalu optimal dan aman, sementara Anda fokus ke bisnis. Konsultasi gratis untuk paket perawatan."
      ),
    ],
  },
  {
    slug: "cara-meningkatkan-penjualan-online",
    title: "10 Cara Meningkatkan Penjualan Online untuk Bisnis Kecil",
    description:
      "Strategi praktis meningkatkan penjualan online — dari optimasi toko, copywriting, hingga retargeting, yang bisa langsung diterapkan bisnis kecil.",
    excerpt:
      "Trafik ada tapi penjualan seret? Terapkan 10 cara berikut untuk mengubah pengunjung menjadi pembeli.",
    date: "2026-03-12",
    category: "Bisnis Online",
    readingTime: "6 menit",
    keywords: ["cara meningkatkan penjualan online", "tips jualan online", "tingkatkan omzet", "konversi penjualan"],
    content: [
      {
        type: "p",
        text: "Mendatangkan pengunjung hanyalah setengah perjuangan. Tantangan sebenarnya adalah mengubah mereka menjadi pembeli. Berikut taktik yang terbukti membantu bisnis kecil meningkatkan penjualan online.",
      },
      { type: "h2", text: "Taktik yang Bisa Langsung Diterapkan" },
      {
        type: "ul",
        items: [
          "Permudah proses checkout — kurangi langkah dan kolom yang tidak perlu.",
          "Tampilkan bukti sosial seperti testimoni dan ulasan.",
          "Gunakan foto produk berkualitas dan deskripsi yang jelas.",
          "Tawarkan beberapa metode pembayaran populer.",
          "Buat penawaran terbatas untuk mendorong keputusan cepat.",
          "Manfaatkan WhatsApp untuk respons cepat dan personal.",
          "Lakukan retargeting ke pengunjung yang belum membeli.",
        ],
      },
      { type: "h2", text: "Jangan Lupakan Pengalaman di HP" },
      {
        type: "p",
        text: "Mayoritas pembeli di Indonesia berbelanja lewat ponsel. Pastikan toko Anda cepat, mudah dinavigasi, dan tombol belinya jelas di layar kecil. Pengalaman mobile yang buruk langsung menggerus penjualan.",
      },
      cta(
        "Kreativita Sinergi membangun toko online yang dioptimalkan untuk konversi dan nyaman di HP. Konsultasi gratis untuk mendongkrak penjualan Anda."
      ),
    ],
  },
  {
    slug: "content-marketing-untuk-umkm",
    title: "Content Marketing untuk UMKM: Cara Menarik Pelanggan Tanpa Boros Iklan",
    description:
      "Pelajari dasar content marketing untuk UMKM — jenis konten, cara konsisten, dan bagaimana konten mendatangkan pelanggan secara organik.",
    excerpt:
      "Tidak punya budget iklan besar? Content marketing bisa mendatangkan pelanggan secara organik dan berkelanjutan.",
    date: "2026-03-06",
    category: "Strategi Digital",
    readingTime: "5 menit",
    keywords: ["content marketing UMKM", "pemasaran konten", "strategi konten", "marketing organik"],
    content: [
      {
        type: "p",
        text: "Content marketing adalah strategi menarik pelanggan dengan memberi konten yang bermanfaat — bukan sekadar menjual. Bagi UMKM dengan anggaran terbatas, ini cara cerdas membangun kepercayaan dan mendatangkan pembeli tanpa terus membayar iklan.",
      },
      { type: "h2", text: "Jenis Konten yang Efektif" },
      {
        type: "ul",
        items: [
          "Artikel blog yang menjawab pertanyaan calon pelanggan.",
          "Tips dan panduan terkait produk Anda.",
          "Cerita di balik layar dan kisah pelanggan.",
          "Video singkat demonstrasi produk.",
        ],
      },
      { type: "h2", text: "Kunci Suksesnya: Konsistensi" },
      {
        type: "p",
        text: "Satu artikel viral jarang terjadi. Yang berhasil adalah konsistensi — terbitkan konten bermanfaat secara teratur. Seiring waktu, konten lama tetap mendatangkan pengunjung lewat pencarian Google, menjadi aset jangka panjang.",
      },
      cta(
        "Kreativita Sinergi membangun website dengan blog yang SEO-friendly sebagai fondasi content marketing Anda. Konsultasi gratis untuk memulai."
      ),
    ],
  },
  {
    slug: "google-bisnisku-untuk-umkm",
    title: "Google Bisnisku: Cara UMKM Muncul di Google Maps & Pencarian Lokal",
    description:
      "Panduan memanfaatkan Google Business Profile (Google Bisnisku) agar UMKM Anda mudah ditemukan di Google Maps dan pencarian lokal.",
    excerpt:
      "Ingin usaha Anda muncul saat orang mencari 'dekat saya' di Google? Optimalkan Google Bisnisku dengan panduan ini.",
    date: "2026-02-28",
    category: "SEO",
    readingTime: "5 menit",
    keywords: ["Google Bisnisku", "Google Business Profile", "SEO lokal", "muncul di Google Maps"],
    content: [
      {
        type: "p",
        text: "Google Business Profile (dulu Google Bisnisku) adalah salah satu alat paling ampuh — dan gratis — untuk UMKM. Dengan profil yang dioptimalkan, bisnis Anda bisa muncul di Google Maps dan pencarian lokal saat orang mencari layanan di sekitar mereka.",
      },
      { type: "h2", text: "Langkah Optimasi" },
      {
        type: "ul",
        items: [
          "Lengkapi semua informasi: nama, alamat, jam buka, kategori.",
          "Unggah foto berkualitas dari tempat dan produk.",
          "Kumpulkan dan balas ulasan pelanggan.",
          "Posting update dan promo secara berkala.",
          "Pastikan informasi konsisten dengan website Anda.",
        ],
      },
      { type: "h2", text: "Kenapa Ini Penting" },
      {
        type: "p",
        text: "Banyak keputusan pembelian dimulai dari pencarian lokal. Profil yang lengkap dengan ulasan positif membuat bisnis Anda terlihat kredibel dan dipilih dibanding pesaing. Ini terutama vital untuk usaha dengan lokasi fisik.",
      },
      cta(
        "Kreativita Sinergi membantu menyelaraskan website dengan profil Google Anda untuk visibilitas lokal maksimal. Konsultasi gratis untuk memulai."
      ),
    ],
  },
  {
    slug: "web-developer-vs-web-designer",
    title: "Perbedaan Web Developer dan Web Designer (dan Mana yang Anda Butuh)",
    description:
      "Penjelasan perbedaan web developer dan web designer, peran masing-masing, dan kapan bisnis Anda membutuhkan keduanya.",
    excerpt:
      "Sering tertukar, padahal perannya berbeda. Pahami beda web developer dan web designer agar tepat memilih.",
    date: "2026-02-21",
    category: "Teknologi",
    readingTime: "4 menit",
    keywords: ["web developer vs designer", "perbedaan developer designer", "peran web designer", "web developer"],
    content: [
      {
        type: "p",
        text: "Istilah web designer dan web developer sering dianggap sama, padahal keduanya punya peran berbeda yang saling melengkapi. Memahami bedanya membantu Anda berkomunikasi lebih jelas saat memesan jasa pembuatan website.",
      },
      { type: "h2", text: "Web Designer" },
      {
        type: "p",
        text: "Web designer fokus pada tampilan dan pengalaman: tata letak, warna, tipografi, dan alur penggunaan. Mereka memastikan website terlihat menarik dan mudah digunakan.",
      },
      { type: "h2", text: "Web Developer" },
      {
        type: "p",
        text: "Web developer mengubah desain menjadi website yang berfungsi — menulis kode, mengatur server, dan memastikan semuanya berjalan cepat dan andal. Ada developer front-end (tampilan) dan back-end (sistem di balik layar).",
      },
      { type: "h2", text: "Mana yang Anda Butuhkan?" },
      {
        type: "p",
        text: "Untuk website yang lengkap, Anda butuh keduanya. Itulah kenapa bekerja dengan tim yang memiliki desainer dan developer sekaligus membuat proyek lebih mulus dan hasilnya selaras.",
      },
      cta(
        "Kreativita Sinergi punya tim desainer dan developer dalam satu atap, sehingga desain dan teknis berjalan selaras. Konsultasi gratis untuk proyek Anda."
      ),
    ],
  },
  {
    slug: "tips-foto-produk-jualan-online",
    title: "Tips Foto Produk untuk Jualan Online yang Bikin Pembeli Tertarik",
    description:
      "Panduan praktis memotret produk untuk jualan online dengan alat sederhana — pencahayaan, latar, dan sudut yang menjual.",
    excerpt:
      "Foto produk menentukan kesan pertama pembeli. Dengan HP dan tips berikut, hasilnya bisa terlihat profesional.",
    date: "2026-02-14",
    category: "Bisnis Online",
    readingTime: "4 menit",
    keywords: ["tips foto produk", "foto produk jualan online", "fotografi produk", "foto produk dengan HP"],
    content: [
      {
        type: "p",
        text: "Di belanja online, pembeli tidak bisa menyentuh produk — mereka menilai dari foto. Foto yang baik membangun kepercayaan dan keinginan membeli. Kabar baiknya, Anda tidak perlu kamera mahal untuk menghasilkan foto produk yang menjual.",
      },
      { type: "h2", text: "Prinsip Dasar Foto Produk" },
      {
        type: "ul",
        items: [
          "Manfaatkan cahaya alami dari jendela — hindari lampu yang membuat bayangan keras.",
          "Gunakan latar polos dan bersih agar produk menonjol.",
          "Ambil beberapa sudut, termasuk detail penting.",
          "Tunjukkan produk saat digunakan agar pembeli membayangkannya.",
          "Jaga konsistensi gaya foto di seluruh toko.",
        ],
      },
      { type: "h2", text: "Sentuhan Akhir" },
      {
        type: "p",
        text: "Edit seperlunya — perbaiki kecerahan dan potong rapi, tapi jangan berlebihan hingga produk terlihat berbeda dari aslinya. Kejujuran foto mengurangi komplain dan retur.",
      },
      cta(
        "Foto bagus akan makin maksimal di toko online yang rapi dan cepat. Kreativita Sinergi siap membangunnya untuk Anda — konsultasi gratis."
      ),
    ],
  },
  {
    slug: "apa-itu-hosting-dan-domain",
    title: "Apa Itu Hosting dan Domain? Penjelasan Sederhana untuk Pemula",
    description:
      "Penjelasan mudah tentang hosting dan domain, perbedaannya, cara kerjanya, dan tips memilih agar website Anda andal.",
    excerpt:
      "Baru mau punya website tapi bingung istilah hosting dan domain? Ini penjelasan paling sederhananya.",
    date: "2026-02-07",
    category: "Website",
    readingTime: "4 menit",
    keywords: ["apa itu hosting", "apa itu domain", "perbedaan hosting dan domain", "hosting domain pemula"],
    content: [
      {
        type: "p",
        text: "Dua istilah ini selalu muncul saat membuat website: hosting dan domain. Keduanya berbeda tapi saling melengkapi. Mari pahami dengan analogi sederhana.",
      },
      { type: "h2", text: "Domain = Alamat" },
      {
        type: "p",
        text: "Domain adalah alamat website Anda, seperti namabisnis.com. Inilah yang diketik orang untuk mengunjungi situs Anda — ibarat alamat rumah yang memudahkan orang menemukan lokasi.",
      },
      { type: "h2", text: "Hosting = Tanah & Bangunan" },
      {
        type: "p",
        text: "Hosting adalah tempat semua file website Anda disimpan dan disajikan ke pengunjung. Tanpa hosting, tidak ada 'bangunan' di alamat tersebut. Kualitas hosting menentukan kecepatan dan keandalan website.",
      },
      { type: "h2", text: "Tips Memilih" },
      {
        type: "p",
        text: "Pilih penyedia hosting dengan performa baik dan dukungan responsif, serta domain yang singkat dan mudah diingat. Untuk pemula, mengandalkan vendor yang sekalian mengurus keduanya membuat semuanya lebih praktis.",
      },
      cta(
        "Kreativita Sinergi mengurus domain, hosting, hingga website jadi dan online — Anda tinggal terima beres. Konsultasi gratis untuk memulai."
      ),
    ],
  },
  {
    slug: "cara-membuat-company-profile-online",
    title: "Cara Membuat Company Profile Online yang Profesional",
    description:
      "Panduan menyusun company profile online yang meyakinkan — struktur halaman, isi penting, dan tips agar bisnis terlihat kredibel.",
    excerpt:
      "Company profile online adalah 'kartu nama digital' bisnis Anda. Begini cara membuatnya tampil profesional dan meyakinkan.",
    date: "2026-01-31",
    category: "Website",
    readingTime: "5 menit",
    keywords: ["company profile online", "website company profile", "cara membuat company profile", "profil perusahaan"],
    content: [
      {
        type: "p",
        text: "Company profile online adalah cara modern memperkenalkan bisnis Anda — menggantikan brosur cetak dengan sesuatu yang selalu up-to-date dan mudah dibagikan. Website company profile yang baik membangun kredibilitas sejak kunjungan pertama.",
      },
      { type: "h2", text: "Halaman & Isi yang Penting" },
      {
        type: "ul",
        items: [
          "Beranda — ringkasan singkat siapa Anda dan apa yang ditawarkan.",
          "Tentang Kami — cerita, visi, dan nilai bisnis.",
          "Layanan/Produk — penjelasan jelas dengan manfaatnya.",
          "Portofolio atau klien — bukti pengalaman.",
          "Kontak — cara mudah menghubungi Anda.",
        ],
      },
      { type: "h2", text: "Tips agar Meyakinkan" },
      {
        type: "p",
        text: "Gunakan bahasa yang jelas dan fokus pada manfaat bagi pelanggan, bukan sekadar daftar fitur. Lengkapi dengan desain rapi, foto berkualitas, dan ajakan menghubungi yang jelas di setiap halaman.",
      },
      cta(
        "Kreativita Sinergi membuat company profile online yang profesional dan SEO-friendly. Konsultasi gratis untuk menampilkan bisnis Anda lebih meyakinkan."
      ),
    ],
  },
  {
    slug: "chatbot-whatsapp-untuk-bisnis",
    title: "Chatbot WhatsApp untuk Bisnis: Layani Pelanggan 24 Jam Otomatis",
    description:
      "Manfaat dan cara kerja chatbot WhatsApp untuk bisnis — otomatisasi respons, kualifikasi leads, dan layanan pelanggan yang lebih cepat.",
    excerpt:
      "Kewalahan membalas chat pelanggan? Chatbot WhatsApp bisa menjawab otomatis dan menyaring leads sepanjang waktu.",
    date: "2026-01-24",
    category: "Teknologi",
    readingTime: "5 menit",
    keywords: ["chatbot WhatsApp", "WhatsApp bisnis otomatis", "otomatisasi layanan pelanggan", "WhatsApp API"],
    content: [
      {
        type: "p",
        text: "WhatsApp adalah saluran utama komunikasi bisnis di Indonesia. Saat pesan masuk membludak, chatbot membantu menjawab pertanyaan umum secara otomatis, kapan pun — sehingga pelanggan tidak menunggu dan tim Anda tidak kewalahan.",
      },
      { type: "h2", text: "Yang Bisa Dilakukan Chatbot" },
      {
        type: "ul",
        items: [
          "Menjawab pertanyaan yang sering diajukan secara instan.",
          "Memberi info produk, harga, dan jam operasional.",
          "Menyaring dan mengarahkan leads ke tim yang tepat.",
          "Mengirim konfirmasi pesanan atau pengingat.",
        ],
      },
      { type: "h2", text: "Tetap Sediakan Sentuhan Manusia" },
      {
        type: "p",
        text: "Chatbot terbaik tidak menggantikan manusia, tapi menanganinya yang rutin agar tim Anda fokus pada percakapan yang benar-benar butuh perhatian. Pastikan ada jalur mudah untuk terhubung ke staf saat dibutuhkan.",
      },
      cta(
        "Kreativita Sinergi dapat membantu mengintegrasikan otomatisasi WhatsApp ke alur bisnis Anda. Konsultasi gratis untuk mendiskusikan kebutuhannya."
      ),
    ],
  },
  {
    slug: "tren-teknologi-bisnis-2026",
    title: "Tren Teknologi Bisnis 2026 yang Perlu Diperhatikan UMKM",
    description:
      "Rangkuman tren teknologi 2026 yang relevan untuk UMKM — dari AI, otomatisasi, hingga pembayaran digital, dan cara menyikapinya.",
    excerpt:
      "Teknologi bergerak cepat. Kenali tren yang relevan untuk UMKM di 2026 agar bisnis Anda tidak tertinggal.",
    date: "2026-01-17",
    category: "Teknologi",
    readingTime: "5 menit",
    keywords: ["tren teknologi 2026", "teknologi bisnis", "tren UMKM", "AI untuk bisnis"],
    content: [
      {
        type: "p",
        text: "Setiap tahun membawa pergeseran teknologi yang memengaruhi cara bisnis beroperasi. Tidak semua tren relevan untuk UMKM, tapi beberapa di antaranya layak diperhatikan agar Anda tetap kompetitif di 2026.",
      },
      { type: "h2", text: "Tren yang Relevan untuk UMKM" },
      {
        type: "ul",
        items: [
          "AI praktis untuk membantu konten, layanan pelanggan, dan analisis.",
          "Otomatisasi alur kerja yang menghemat waktu operasional.",
          "Pembayaran digital yang makin dominan, termasuk QRIS.",
          "Pengalaman mobile-first sebagai standar, bukan opsi.",
          "Keamanan dan privasi data yang makin diperhatikan pelanggan.",
        ],
      },
      { type: "h2", text: "Cara Menyikapinya" },
      {
        type: "p",
        text: "Tidak perlu mengejar semua tren. Pilih yang langsung memberi dampak pada efisiensi atau pengalaman pelanggan Anda, lalu adopsi bertahap. Fondasi digital yang kuat membuat Anda lebih mudah memanfaatkan teknologi baru.",
      },
      cta(
        "Kreativita Sinergi membantu UMKM mengadopsi teknologi yang tepat guna, bukan sekadar ikut tren. Konsultasi gratis untuk menyusun langkahnya."
      ),
    ],
  },
  {
    slug: "cara-membangun-brand-online",
    title: "Cara Membangun Brand Online yang Kuat dari Nol",
    description:
      "Langkah membangun brand online yang konsisten dan mudah diingat — dari identitas visual, suara brand, hingga kehadiran digital.",
    excerpt:
      "Brand yang kuat membuat bisnis lebih dipercaya dan diingat. Begini cara membangunnya secara online dari nol.",
    date: "2026-01-10",
    category: "Strategi Digital",
    readingTime: "5 menit",
    keywords: ["membangun brand online", "branding UMKM", "identitas brand", "strategi branding"],
    content: [
      {
        type: "p",
        text: "Brand bukan sekadar logo — ia adalah kesan dan perasaan yang muncul saat orang memikirkan bisnis Anda. Brand yang kuat membuat Anda lebih mudah diingat, dipercaya, dan dipilih. Berikut cara membangunnya secara online.",
      },
      { type: "h2", text: "Fondasi Brand" },
      {
        type: "ul",
        items: [
          "Identitas visual yang konsisten: logo, warna, dan tipografi.",
          "Suara dan gaya komunikasi yang khas.",
          "Nilai dan janji yang jelas kepada pelanggan.",
          "Pengalaman yang konsisten di semua titik sentuh.",
        ],
      },
      { type: "h2", text: "Kehadiran Digital yang Selaras" },
      {
        type: "p",
        text: "Pastikan website, media sosial, dan materi pemasaran Anda menampilkan identitas yang sama. Konsistensi inilah yang lama-kelamaan membangun pengenalan dan kepercayaan terhadap brand Anda.",
      },
      cta(
        "Kreativita Sinergi membantu mewujudkan identitas brand Anda dalam website dan produk digital yang konsisten dan profesional. Konsultasi gratis untuk memulai."
      ),
    ],
  },
  {
    slug: "aplikasi-untuk-restoran-dan-cafe",
    title: "Aplikasi untuk Restoran & Cafe: Fitur yang Bikin Operasional Lancar",
    description:
      "Panduan fitur aplikasi untuk restoran dan cafe — dari kasir, manajemen meja, KDS dapur, hingga laporan, agar operasional makin efisien.",
    excerpt:
      "Restoran ramai tapi operasional berantakan? Aplikasi yang tepat bisa merapikan pesanan, meja, dan dapur sekaligus.",
    date: "2026-01-03",
    category: "Bisnis Online",
    readingTime: "5 menit",
    keywords: ["aplikasi restoran", "aplikasi cafe", "sistem POS restoran", "aplikasi kasir restoran"],
    content: [
      {
        type: "p",
        text: "Mengelola restoran atau cafe yang sibuk butuh lebih dari sekadar mencatat pesanan. Aplikasi yang dirancang khusus membantu menyatukan kasir, meja, dapur, dan laporan dalam satu alur yang rapi sehingga pelayanan lebih cepat dan minim kesalahan.",
      },
      { type: "h2", text: "Fitur yang Membuat Beda" },
      {
        type: "ul",
        items: [
          "Pencatatan pesanan cepat untuk dine-in, take away, dan delivery.",
          "Manajemen meja & denah ruangan.",
          "Kitchen Display System (KDS) agar dapur tahu pesanan real-time.",
          "Manajemen shift kasir dan rekap kas.",
          "Laporan menu terlaris dan jam ramai.",
        ],
      },
      { type: "h2", text: "Kenapa Penting untuk F&B" },
      {
        type: "p",
        text: "Di bisnis makanan, kecepatan dan akurasi menentukan kepuasan pelanggan. Sistem yang menghubungkan kasir dan dapur mengurangi salah pesan, mempercepat pelayanan, dan memberi Anda data untuk mengatur menu serta stok lebih cerdas.",
      },
      cta(
        "Loka Kasir buatan Kreativita Sinergi mendukung kebutuhan F&B termasuk KDS & manajemen meja. Butuh sistem khusus restoran Anda? Konsultasi gratis."
      ),
    ],
  },
  {
    slug: "website-untuk-klinik-dan-dokter",
    title: "Website untuk Klinik & Praktik Dokter: Manfaat dan Fitur Pentingnya",
    description:
      "Kenapa klinik dan praktik dokter butuh website, serta fitur penting seperti jadwal praktik, info layanan, dan booking online.",
    excerpt:
      "Pasien kini mencari layanan kesehatan lewat Google. Website klinik yang baik membantu mereka menemukan dan mempercayai Anda.",
    date: "2025-12-27",
    category: "Website",
    readingTime: "5 menit",
    keywords: ["website klinik", "website dokter", "website kesehatan", "booking dokter online"],
    content: [
      {
        type: "p",
        text: "Sebelum berkunjung, calon pasien biasanya mencari informasi online: lokasi, jam praktik, layanan, dan reputasi. Website klinik yang profesional menjawab semua itu sekaligus membangun kepercayaan yang krusial di bidang kesehatan.",
      },
      { type: "h2", text: "Fitur Penting Website Klinik" },
      {
        type: "ul",
        items: [
          "Informasi layanan dan dokter yang jelas.",
          "Jadwal praktik dan jam operasional.",
          "Lokasi dengan peta dan kontak.",
          "Booking atau reservasi online.",
          "Artikel edukasi kesehatan untuk SEO.",
        ],
      },
      { type: "h2", text: "Kepercayaan adalah Kunci" },
      {
        type: "p",
        text: "Di sektor kesehatan, kepercayaan menentukan keputusan. Website yang rapi, informatif, dan mudah diakses dari HP membuat klinik Anda terlihat kredibel dan memudahkan pasien mengambil langkah berikutnya.",
      },
      cta(
        "Kreativita Sinergi membangun website klinik yang informatif, cepat, dan dilengkapi booking online. Konsultasi gratis untuk praktik Anda."
      ),
    ],
  },
  {
    slug: "aplikasi-booking-online-untuk-jasa",
    title: "Aplikasi Booking Online untuk Bisnis Jasa: Salon, Servis, hingga Sewa",
    description:
      "Manfaat sistem booking online untuk bisnis jasa dan fitur penting agar reservasi pelanggan otomatis, rapi, dan tanpa bentrok jadwal.",
    excerpt:
      "Masih catat janji pelanggan manual? Sistem booking online merapikan jadwal dan mengurangi reservasi yang bentrok.",
    date: "2025-12-20",
    category: "Bisnis Online",
    readingTime: "5 menit",
    keywords: ["aplikasi booking online", "sistem reservasi", "booking online jasa", "aplikasi janji temu"],
    content: [
      {
        type: "p",
        text: "Bisnis jasa seperti salon, bengkel, klinik, atau persewaan sangat bergantung pada penjadwalan. Mencatat janji secara manual rawan bentrok dan memakan waktu. Sistem booking online membuat pelanggan memesan sendiri, kapan saja, tanpa ribet.",
      },
      { type: "h2", text: "Manfaat Booking Online" },
      {
        type: "ul",
        items: [
          "Pelanggan memesan 24 jam tanpa perlu menelepon.",
          "Jadwal otomatis tersusun dan bebas bentrok.",
          "Pengingat otomatis mengurangi pelanggan yang tidak datang.",
          "Data pelanggan dan riwayat tersimpan rapi.",
        ],
      },
      { type: "h2", text: "Sesuaikan dengan Alur Anda" },
      {
        type: "p",
        text: "Setiap bisnis jasa punya aturan main berbeda — durasi layanan, jumlah staf, atau slot tertentu. Sistem booking yang dibuat sesuai kebutuhan Anda akan terasa jauh lebih pas dibanding solusi seragam yang kaku.",
      },
      cta(
        "Kreativita Sinergi membangun sistem booking online sesuai alur bisnis jasa Anda. Konsultasi gratis untuk merapikan reservasi pelanggan."
      ),
    ],
  },
  {
    slug: "website-untuk-sekolah-dan-lembaga-pendidikan",
    title: "Website untuk Sekolah & Lembaga Pendidikan: Apa Saja yang Dibutuhkan?",
    description:
      "Panduan fitur website sekolah dan lembaga pendidikan — profil, informasi PPDB, berita, hingga portal yang memudahkan orang tua dan siswa.",
    excerpt:
      "Website sekolah bukan sekadar formalitas. Ia jadi pusat informasi penting bagi calon siswa, orang tua, dan publik.",
    date: "2025-12-13",
    category: "Website",
    readingTime: "5 menit",
    keywords: ["website sekolah", "website lembaga pendidikan", "website kampus", "PPDB online"],
    content: [
      {
        type: "p",
        text: "Website adalah wajah digital sebuah lembaga pendidikan. Calon siswa dan orang tua mencari informasi pendaftaran, program, dan reputasi sebelum memutuskan. Website yang lengkap dan rapi memperkuat citra profesional sekolah Anda.",
      },
      { type: "h2", text: "Fitur yang Umumnya Dibutuhkan" },
      {
        type: "ul",
        items: [
          "Profil sekolah, visi-misi, dan program unggulan.",
          "Informasi dan formulir pendaftaran (PPDB) online.",
          "Berita, agenda, dan galeri kegiatan.",
          "Informasi guru dan fasilitas.",
          "Kontak dan lokasi yang jelas.",
        ],
      },
      { type: "h2", text: "Nilai Tambah dari Portal" },
      {
        type: "p",
        text: "Selain informasi publik, sekolah bisa menambah portal untuk pengumuman, jadwal, atau komunikasi dengan orang tua. Ini meningkatkan keterlibatan dan memudahkan administrasi sehari-hari.",
      },
      cta(
        "Kreativita Sinergi membangun website pendidikan lengkap dengan PPDB online dan portal sesuai kebutuhan. Konsultasi gratis untuk lembaga Anda."
      ),
    ],
  },
  {
    slug: "sistem-manajemen-stok-barang",
    title: "Pentingnya Sistem Manajemen Stok Barang untuk Bisnis yang Bertumbuh",
    description:
      "Kenapa bisnis butuh sistem manajemen stok, masalah yang dipecahkan, dan fitur penting agar inventori akurat dan tidak rugi.",
    excerpt:
      "Stok sering selisih atau kehabisan tanpa sadar? Sistem manajemen stok menjaga inventori akurat dan bisnis lebih untung.",
    date: "2025-12-06",
    category: "Bisnis Online",
    readingTime: "5 menit",
    keywords: ["sistem manajemen stok", "aplikasi stok barang", "manajemen inventori", "software stok gudang"],
    content: [
      {
        type: "p",
        text: "Seiring bisnis bertumbuh, mengelola stok secara manual lewat catatan atau spreadsheet jadi rawan kesalahan. Selisih stok, barang kedaluwarsa, atau kehabisan saat dibutuhkan bisa menggerus keuntungan. Sistem manajemen stok menyelesaikan masalah ini.",
      },
      { type: "h2", text: "Masalah yang Diselesaikan" },
      {
        type: "ul",
        items: [
          "Stok selalu tercatat akurat dan real-time.",
          "Notifikasi saat stok menipis agar tidak kehabisan.",
          "Lacak pergerakan barang masuk dan keluar.",
          "Laporan nilai inventori untuk keputusan pembelian.",
        ],
      },
      { type: "h2", text: "Terhubung dengan Penjualan" },
      {
        type: "p",
        text: "Sistem stok paling efektif saat terhubung langsung dengan penjualan — setiap transaksi otomatis memperbarui stok. Ini menghilangkan pencatatan ganda dan menjaga data selalu konsisten.",
      },
      cta(
        "Kreativita Sinergi membangun sistem manajemen stok yang terintegrasi dengan penjualan Anda. Konsultasi gratis untuk merapikan inventori bisnis."
      ),
    ],
  },
  {
    slug: "website-untuk-bisnis-properti",
    title: "Website untuk Bisnis Properti & Agen: Tampilkan Listing Secara Profesional",
    description:
      "Manfaat website untuk agen dan bisnis properti, serta fitur penting seperti katalog listing, pencarian, dan kontak cepat calon pembeli.",
    excerpt:
      "Calon pembeli properti mulai dari mencari online. Website listing yang baik membuat Anda lebih mudah ditemukan dan dipercaya.",
    date: "2025-11-29",
    category: "Website",
    readingTime: "5 menit",
    keywords: ["website properti", "website agen properti", "listing properti online", "jual rumah online"],
    content: [
      {
        type: "p",
        text: "Pembeli properti melakukan riset panjang sebelum menghubungi agen. Website properti yang menampilkan listing secara rapi dan profesional membuat Anda lebih mudah ditemukan, dipercaya, dan dipilih dibanding hanya mengandalkan grup atau marketplace.",
      },
      { type: "h2", text: "Fitur Website Properti" },
      {
        type: "ul",
        items: [
          "Katalog listing dengan foto, harga, dan detail lengkap.",
          "Pencarian dan filter berdasarkan lokasi, harga, tipe.",
          "Peta lokasi properti.",
          "Tombol kontak cepat ke agen (WhatsApp/telepon).",
          "Halaman yang ramah SEO agar muncul di pencarian.",
        ],
      },
      { type: "h2", text: "Kesan Profesional Membangun Kepercayaan" },
      {
        type: "p",
        text: "Properti adalah transaksi bernilai besar, jadi kepercayaan sangat menentukan. Website yang rapi dengan informasi transparan menempatkan Anda selangkah di depan pesaing.",
      },
      cta(
        "Kreativita Sinergi membangun website properti dengan katalog listing dan pencarian yang nyaman. Konsultasi gratis untuk bisnis properti Anda."
      ),
    ],
  },
  {
    slug: "digital-marketing-untuk-restoran",
    title: "Strategi Digital Marketing untuk Restoran & Cafe agar Selalu Ramai",
    description:
      "Strategi digital marketing untuk restoran dan cafe — dari media sosial, ulasan, foto makanan, hingga promo, agar pelanggan terus berdatangan.",
    excerpt:
      "Makanan enak saja tidak cukup kalau tidak ada yang tahu. Begini strategi digital marketing agar restoran Anda ramai.",
    date: "2025-11-22",
    category: "Strategi Digital",
    readingTime: "5 menit",
    keywords: ["digital marketing restoran", "marketing cafe", "promosi restoran online", "strategi pemasaran F&B"],
    content: [
      {
        type: "p",
        text: "Persaingan bisnis kuliner sangat ketat. Restoran yang ramai bukan hanya yang masakannya enak, tapi yang pandai memasarkan diri secara online di tempat calon pelanggan mencari rekomendasi makan.",
      },
      { type: "h2", text: "Taktik yang Efektif" },
      {
        type: "ul",
        items: [
          "Foto makanan yang menggugah selera di media sosial.",
          "Dorong dan balas ulasan di Google dan platform pesan antar.",
          "Optimalkan Google Bisnisku untuk pencarian lokal.",
          "Promo dan menu spesial yang dibagikan rutin.",
          "Kolaborasi dengan kreator kuliner lokal.",
        ],
      },
      { type: "h2", text: "Konsistensi & Reputasi" },
      {
        type: "p",
        text: "Reputasi online — terutama ulasan dan rating — sangat memengaruhi keputusan makan. Jaga kualitas, dorong pelanggan puas untuk mengulas, dan tanggapi masukan dengan baik. Reputasi positif adalah iklan paling murah.",
      },
      cta(
        "Kreativita Sinergi membantu kehadiran digital restoran Anda, dari website hingga keselarasan dengan Google Bisnisku. Konsultasi gratis untuk memulai."
      ),
    ],
  },
  {
    slug: "aplikasi-absensi-karyawan",
    title: "Aplikasi Absensi Karyawan: Solusi Kehadiran yang Akurat & Praktis",
    description:
      "Manfaat aplikasi absensi karyawan dibanding cara manual, serta fitur penting seperti absensi berbasis lokasi dan rekap otomatis.",
    excerpt:
      "Absensi manual rawan titip absen dan ribet direkap. Aplikasi absensi membuat kehadiran akurat dan laporan otomatis.",
    date: "2025-11-15",
    category: "Teknologi",
    readingTime: "4 menit",
    keywords: ["aplikasi absensi karyawan", "absensi online", "sistem kehadiran", "aplikasi absen"],
    content: [
      {
        type: "p",
        text: "Mencatat kehadiran karyawan secara manual memakan waktu dan rawan kecurangan seperti titip absen. Aplikasi absensi modern membuat proses ini akurat, praktis, dan langsung menghasilkan laporan tanpa rekap manual.",
      },
      { type: "h2", text: "Fitur yang Berguna" },
      {
        type: "ul",
        items: [
          "Absensi clock-in/clock-out berbasis lokasi atau kiosk.",
          "Rekap kehadiran otomatis dan siap ekspor.",
          "Pencatatan jam kerja dan lembur.",
          "Integrasi dengan penggajian.",
        ],
      },
      { type: "h2", text: "Hemat Waktu Administrasi" },
      {
        type: "p",
        text: "Dengan data kehadiran yang otomatis dan akurat, tim HR atau pemilik usaha bisa fokus pada hal yang lebih penting. Kesalahan perhitungan berkurang, dan karyawan pun merasa lebih adil.",
      },
      cta(
        "Loka Kasir dari Kreativita Sinergi sudah punya fitur absensi karyawan. Butuh sistem absensi khusus? Konsultasi gratis untuk kebutuhan Anda."
      ),
    ],
  },
  {
    slug: "website-portofolio-untuk-freelancer",
    title: "Cara Membuat Website Portofolio yang Menarik Klien untuk Freelancer",
    description:
      "Panduan membuat website portofolio yang meyakinkan untuk freelancer — struktur, isi penting, dan tips agar lebih banyak klien menghubungi.",
    excerpt:
      "Sebagai freelancer, portofolio adalah senjata utama. Website portofolio yang rapi membuat klien lebih percaya dan menghubungi Anda.",
    date: "2025-11-08",
    category: "Website",
    readingTime: "4 menit",
    keywords: ["website portofolio", "portofolio freelancer", "personal website", "cara membuat portofolio online"],
    content: [
      {
        type: "p",
        text: "Bagi freelancer, kepercayaan klien dibangun dari karya. Website portofolio menjadi tempat memamerkan hasil terbaik, menjelaskan keahlian, dan memudahkan calon klien menghubungi — lebih profesional dibanding sekadar mengirim file atau tautan media sosial.",
      },
      { type: "h2", text: "Isi Website Portofolio yang Kuat" },
      {
        type: "ul",
        items: [
          "Karya terbaik dengan konteks dan hasilnya.",
          "Ringkasan keahlian dan layanan yang ditawarkan.",
          "Testimoni dari klien sebelumnya.",
          "Kontak dan ajakan untuk bekerja sama.",
        ],
      },
      { type: "h2", text: "Tampilkan Kualitas, Bukan Kuantitas" },
      {
        type: "p",
        text: "Lebih baik menampilkan sedikit karya terbaik yang relevan dengan klien target daripada semua proyek tanpa pilih-pilih. Desain yang bersih dan loading cepat juga mencerminkan profesionalisme Anda.",
      },
      cta(
        "Kreativita Sinergi membantu freelancer dan profesional membangun website portofolio yang menonjol. Konsultasi gratis untuk menarik lebih banyak klien."
      ),
    ],
  },
  {
    slug: "integrasi-website-dengan-marketplace",
    title: "Integrasi Website dengan Marketplace: Jualan Lebih Luas, Kelola Lebih Mudah",
    description:
      "Manfaat dan cara kerja integrasi website toko dengan marketplace agar stok dan pesanan tersinkron, menghemat waktu dan menghindari overselling.",
    excerpt:
      "Jualan di banyak tempat sekaligus bikin pusing kelola stok? Integrasi website dan marketplace menyatukan semuanya.",
    date: "2025-11-01",
    category: "Bisnis Online",
    readingTime: "5 menit",
    keywords: ["integrasi marketplace", "sinkron stok marketplace", "omnichannel", "jualan multi platform"],
    content: [
      {
        type: "p",
        text: "Banyak penjual hadir di beberapa kanal sekaligus: website sendiri plus berbagai marketplace. Tanpa integrasi, mengelola stok dan pesanan di banyak tempat melelahkan dan rawan overselling. Integrasi menyatukan semuanya dalam satu alur.",
      },
      { type: "h2", text: "Manfaat Integrasi" },
      {
        type: "ul",
        items: [
          "Stok tersinkron otomatis di semua kanal.",
          "Pesanan terkumpul di satu tempat.",
          "Mengurangi risiko overselling dan komplain.",
          "Hemat waktu tanpa input data berulang.",
        ],
      },
      { type: "h2", text: "Website sebagai Pusat" },
      {
        type: "p",
        text: "Memiliki website sendiri sebagai pusat memberi Anda kendali penuh atas brand dan margin, sementara marketplace memperluas jangkauan. Integrasi yang baik menggabungkan kelebihan keduanya tanpa menambah beban kerja.",
      },
      cta(
        "Kreativita Sinergi membangun toko online yang siap diintegrasikan dengan berbagai kanal penjualan. Konsultasi gratis untuk menyatukan operasional jualan Anda."
      ),
    ],
  },
  {
    slug: "website-gratis-vs-berbayar",
    title: "Website Gratis vs Berbayar: Mana yang Layak untuk Bisnis?",
    description:
      "Perbandingan website gratis dan berbayar dari sisi kepemilikan, kredibilitas, dan keterbatasan, agar Anda memilih yang tepat untuk bisnis.",
    excerpt:
      "Tergoda bikin website gratisan? Pahami dulu keterbatasan dan risikonya dibanding website berbayar untuk bisnis serius.",
    date: "2025-10-25",
    category: "Website",
    readingTime: "5 menit",
    keywords: ["website gratis vs berbayar", "bikin website gratis", "kekurangan website gratis", "website bisnis"],
    content: [
      {
        type: "p",
        text: "Layanan website gratis menggoda karena tanpa biaya di awal. Tapi untuk bisnis yang serius, ada pertimbangan penting di balik kata 'gratis'. Mari bandingkan dengan website berbayar agar keputusan Anda tepat.",
      },
      { type: "h2", text: "Keterbatasan Website Gratis" },
      {
        type: "ul",
        items: [
          "Alamat mengandung embel-embel penyedia, bukan domain sendiri.",
          "Sering ada iklan pihak ketiga yang tidak bisa dihilangkan.",
          "Fitur dan kustomisasi sangat terbatas.",
          "Anda tidak benar-benar memiliki dan mengendalikan datanya.",
          "Kurang kredibel di mata calon pelanggan.",
        ],
      },
      { type: "h2", text: "Kelebihan Website Berbayar" },
      {
        type: "p",
        text: "Dengan website berbayar Anda mendapat domain sendiri, kendali penuh, tampilan profesional tanpa iklan, dan fleksibilitas untuk tumbuh. Ini investasi yang sepadan jika website adalah bagian penting dari bisnis Anda.",
      },
      cta(
        "Kreativita Sinergi membangun website profesional milik Anda sepenuhnya, dengan harga terjangkau. Konsultasi gratis untuk memulai dengan benar sejak awal."
      ),
    ],
  },
  {
    slug: "pentingnya-website-mobile-friendly",
    title: "Kenapa Website Mobile-Friendly Wajib Hukumnya di 2026",
    description:
      "Pentingnya website mobile-friendly untuk pengalaman pengguna dan SEO, serta ciri website yang sudah ramah seluler.",
    excerpt:
      "Mayoritas pengunjung datang dari HP. Website yang tidak mobile-friendly kehilangan pelanggan dan peringkat Google.",
    date: "2025-10-18",
    category: "Website",
    readingTime: "4 menit",
    keywords: ["website mobile friendly", "responsive design", "website ramah HP", "mobile first"],
    content: [
      {
        type: "p",
        text: "Sebagian besar orang Indonesia mengakses internet lewat ponsel. Jika website Anda sulit dibaca atau dioperasikan di layar kecil, Anda kehilangan calon pelanggan sekaligus poin di mata Google yang kini mengutamakan versi mobile.",
      },
      { type: "h2", text: "Ciri Website Mobile-Friendly" },
      {
        type: "ul",
        items: [
          "Teks terbaca tanpa perlu zoom.",
          "Tombol cukup besar dan mudah ditekan dengan jari.",
          "Tata letak menyesuaikan ukuran layar (responsif).",
          "Gambar termuat cepat dan tidak memberatkan.",
        ],
      },
      { type: "h2", text: "Dampaknya pada Bisnis" },
      {
        type: "p",
        text: "Pengalaman mobile yang baik membuat pengunjung betah, menjelajah lebih lama, dan lebih mungkin menghubungi atau membeli. Sebaliknya, tampilan berantakan di HP membuat mereka langsung pergi ke pesaing.",
      },
      cta(
        "Semua website buatan Kreativita Sinergi responsif dan ramah seluler secara default. Konsultasi gratis untuk memastikan bisnis Anda tampil prima di HP."
      ),
    ],
  },
  {
    slug: "cms-wordpress-vs-website-custom",
    title: "CMS WordPress vs Website Custom: Mana yang Cocok untuk Anda?",
    description:
      "Perbandingan membangun website dengan CMS seperti WordPress versus website custom dari sisi fleksibilitas, performa, dan perawatan.",
    excerpt:
      "WordPress populer dan cepat, tapi tidak selalu jawaban terbaik. Bandingkan dengan website custom sebelum memutuskan.",
    date: "2025-10-11",
    category: "Teknologi",
    readingTime: "5 menit",
    keywords: ["CMS vs custom", "WordPress vs custom", "pilih WordPress atau custom", "website custom"],
    content: [
      {
        type: "p",
        text: "Saat membangun website, salah satu keputusan awal adalah memakai CMS siap pakai seperti WordPress atau membangun custom dari awal. Keduanya valid — pilihan tergantung kebutuhan, skala, dan rencana jangka panjang Anda.",
      },
      { type: "h2", text: "CMS seperti WordPress" },
      {
        type: "p",
        text: "Cepat dibangun dan punya banyak tema serta plugin. Cocok untuk blog dan website standar. Namun bisa menjadi berat, butuh update plugin rutin, dan rawan celah keamanan jika tidak dirawat.",
      },
      { type: "h2", text: "Website Custom" },
      {
        type: "p",
        text: "Dibangun sesuai kebutuhan, biasanya lebih cepat, aman, dan fleksibel. Ideal untuk website dengan alur unik, performa tinggi, atau yang ingin tampil benar-benar beda. Investasi awal lebih besar, tapi lebih hemat perawatan jangka panjang.",
      },
      { type: "h2", text: "Bagaimana Memilih?" },
      {
        type: "p",
        text: "Jika kebutuhan Anda standar dan anggaran terbatas, CMS bisa jadi awal yang baik. Jika Anda mengutamakan kecepatan, keamanan, dan keunikan, website custom lebih sepadan. Konsultasi dengan ahlinya membantu menghindari salah pilih.",
      },
      cta(
        "Kreativita Sinergi membantu memilih pendekatan terbaik — dan membangun website custom yang cepat dan aman saat itu pilihan tepat. Konsultasi gratis."
      ),
    ],
  },
  {
    slug: "tips-menulis-konten-website-yang-menjual",
    title: "Tips Menulis Konten Website yang Menjual (Copywriting Dasar)",
    description:
      "Dasar copywriting untuk website — cara menulis konten yang fokus pada manfaat, membangun kepercayaan, dan mendorong pengunjung beraksi.",
    excerpt:
      "Konten website bukan sekadar mengisi halaman. Tulisan yang tepat bisa mengubah pengunjung jadi pelanggan.",
    date: "2025-10-04",
    category: "Strategi Digital",
    readingTime: "5 menit",
    keywords: ["copywriting website", "menulis konten website", "konten yang menjual", "tips copywriting"],
    content: [
      {
        type: "p",
        text: "Banyak website cantik tapi sepi konversi karena kontennya kurang persuasif. Copywriting yang baik berbicara langsung ke kebutuhan pengunjung dan memandu mereka mengambil tindakan. Berikut dasar-dasarnya.",
      },
      { type: "h2", text: "Prinsip Copywriting Efektif" },
      {
        type: "ul",
        items: [
          "Fokus pada manfaat bagi pelanggan, bukan sekadar fitur.",
          "Gunakan bahasa yang jelas dan mudah dipahami.",
          "Sertakan bukti: testimoni, angka, atau hasil nyata.",
          "Buat ajakan bertindak (CTA) yang jelas dan spesifik.",
          "Tulis judul yang langsung menarik perhatian.",
        ],
      },
      { type: "h2", text: "Berbicara dengan Bahasa Pelanggan" },
      {
        type: "p",
        text: "Tulis seolah sedang berbicara dengan satu orang yang Anda bantu. Hindari jargon dan kalimat berbelit. Semakin pengunjung merasa dimengerti, semakin besar kemungkinan mereka mempercayai dan memilih Anda.",
      },
      cta(
        "Kreativita Sinergi membangun website yang tak hanya rapi, tapi juga berisi konten yang mengarah pada konversi. Konsultasi gratis untuk bisnis Anda."
      ),
    ],
  },
  {
    slug: "keuntungan-punya-aplikasi-sendiri",
    title: "5 Keuntungan Punya Aplikasi Sendiri untuk Bisnis Anda",
    description:
      "Manfaat memiliki aplikasi sendiri bagi bisnis — dari loyalitas pelanggan, notifikasi, hingga citra profesional dan data pelanggan.",
    excerpt:
      "Aplikasi sendiri bukan cuma untuk perusahaan besar. Ini keuntungannya bahkan untuk bisnis yang sedang bertumbuh.",
    date: "2025-09-27",
    category: "Aplikasi Mobile",
    readingTime: "4 menit",
    keywords: ["keuntungan aplikasi sendiri", "manfaat aplikasi bisnis", "kenapa butuh aplikasi", "aplikasi untuk bisnis"],
    content: [
      {
        type: "p",
        text: "Memiliki aplikasi sendiri dulu terasa eksklusif untuk perusahaan besar. Kini, dengan teknologi yang lebih efisien, bisnis yang sedang tumbuh pun bisa memanfaatkannya. Berikut keuntungan utamanya.",
      },
      { type: "h2", text: "Manfaat Utama" },
      {
        type: "ul",
        items: [
          "Hadir di layar utama HP pelanggan — selalu teringat.",
          "Notifikasi push untuk promo dan info penting.",
          "Membangun loyalitas lewat pengalaman yang personal.",
          "Citra profesional dan modern di mata pelanggan.",
          "Mengumpulkan data untuk memahami pelanggan lebih baik.",
        ],
      },
      { type: "h2", text: "Mulai dari yang Sederhana" },
      {
        type: "p",
        text: "Anda tidak perlu langsung membangun aplikasi penuh fitur. Mulailah dari versi inti (MVP) yang menyelesaikan satu kebutuhan utama pelanggan, lalu kembangkan bertahap sesuai respons mereka.",
      },
      cta(
        "Kreativita Sinergi membantu mewujudkan aplikasi bisnis Anda secara efisien, mulai dari MVP. Konsultasi gratis untuk mendiskusikan idenya."
      ),
    ],
  },
  {
    slug: "cara-kerja-sama-dengan-software-house",
    title: "Cara Kerja Sama dengan Software House agar Proyek Sukses",
    description:
      "Tips bekerja sama dengan software house atau jasa IT — dari menyiapkan brief, komunikasi, hingga menjaga proyek tetap di jalurnya.",
    excerpt:
      "Proyek digital sukses bukan hanya soal vendor andal, tapi juga kerja sama yang baik. Begini caranya dari sisi Anda.",
    date: "2025-09-20",
    category: "Strategi Digital",
    readingTime: "5 menit",
    keywords: ["kerja sama software house", "tips proyek IT", "brief proyek aplikasi", "memilih jasa IT"],
    content: [
      {
        type: "p",
        text: "Keberhasilan proyek digital bukan hanya tanggung jawab vendor. Sebagai klien, peran Anda sama pentingnya. Kerja sama yang baik membuat proyek berjalan lancar, tepat waktu, dan hasilnya sesuai harapan.",
      },
      { type: "h2", text: "Yang Bisa Anda Lakukan" },
      {
        type: "ul",
        items: [
          "Siapkan brief yang jelas: tujuan, target pengguna, dan contoh referensi.",
          "Tunjuk satu penanggung jawab agar komunikasi fokus.",
          "Beri umpan balik tepat waktu agar proyek tidak tertunda.",
          "Sepakati ruang lingkup sejak awal untuk menghindari salah paham.",
          "Percayai keahlian tim, tapi tetap aktif berdiskusi.",
        ],
      },
      { type: "h2", text: "Komunikasi adalah Kunci" },
      {
        type: "p",
        text: "Proyek yang gagal sering berakar dari komunikasi yang buruk, bukan kemampuan teknis. Update berkala dan keterbukaan dua arah menjaga semua pihak selaras hingga peluncuran.",
      },
      cta(
        "Kreativita Sinergi mengutamakan komunikasi transparan dan update berkala di setiap proyek. Konsultasi gratis untuk memulai kerja sama yang nyaman."
      ),
    ],
  },
  {
    slug: "aplikasi-loyalty-membership-pelanggan",
    title: "Aplikasi Loyalty & Membership: Cara Membuat Pelanggan Kembali Lagi",
    description:
      "Manfaat program loyalty dan membership digital untuk bisnis, serta fitur penting agar pelanggan terus kembali dan belanja lebih banyak.",
    excerpt:
      "Mendapat pelanggan baru itu mahal. Program loyalty membuat pelanggan lama kembali dan belanja lebih sering.",
    date: "2025-09-13",
    category: "Bisnis Online",
    readingTime: "5 menit",
    keywords: ["aplikasi loyalty", "program membership", "loyalitas pelanggan", "poin reward pelanggan"],
    content: [
      {
        type: "p",
        text: "Mempertahankan pelanggan jauh lebih murah daripada mencari yang baru. Program loyalty dan membership digital memberi alasan bagi pelanggan untuk terus kembali — sambil membuat mereka merasa dihargai.",
      },
      { type: "h2", text: "Fitur yang Mendorong Loyalitas" },
      {
        type: "ul",
        items: [
          "Poin reward setiap transaksi yang bisa ditukar.",
          "Tingkatan member dengan keuntungan berbeda.",
          "Promo khusus dan ucapan ulang tahun.",
          "Riwayat belanja dan saldo poin yang transparan.",
        ],
      },
      { type: "h2", text: "Dampak ke Bisnis" },
      {
        type: "p",
        text: "Program loyalty meningkatkan frekuensi belanja dan nilai transaksi, sekaligus mengumpulkan data perilaku pelanggan. Data ini berharga untuk menyusun promo yang lebih tepat sasaran.",
      },
      cta(
        "Kreativita Sinergi dapat membangun sistem loyalty/membership yang terhubung dengan bisnis Anda. Konsultasi gratis untuk membuat pelanggan kembali lagi."
      ),
    ],
  },
  {
    slug: "website-multi-bahasa-untuk-pasar-global",
    title: "Website Multi-Bahasa: Menjangkau Pasar yang Lebih Luas",
    description:
      "Manfaat dan pertimbangan membuat website multi-bahasa untuk menjangkau pelanggan di luar daerah atau luar negeri.",
    excerpt:
      "Ingin menjangkau pelanggan lintas daerah atau global? Website multi-bahasa membuka pintu pasar yang lebih luas.",
    date: "2025-09-06",
    category: "Website",
    readingTime: "4 menit",
    keywords: ["website multi bahasa", "website dua bahasa", "website internasional", "go global"],
    content: [
      {
        type: "p",
        text: "Jika target pelanggan Anda melampaui satu daerah atau negara, website multi-bahasa bisa menjadi keunggulan besar. Pengunjung lebih nyaman dan percaya saat membaca dalam bahasa mereka sendiri.",
      },
      { type: "h2", text: "Yang Perlu Diperhatikan" },
      {
        type: "ul",
        items: [
          "Terjemahan yang natural, bukan sekadar mesin.",
          "Struktur URL yang rapi untuk tiap bahasa.",
          "Penanda bahasa yang benar agar SEO tepat.",
          "Penyesuaian mata uang dan format yang relevan.",
        ],
      },
      { type: "h2", text: "Mulai dari yang Relevan" },
      {
        type: "p",
        text: "Tak perlu langsung banyak bahasa. Mulailah dari bahasa pasar utama Anda — misalnya Indonesia dan Inggris — lalu tambah sesuai kebutuhan. Yang penting kualitas terjemahan dan pengalaman tetap terjaga.",
      },
      cta(
        "Kreativita Sinergi membangun website multi-bahasa yang rapi dan SEO-friendly untuk menjangkau pasar lebih luas. Konsultasi gratis untuk memulai."
      ),
    ],
  },
  {
    slug: "cara-mengukur-keberhasilan-website",
    title: "Cara Mengukur Keberhasilan Website: Metrik yang Perlu Dipantau",
    description:
      "Panduan metrik penting untuk mengukur keberhasilan website — dari trafik, sumber pengunjung, hingga konversi, agar keputusan berbasis data.",
    excerpt:
      "Website Anda berhasil atau tidak? Jangan menebak. Pantau metrik berikut agar keputusan berbasis data.",
    date: "2025-08-30",
    category: "Strategi Digital",
    readingTime: "5 menit",
    keywords: ["mengukur keberhasilan website", "metrik website", "analitik website", "Google Analytics"],
    content: [
      {
        type: "p",
        text: "Tanpa pengukuran, Anda tidak tahu apakah website benar-benar bekerja. Untungnya, ada alat gratis seperti Google Analytics yang membantu memantau performa. Berikut metrik yang paling penting diperhatikan.",
      },
      { type: "h2", text: "Metrik Kunci" },
      {
        type: "ul",
        items: [
          "Jumlah pengunjung dan tren dari waktu ke waktu.",
          "Sumber trafik: pencarian, sosial media, atau iklan.",
          "Halaman paling populer dan paling cepat ditinggalkan.",
          "Tingkat konversi: berapa yang menghubungi atau membeli.",
          "Perilaku di perangkat mobile vs desktop.",
        ],
      },
      { type: "h2", text: "Dari Data ke Tindakan" },
      {
        type: "p",
        text: "Data hanya berguna jika ditindaklanjuti. Jika banyak pengunjung tapi sedikit yang menghubungi, mungkin ada masalah di alur atau ajakan bertindak. Pengukuran rutin membantu Anda terus memperbaiki.",
      },
      cta(
        "Kreativita Sinergi dapat memasang analitik dan membantu membaca datanya untuk perbaikan berkelanjutan. Konsultasi gratis untuk mengoptimalkan website Anda."
      ),
    ],
  },
  {
    slug: "maintenance-vs-redesign-website",
    title: "Maintenance atau Redesign Website? Kenali Kapan Saatnya",
    description:
      "Panduan menentukan kapan website cukup di-maintenance dan kapan sudah perlu redesign total, beserta tanda-tandanya.",
    excerpt:
      "Website terasa ketinggalan zaman? Cari tahu apakah Anda cukup merawatnya atau memang sudah waktunya redesign.",
    date: "2025-08-23",
    category: "Website",
    readingTime: "4 menit",
    keywords: ["redesign website", "kapan redesign website", "maintenance vs redesign", "perbarui website"],
    content: [
      {
        type: "p",
        text: "Website yang sudah berumur kadang terasa lambat, ketinggalan tren, atau tidak lagi sesuai kebutuhan bisnis. Pertanyaannya: cukup dirawat, atau perlu dirombak total? Berikut cara menentukannya.",
      },
      { type: "h2", text: "Cukup Maintenance Jika..." },
      {
        type: "ul",
        items: [
          "Tampilan masih relevan dan profesional.",
          "Hanya butuh update konten, perbaikan kecil, dan keamanan.",
          "Performa masih baik dan ramah mobile.",
        ],
      },
      { type: "h2", text: "Saatnya Redesign Jika..." },
      {
        type: "ul",
        items: [
          "Tampilan terasa kuno dan tidak mobile-friendly.",
          "Lambat dan sering bermasalah.",
          "Tidak lagi mencerminkan brand atau kebutuhan bisnis.",
          "Sulit dikelola atau dikembangkan.",
        ],
      },
      cta(
        "Kreativita Sinergi membantu menilai kondisi website Anda — merawat atau meremajakannya sesuai kebutuhan. Konsultasi gratis untuk rekomendasi terbaik."
      ),
    ],
  },
  {
    slug: "cara-meningkatkan-traffic-website",
    title: "8 Cara Meningkatkan Traffic Website Secara Organik",
    description:
      "Strategi meningkatkan traffic website tanpa bergantung iklan — dari SEO, konten, hingga media sosial, yang berkelanjutan dan hemat biaya.",
    excerpt:
      "Website sepi pengunjung? Tingkatkan traffic secara organik dengan strategi yang berkelanjutan dan hemat biaya.",
    date: "2025-08-16",
    category: "SEO",
    readingTime: "6 menit",
    keywords: ["cara meningkatkan traffic website", "traffic organik", "tingkatkan pengunjung website", "SEO traffic"],
    content: [
      {
        type: "p",
        text: "Traffic adalah napas sebuah website. Tanpa pengunjung, sebagus apa pun website tidak memberi hasil. Kabar baiknya, ada banyak cara mendatangkan traffic secara organik — gratis dan berkelanjutan, bukan sekadar membayar iklan.",
      },
      { type: "h2", text: "Strategi yang Terbukti" },
      {
        type: "ul",
        items: [
          "Optimalkan SEO agar muncul di pencarian Google.",
          "Terbitkan konten bermanfaat secara rutin.",
          "Targetkan kata kunci spesifik (long-tail) yang lebih mudah.",
          "Bagikan konten di media sosial yang relevan.",
          "Bangun backlink dari situs tepercaya.",
          "Perbaiki kecepatan dan pengalaman mobile.",
          "Manfaatkan Google Bisnisku untuk traffic lokal.",
          "Perbarui dan tingkatkan artikel lama secara berkala.",
        ],
      },
      { type: "h2", text: "Konsistensi Mengalahkan Keberuntungan" },
      {
        type: "p",
        text: "Traffic organik tumbuh perlahan tapi stabil. Konten yang Anda terbitkan hari ini bisa terus mendatangkan pengunjung berbulan-bulan ke depan. Kuncinya konsisten dan sabar — hasilnya menumpuk seperti bunga majemuk.",
      },
      cta(
        "Kreativita Sinergi membangun website SEO-friendly dan bisa membantu strategi kontennya. Konsultasi gratis untuk mendongkrak traffic Anda."
      ),
    ],
  },
  {
    slug: "email-marketing-untuk-umkm",
    title: "Email Marketing untuk UMKM: Murah, Personal, dan Efektif",
    description:
      "Panduan email marketing untuk UMKM — manfaat, cara membangun daftar email, dan tips agar email dibaca dan menghasilkan penjualan.",
    excerpt:
      "Email marketing sering diremehkan, padahal salah satu kanal dengan hasil terbaik. Begini memanfaatkannya untuk UMKM.",
    date: "2025-08-09",
    category: "Strategi Digital",
    readingTime: "5 menit",
    keywords: ["email marketing UMKM", "email marketing", "newsletter bisnis", "cara email marketing"],
    content: [
      {
        type: "p",
        text: "Di tengah ramainya media sosial, email tetap menjadi salah satu kanal pemasaran paling efektif. Anda berbicara langsung ke kotak masuk pelanggan, tanpa diganggu algoritma. Untuk UMKM, ini cara murah membangun hubungan dan mendorong penjualan berulang.",
      },
      { type: "h2", text: "Kenapa Email Masih Ampuh" },
      {
        type: "ul",
        items: [
          "Anda memiliki daftarnya, bukan bergantung platform lain.",
          "Pesan sampai langsung dan bisa dipersonalisasi.",
          "Biaya rendah dengan potensi hasil tinggi.",
          "Cocok untuk promo, info baru, dan menjaga hubungan.",
        ],
      },
      { type: "h2", text: "Mulai dari Membangun Daftar" },
      {
        type: "p",
        text: "Tawarkan alasan bagi pengunjung untuk berlangganan — diskon, panduan gratis, atau info eksklusif. Lalu kirim konten yang benar-benar bermanfaat, jangan hanya jualan. Email yang dinanti dibuka; email yang memaksa diabaikan.",
      },
      cta(
        "Kreativita Sinergi dapat membangun website dengan form langganan dan integrasi email marketing. Konsultasi gratis untuk memulai."
      ),
    ],
  },
  {
    slug: "social-media-marketing-untuk-bisnis",
    title: "Social Media Marketing untuk Bisnis: Mulai dari Strategi yang Benar",
    description:
      "Panduan social media marketing untuk bisnis — memilih platform, jenis konten, konsistensi, dan menghubungkannya dengan website.",
    excerpt:
      "Aktif di media sosial tapi sepi hasil? Mungkin strateginya yang perlu dibenahi. Mulai dari dasar yang benar.",
    date: "2025-08-02",
    category: "Strategi Digital",
    readingTime: "5 menit",
    keywords: ["social media marketing", "pemasaran media sosial", "strategi konten sosmed", "marketing Instagram"],
    content: [
      {
        type: "p",
        text: "Media sosial adalah tempat pelanggan menghabiskan waktu, jadi wajar bisnis ingin hadir di sana. Tapi sekadar posting tanpa strategi jarang membuahkan hasil. Berikut fondasi social media marketing yang efektif.",
      },
      { type: "h2", text: "Langkah Dasar" },
      {
        type: "ul",
        items: [
          "Pilih platform tempat pelanggan Anda benar-benar berada.",
          "Tentukan tujuan: awareness, interaksi, atau penjualan.",
          "Buat konten yang bernilai, bukan hanya jualan.",
          "Konsisten dalam jadwal dan gaya brand.",
          "Arahkan pengikut ke website atau WhatsApp untuk konversi.",
        ],
      },
      { type: "h2", text: "Sosmed dan Website Saling Melengkapi" },
      {
        type: "p",
        text: "Media sosial bagus untuk menjangkau dan membangun hubungan, tapi Anda tidak memilikinya. Website adalah rumah Anda yang permanen. Strategi terbaik menggunakan sosmed untuk menarik perhatian, lalu mengarahkan ke website untuk konversi.",
      },
      cta(
        "Kreativita Sinergi membangun website yang terhubung mulus dengan media sosial Anda. Konsultasi gratis untuk menyatukan kehadiran digital bisnis."
      ),
    ],
  },
  {
    slug: "apa-itu-api-dan-manfaatnya",
    title: "Apa Itu API dan Manfaatnya untuk Bisnis Anda?",
    description:
      "Penjelasan sederhana tentang API, cara kerjanya, dan bagaimana integrasi API membuat sistem bisnis lebih otomatis dan terhubung.",
    excerpt:
      "Sering dengar istilah API tapi belum paham? Ini penjelasan sederhananya dan kenapa penting untuk bisnis.",
    date: "2025-07-26",
    category: "Teknologi",
    readingTime: "4 menit",
    keywords: ["apa itu API", "integrasi API", "API untuk bisnis", "manfaat API"],
    content: [
      {
        type: "p",
        text: "API (Application Programming Interface) adalah cara dua sistem perangkat lunak saling berbicara dan bertukar data. Meski terdengar teknis, API berperan besar membuat layanan digital sehari-hari Anda berjalan mulus.",
      },
      { type: "h2", text: "Analogi Sederhana" },
      {
        type: "p",
        text: "Bayangkan API sebagai pelayan di restoran. Anda (aplikasi) memesan lewat pelayan (API), yang menyampaikan ke dapur (sistem lain), lalu membawa kembali pesanan Anda. Anda tidak perlu tahu cara dapur bekerja — cukup lewat pelayan.",
      },
      { type: "h2", text: "Manfaat Integrasi API" },
      {
        type: "ul",
        items: [
          "Menghubungkan website dengan payment gateway, pengiriman, atau WhatsApp.",
          "Menyinkronkan data antar sistem secara otomatis.",
          "Menghemat waktu dengan mengurangi input manual.",
          "Membuka kemungkinan fitur baru tanpa membangun dari nol.",
        ],
      },
      cta(
        "Kreativita Sinergi berpengalaman membangun dan mengintegrasikan API agar sistem bisnis Anda terhubung dan otomatis. Konsultasi gratis untuk kebutuhan Anda."
      ),
    ],
  },
  {
    slug: "tips-desain-logo-untuk-umkm",
    title: "Tips Desain Logo untuk UMKM yang Berkesan dan Mudah Diingat",
    description:
      "Panduan dasar desain logo untuk UMKM — prinsip logo yang baik, kesalahan umum, dan cara membuatnya mencerminkan brand.",
    excerpt:
      "Logo adalah wajah brand Anda. Pelajari prinsip desain logo yang baik agar bisnis Anda mudah diingat.",
    date: "2025-07-19",
    category: "Desain",
    readingTime: "4 menit",
    keywords: ["desain logo UMKM", "tips bikin logo", "prinsip logo", "logo bisnis"],
    content: [
      {
        type: "p",
        text: "Logo sering menjadi hal pertama yang dilihat orang dari sebuah brand. Logo yang baik membuat bisnis Anda mudah dikenali dan diingat. Anda tidak butuh logo rumit — yang terpenting tepat dan berkesan.",
      },
      { type: "h2", text: "Prinsip Logo yang Baik" },
      {
        type: "ul",
        items: [
          "Sederhana — mudah dikenali sekilas.",
          "Mudah diingat dan dibedakan dari pesaing.",
          "Tetap jelas dalam ukuran kecil maupun besar.",
          "Relevan dengan karakter bisnis Anda.",
          "Bekerja baik dalam versi warna maupun hitam-putih.",
        ],
      },
      { type: "h2", text: "Hindari Kesalahan Umum" },
      {
        type: "p",
        text: "Jangan terlalu banyak detail, warna, atau font yang sulit dibaca. Logo yang berusaha menampung semuanya justru kehilangan fokus. Konsistensi penggunaan logo di semua media juga sama pentingnya dengan desainnya.",
      },
      cta(
        "Kreativita Sinergi membantu membangun identitas brand — termasuk logo dan penerapannya di website serta produk digital. Konsultasi gratis untuk memulai."
      ),
    ],
  },
  {
    slug: "melindungi-data-pelanggan-dan-privasi",
    title: "Melindungi Data Pelanggan: Tanggung Jawab yang Tak Boleh Diabaikan",
    description:
      "Kenapa perlindungan data pelanggan penting bagi bisnis, prinsip dasar privasi, dan langkah praktis menjaga kepercayaan pelanggan.",
    excerpt:
      "Data pelanggan adalah amanah. Kebocoran bisa menghancurkan kepercayaan. Pahami cara melindunginya.",
    date: "2025-07-12",
    category: "Teknologi",
    readingTime: "5 menit",
    keywords: ["perlindungan data pelanggan", "privasi data", "keamanan data bisnis", "data pribadi"],
    content: [
      {
        type: "p",
        text: "Saat pelanggan memberikan data — nama, kontak, atau informasi pembayaran — mereka mempercayakannya kepada Anda. Melindungi data itu bukan hanya soal kepatuhan, tapi fondasi kepercayaan yang menentukan kelangsungan bisnis.",
      },
      { type: "h2", text: "Prinsip Dasar Perlindungan Data" },
      {
        type: "ul",
        items: [
          "Kumpulkan hanya data yang benar-benar diperlukan.",
          "Simpan dengan aman dan terenkripsi.",
          "Batasi siapa yang bisa mengakses data.",
          "Transparan soal penggunaan data lewat kebijakan privasi.",
          "Hapus data yang sudah tidak diperlukan.",
        ],
      },
      { type: "h2", text: "Kepercayaan adalah Aset" },
      {
        type: "p",
        text: "Satu insiden kebocoran bisa merusak reputasi yang dibangun bertahun-tahun. Sebaliknya, bisnis yang menjaga privasi pelanggan dengan serius akan lebih dipercaya dan dipilih. Mulailah dengan sistem yang aman sejak awal.",
      },
      cta(
        "Kreativita Sinergi membangun website dan sistem dengan keamanan dan privasi sebagai prioritas. Konsultasi gratis untuk menjaga data pelanggan Anda."
      ),
    ],
  },
  {
    slug: "aplikasi-delivery-untuk-bisnis-makanan",
    title: "Aplikasi Delivery Sendiri untuk Bisnis Makanan: Untung atau Buntung?",
    description:
      "Pertimbangan memiliki aplikasi delivery sendiri untuk bisnis makanan dibanding bergantung pada platform pihak ketiga.",
    excerpt:
      "Lelah dengan komisi besar platform delivery? Aplikasi delivery sendiri bisa jadi solusi — tapi ada hal yang perlu dipertimbangkan.",
    date: "2025-07-05",
    category: "Bisnis Online",
    readingTime: "5 menit",
    keywords: ["aplikasi delivery sendiri", "aplikasi pesan antar", "delivery makanan", "aplikasi restoran delivery"],
    content: [
      {
        type: "p",
        text: "Platform delivery pihak ketiga memudahkan, tapi komisinya bisa menggerus margin. Banyak pebisnis makanan mulai mempertimbangkan aplikasi delivery sendiri. Apakah ini langkah tepat? Tergantung skala dan basis pelanggan Anda.",
      },
      { type: "h2", text: "Keuntungan Punya Sistem Sendiri" },
      {
        type: "ul",
        items: [
          "Bebas dari komisi besar per transaksi.",
          "Memiliki data pelanggan secara langsung.",
          "Kendali penuh atas promo dan pengalaman.",
          "Membangun loyalitas pelanggan langsung ke brand Anda.",
        ],
      },
      { type: "h2", text: "Yang Perlu Dipertimbangkan" },
      {
        type: "p",
        text: "Sistem sendiri butuh investasi awal dan upaya mengarahkan pelanggan untuk memakainya. Strategi yang umum: tetap hadir di platform untuk jangkauan, sambil mendorong pelanggan setia memesan langsung lewat sistem Anda yang lebih hemat.",
      },
      cta(
        "Kreativita Sinergi dapat membangun sistem pemesanan dan delivery sesuai kebutuhan bisnis makanan Anda. Konsultasi gratis untuk menghitung kelayakannya."
      ),
    ],
  },
  {
    slug: "dashboard-bisnis-untuk-keputusan",
    title: "Dashboard Bisnis: Mengubah Data Jadi Keputusan yang Tepat",
    description:
      "Manfaat dashboard bisnis untuk memantau performa secara real-time dan membantu pengambilan keputusan berbasis data.",
    excerpt:
      "Data berserakan di banyak tempat? Dashboard bisnis menyatukannya jadi gambaran jelas untuk keputusan yang tepat.",
    date: "2025-06-28",
    category: "Teknologi",
    readingTime: "4 menit",
    keywords: ["dashboard bisnis", "business dashboard", "laporan real-time", "data driven decision"],
    content: [
      {
        type: "p",
        text: "Seiring bisnis tumbuh, data datang dari mana-mana: penjualan, stok, pelanggan, keuangan. Tanpa cara melihatnya secara menyeluruh, keputusan jadi tebakan. Dashboard bisnis menyatukan semua angka penting dalam satu layar yang mudah dipahami.",
      },
      { type: "h2", text: "Yang Bisa Ditampilkan Dashboard" },
      {
        type: "ul",
        items: [
          "Ringkasan penjualan dan tren harian/bulanan.",
          "Produk terlaris dan stok yang perlu perhatian.",
          "Performa per outlet atau per kanal.",
          "Indikator keuangan utama secara real-time.",
        ],
      },
      { type: "h2", text: "Keputusan yang Lebih Cepat & Tepat" },
      {
        type: "p",
        text: "Dengan gambaran yang jelas, Anda bisa segera bertindak — menambah stok yang laris, menghentikan yang merugi, atau menggandakan strategi yang berhasil. Dashboard mengubah data mentah menjadi keunggulan kompetitif.",
      },
      cta(
        "Kreativita Sinergi membangun dashboard bisnis sesuai kebutuhan Anda, terhubung langsung dengan data operasional. Konsultasi gratis untuk memulai."
      ),
    ],
  },
  {
    slug: "psikologi-warna-untuk-website-brand",
    title: "Psikologi Warna untuk Website & Brand: Pilih yang Tepat",
    description:
      "Bagaimana warna memengaruhi persepsi dan emosi pengunjung, serta tips memilih warna website dan brand yang sesuai karakter bisnis.",
    excerpt:
      "Warna bukan sekadar estetika — ia memengaruhi perasaan dan keputusan. Pilih warna brand Anda dengan sadar.",
    date: "2025-06-21",
    category: "Desain",
    readingTime: "4 menit",
    keywords: ["psikologi warna", "warna website", "warna brand", "memilih warna brand"],
    content: [
      {
        type: "p",
        text: "Warna adalah salah satu elemen pertama yang ditangkap mata dan memengaruhi perasaan pengunjung bahkan sebelum mereka membaca. Memilih warna brand dengan sadar membantu menyampaikan pesan yang tepat tentang bisnis Anda.",
      },
      { type: "h2", text: "Kesan Umum Beberapa Warna" },
      {
        type: "ul",
        items: [
          "Biru — kepercayaan, profesional, tenang.",
          "Hijau — segar, sehat, alami.",
          "Merah — energi, mendesak, berani.",
          "Kuning/oranye — ceria, hangat, ramah.",
          "Hitam — elegan, premium, modern.",
        ],
      },
      { type: "h2", text: "Konsistensi Lebih Penting dari Tren" },
      {
        type: "p",
        text: "Pilih palet yang sesuai karakter brand dan target pelanggan, lalu gunakan secara konsisten di website, logo, dan materi pemasaran. Konsistensi inilah yang lama-kelamaan membuat warna Anda dikenali sebagai milik brand Anda.",
      },
      cta(
        "Kreativita Sinergi merancang website dengan palet warna yang selaras dengan brand Anda. Konsultasi gratis untuk tampilan yang berkesan dan konsisten."
      ),
    ],
  },
  {
    slug: "ai-untuk-bisnis-umkm",
    title: "AI untuk Bisnis UMKM: Manfaat Praktis yang Bisa Dipakai Sekarang",
    description:
      "Cara UMKM memanfaatkan AI secara praktis — dari layanan pelanggan, pembuatan konten, hingga analisis, tanpa perlu jadi ahli teknologi.",
    excerpt:
      "AI bukan cuma untuk perusahaan besar. UMKM pun bisa memanfaatkannya untuk bekerja lebih cerdas hari ini juga.",
    date: "2025-06-14",
    category: "Teknologi",
    readingTime: "5 menit",
    keywords: ["AI untuk UMKM", "AI untuk bisnis", "manfaat AI bisnis", "kecerdasan buatan UMKM"],
    content: [
      {
        type: "p",
        text: "Kecerdasan buatan (AI) kini lebih mudah diakses dari sebelumnya. Anda tidak perlu menjadi ahli teknologi untuk memanfaatkannya. Bagi UMKM, AI bisa menghemat waktu dan membantu bekerja lebih cerdas dalam banyak hal sehari-hari.",
      },
      { type: "h2", text: "Pemanfaatan Praktis AI" },
      {
        type: "ul",
        items: [
          "Membantu menulis konten promosi dan caption.",
          "Menjawab pertanyaan pelanggan lewat chatbot.",
          "Merangkum ulasan dan masukan pelanggan.",
          "Membantu analisis data penjualan sederhana.",
          "Mempercepat pekerjaan administratif berulang.",
        ],
      },
      { type: "h2", text: "AI sebagai Asisten, Bukan Pengganti" },
      {
        type: "p",
        text: "AI paling efektif saat dipakai untuk membantu, bukan menggantikan sentuhan manusia. Gunakan untuk mempercepat tugas rutin agar Anda punya lebih banyak waktu fokus pada pelanggan dan pengembangan bisnis.",
      },
      cta(
        "Kreativita Sinergi membantu UMKM memanfaatkan teknologi tepat guna — termasuk AI — dalam website dan sistem bisnis. Konsultasi gratis untuk memulai."
      ),
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

// --- Pagination ---
export const POSTS_PER_PAGE = 12;

export function postsSortedByDate(): BlogPost[] {
  return [...posts].sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function totalBlogPages(): number {
  return Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
}

export function getPostsForPage(page: number): BlogPost[] {
  const start = (page - 1) * POSTS_PER_PAGE;
  return postsSortedByDate().slice(start, start + POSTS_PER_PAGE);
}

// --- Kategori ---
export function categorySlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "dan")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export type Category = { name: string; slug: string; count: number };

export function getCategories(): Category[] {
  const map = new Map<string, number>();
  for (const p of posts) map.set(p.category, (map.get(p.category) ?? 0) + 1);
  return [...map.entries()]
    .map(([name, count]) => ({ name, slug: categorySlug(name), count }))
    .sort((a, b) => b.count - a.count);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return getCategories().find((c) => c.slug === slug);
}

export function getPostsByCategory(slug: string): BlogPost[] {
  return posts.filter((p) => categorySlug(p.category) === slug);
}

// Artikel terkait: utamakan kategori sama (terbaru dulu), lalu lengkapi dgn yg lain.
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const others = posts.filter((p) => p.slug !== post.slug);
  const byDate = (a: BlogPost, b: BlogPost) => +new Date(b.date) - +new Date(a.date);
  const sameCat = others.filter((p) => p.category === post.category).sort(byDate);
  const rest = others.filter((p) => p.category !== post.category).sort(byDate);
  return [...sameCat, ...rest].slice(0, limit);
}
