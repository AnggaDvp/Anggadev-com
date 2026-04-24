import React from 'react';

const About = ({ translations, currentLang }) => {
  return (
    <section id="tentang" className="py-24 bg-darkCard relative border-t border-purple-900/20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Image Card */}
          <div className="w-full md:w-5/12" data-aos="fade-right">
            <div className="relative group h-full tilt-container">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative glass-card rounded-2xl p-3 h-full flex flex-col tilt-element">
                <div className="overflow-hidden rounded-xl relative">
                  <img 
                    src="/Picture/coding.jpg" 
                    alt="Potret Bintang Dwi Anggara" 
                    loading="lazy" 
                    className="w-full h-[450px] object-cover object-top filter grayscale-[30%] group-hover:grayscale-0 transition duration-700 transform group-hover:scale-105" 
                    onError={(e) => { e.target.src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">Bintang Dwi Anggara</h3>
                    <p className="text-purple-300 font-medium drop-shadow-md">Fullstack Developer & Digital Strategist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="w-full md:w-7/12" data-aos="fade-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">{translations[currentLang]['about-title']}</h2>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                {translations[currentLang]['about-p1']}
              </p>
              <p>
                {translations[currentLang]['about-p2']}
              </p>
              <div className="border-l-4 border-purple-500 pl-6 py-4 mt-8 bg-purple-900/10 rounded-r-xl transition-colors">
                <p className="font-medium text-gray-200 italic">
                  {translations[currentLang]['about-quote']}
                </p>
              </div>
            </div>

            {/* GitHub Stats */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="https://github.com/AnggaDvp" target="_blank" rel="noopener noreferrer" className="block transform hover:-translate-y-1 transition duration-300">
                <img 
                  src="https://github-readme-stats.vercel.app/api?username=AnggaDvp&show_icons=true&theme=transparent&hide_border=true&title_color=a855f7&icon_color=a855f7&text_color=9ca3af&bg_color=00000000" 
                  alt="GitHub Stats" 
                  className="w-full h-auto"
                />
              </a>
              <a href="https://github.com/AnggaDvp" target="_blank" rel="noopener noreferrer" className="block transform hover:-translate-y-1 transition duration-300">
                <img 
                  src="https://github-readme-streak-stats.herokuapp.com/?user=AnggaDvp&theme=transparent&hide_border=true&stroke=a855f7&ring=a855f7&fire=a855f7&currStreakNum=a855f7&sideLabels=9ca3af&dates=9ca3af" 
                  alt="GitHub Streak" 
                  className="w-full h-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
