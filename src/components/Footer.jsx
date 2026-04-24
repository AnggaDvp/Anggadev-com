import React from 'react';

const Footer = ({ translations, currentLang }) => {
  return (
    <footer className="py-12 bg-darkCard border-t border-purple-900/20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Angga<span className="text-purple-500">.dev</span></h3>
            <p className="text-gray-400 text-sm">
              {translations[currentLang]['footer-tagline']}
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">{translations[currentLang]['footer-quick-links']}</h4>
            <div className="flex flex-col space-y-2">
              <a href="#hero" className="text-gray-400 hover:text-purple-400 transition text-sm">{translations[currentLang]['nav-home']}</a>
              <a href="#tentang" className="text-gray-400 hover:text-purple-400 transition text-sm">{translations[currentLang]['nav-about']}</a>
              <a href="#proyek" className="text-gray-400 hover:text-purple-400 transition text-sm">{translations[currentLang]['nav-projects']}</a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Social</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/AnggaDvp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/bintang-dwi-anggara-938383382/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://www.instagram.com/bgststarrr_/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-purple-900/10 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} <span className="font-bold text-white">Angga<span className="text-purple-500">.dev</span></span>. {translations[currentLang]['footer-rights']}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
