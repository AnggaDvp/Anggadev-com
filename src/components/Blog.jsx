import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ translations, currentLang }) => {
  const blogPosts = [
    {
      id: 'ecommerce-scalable',
      title: currentLang === 'id' ? 'Membangun Ekosistem E-commerce yang Scalable' : 'Building a Scalable E-commerce Ecosystem',
      date: currentLang === 'id' ? '22 April 2026' : 'April 22, 2026',
      readTime: currentLang === 'id' ? '5 menit baca' : '5 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      excerpt: currentLang === 'id' 
        ? 'Bagaimana merancang arsitektur web yang mampu menangani ribuan transaksi tanpa kendala performa...' 
        : 'How to design a web architecture capable of handling thousands of transactions without performance bottlenecks...'
    },
    {
      id: 'data-inventory-prediction',
      title: currentLang === 'id' ? 'Pentingnya Data Inventory untuk Prediksi Stok' : 'Importance of Inventory Data for Stock Prediction',
      date: currentLang === 'id' ? '15 April 2026' : 'April 15, 2026',
      readTime: currentLang === 'id' ? '8 menit baca' : '8 min read',
      category: 'Data Analysis',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      excerpt: currentLang === 'id'
        ? 'Menggunakan data historis untuk menghindari penumpukan stok atau kekurangan barang di gudang...'
        : 'Using historical data to avoid stock accumulation or shortages in the warehouse...'
    },
    {
      id: 'marketplace-brand-lokal',
      title: currentLang === 'id' ? 'Strategi Marketplace untuk Brand Lokal' : 'Marketplace Strategies for Local Brands',
      date: currentLang === 'id' ? '10 April 2026' : 'April 10, 2026',
      readTime: currentLang === 'id' ? '6 menit baca' : '6 min read',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      excerpt: currentLang === 'id'
        ? 'Meningkatkan visibilitas dan konversi penjualan di platform marketplace melalui optimasi data.'
        : 'Increasing visibility and sales conversion on marketplace platforms through data optimization.'
    }
  ];

  return (
    <section id="blog" className="py-24 bg-darkCard border-y border-purple-900/20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <span className="px-4 py-1.5 rounded-full bg-purple-900/30 text-purple-400 text-sm font-bold tracking-widest uppercase mb-6 inline-block">Insights</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {translations[currentLang]['blog-title']}
          </h2>
          <p className="text-gray-400">
            {translations[currentLang]['blog-desc']}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <article key={post.id} className="glass-card rounded-3xl overflow-hidden group flex flex-col border border-white/5 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500" data-aos="fade-up" data-aos-delay={100 * (idx + 1)}>
              <div className="relative h-56 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold rounded-lg uppercase tracking-wider">{post.category}</span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col bg-[#0a0a0a]">
                <div className="flex items-center gap-3 mb-4 text-[10px] uppercase tracking-widest font-bold text-purple-400">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-purple-400 transition-colors">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-8 flex-1 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-purple-400 font-bold text-sm group/link">
                  <span className="relative">
                    {currentLang === 'id' ? 'Baca Selengkapnya' : 'Read More'}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover/link:w-full"></span>
                  </span>
                  <i className="fas fa-arrow-right transition-transform group-hover/link:translate-x-2"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
