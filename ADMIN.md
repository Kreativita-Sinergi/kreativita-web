# Panel Admin Kreativita

Panel internal di `/admin` untuk mengelola calon klien, membuat **penawaran/CV** (proposal),
mengirimnya via **email otomatis + PDF**, dan membagikan **link publik** yang bisa dilacak.
Mendukung klien dalam & luar negeri (bahasa ID/EN, mata uang IDR/USD).

## Fitur

- **Login admin** (1 akun, sesi cookie ber-tanda-tangan).
- **Klien**: CRUD kontak calon klien (nama, perusahaan, email, negara, bahasa, status pipeline).
- **Penawaran**: editor item dinamis, diskon, pajak, multi-currency, total otomatis.
- **Kirim ke klien**: email HTML rapi + lampiran PDF (via Resend), subjek & pesan bisa diubah.
- **Link publik** `/proposal/[token]`: halaman penawaran yang bisa dibuka klien; status otomatis
  jadi "Dibuka" saat klien melihatnya. Tombol unduh PDF & CTA WhatsApp/Email.
- **Dashboard**: ringkasan klien, deal, penawaran terkirim, dan aktivitas email.

## Setup (sekali)

1. **Database Postgres** — buat gratis di [Neon](https://neon.tech) atau [Supabase](https://supabase.com).
   Tabel dibuat otomatis saat pertama dipakai (tidak perlu migrasi manual).
2. **Resend** — daftar di [resend.com](https://resend.com), verifikasi domain
   `kreativitasinergi.com`, lalu buat API key.
3. Salin `.env.example` → `.env.local` dan isi:
   ```
   DATABASE_URL=postgres://...        # connection string (pakai "pooler" untuk Vercel)
   RESEND_API_KEY=re_...
   RESEND_FROM="Kreativita Sinergi <halo@kreativitasinergi.com>"
   ADMIN_EMAIL=halo@kreativitasinergi.com
   ADMIN_PASSWORD=...                 # password login admin
   AUTH_SECRET=...                    # `openssl rand -hex 32`
   NEXT_PUBLIC_SITE_URL=https://www.kreativitasinergi.com   
   ```
4. Jalankan `npm run dev`, buka `http://localhost:3000/admin`.

> Di **Vercel**, isi semua variabel di atas pada Project → Settings → Environment Variables.

## Alur pakai

1. **Klien → + Tambah klien** (atur bahasa ID/EN sesuai klien dalam/luar negeri).
2. Dari klien, **Buat penawaran** → isi item (ada template cepat), diskon/pajak, mata uang.
3. Buka detail penawaran → **Kirim email + PDF**, atau **Salin link publik** untuk dibagikan manual
   (WhatsApp, dll). Bisa juga **Unduh PDF** untuk dikirim sendiri.
4. Pantau status (Terkirim → Dibuka → Diterima/Ditolak) di daftar penawaran.

## Catatan

- `/admin`, `/proposal`, `/api` sudah di-`disallow` di `robots.txt` (tidak diindeks Google).
- Token link publik bersifat acak (tidak bisa ditebak); siapa pun dengan link bisa melihat penawaran.
- Kode admin terisolasi di `src/app/admin/`, `src/app/proposal/`, `src/app/api/proposal/`,
  `src/components/admin/`, dan `src/lib/admin/` — tidak mengubah situs marketing yang ada.
