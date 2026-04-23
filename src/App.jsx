import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    'blog-title': 'Blog & Artikel',
    'blog-desc': 'Berbagi pemikiran tentang teknologi, pengembangan sistem, dan strategi digital untuk bisnis masa kini.',
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
    'blog-title': 'Blog & Articles',
    'blog-desc': 'Sharing thoughts on technology, system development, and digital strategies for modern business.',
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
      <div className="bg-white text-gray-900 dark:bg-darkBg dark:text-gray-100 min-h-screen selection:bg-purple-500 selection:text-white antialiased">
        <Cursor />
        <Navbar currentLang={currentLang} toggleLanguage={toggleLanguage} translations={translations} />
        
        <Routes>
          <Route path="/" element={
            <main>
              <Hero translations={translations} currentLang={currentLang} />
              <About />
              <Skills />
              <Projects />
              <Blog translations={translations} currentLang={currentLang} />
              <Contact />
            </main>
          } />
          {/* Add more routes for detail pages if needed */}
          <Route path="/detail/:id" element={<ProjectDetail />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
