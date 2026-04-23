import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AOS from 'aos';

const articles = {
  'ecommerce-scalable': {
    title: 'Membangun Ekosistem E-commerce yang Scalable',
    category: 'Technology',
    date: '22 April 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    content: `
      <p>Dalam era digital saat ini, membangun ekosistem e-commerce yang dapat berkembang bersama bisnis Anda adalah kunci kesuksesan jangka panjang. Banyak perusahaan memulai dengan platform sederhana, namun seiring pertumbuhan pengguna, mereka menghadapi berbagai tantangan teknis yang tidak terduga.</p>
      <p>Artikel ini akan membahas prinsip-prinsip fundamental dalam merancang arsitektur e-commerce yang scalable, mulai dari pemilihan database yang tepat hingga implementasi microservices yang memungkinkan sistem Anda menangani ribuan transaksi secara bersamaan.</p>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Arsitektur Microservices</h3>
      <p>Daripada membangun monolithic application yang sulit diskala, pertimbangkan untuk memecah fungsi-fungsi utama seperti catalog, cart, payment, dan inventory menjadi layanan-layanan independen. Setiap layanan dapat diskala sesuai kebutuhan spesifik tanpa mempengaruhi layanan lainnya.</p>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Database yang Tepat</h3>
      <p>Pemilihan database sangat krusial. Untuk data transaksi yang membutuhkan konsistensi, database relasional seperti PostgreSQL masih menjadi pilihan utama. Sementara untuk data cache, session, dan data yang sering dibaca tapi jarang diubah, Redis atau MongoDB bisa menjadi solusi yang lebih efisien.</p>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. Load Balancing & Caching</h3>
      <p>Implementasikan load balancer untuk distribute traffic ke beberapa server aplikasi. Kombinasikan dengan caching strategy yang tepat menggunakan CDN untuk static assets dan in-memory cache untuk data dinamis agar response time tetap cepat meski traffic meningkat.</p>
      <p>Dengan menerapkan prinsip-prinsip ini, Anda dapat membangun ekosistem e-commerce yang tidak hanya kuat secara teknis, tetapi juga mampu beradaptasi dengan pertumbuhan bisnis di masa depan.</p>
    `
  },
  'data-inventory-prediction': {
    title: 'Pentingnya Data Inventory untuk Prediksi Stok',
    category: 'Data Analysis',
    date: '15 April 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    content: `
      <p>Inventory management yang efektif bukan hanya tentang menghitung barang yang masuk dan keluar. Dengan pendekatan berbasis data, Anda dapat memprediksi kebutuhan stok di masa depan, menghindari penumpukan barang yang tidak terjual, dan memaksimalkan efisiensi operasional gudang.</p>
      <p>Dalam artikel ini, kita akan membahas bagaimana historical data dapat digunakan untuk membuat forecast yang akurat menggunakan teknik-teknik sederhana namun powerful yang dapat langsung diterapkan di bisnis Anda.</p>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Mengumpulkan Data yang Relevan</h3>
      <p>Langkah pertama adalah memastikan Anda memiliki data yang bersih dan terstruktur. Catat tidak hanya jumlah barang masuk dan keluar, tapi juga informasi lain seperti tanggal, supplier, customer segment, musim, dan event khusus yang mungkin mempengaruhi permintaan.</p>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Analisis Tren dan Musiman</h3>
      <p>Dengan memvisualisasikan data dalam bentuk chart, Anda dapat melihat pola-pola musiman yang mungkin tidak obvious. Produk tertentu mungkin meningkat permintaannya di akhir tahun, sementara yang lain mungkin naik saat musim tertentu.</p>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. Implementasi Reorder Point</h3>
      <p>Tentukan reorder point untuk setiap produk berdasarkan lead time supplier dan safety stock yang diinginkan. Dengan sistem yang otomatis memicu order ketika stok mencapai titik tertentu, Anda dapat mencegah stockout tanpa harus manually monitor setiap item.</p>
      <p>Kesimpulannya, data-driven inventory management bukan lagi pilihan tetapi kebutuhan. Bisnis yang mampu memanfaatkan data dengan baik akan memiliki competitive advantage yang signifikan di pasar.</p>
    `
  },
  'marketplace-brand-lokal': {
    title: 'Strategi Marketplace untuk Brand Lokal',
    category: 'Digital Marketing',
    date: '10 April 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    content: `
      <p>Memulai bisnis di marketplace seperti Shopee, Tokopedia, atau Lazada terdengar mudah, tapi mempertahankan dan mengembangkan toko di sana membutuhkan strategi yang matang. Dengan jutaan seller berkompetisi untuk perhatian yang sama, brand lokal perlu punya pendekatan yang berbeda.</p>
      <p>Artikel ini akan membagikan insight praktis tentang bagaimana meningkatkan visibilitas toko dan konversi penjualan di marketplace, berdasarkan pengalaman mengelola berbagai akun seller dari berbagai kategori produk.</p>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Optimalkan Produk Listing</h3>
      <p>Foto produk yang professional dan menarik adalah harus. Gunakan multiple angle, Termasuk foto lifestyle yang menunjukkan produk dalam konteks penggunaan. Jangan lupa optimasi judul dengan keywords yang relevan dan deskripsi yang informatif.</p>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Manfaatkan Fitur Promosi</h3>
      <p>Setiap marketplace memiliki algoritma yang memprioritaskan produk dengan aktivitas tinggi. Gunakan fitur-fitur seperti flash sale, voucher toko, dan gratis ongkir secara strategis untuk meningkatkan visibility dan sales velocity.</p>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. Bangun Reputasi dengan Review Management</h3>
      <p>Review positif adalah social proof yang powerful. Kirim pesan follow-up setelah pembelian untuk memastikan customer puas, dan responsif dalam menangani complaint. Tinggi nilai review bukan hanya soal kuantitas, tapi juga respons seller terhadap feedback.</p>
      <p>Dengan konsistensi dalam menerapkan strategi-strategi ini, brand lokal dapat membangun kehadiran yang kuat di marketplace dan meningkatkan konversi secara signifikan.</p>
    `
  }
};

const BlogDetail = () => {
  const { id } = useParams();
  const article = articles[id];

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true });
    if (article) {
      document.title = `${article.title} — Angga.dev`;
    }
  }, [article]);

  if (!article) {
    return (
      <div className="pt-28 pb-20 px-4 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-newspaper text-6xl text-gray-300 dark:text-gray-700 mb-6"></i>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Artikel Tidak Ditemukan</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Artikel yang Anda cari tidak tersedia.</p>
          <Link to="/" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition">
            <i className="fas fa-arrow-left"></i> Kembali ke Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-28 pb-20 px-4 min-h-screen">
      <article className="max-w-3xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm font-bold tracking-widest uppercase">
            {article.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>

        <div className="glass-card rounded-3xl overflow-hidden mb-12 shadow-2xl border border-gray-100 dark:border-purple-900/20" data-aos="zoom-in">
          <img src={article.image} alt={article.title} className="w-full h-80 object-cover" />
        </div>

        <div 
          className="prose prose-purple dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 text-lg leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: article.content }}
          data-aos="fade-up"
        />

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800" data-aos="fade-up">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-4">
              <img 
                src="/Picture/profil.png" 
                alt="Author" 
                className="w-14 h-14 rounded-full border-2 border-purple-500 shadow-md"
                onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Bintang+Anggara&background=a855f7&color=fff&size=128' }}
              />
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Bintang DWI Anggara</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Software Developer & Digital Marketing</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a href="https://github.com/BINTANGDWIANGGARA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-purple-600 hover:text-white transition shadow-sm">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition shadow-sm">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/#blog" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition transform hover:-translate-y-1">
            <i className="fas fa-arrow-left"></i> Kembali ke Blog
          </Link>
        </div>
      </article>
    </main>
  );
};

export default BlogDetail;
