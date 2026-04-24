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
              <div className="w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl p-2">
                <img 
                  src="/Picture/smkn1.png" 
                  alt="SMKN 1 Jakarta" 
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=SMKN1&background=a855f7&color=fff' }}
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
              <div className="w-20 h-20 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl p-2">
                <img 
                  src="/Picture/rpl.png" 
                  alt="RPL" 
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=RPL&background=a855f7&color=fff' }}
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

        {/* Experience Section */}
        <div className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {translations[currentLang]['exp-title']}
            </h2>
            <p className="text-gray-400">
              {currentLang === 'id' 
                ? 'Perjalanan profesional saya di dunia industri.' 
                : 'My professional journey in the industrial world.'}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div 
              className="glass-card p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all group relative overflow-hidden"
              data-aos="fade-up"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Company Logo */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform shadow-xl p-4 relative z-10">
                  <img 
                    src="/Picture/logo-dhimas.png" 
                    alt="PT Dhimas Mitra Internasional" 
                    className="w-full h-full object-contain"
                    onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=DMI&background=a855f7&color=fff' }}
                  />
                </div>

                <div className="flex-1 relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {translations[currentLang]['exp-intern-title']}
                      </h3>
                      <p className="text-purple-400 font-medium">
                        {translations[currentLang]['exp-intern-company']}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {translations[currentLang]['exp-intern-desc']}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {['Marketplace', 'Website Maintenance', 'Customer Monitoring', 'Data Entry'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a 
                    href="https://dhimasmitra.co.id/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-bold transition-colors group/link"
                  >
                    <span>Visit Website</span>
                    <i className="fas fa-external-link-alt text-sm group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"></i>
                  </a>
                </div>
              </div>

              {/* Decorative Background Glow */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-purple-600/20 transition-colors"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
