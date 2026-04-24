# Portfolio - Bintang Dwi Anggara

Proyek ini adalah website portfolio pribadi untuk Bintang Dwi Anggara, seorang Software Developer. Website ini dirancang dengan gaya modern, estetika *glassmorphism*, fitur interaktif yang mulus, dan dukungan penuh untuk tema Gelap/Terang (Dark Mode Toggle).

## Fitur Utama

- **Estetika Modern & Responsive**: Dirancang menggunakan Tailwind CSS, kompatibel untuk tampilan Desktop, Tablet, maupun Mobile.
- **Dark/Light Mode Toggle**: Pengguna dapat mengganti tema sesuai kenyamanan mata. Preferensi tema akan disimpan otomatis secara lokal (*local storage*).
- **Custom Interactive Cursor**: Penunjuk mouse (*cursor*) default diubah menjadi dot ungu bercahaya dengan outline interaktif yang membesar saat melakukan *hover* pada tombol, gambar, atau *card*.
- **AOS (Animate On Scroll)**: Integrasi animasi halus saat pengguna melakukan *scrolling*.
- **Micro-interactions**: Efek 3D tilt pada gambar profil, efek *glow* saat hover pada *card*, dan transisi warna yang mulus.
- **Glassmorphism Design**: Menggunakan lapisan transparan dengan *backdrop blur* untuk tampilan *card* dan *navbar*.

## Tech Stack

- **HTML5**: Struktur kerangka utama website.
- **Tailwind CSS**: Framework CSS *utility-first* untuk styling cepat, konsisten, dan responsif.
- **JavaScript (Vanilla)**: Mengelola logika Dark Mode Toggle, Custom Cursor, dan interaktivitas ringan.
- **AOS Library**: Pustaka eksternal untuk animasi *fade, zoom*, dan transisi saat elemen masuk ke dalam *viewport*.
- **FontAwesome**: Pustaka ikon berbasis vektor.
- **Google Fonts (Space Grotesk)**: Tipografi modern dengan sentuhan futuristik.

## Struktur Direktori

```text
Anggaporto/
│
├── index.html       # File utama yang berisi kerangka struktur HTML dan skrip
├── profile.jpg      # Gambar profil resolusi tinggi untuk Hero & About Section (Silakan sesuaikan nama file)
└── README.md        # Dokumentasi teknis proyek
```

## Panduan Kustomisasi & Pemeliharaan

1. **Mengubah Gambar Profil**
   Gambar profil terintegrasi pada dua bagian: *Hero Section* (lingkaran) dan *About Section* (potret). 
   - Pastikan gambar Anda diberi nama `profile.jpg` and letakkan satu folder dengan `index.html`.
   - Atau, ubah atribut `src="profile.jpg"` pada baris `<img src="...">` di dalam `index.html` sesuai dengan nama gambar Anda.

2. **Mengubah Warna Utama**
   Jika Anda ingin mengubah tema warna dari ungu (`purple-500`, `purple-600`) ke warna lain (misal: biru atau hijau), Anda bisa melakukan "Find & Replace" pada editor kode Anda:
   - Cari kelas `purple-` and ubah menjadi `blue-` atau warna Tailwind lainnya.

3. **Menambah/Menghapus Proyek Baru**
   Untuk memodifikasi Proyek Unggulan, cari bagian dengan ID `<section id="proyek">`. 
   Duplikat atau hapus div dengan kelas `glass-card` yang membungkus masing-masing proyek.

4. **Pengaturan Animasi**
   Durasi, *delay*, dan efek animasi dikontrol melalui atribut `data-aos="..."`.
   - Contoh: `data-aos="fade-up"` atau `data-aos-delay="200"`.
   - Anda dapat merujuk ke dokumentasi resmi [AOS Library](https://michalsnik.github.io/aos/).

## Pengujian Kompatibilitas

Website ini sudah diuji untuk kompatibilitas dan performa pada:
- **Browser**: Google Chrome, Mozilla Firefox, Microsoft Edge, Safari.
- **Device**: Resolusi layar di atas 1024px (Desktop/Laptop), 768px (Tablet), dan 375px (Mobile/Smartphone).
*Catatan: Custom cursor secara otomatis dinonaktifkan pada perangkat sentuh (Mobile/Tablet) untuk memastikan User Experience (UX) tetap optimal.*

---
# Anggadev-com
Ini adalah website portofolio saya yang berfokus pengembangan website dan serta marketplace/marketing
