import React from 'react';
import { useNavigate } from 'react-router-dom';

const Education = ({ translations, currentLang }) => {
  const navigate = useNavigate();

  return (
    <section id="pendidikan" className="py-24 bg-darkBg relative border-t border-purple-900/20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {translations[currentLang]['about-education-title']}
          </h2>
          <p className="text-gray-400">
            {currentLang === 'id' 
              ? 'Latar belakang pendidikan dan keahlian teknis yang saya tempuh.' 
              : 'My educational background and technical expertise.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* School Card */}
          <div 
            onClick={() => navigate('/education')}
            className="glass-card p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all group cursor-pointer"
            data-aos="fade-right"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-20 h-20 rounded-2xl bg-white flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl p-2">
                <img 
                  src="/Picture/smkn1.png" 
                  alt="SMKN 1 Jakarta" 
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.parentElement.classList.add('bg-white/5'); e.target.src = 'https://ui-avatars.com/api/?name=SMKN1&background=a855f7&color=fff' }}
                />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {translations[currentLang]['about-school-name']}
                </h4>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {translations[currentLang]['about-school-short']}
                </p>
                <div className="mt-4 flex items-center gap-2 text-purple-400 font-bold text-xs">
                  <span>{translations[currentLang]['about-read-more']}</span>
                  <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Major Card */}
          <div 
            onClick={() => navigate('/education')}
            className="glass-card p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all group cursor-pointer"
            data-aos="fade-left"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-20 h-20 rounded-2xl bg-white flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl p-2">
                <img 
                  src="/Picture/rpl.png" 
                  alt="RPL" 
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.parentElement.classList.add('bg-purple-500/10'); e.target.src = 'https://ui-avatars.com/api/?name=RPL&background=a855f7&color=fff' }}
                />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {translations[currentLang]['about-major-name']}
                </h4>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {translations[currentLang]['about-major-short']}
                </p>
                <div className="mt-4 flex items-center gap-2 text-purple-400 font-bold text-xs">
                  <span>{translations[currentLang]['about-read-more']}</span>
                  <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
