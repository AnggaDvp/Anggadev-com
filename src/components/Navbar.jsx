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
    { href: '#keahlian', key: 'nav-skills' },
    { href: '#proyek', key: 'nav-projects' },
    { href: '#blog', key: 'nav-blog' },
    { href: '#kontak', key: 'nav-contact' },
  ];

  return (
    <header 
      onMouseEnter={() => setIsHovering(true)} 
      onMouseLeave={() => setIsHovering(false)}
    >
      <nav className={`fixed w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-purple-900/30 transition-all duration-500 ${isVisible ? 'top-0' : '-top-24'}`}>
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
          className={`md:hidden fixed inset-0 bg-[#050505]/95 backdrop-blur-xl z-40 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-500 ease-in-out`}
        >
          <div className="flex flex-col h-full pt-20">
            <div className="flex justify-between items-center h-20 px-4 absolute top-0 w-full border-b border-purple-900/30">
              <Link to="/" onClick={handleLogoClick} aria-label="Beranda" className="font-bold text-2xl tracking-tight text-white">
                Angga<span className="text-purple-500">.dev</span>
              </Link>
              <button
                onClick={toggleMenu}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400"
                aria-label="Close Menu"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 space-y-8 px-4">
              {navLinks.map((link, idx) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                  className={`text-3xl font-bold text-white hover:text-purple-500 transition-all transform ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                  {translations[currentLang][link.key]}
                </a>
              ))}
            </div>
            
            {/* Mobile Footer in Menu */}
            <div className="p-10 text-center border-t border-purple-900/20">
              <p className="text-gray-500 text-sm mb-4">Connect with me</p>
              <div className="flex justify-center gap-6 text-2xl text-gray-400">
                <a href="https://github.com/BINTANGDWIANGGARA" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/bintang-dwi-anggara-938383382/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/bgststarrr_/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
