import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AOS from 'aos';

const projects = [
  {
    id: 'sistem-stok-gudang',
    title: 'Sistem Stok Gudang',
    category: 'Inventory',
    description: 'Aplikasi berbasis web untuk mengelola pergerakan barang secara akurat. Memudahkan pemantauan keluar masuk stok barang di gudang perusahaan secara real-time dan meminimalisir human error.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    tech: ['Laravel', 'MySQL', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/BINTANGDWIANGGARA/Mandev-project'
  },
  {
    id: 'sistem-absensi-digital',
    title: 'Sistem Absensi Digital',
    category: 'HR & Management',
    description: 'Platform pintar untuk memonitor kehadiran karyawan secara real-time. Menyederhanakan proses pencatatan, rekapitulasi, dan manajemen laporan bagi divisi HRD.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    tech: ['PHP Native', 'JavaScript', 'MySQL', 'jQuery'],
    github: 'https://github.com/BINTANGDWIANGGARA/Maskapai-Project-LSP'
  },
  {
    id: 'dashboard-keuangan',
    title: 'Dashboard Keuangan & Laporan',
    category: 'Finance',
    description: 'Sistem komprehensif yang membantu pencatatan arus kas secara presisi, terintegrasi dengan pembuat laporan otomatis untuk memfasilitasi pengambilan keputusan strategis pimpinan.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    tech: ['Laravel', 'MySQL', 'Excel Export', 'Chart.js'],
    github: 'https://github.com/BINTANGDWIANGGARA/rekap_yuu'
  },
  {
    id: 'sistem-sales-order',
    title: 'Sistem Sales Order Tersentralisasi',
    category: 'E-Commerce B2B',
    description: 'Platform B2B untuk mengelola pesanan penjualan. Membantu tim sales mempercepat proses transaksi, memonitor status order, dan mengorganisir data pelanggan di satu tempat.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    tech: ['PHP', 'MySQL', 'Sales API', 'JavaScript'],
    github: 'https://github.com/BINTANGDWIANGGARA/Anggaportofolio'
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true });
  }, []);

  if (!project) {
    return (
      <div className="pt-28 pb-20 px-4 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-folder-open text-6xl text-gray-300 dark:text-gray-700 mb-6"></i>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Proyek Tidak Ditemukan</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Proyek yang Anda cari tidak tersedia.</p>
          <Link to="/" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition">
            <i className="fas fa-arrow-left"></i> Kembali ke Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-28 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm font-bold tracking-widest uppercase">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-4">
              {project.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              {project.description}
            </p>
          </div>

          <div className="glass-card rounded-3xl overflow-hidden mb-12 shadow-xl border border-gray-100 dark:border-purple-900/20" data-aos="zoom-in">
            <img src={project.image} alt={project.title} className="w-full h-80 object-cover" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card rounded-2xl p-8 bg-white dark:bg-darkCard border border-gray-100 dark:border-purple-900/20" data-aos="fade-right">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <i className="fas fa-code text-purple-600"></i> Teknologi
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-xs rounded-full font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="glass-card rounded-2xl p-8 bg-white dark:bg-darkCard border border-gray-100 dark:border-purple-900/20" data-aos="fade-left">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <i className="fas fa-link text-purple-600"></i> Tautan
              </h3>
              <div className="space-y-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition">
                  <i className="fab fa-github text-xl"></i> GitHub Repository
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/#proyek" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition transform hover:-translate-y-1">
              <i className="fas fa-arrow-left"></i> Kembali ke Portfolio
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
