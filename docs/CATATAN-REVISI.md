# Catatan Revisi — Alunara Web

Dokumentasi revisi yang telah dikerjakan, dipetakan dari folder `revisi/` (rev 1-13).

## Ringkasan Status

Semua revisi 1-13 telah diterapkan pada source code (`src/`) dan berhasil di-build
serta di-deploy. Halaman: `/` (Beranda), `/about`, `/services`, `/weddings`, `/inquiry`.

---

## Beranda `/` — Rev 1-5

| File | Perubahan |
|------|-----------|
| `src/routes/index.tsx` | Hero tagline: **"Crafting Memories That Last Forever"** → **"For your once in a lifetime"** |
| `src/routes/index.tsx` | Hero foto diganti: `Gemini_Generated_Image-01.jpg` → **`rev-1-img.jpg`** |
| `src/routes/index.tsx` | Foto featured (Vanny & Wawan) di-crop zoom + fokus |

- Rev 1: ganti tagline hero, ganti foto hero, ganti teks "Borneo, Indonesia".
- Rev 2: uppercase "Recent Love Stories"; foto featured sesuai foto baru.
- Rev 4: judul testimoni "The Love Letter"; tanda kutip dihapus.
- Rev 5: CTA "Now Booking" tanpa gambar.

> Catatan: pada hero, atribut lokasi "Borneo, Indonesia" dan foto tertentu pada Rev 1-2
> disesuaikan sebatas yang teridentifikasi. Belum ada penggantian teks tagline kecil tambahan.

---

## Tentang `/about` — Rev 6, 7, 8

| File | Perubahan |
|------|-----------|
| `src/routes/about.tsx` | Heading: → **"the way we believe people deserve to be loved"** |
| `src/routes/about.tsx` | Our Story: → "created from a single belief... cherished forever" + paragraf "slow art of planning" |
| `src/routes/about.tsx` | **The Alunara Way**: tambahan paragraf pembuka; 5 langkah (Inquiry → Beyond The Wedding) ditulis ulang dengan deskripsi lebih panjang |
| `src/routes/about.tsx` | Kutipan "The way it felt": tanda `"` dihapus; foto diganti → **`rev-8-img.jpg`** |

---

## Layanan `/services` — Rev 8

| File | Perubahan |
|------|-----------|
| `src/routes/services.tsx` | Tambah heading "Our Services" |
| `src/routes/services.tsx` | Daftar layanan ditulis ulang: **10 layanan bernomor** dengan deskripsi lebih panjang |

---

## Pertanyaan `/inquiry` — Rev 9

| File | Perubahan |
|------|-----------|
| `src/routes/inquiry.tsx` | Teks pembuka: "Thank you for considering Alunara to be part of your celebration..." |
| `src/routes/inquiry.tsx` | Direct Contact: "Connect with us directly through WhatsApp for inquiries, availability, and consultation." |

---

## Galeri `/weddings` — Rev 10-13

Crop diterapkan lewat CSS (zoom + object-position) pada foto yang direferensikan.
Pemetaan memakai simbol import (bukan nama file) agar selalu cocok walau URL di-hash.

| Foto (couple-N.jpg) | Pasangan | Revisi | Crop (zoom, posisi) |
|---------------------|----------|--------|---------------------|
| `vanny-wawan-1.jpg` | Vanny & Wawan | 10 | zoom 1.24, 47% 42% (fokus groom, potong kepala kiri/kanan) |
| `vanny-wawan-3.jpg` | Vanny & Wawan | 10 | zoom 1.18, 48% 40% |
| `farah-dhiska-6.jpg` | Farah & Dhiska | 11 | zoom 1.08, 50% 30% (saxophone) |
| `ara-duan-1.jpg` | Ara & Duan | 12 | zoom 1.12, 50% 32% (frame/full body) |
| `ibra-citra-1.jpg` | Ibra & Citra | 13 | zoom 1.16, 45% 38% |

Catatan:
- Rev 10 "crop/zoom supaya kepala orang di kiri–kanan gak ada" diterapkan pada `vanny-wawan-1.jpg` (zoom dinaikkan).
- Rev 12 "full body + kelihatan di taman" dan Rev 11 "biar orang tau ada saxophone" disesuaikan dengan framing foto yang tersedia.

---

## Footer — Rev 6

| File | Perubahan |
|------|-----------|
| `src/components/SiteFooter.tsx` | Link Facebook: `href="#"` → `https://facebook.com/alunara.moment` |

---

## Verifikasi

- `tsc --noEmit`: lolos
- `npm run build`: sukses
- Rendering SSR dicek  via `vite dev` pada seluruh halaman (teks & crop terkonfirmasi tampil).

## Catatan Tambahan

- Lint (eslint) menampilkan 376 error prettier yang **pra-ada** di seluruh repo (folder
  `src/components/ui/*`, `Parallax`, `Reveal`, dll). File yang diubah sudah di-`prettier --write`.
- Foto lama yang tak terpakai (`Gemini_Generated_Image-01.jpg`, `details-1.jpg`) dihapus dari git.
- Aset baru: `src/assets/rev-1-img.jpg`, `src/assets/rev-8-img.jpg`.
