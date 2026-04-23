import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AOS from 'aos';

const BlogDetail = ({ translations, currentLang }) => {
  const { id } = useParams();
  
  const articlesData = {
    'ecommerce-scalable': {
      title: currentLang === 'id' ? 'Membangun Ekosistem E-commerce yang Scalable' : 'Building a Scalable E-commerce Ecosystem',
      category: 'Technology',
      date: currentLang === 'id' ? '22 April 2026' : 'April 22, 2026',
      readTime: currentLang === 'id' ? '5 menit baca' : '5 min read',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      content: currentLang === 'id' ? `
        <p>Dalam era digital saat ini, membangun ekosistem e-commerce yang dapat berkembang bersama bisnis Anda adalah kunci kesuksesan jangka panjang. Banyak perusahaan memulai dengan platform sederhana, namun seiring pertumbuhan pengguna, mereka menghadapi berbagai tantangan teknis yang tidak terduga.</p>
        <p>Artikel ini akan membahas prinsip-prinsip fundamental dalam merancang arsitektur e-commerce yang scalable, mulai dari pemilihan database yang tepat hingga implementasi microservices yang memungkinkan sistem Anda menangani ribuan transaksi secara bersamaan.</p>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Arsitektur Microservices</h3>
        <p>Daripada membangun monolithic application yang sulit diskala, pertimbangkan untuk memecah fungsi-fungsi utama seperti catalog, cart, payment, dan inventory menjadi layanan-layanan independen. Setiap layanan dapat diskala sesuai kebutuhan spesifik tanpa mempengaruhi layanan lainnya.</p>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Database yang Tepat</h3>
        <p>Pemilihan database sangat krusial. Untuk data transaksi yang membutuhkan konsistensi, database relasional seperti PostgreSQL masih menjadi pilihan utama. Sementara untuk data cache, session, dan data yang sering dibaca tapi jarang diubah, Redis atau MongoDB bisa menjadi solusi yang lebih efisien.</p>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. Load Balancing & Caching</h3>
        <p>Implementasikan load balancer untuk distribute traffic ke beberapa server aplikasi. Kombinasikan dengan caching strategy yang tepat menggunakan CDN untuk static assets dan in-memory cache untuk data dinamis agar response time tetap cepat meski traffic meningkat.</p>
        <p>Dengan menerapkan prinsip-prinsip ini, Anda dapat membangun ekosistem e-commerce yang tidak hanya kuat secara teknis, tetapi juga mampu beradaptasi dengan pertumbuhan bisnis di masa depan.</p>
      ` : `
        <p>In today's digital era, building an e-commerce ecosystem that can grow with your business is the key to long-term success. Many companies start with simple platforms, but as user growth occurs, they face various unexpected technical challenges.</p>
        <p>This article will discuss the fundamental principles in designing a scalable e-commerce architecture, from choosing the right database to implementing microservices that allow your system to handle thousands of concurrent transactions.</p>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Microservices Architecture</h3>
        <p>Instead of building a monolithic application that's hard to scale, consider breaking down core functions like catalog, cart, payment, and inventory into independent services. Each service can be scaled according to specific needs without affecting other services.</p>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. The Right Database</h3>
        <p>Database selection is crucial. For transactional data requiring consistency, relational databases like PostgreSQL remain the primary choice. Meanwhile, for cache, session, and frequently read but rarely changed data, Redis or MongoDB can be more efficient solutions.</p>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. Load Balancing & Caching</h3>
        <p>Implement a load balancer to distribute traffic across multiple application servers. Combine this with an appropriate caching strategy using CDNs for static assets and in-memory cache for dynamic data to keep response times fast even as traffic increases.</p>
        <p>By applying these principles, you can build an e-commerce ecosystem that is not only technically robust but also capable of adapting to future business growth.</p>
      `
    },
    'data-inventory-prediction': {
      title: currentLang === 'id' ? 'Pentingnya Data Inventory untuk Prediksi Stok' : 'Importance of Inventory Data for Stock Prediction',
      category: 'Data Analysis',
      date: currentLang === 'id' ? '15 April 2026' : 'April 15, 2026',
      readTime: currentLang === 'id' ? '8 menit baca' : '8 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      content: currentLang === 'id' ? `
        <p>Inventory management yang efektif bukan hanya tentang menghitung barang yang masuk dan keluar. Dengan pendekatan berbasis data, Anda dapat memprediksi kebutuhan stok di masa depan, menghindari penumpukan barang yang tidak terjual, dan memaksimalkan efisiensi operasional gudang.</p>
        <p>Dalam artikel ini, kita akan membahas bagaimana historical data dapat digunakan untuk membuat forecast yang akurat menggunakan teknik-teknik sederhana namun powerful yang dapat langsung diterapkan di bisnis Anda.</p>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Mengumpulkan Data yang Relevan</h3>
        <p>Langkah pertama adalah memastikan Anda memiliki data yang bersih dan terstruktur. Catat tidak hanya jumlah barang masuk dan keluar, tapi juga informasi lain seperti tanggal, supplier, customer segment, musim, dan event khusus yang mungkin mempengaruhi permintaan.</p>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Analisis Tren dan Musiman</h3>
        <p>Dengan memvisualisasikan data dalam bentuk chart, Anda dapat melihat pola-pola musiman yang mungkin tidak obvious. Produk tertentu mungkin meningkat permintaannya di akhir tahun, sementara yang lain mungkin naik saat musim tertentu.</p>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. Implementasi Reorder Point</h3>
        <p>Tentukan reorder point untuk setiap produk berdasarkan lead time supplier dan safety stock yang diinginkan. Dengan sistem yang otomatis memicu order ketika stok mencapai titik tertentu, Anda dapat mencegah stockout tanpa harus manually monitor setiap item.</p>
        <p>Kesimpulannya, data-driven inventory management bukan lagi pilihan tetapi kebutuhan. Bisnis yang mampu memanfaatkan data dengan baik akan memiliki competitive advantage yang signifikan di pasar.</p>
      ` : `
        <p>Effective inventory management is not just about counting incoming and outgoing goods. With a data-driven approach, you can predict future stock needs, avoid accumulation of unsold goods, and maximize warehouse operational efficiency.</p>
        <p>In this article, we will discuss how historical data can be used to create accurate forecasts using simple yet powerful techniques that can be directly applied to your business.</p>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Collecting Relevant Data</h3>
        <p>The first step is to ensure you have clean and structured data. Record not just the quantity of incoming and outgoing goods, but also other information such as date, supplier, customer segment, season, and special events that might affect demand.</p>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Trend and Seasonal Analysis</h3>
        <p>By visualizing data in chart form, you can spot seasonal patterns that might not be obvious. Certain products might see increased demand at the end of the year, while others might peak during specific seasons.</p>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. Reorder Point Implementation</h3>
        <p>Determine a reorder point for each product based on supplier lead time and desired safety stock. With a system that automatically triggers an order when stock reaches a certain point, you can prevent stockouts without having to manually monitor every item.</p>
        <p>In conclusion, data-driven inventory management is no longer an option but a necessity. Businesses that can leverage data well will have a significant competitive advantage in the market.</p>
      `
    },
    'marketplace-brand-lokal': {
      title: currentLang === 'id' ? 'Strategi Marketplace untuk Brand Lokal' : 'Marketplace Strategies for Local Brands',
      category: 'Digital Marketing',
      date: currentLang === 'id' ? '10 April 2026' : 'April 10, 2026',
      readTime: currentLang === 'id' ? '6 menit baca' : '6 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      content: currentLang === 'id' ? `
        <p>Memulai bisnis di marketplace seperti Shopee, Tokopedia, atau Lazada terdengar mudah, tapi mempertahankan dan mengembangkan toko di sana membutuhkan strategi yang matang. Dengan jutaan seller berkompetisi untuk perhatian yang sama, brand lokal perlu punya pendekatan yang berbeda.</p>
        <p>Artikel ini akan membagikan insight praktis tentang bagaimana meningkatkan visibilitas toko dan konversi penjualan di marketplace, berdasarkan pengalaman mengelola berbagai akun seller dari berbagai kategori produk.</p>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Optimalkan Produk Listing</h3>
        <p>Foto produk yang professional dan menarik adalah harus. Gunakan multiple angle, Termasuk foto lifestyle yang menunjukkan produk dalam konteks penggunaan. Jangan lupa optimasi judul dengan keywords yang relevan dan deskripsi yang informatif.</p>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Manfaatkan Fitur Promosi</h3>
        <p>Setiap marketplace memiliki algoritma yang memprioritaskan produk dengan aktivitas tinggi. Gunakan fitur-fitur seperti flash sale, voucher toko, dan gratis ongkir secara strategis untuk meningkatkan visibility dan sales velocity.</p>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. Bangun Reputasi dengan Review Management</h3>
        <p>Review positif adalah social proof yang powerful. Kirim pesan follow-up setelah pembelian untuk memastikan customer puas, dan responsif dalam menangani complaint. Tinggi nilai review bukan hanya soal kuantitas, tapi juga respons seller terhadap feedback.</p>
        <p>Dengan konsistensi dalam menerapkan strategi-strategi ini, brand lokal dapat membangun kehadiran yang kuat di marketplace dan meningkatkan konversi secara signifikan.</p>
      ` : `
        <p>Starting a business on marketplaces like Shopee, Tokopedia, or Lazada sounds easy, but maintaining and growing a store there requires a solid strategy. With millions of sellers competing for the same attention, local brands need a different approach.</p>
        <p>This article will share practical insights on how to increase store visibility and sales conversion on marketplaces, based on experience managing various seller accounts across different product categories.</p>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">1. Optimize Product Listings</h3>
        <p>Professional and attractive product photos are a must. Use multiple angles, including lifestyle photos that show the product in context. Don't forget to optimize titles with relevant keywords and informative descriptions.</p>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">2. Leverage Promotional Features</h3>
        <p>Each marketplace has an algorithm that prioritizes products with high activity. Use features like flash sales, shop vouchers, and free shipping strategically to increase visibility and sales velocity.</p>
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">3. Build Reputation with Review Management</h3>
        <p>Positive reviews are powerful social proof. Send follow-up messages after purchase to ensure customer satisfaction, and be responsive in handling complaints. High review ratings are not just about quantity, but also about the seller's response to feedback.</p>
        <p>By consistently applying these strategies, local brands can build a strong presence on marketplaces and significantly increase conversions.</p>
      `
    }
  };

  const article = articlesData[id];

  useEffect(() => {
    // window.scrollTo(0, 0); // Removed to allow ScrollToTop component to handle it
    AOS.init({ duration: 600, easing: 'ease-out-cubic', once: true });
    if (article) {
      document.title = `${article.title} — Angga.dev`;
    }
  }, [article]);

  if (!article) {
    return (
      <div className="pt-28 pb-20 px-4 min-h-screen flex items-center justify-center bg-darkBg">
        <div className="text-center">
          <i className="fas fa-file-alt text-6xl text-gray-700 mb-6"></i>
          <h2 className="text-2xl font-bold text-white mb-4">
            {currentLang === 'id' ? 'Artikel Tidak Ditemukan' : 'Article Not Found'}
          </h2>
          <p className="text-gray-400 mb-8">
            {currentLang === 'id' ? 'Artikel yang Anda cari tidak tersedia.' : 'The article you are looking for is not available.'}
          </p>
          <Link to="/" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition shadow-lg shadow-purple-900/20">
            <i className="fas fa-arrow-left"></i> {currentLang === 'id' ? 'Kembali ke Portfolio' : 'Back to Portfolio'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-28 pb-20 px-4 bg-darkBg min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="mb-8" data-aos="fade-up">
            <Link to="/" className="inline-flex items-center gap-2 text-purple-400 font-bold hover:gap-3 transition-all mb-8">
              <i className="fas fa-arrow-left"></i> {currentLang === 'id' ? 'Kembali' : 'Back'}
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-purple-900/30 text-purple-400 text-xs font-bold tracking-widest uppercase">
                {article.category}
              </span>
              <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">{article.date}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
              {article.title}
            </h1>
          </div>

          <div className="glass-card rounded-3xl overflow-hidden mb-12 shadow-2xl border border-purple-900/20" data-aos="zoom-in">
            <img src={article.image} alt={article.title} className="w-full h-[450px] object-cover" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8" data-aos="fade-right">
              <div 
                className="prose prose-invert prose-purple max-w-none text-gray-300 leading-relaxed text-lg
                  prose-h3:text-white prose-h3:font-bold prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
                  prose-p:mb-6"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>

            <div className="lg:col-span-4 space-y-8" data-aos="fade-left">
              <div className="glass-card p-8 rounded-3xl border border-purple-900/20 bg-white/5">
                <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                  <i className="fas fa-share-alt text-purple-500"></i> {currentLang === 'id' ? 'Bagikan Artikel' : 'Share Article'}
                </h4>
                <div className="flex gap-3">
                  <a href="https://github.com/BINTANGDWIANGGARA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition shadow-sm">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/bintang-dwi-anggara-938383382/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition shadow-sm">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.instagram.com/bgststarrr_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition shadow-sm">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogDetail;
