import React from 'react';
import { useNavigate } from 'react-router-dom';

const Skills = ({ translations, currentLang }) => {
  const navigate = useNavigate();
  const tools = [
    { 
      id: 'react-js',
      name: 'React JS', 
      icon: 'fab fa-react', 
      color: 'text-cyan-400',
      tagline: 'Library UI Populer'
    },
    { 
      id: 'angular-js',
      name: 'Angular JS', 
      icon: 'fab fa-angular', 
      color: 'text-red-600',
      tagline: 'Framework Enterprise'
    },
    { 
      id: 'vue-js',
      name: 'Vue JS', 
      icon: 'fab fa-vuejs', 
      color: 'text-emerald-500',
      tagline: 'Framework Progresif'
    },
    { 
      id: 'mongodb',
      name: 'MongoDB', 
      icon: 'fas fa-leaf', 
      color: 'text-green-500',
      tagline: 'Database NoSQL'
    },
    { 
      id: 'postgresql',
      name: 'PostgreSQL', 
      icon: 'fas fa-database', 
      color: 'text-blue-400',
      tagline: 'Relational Database'
    },
    { 
      id: 'laravel',
      name: 'Laravel', 
      icon: 'fab fa-laravel', 
      color: 'text-red-500',
      tagline: 'The Web Artisan'
    },
    { 
      id: 'next-js',
      name: 'Next.js', 
      icon: 'fas fa-terminal', 
      color: 'text-white',
      tagline: 'React Framework'
    },
    { 
      id: 'typescript',
      name: 'TypeScript', 
      icon: 'fab fa-js-square', 
      color: 'text-blue-600',
      tagline: 'JavaScript with Types'
    },
    { 
      id: 'python',
      name: 'Python', 
      icon: 'fab fa-python', 
      color: 'text-yellow-500',
      tagline: 'Versatile Language'
    },
    { 
      id: 'php',
      name: 'PHP', 
      icon: 'fab fa-php', 
      color: 'text-indigo-400',
      tagline: 'Web Scripting'
    },
    { 
      id: 'flutter',
      name: 'Flutter', 
      icon: 'fas fa-mobile-alt', 
      color: 'text-cyan-500',
      tagline: 'Cross-platform Apps'
    },
    { 
      id: 'node-js',
      name: 'Node.js', 
      icon: 'fab fa-node-js', 
      color: 'text-green-600',
      tagline: 'JS Runtime'
    },
  ];

  const handleTechClick = (id) => {
    navigate(`/tech/${id}`);
  };

  return (
    <section id="keahlian" className="py-24 bg-darkBg relative transition-colors duration-300 border-t border-purple-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Tech Stack</h2>
          <p className="text-gray-400 italic">
            "saya adalah tipe orang yang ingin terus belajar apa yang saya tidak ketauhi belajar dalam kegagalan dan selalu bersyukur apa yang saya punya dan apa yang saya pegang"
          </p>
        </div>

        {/* Senjata Andalan Icons Section */}
        <div data-aos="fade-up">
          <div className="glass-card p-8 rounded-3xl">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-400 shadow-lg shadow-purple-900/20">
                <i className="fas fa-layer-group text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white">Senjata Andalan</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {tools.map((tool, idx) => (
                <button 
                  key={idx} 
                  onClick={() => handleTechClick(tool.id)}
                  className="group flex flex-col items-center gap-2 md:gap-3 p-3 md:p-4 rounded-2xl bg-white/5 hover:bg-purple-600/10 border border-white/5 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/20"
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-2xl md:text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:text-purple-400 ${tool.color}`}>
                    <i className={tool.icon}></i>
                  </div>
                  <div className="text-center">
                    <span className="block text-[10px] md:text-xs font-bold text-white transition-colors">
                      {tool.name}
                    </span>
                    <span className="block text-[8px] md:text-[10px] text-gray-500 group-hover:text-purple-400 transition-colors mt-0.5 md:mt-1">
                      {tool.tagline}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="inline-block glass-card px-8 py-4 rounded-2xl border border-purple-500/30">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-2">
              Coming Soon
            </h3>
            <p className="text-gray-400 text-sm">
              Exploring more technologies to build better solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
