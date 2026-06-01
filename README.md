# Cerpen Lyona - Website Cerita Pendek Estetik & Minimalis

Website kumpulan cerita pendek (cerpen) orisinal dari **Ditta Lyona (Ratu Marga Ditta)**. Didesain dengan estetika modern bergaya toska (turquoise) yang menenangkan, berkarakter minimalis, serta sepenuhnya responsif.

## Fitur Utama

1. **Desain Toska Minimalis & Responsif:** Menggunakan paduan palet warna toska modern, tipografi elegan (*Plus Jakarta Sans*), serta tata letak responsif yang nyaman dibaca di perangkat seluler maupun desktop.
2. **Dashboard Decap CMS:** Dilengkapi integrasi Decap CMS di rute `/admin/` untuk memperbarui cerita pendek secara dinamis. Mendukung pengunggahan sampul cerpen, pengisian ringkasan, kategori, serta otomasi tanggal upload.
3. **Menu Hamburger dengan Efek Hover Premium:** Tombol menu navigasi hamburger interaktif yang membuka menu overlay artistik dengan tautan:
   - **Koleksi Cerpen** (Halaman Utama)
   - **Tentang Web** (Profil Ditta Lyona)
   - **Contact Us** (Facebook, YouTube, Instagram, dan Kontak Surel)
   Masing-masing tombol memiliki animasi hover yang elegan dan mengalir.
4. **Fitur Anti-Copy Teks Cerpen:** Melindungi konten tulisan cerpen dari penyalinan tidak sah menggunakan proteksi ganda:
   - Pembatasan tingkat CSS (`user-select: none`).
   - Pencegahan tingkat JavaScript untuk memblokir event `copy`, `cut`, klik kanan (konteks menu), drag teks, serta tombol pintas keyboard (seperti `Ctrl+C`, `Ctrl+A`, `Ctrl+U`, `Ctrl+S`, `F12`, dan developer tools).
   - Toast notifikasi elegan yang memberikan peringatan instan saat pembaca berupaya menyalin teks cerita.
5. **Kustomisasi Open Graph:** Konfigurasi metadata Open Graph terintegrasi penuh untuk optimasi berbagi sosial media (Facebook, Twitter, dll) dengan logo OG kustom (`/og-image.png`).

## Teknologi yang Digunakan

- **Framework:** [TanStack Start](https://tanstack.com/router/v1/docs/start/overview) (React 19 + TanStack Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (menggunakan oklch & variabel warna kustom `@theme`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **CMS:** [Decap CMS](https://decapcms.org/) (didukung Netlify Identity & Git Gateway)
- **Content Engine:** [Content Collections](https://www.content-collections.dev/) (Markdown ke tipe TypeScript aman)
- **Deployment:** [Netlify](https://www.netlify.com/)

## Cara Menjalankan Project Secara Lokal

### Prasyarat

- Node.js versi 18 atau lebih baru.
- Netlify CLI terpasang secara global (`npm install -g netlify-cli`).

### Langkah Pengembangan

1. **Pasang dependensi:**
   ```bash
   npm install
   ```

2. **Jalankan server pengembangan lokal dengan Netlify CLI:**
   ```bash
   netlify dev
   ```
   *Catatan: Menggunakan `netlify dev` penting untuk menyimulasikan API Netlify Identity dan Git Gateway lokal agar panel admin Decap CMS dapat diakses.*

3. **Buka aplikasi:**
   Akses `http://localhost:8888` pada peramban Anda. Untuk membuka panel manajemen konten, kunjungi `http://localhost:8888/admin/`.

## Struktur Konten Cerpen

Setiap cerpen ditulis dalam format Markdown dan disimpan pada direktori `content/posts/` dengan format frontmatter berikut:

```markdown
---
title: "Judul Cerita Anda"
summary: "Ringkasan cerita pendek dalam satu atau dua kalimat."
date: 2026-06-01
categories:
  - Romansa
image: /images/uploads/sampul-cerita.png
---

Isi cerita pendek Anda di sini...
```
