import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 'sistem-stok-gudang',
      title: 'Sistem Stok Gudang',
      desc: 'Aplikasi berbasis web untuk mengelola pergerakan barang secara akurat. Memudahkan pemantauan keluar masuk stok barang di gudang perusahaan secara real-time.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      category: 'Inventory',
      tech: [
        { name: 'Laravel', icon: 'fab fa-laravel', color: 'bg-purple-600' },
        { name: 'MySQL', icon: 'fas fa-database', color: 'bg-blue-600' }
      ]
    },
    {
      id: 'sistem-absensi-digital',
      title: 'Sistem Absensi Digital',
      desc: 'Platform pintar untuk memonitor kehadiran karyawan secara real-time. Menyederhanakan proses pencatatan, rekapitulasi, dan manajemen laporan bagi divisi HRD.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      category: 'HR & Management',
      tech: [
        { name: 'PHP Native', icon: 'fab fa-php', color: 'bg-indigo-600' },
        { name: 'JavaScript', icon: 'fab fa-js', color: 'bg-yellow-500' }
      ]
    },
    {
      id: 'dashboard-keuangan',
      title: 'Dashboard Keuangan & Laporan',
      desc: 'Sistem komprehensif yang membantu pencatatan arus kas secara presisi, terintegrasi dengan pembuat laporan otomatis untuk pengambilan keputusan strategis.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      category: 'Finance',
      tech: [
        { name: 'Laravel', icon: 'fab fa-laravel', color: 'bg-purple-600' },
        { name: 'Excel Export', icon: 'fas fa-file-excel', color: 'bg-green-600' }
      ]
    },
    {
      id: 'sistem-sales-order',
      title: 'Sistem Sales Order Tersentralisasi',
      desc: 'Platform B2B untuk mengelola pesanan penjualan. Membantu tim sales mempercepat proses transaksi dan memonitor status order.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      category: 'E-Commerce B2B',
      tech: [
        { name: 'PHP', icon: 'fab fa-php', color: 'bg-indigo-600' },
        { name: 'Sales API', icon: 'fas fa-shopping-cart', color: 'bg-orange-600' }
      ]
    }
  ];

  return (
    <section id="proyek" className="py-24 bg-gray-50 dark:bg-darkBg relative transition-colors duration-300 border-t border-gray-200 dark:border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16" data-aos="fade-up">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Proyek <span className="text-purple-600 dark:text-purple-500">Unggulan</span></h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Portfolio karya nyata yang didesain khusus untuk menyelesaikan masalah operasional dan meningkatkan efisiensi perusahaan.</p>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="https://github.com/BINTANGDWIANGGARA" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 flex items-center gap-2 font-bold transition group bg-purple-100 dark:bg-purple-900/30 px-6 py-3 rounded-full">
              Lihat di GitHub <i className="fab fa-github text-xl group-hover:rotate-12 transition"></i>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <article key={project.id} className="glass-card rounded-2xl overflow-hidden group relative flex flex-col" data-aos="fade-up" data-aos-delay={100 * (idx + 1)}>
              <div className="relative h-64 overflow-hidden">
                <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/30 to-transparent"></div>
                
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 dark:bg-black/60 backdrop-blur-md text-gray-900 dark:text-white text-xs rounded-full font-bold shadow-sm">{project.category}</span>
                </div>
                
                <div className="absolute bottom-4 left-6 flex gap-2">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className={`px-3 py-1 ${t.color}/90 backdrop-blur-md text-white text-xs rounded-md font-medium shadow-sm flex items-center gap-1`}>
                      <i className={t.icon}></i> {t.name}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col bg-white dark:bg-[#0a0a0a]">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm leading-relaxed flex-1">{project.desc}</p>
                
                <div className="flex gap-4 mt-auto">
                  <Link to={`/detail/${project.id}`} className="flex-1 text-center bg-purple-600 text-white py-3 rounded-xl text-sm font-bold hover:bg-purple-700 dark:hover:bg-purple-500 shadow-md transition transform hover:-translate-y-1">Detail</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
