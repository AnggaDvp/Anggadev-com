import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ currentLang, toggleLanguage, translations }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let timeout;
    if (isVisible && !isMenuOpen && !isHovering) {
      timeout = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [isVisible, isMenuOpen, isHovering]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientY <= 80) {
        setIsVisible(true);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      navigate('/');
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  const handleNavClick = (e, href) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/' + href);
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      if (isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
      }
    }
  };

  const navLinks = [
    { href: '#hero', key: 'nav-home' },
    { href: '#tentang', key: 'nav-about' },
    { href: '#pendidikan', key: 'nav-education' },
    { href: '#proyek', key: 'nav-projects' },
    { href: '#blog', key: 'nav-blog' },
    { href: '#kontak', key: 'nav-contact' },
  ];

  return (
    <header 
      onMouseEnter={() => setIsHovering(true)} 
      onMouseLeave={() => setIsHovering(false)}
    >
      <nav className={`fixed w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-purple-900/30 transition-all duration-300 ${isVisible || isMenuOpen ? 'top-0' : '-top-24'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0" data-aos="fade-down">
              <Link 
                to="/" 
                onClick={handleLogoClick}
                aria-label="Beranda" 
                className="font-bold text-2xl tracking-tight text-white"
              >
                Angga<span className="text-purple-500 animate-pulse">.dev</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8" data-aos="fade-down" data-aos-delay="100">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-400 hover:text-purple-400 transition font-medium text-sm tracking-wide"
                >
                  {translations[currentLang][link.key]}
                </a>
              ))}

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-800 text-xs font-bold text-gray-400 hover:bg-gray-700 transition"
                aria-label="Toggle Language"
              >
                <span>{currentLang.toUpperCase()}</span>
                <i className="fas fa-globe"></i>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-800 text-[10px] font-bold text-gray-400"
                aria-label="Toggle Language"
              >
                <span>{currentLang.toUpperCase()}</span>
              </button>
              <button
                onClick={toggleMenu}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gray-700 transition"
                aria-label="Toggle Menu"
              >
                <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
            isMenuOpen ? 'visible' : 'invisible'
          }`}
        >
          {/* Backdrop Overlay */}
          <div 
            className={`absolute inset-0 bg-[#0a0a0a]/90 transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={toggleMenu}
          />
          
          {/* Menu Content */}
          <div
            className={`absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-[#0f0f0f] border-l border-purple-900/30 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center h-20 px-6 border-b border-purple-900/30">
                <Link to="/" onClick={handleLogoClick} className="font-bold text-2xl text-white">
                  Angga<span className="text-purple-500">.dev</span>
                </Link>
                <button
                  onClick={toggleMenu}
                  className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 hover:text-white transition"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              
              <div className="flex flex-col items-start justify-center flex-1 space-y-6 px-8">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    style={{ transitionDelay: `${idx * 50}ms` }}
                    className={`text-2xl font-bold text-white hover:text-purple-500 transition-all transform ${
                      isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}
                  >
                    <span className="text-purple-500/50 text-sm mr-4 font-mono">0{idx + 1}.</span>
                    {translations[currentLang][link.key]}
                  </a>
                ))}
              </div>
              
              <div className="p-8 border-t border-purple-900/20 bg-purple-900/5">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-6 font-semibold">Connect</p>
                <div className="flex gap-6 text-2xl text-gray-400">
                  <a href="https://github.com/AnggaDvp" target="_blank" rel="noopener noreferrer" className="hover:text-white transition transform hover:-translate-y-1"><i className="fab fa-github"></i></a>
                  <a href="https://www.linkedin.com/in/bintang-dwi-anggara-938383382/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition transform hover:-translate-y-1"><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://www.instagram.com/bgststarrr_/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition transform hover:-translate-y-1"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
