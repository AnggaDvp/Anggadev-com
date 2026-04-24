import React from 'react';

const Hero = ({ translations, currentLang }) => {
  return (
    <section id="hero" className="pt-36 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center text-center relative min-h-screen justify-center">
      <div className="orb orb-1 animate-float-slow"></div>
      <div className="orb orb-2 animate-float-fast"></div>
      
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-10 z-[-1]" style={{ backgroundImage: 'radial-gradient(rgba(168, 85, 247, 0.8) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Profile Image */}
      <div className="tilt-container mb-8 relative group" data-aos="zoom-in" data-aos-duration="800">
        {/* Floating Icons Around Profile */}
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-gray-800 rounded-2xl shadow-xl flex items-center justify-center text-purple-400 animate-float-slow z-10 border border-purple-500/20">
          <i className="fab fa-react text-2xl"></i>
        </div>
        <div className="absolute top-1/2 -right-6 w-10 h-10 bg-gray-800 rounded-xl shadow-xl flex items-center justify-center text-purple-400 animate-float-fast z-10 border border-purple-500/20">
          <i className="fab fa-php text-xl"></i>
        </div>
        <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-gray-800 rounded-xl shadow-xl flex items-center justify-center text-purple-400 animate-float-slow z-10 border border-purple-500/20">
          <i className="fab fa-laravel text-xl"></i>
        </div>

        <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-indigo-600/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
        <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full p-1.5 bg-gradient-to-tr from-purple-500 via-indigo-500 to-purple-500 shadow-2xl tilt-element overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent animate-pulse"></div>
          <img 
            src="/Picture/profil.png" 
            alt={translations[currentLang]['hero-profile-alt']}
            fetchPriority="high" 
            className="w-full h-full rounded-full object-cover border-4 border-[#050505] bg-gray-800 relative z-0" 
            onError={(e) => { e.target.src='https://ui-avatars.com/api/?name=Bintang+Anggara&background=a855f7&color=fff&size=256' }}
          />
        </div>
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight" data-aos="fade-up" data-aos-delay="200">
        <span className="gradient-text drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">{translations[currentLang]['hero-role']}</span>.
      </h1>
      
      <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
        {translations[currentLang]['hero-subtitle']}
      </p>
      
      <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up" data-aos-delay="400">
        <a href="#kontak" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full bp-glow transition transform hover:-translate-y-1 hover:scale-105 shadow-lg flex items-center gap-2 text-sm md:text-base">
          <span>{translations[currentLang]['hero-cta']}</span> <i className="fas fa-rocket"></i>
        </a>
        <a href="/Picture/cv.pdf" download="CV_Bintang_Dwi_Anggara.pdf" className="bg-transparent hover:bg-[#111] text-gray-300 border border-gray-700 hover:border-purple-500 font-bold py-4 px-10 rounded-full transition transform hover:-translate-y-1 hover:text-purple-400 shadow-sm flex items-center gap-2 text-sm md:text-base">
          <span>{translations[currentLang]['hero-cv']}</span> <i className="fas fa-download"></i>
        </a>
        <a href="#proyek" className="w-full md:w-auto text-gray-400 hover:text-purple-400 font-bold py-2 px-4 transition flex items-center justify-center gap-2 text-sm">
          <span>{translations[currentLang]['hero-explore']}</span> <i className="fas fa-arrow-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
