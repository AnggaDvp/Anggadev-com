import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Check if we have a saved scroll position for this path
    const savedPosition = sessionStorage.getItem(`scrollPos_${pathname}`);
    
    if (savedPosition && window.history.action === 'POP') {
      window.scrollTo(0, parseInt(savedPosition));
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

const ScrollManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem(`scrollPos_${pathname}`, window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return null;
};

import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';
import BlogDetail from './pages/BlogDetail';
import TechDetail from './pages/TechDetail';

const translations = {
  'id': {
    'nav-home': 'Beranda',
    'nav-about': 'Tentang',
    'nav-skills': 'Keahlian',
    'nav-projects': 'Proyek',
    'nav-blog': 'Blog',
    'nav-contact': 'Kontak',
    'hero-subtitle': 'Saya Bintang Dwi Anggara. Saya tidak sekadar menulis kode, saya mengubah kebutuhan bisnis Anda menjadi sistem operasional yang efisien, terstructured, dan berbasis data.',
    'hero-cta': 'Mulai Kolaborasi',
    'hero-cv': 'Download CV',
    'hero-explore': 'Eksplorasi Proyek',
    'about-title': 'Halo! Saya Angga',
    'about-p1': 'Saya seorang Fullstack Developer yang lebih suka ngetik kode daripada ngetik "P" di chat. Fokus saya adalah membangun sistem yang efisien dan enak dilihat.',
    'about-p2': 'Bukan sekadar koding, saya juga suka ngulik data dan strategi marketplace. Jadi, sistem yang saya bangun nggak cuma jalan, tapi juga bantu bisnis tumbuh.',
    'about-quote': '"Kalo bisa otomatis, kenapa harus manual? Kalo bisa rapi, kenapa harus berantakan?"',
    'skills-title': 'Senjata Andalan',
    'skills-subtitle': 'Kombinasi teknologi yang saya gunakan untuk mewujudkan ide menjadi kenyataan.',
    'projects-title': 'Proyek Unggulan',
    'projects-subtitle': 'Portfolio karya nyata yang didesain khusus untuk menyelesaikan masalah operasional dan meningkatkan efisiensi perusahaan.',
    'projects-github': 'Lihat di GitHub',
    'blog-title': 'Blog & Artikel',
    'blog-desc': 'Berbagi pemikiran tentang teknologi, pengembangan sistem, dan strategi digital untuk bisnis masa kini.',
    'contact-title': 'Mulai Kolaborasi',
    'contact-subtitle': 'Punya ide proyek atau sekadar ingin menyapa? Mari bicara!',
    'contact-info-title': 'Informasi Kontak',
    'contact-social-title': 'Sosial Media',
    'contact-form-name': 'Nama Lengkap',
    'contact-form-name-placeholder': 'Masukkan nama Anda',
    'contact-form-email': 'Email',
    'contact-form-email-placeholder': 'email@example.com',
    'contact-form-message': 'Pesan',
    'contact-form-message-placeholder': 'Ceritakan proyek Anda...',
    'contact-form-wa': 'WhatsApp',
    'contact-form-email-btn': 'Kirim Email',
    'footer-tagline': 'Bikin masa depan digital yang clean & data yang legit. No debat! 🚀',
    'footer-quick-links': 'Sat Set',
    'footer-rights': 'All Rights Reserved. Aman!',
  },
  'en': {
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-skills': 'Skills',
    'nav-projects': 'Projects',
    'nav-blog': 'Blog',
    'nav-contact': 'Contact',
    'hero-subtitle': "I'm Bintang Dwi Anggara. I don't just write code; I transform your business needs into efficient, structured, and data-driven operational systems.",
    'hero-cta': 'Start Collaboration',
    'hero-cv': 'Download CV',
    'hero-explore': 'Explore Projects',
    'about-title': "Hi! I'm Angga",
    'about-p1': "I'm a Fullstack Developer who prefers writing code over typing 'P' in chat. My focus is building efficient and visually appealing systems.",
    'about-p2': "Beyond just coding, I also enjoy digging into data and marketplace strategies. So, the systems I build don't just run; they help businesses grow.",
    'about-quote': '"If it can be automated, why do it manually? If it can be neat, why let it be messy?"',
    'skills-title': 'Main Weaponry',
    'skills-subtitle': 'The technology combination I use to turn ideas into reality.',
    'projects-title': 'Featured Projects',
    'projects-subtitle': 'A portfolio of real-world works specifically designed to solve operational problems and improve company efficiency.',
    'projects-github': 'View on GitHub',
    'blog-title': 'Blog & Articles',
    'blog-desc': 'Sharing thoughts on technology, system development, and digital strategies for modern business.',
    'contact-title': 'Start Collaboration',
    'contact-subtitle': 'Have a project idea or just want to say hi? Let\'s talk!',
    'contact-info-title': 'Contact Information',
    'contact-social-title': 'Social Media',
    'contact-form-name': 'Full Name',
    'contact-form-name-placeholder': 'Enter your name',
    'contact-form-email': 'Email',
    'contact-form-email-placeholder': 'email@example.com',
    'contact-form-message': 'Message',
    'contact-form-message-placeholder': 'Tell me about your project...',
    'contact-form-wa': 'WhatsApp',
    'contact-form-email-btn': 'Send Email',
    'footer-tagline': 'Building clean & legit digital future. No cap! 🚀',
    'footer-quick-links': 'Quick Links',
    'footer-rights': 'All Rights Reserved. Safe!',
  }
};

function App() {
  const [currentLang, setCurrentLang] = useState(localStorage.getItem('lang') || 'id');

  const toggleLanguage = () => {
    const nextLang = currentLang === 'id' ? 'en' : 'id';
    setCurrentLang(nextLang);
    localStorage.setItem('lang', nextLang);
  };

  return (
    <Router>
      <ScrollToTop />
      <ScrollManager />
      <div className="bg-darkBg text-gray-100 min-h-screen selection:bg-purple-500 selection:text-white antialiased overflow-x-hidden">
        <Cursor />
        <Navbar currentLang={currentLang} toggleLanguage={toggleLanguage} translations={translations} />
        
        <Routes>
          <Route path="/" element={
            <main>
              <Hero translations={translations} currentLang={currentLang} />
              <About translations={translations} currentLang={currentLang} />
              <Skills translations={translations} currentLang={currentLang} />
              <Projects translations={translations} currentLang={currentLang} />
              <Blog translations={translations} currentLang={currentLang} />
              <Contact translations={translations} currentLang={currentLang} />
            </main>
          } />
          <Route path="/detail/:id" element={<ProjectDetail translations={translations} currentLang={currentLang} />} />
          <Route path="/blog/:id" element={<BlogDetail translations={translations} currentLang={currentLang} />} />
          <Route path="/tech/:id" element={<TechDetail currentLang={currentLang} />} />
        </Routes>

        <Footer translations={translations} currentLang={currentLang} />
        <SpeedInsights />
      </div>
    </Router>
  );
}

export default App;
