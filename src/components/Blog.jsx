import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ translations, currentLang }) => {
  const blogPosts = [
    {
      id: 'ecommerce-scalable',
      title: 'Membangun Ekosistem E-commerce yang Scalable',
      date: '22 April 2026',
      readTime: '5 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Bagaimana merancang arsitektur web yang mampu menangani ribuan transaksi tanpa kendala performa...'
    },
    {
      id: 'data-inventory-prediction',
      title: 'Pentingnya Data Inventory untuk Prediksi Stok',
      date: '15 April 2026',
      readTime: '8 min read',
      category: 'Data Analysis',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Menggunakan data historis untuk menghindari penumpukan stok atau kekurangan barang di gudang...'
    },
    {
      id: 'marketplace-brand-lokal',
      title: 'Strategi Marketplace untuk Brand Lokal',
      date: '10 April 2026',
      readTime: '6 min read',
      category: 'Digital Marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Meningkatkan visibilitas dan konversi penjualan di platform marketplace melalui optimasi data.'
    }
  ];

  return (
    <section id="blog" className="py-24 bg-white dark:bg-darkCard border-y border-gray-200 dark:border-purple-900/20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <span className="px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm font-bold tracking-widest uppercase mb-6 inline-block">Insights</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {translations[currentLang]['blog-title']}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {translations[currentLang]['blog-desc']}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <article key={post.id} className="glass-card rounded-2xl overflow-hidden group flex flex-col" data-aos="fade-up" data-aos-delay={100 * (idx + 1)}>
              <div className="relative h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-[10px] font-bold rounded-full uppercase">{post.category}</span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 transition">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-purple-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Baca Selengkapnya <i className="fas fa-arrow-right"></i>
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
