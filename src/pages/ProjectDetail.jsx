import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AOS from 'aos';

const ProjectDetail = ({ translations, currentLang }) => {
  const { id } = useParams();
  
  const projectsData = [
    {
      id: 'sistem-stok-gudang',
      title: 'Sistem Stok Gudang',
      category: 'Inventory',
      description: currentLang === 'id' 
        ? 'Aplikasi berbasis web untuk mengelola pergerakan barang secara akurat. Memudahkan pemantauan keluar masuk stok barang di gudang perusahaan secara real-time dan meminimalisir human error.'
        : 'Web-based application to manage goods movement accurately. Simplifies monitoring of stock inflow and outflow in company warehouses in real-time and minimizes human error.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      tech: ['Laravel', 'MySQL', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/BINTANGDWIANGGARA/Mandev-project'
    },
    {
      id: 'sistem-absensi-digital',
      title: 'Sistem Absensi Digital',
      category: 'HR & Management',
      description: currentLang === 'id'
        ? 'Platform pintar untuk memonitor kehadiran karyawan secara real-time. Menyederhanakan proses pencatatan, rekapitulasi, dan manajemen laporan bagi divisi HRD.'
        : 'Smart platform to monitor employee attendance in real-time. Simplifies the process of recording, recapitulation, and report management for HRD divisions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      tech: ['PHP Native', 'JavaScript', 'MySQL', 'jQuery'],
      github: 'https://github.com/BINTANGDWIANGGARA/Maskapai-Project-LSP'
    },
    {
      id: 'dashboard-keuangan',
      title: 'Dashboard Keuangan & Laporan',
      category: 'Finance',
      description: currentLang === 'id'
        ? 'Sistem komprehensif yang membantu pencatatan arus kas secara presisi, terintegrasi dengan pembuat laporan otomatis untuk memfasilitasi pengambilan keputusan strategis pimpinan.'
        : 'Comprehensive system that helps in precise cash flow recording, integrated with automatic report generation to facilitate strategic leadership decision-making.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      tech: ['Laravel', 'MySQL', 'Excel Export', 'Chart.js'],
      github: 'https://github.com/BINTANGDWIANGGARA/rekap_yuu'
    },
    {
      id: 'sistem-sales-order',
      title: 'Sistem Sales Order Tersentralisasi',
      category: 'E-Commerce B2B',
      description: currentLang === 'id'
        ? 'Platform B2B untuk mengelola pesanan penjualan. Membantu tim sales mempercepat proses transaksi, memonitor status order, dan mengorganisir data pelanggan di satu tempat.'
        : 'B2B platform for managing sales orders. Helps sales teams accelerate transaction processes, monitor order status, and organize customer data in one place.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      tech: ['PHP', 'MySQL', 'Sales API', 'JavaScript'],
      github: 'https://github.com/BINTANGDWIANGGARA/Anggaportofolio'
    }
  ];

  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    // window.scrollTo(0, 0); // Removed to allow ScrollToTop component to handle it
    AOS.init({ duration: 600, easing: 'ease-out-cubic', once: true });
  }, []);

  if (!project) {
    return (
      <div className="pt-28 pb-20 px-4 min-h-screen flex items-center justify-center bg-darkBg">
        <div className="text-center">
          <i className="fas fa-folder-open text-6xl text-gray-700 mb-6"></i>
          <h2 className="text-2xl font-bold text-white mb-4">
            {currentLang === 'id' ? 'Proyek Tidak Ditemukan' : 'Project Not Found'}
          </h2>
          <p className="text-gray-400 mb-8">
            {currentLang === 'id' ? 'Proyek yang Anda cari tidak tersedia.' : 'The project you are looking for is not available.'}
          </p>
          <Link to="/" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition">
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
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="px-4 py-1.5 rounded-full bg-purple-900/30 text-purple-400 text-sm font-bold tracking-widest uppercase">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4">
              {project.title}
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {project.description}
            </p>
          </div>

          <div className="glass-card rounded-3xl overflow-hidden mb-12 shadow-xl border border-purple-900/20" data-aos="zoom-in">
            <img src={project.image} alt={project.title} className="w-full h-80 object-cover" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card rounded-2xl p-8 bg-white/5 border border-purple-900/20" data-aos="fade-right">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <i className="fas fa-code text-purple-500"></i> {currentLang === 'id' ? 'Teknologi' : 'Tech Stack'}
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="px-4 py-2 bg-purple-900/20 text-purple-400 rounded-xl text-sm font-bold border border-purple-900/30 shadow-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 bg-white/5 border border-purple-900/20" data-aos="fade-left">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <i className="fab fa-github text-purple-500"></i> {currentLang === 'id' ? 'Tautan Kode' : 'Code Links'}
              </h3>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition font-bold group shadow-lg shadow-purple-900/20">
                <span>GitHub Repository</span>
                <i className="fas fa-external-link-alt group-hover:rotate-12 transition"></i>
              </a>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up">
            <Link to="/" className="inline-flex items-center gap-2 text-purple-400 font-bold hover:gap-4 transition-all">
              <i className="fas fa-arrow-left"></i> {currentLang === 'id' ? 'Kembali ke Portfolio' : 'Back to Portfolio'}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
