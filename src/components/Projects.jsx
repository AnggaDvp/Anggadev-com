import React from 'react';
import { Link } from 'react-router-dom';

const Projects = ({ translations, currentLang }) => {
  const projects = [
    {
      id: 'sistem-stok-gudang',
      title: currentLang === 'id' ? 'Sistem Stok Gudang' : 'Warehouse Inventory System',
      desc: currentLang === 'id' 
        ? 'Aplikasi berbasis web untuk mengelola pergerakan barang secara akurat. Memudahkan pemantauan keluar masuk stok barang di gudang perusahaan secara real-time.'
        : 'Web-based application to manage goods movement accurately. Simplifies monitoring of stock inflow and outflow in company warehouses in real-time.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      category: 'Inventory',
      github: 'https://github.com/BINTANGDWIANGGARA/warehouse-inventory-system',
      tech: [
        { name: 'Laravel', icon: 'fab fa-laravel', color: 'bg-purple-600' },
        { name: 'MySQL', icon: 'fas fa-database', color: 'bg-blue-600' }
      ]
    },
    {
      id: 'sistem-absensi-digital',
      title: currentLang === 'id' ? 'Sistem Absensi Digital' : 'Digital Attendance System',
      desc: currentLang === 'id'
        ? 'Platform pintar untuk memonitor kehadiran karyawan secara real-time. Menyederhanakan proses pencatatan, rekapitulasi, dan manajemen laporan bagi divisi HRD.'
        : 'Smart platform to monitor employee attendance in real-time. Simplifies the process of recording, recapitulation, and report management for HRD divisions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      category: 'HR & Management',
      github: 'https://github.com/BINTANGDWIANGGARA/digital-attendance-system',
      tech: [
        { name: 'PHP Native', icon: 'fab fa-php', color: 'bg-indigo-600' },
        { name: 'JavaScript', icon: 'fab fa-js', color: 'bg-yellow-500' }
      ]
    },
    {
      id: 'dashboard-keuangan',
      title: currentLang === 'id' ? 'Dashboard Keuangan & Laporan' : 'Financial Dashboard & Reporting',
      desc: currentLang === 'id'
        ? 'Sistem komprehensif yang membantu pencatatan arus kas secara presisi, terintegrasi dengan pembuat laporan otomatis untuk pengambilan keputusan strategis.'
        : 'Comprehensive system that helps in precise cash flow recording, integrated with automatic report generation for strategic decision-making.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      category: 'Finance',
      github: 'https://github.com/BINTANGDWIANGGARA/financial-dashboard',
      tech: [
        { name: 'Laravel', icon: 'fab fa-laravel', color: 'bg-purple-600' },
        { name: 'Excel Export', icon: 'fas fa-file-excel', color: 'bg-green-600' }
      ]
    },
    {
      id: 'sistem-sales-order',
      title: currentLang === 'id' ? 'Sistem Sales Order Tersentralisasi' : 'Centralized Sales Order System',
      desc: currentLang === 'id'
        ? 'Platform B2B untuk mengelola pesanan penjualan. Membantu tim sales mempercepat proses transaksi dan memonitor status order.'
        : 'B2B platform for managing sales orders. Helps sales teams accelerate transaction processes and monitor order status.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      category: 'E-Commerce B2B',
      github: 'https://github.com/BINTANGDWIANGGARA/sales-order-system',
      tech: [
        { name: 'PHP', icon: 'fab fa-php', color: 'bg-indigo-600' },
        { name: 'Sales API', icon: 'fas fa-shopping-cart', color: 'bg-orange-600' }
      ]
    }
  ];

  return (
    <section id="proyek" className="py-24 bg-darkBg relative transition-colors duration-300 border-t border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16" data-aos="fade-up">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{translations[currentLang]['projects-title']}</h2>
            <p className="text-gray-400 text-lg">{translations[currentLang]['projects-subtitle']}</p>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="https://github.com/BINTANGDWIANGGARA" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 flex items-center gap-2 font-bold transition group bg-purple-900/30 px-6 py-3 rounded-full">
              {translations[currentLang]['projects-github']} <i className="fab fa-github text-xl group-hover:rotate-12 transition"></i>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <article key={project.id} className="glass-card rounded-3xl overflow-hidden group relative flex flex-col border border-white/5 hover:border-purple-500/50 transition-all duration-500" data-aos="fade-up" data-aos-delay={100 * (idx + 1)}>
              <div className="relative h-72 overflow-hidden">
                <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="px-4 py-1.5 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs rounded-full font-bold shadow-xl">{project.category}</span>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 text-white text-[10px] uppercase tracking-wider rounded-lg font-bold shadow-sm flex items-center gap-1.5">
                      <i className={`${t.icon} text-purple-400`}></i> {t.name}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col bg-[#0a0a0a] relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-8 text-sm leading-relaxed flex-1">{project.desc}</p>
                
                <div className="flex gap-4 mt-auto">
                  <Link 
                    to={`/detail/${project.id}`}
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl transition text-center text-sm shadow-lg shadow-purple-900/20"
                  >
                    {currentLang === 'id' ? 'Detail Proyek' : 'Project Details'}
                  </Link>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-purple-500 transition shadow-lg"
                  >
                    <i className="fab fa-github text-xl"></i>
                  </a>
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
