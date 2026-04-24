import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EducationDetail = ({ translations, currentLang }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-darkBg text-gray-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors group"
        >
          <i className="fas fa-arrow-left transition-transform group-hover:-translate-x-1"></i>
          <span>{translations[currentLang]['common-back']}</span>
        </button>

        <div className="space-y-12">
          {/* School Section */}
          <section className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden group" data-aos="fade-up">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            
            <div className="relative flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white p-4 flex-shrink-0 flex items-center justify-center border border-white/10 shadow-xl group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="/Picture/smkn1.png" 
                  alt="SMKN 1 Jakarta" 
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.parentElement.classList.add('bg-white/5'); e.target.src = 'https://ui-avatars.com/api/?name=SMKN1&background=a855f7&color=fff' }}
                />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-white">
                    {translations[currentLang]['about-school-name']}
                  </h1>
                  <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-bold rounded-full border border-purple-500/20">
                    Est. 1906
                  </span>
                </div>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {translations[currentLang]['about-school-desc']}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <a 
                    href="https://smkn1jakarta.sch.id/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-purple-900/20"
                  >
                    <i className="fas fa-globe"></i>
                    {translations[currentLang]['about-school-link']}
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Major Section */}
          <section className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden group" data-aos="fade-up" data-aos-delay="100">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <div className="relative flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white p-4 flex-shrink-0 flex items-center justify-center border border-white/10 shadow-xl group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="/Picture/rpl.png" 
                  alt="RPL" 
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.parentElement.classList.add('bg-purple-500/10'); e.target.src = 'https://ui-avatars.com/api/?name=RPL&background=a855f7&color=fff' }}
                />
              </div>
              
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                  {translations[currentLang]['about-major-name']}
                </h2>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {translations[currentLang]['about-major-desc']}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <h4 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                      <i className="fas fa-check-circle"></i>
                      Core Skills
                    </h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Web Development (Frontend & Backend)</li>
                      <li>• Mobile App Development</li>
                      <li>• Database Management</li>
                      <li>• UI/UX Design Fundamentals</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <h4 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                      <i className="fas fa-briefcase"></i>
                      Career Paths
                    </h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Fullstack Developer</li>
                      <li>• Software Quality Assurance</li>
                      <li>• System Analyst</li>
                      <li>• Database Administrator</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EducationDetail;
