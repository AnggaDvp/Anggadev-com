import React from 'react';
import { useNavigate } from 'react-router-dom';

const Skills = ({ translations, currentLang }) => {
  const navigate = useNavigate();
  const skillsData = [
    {
      title: 'Frontend',
      icon: 'fas fa-laptop-code',
      color: 'purple',
      skills: [
        { name: 'React / Flutter', level: 85 },
        { name: 'HTML / CSS / JS', level: 95 },
      ],
      tags: ['Tailwind CSS', 'Next.js']
    },
    {
      title: 'Backend',
      icon: 'fas fa-server',
      color: 'blue',
      skills: [
        { name: 'Laravel / PHP', level: 90 },
        { name: 'Node.js', level: 75 },
      ],
      tags: ['MySQL', 'Firebase']
    }
  ];

  const tools = [
    { 
      id: 'laravel',
      name: 'Laravel', 
      icon: 'fab fa-laravel', 
      color: 'text-purple-500',
    },
    { 
      id: 'node-js',
      name: 'Node.js', 
      icon: 'fab fa-node-js', 
      color: 'text-purple-500',
    },
    { 
      id: 'php',
      name: 'PHP', 
      icon: 'fab fa-php', 
      color: 'text-purple-500',
    },
    { 
      id: 'javascript',
      name: 'JavaScript', 
      icon: 'fab fa-js', 
      color: 'text-purple-500',
    },
    { 
      id: 'html5',
      name: 'HTML5', 
      icon: 'fab fa-html5', 
      color: 'text-purple-500',
    },
    { 
      id: 'css3',
      name: 'CSS3', 
      icon: 'fab fa-css3-alt', 
      color: 'text-purple-500',
    },
    { 
      id: 'mysql',
      name: 'MySQL', 
      icon: 'fas fa-database', 
      color: 'text-purple-500',
    },
    { 
      id: 'bootstrap',
      name: 'Bootstrap', 
      icon: 'fab fa-bootstrap', 
      color: 'text-purple-500',
    },
    { 
      id: 'word',
      name: 'Word', 
      icon: 'fas fa-file-word', 
      color: 'text-purple-500',
    },
    { 
      id: 'excel',
      name: 'Excel', 
      icon: 'fas fa-file-excel', 
      color: 'text-purple-500',
    },
    { 
      id: 'powerpoint',
      name: 'PowerPoint', 
      icon: 'fas fa-file-powerpoint', 
      color: 'text-purple-500',
    },
    { 
      id: 'phpmyadmin',
      name: 'phpMyAdmin', 
      icon: 'fas fa-database', 
      color: 'text-purple-500',
    },
    { 
      id: 'tailwind-css',
      name: 'Tailwind CSS', 
      icon: 'fab fa-css3-alt', 
      color: 'text-purple-500',
    },
    { 
      id: 'flutter',
      name: 'Flutter', 
      icon: 'fas fa-mobile-alt', 
      color: 'text-purple-500',
    },
    { 
      id: 'react-js',
      name: 'React JS', 
      icon: 'fab fa-react', 
      color: 'text-purple-500',
    },
    { 
      id: 'firebase',
      name: 'Firebase', 
      icon: 'fas fa-fire', 
      color: 'text-purple-500',
    },
    { 
      id: 'git',
      name: 'Git', 
      icon: 'fab fa-git-alt', 
      color: 'text-purple-500',
    },
    { 
      id: 'github',
      name: 'GitHub', 
      icon: 'fab fa-github', 
      color: 'text-purple-500',
    },
    { 
      id: 'figma',
      name: 'Figma', 
      icon: 'fab fa-figma', 
      color: 'text-purple-500',
    },
    { 
      id: 'postman',
      name: 'Postman', 
      icon: 'fas fa-rocket', 
      color: 'text-purple-500',
    },
    { 
      id: 'vscode',
      name: 'VS Code', 
      icon: 'fas fa-code', 
      color: 'text-purple-500',
    },
    { 
      id: 'vercel',
      name: 'Vercel', 
      icon: 'fas fa-caret-up', 
      color: 'text-purple-500',
    },
    { 
      id: 'hostinger',
      name: 'Hostinger', 
      icon: 'fas fa-server', 
      color: 'text-purple-500',
    },
  ];

  const handleTechClick = (id) => {
    navigate(`/tech/${id}`);
  };

  return (
    <section id="keahlian" className="py-24 bg-darkBg relative transition-colors duration-300 border-t border-purple-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{translations[currentLang]['skills-title']}</h2>
          <p className="text-gray-400">{translations[currentLang]['skills-subtitle']}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillsData.map((category, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm" data-aos="fade-up" data-aos-delay={100 * (idx + 1)}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-400`}>
                  <i className={`${category.icon} text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-indigo-500 h-full rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 bg-purple-900/20 text-purple-400 text-xs rounded-full border border-purple-900/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Senjata Andalan Icons Section */}
        <div className="mt-8" data-aos="fade-up" data-aos-delay="400">
          <div className="glass-card p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-400">
                <i className="fas fa-layer-group text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white">Senjata Andalan</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {tools.map((tool, idx) => (
                <button 
                  key={idx} 
                  onClick={() => handleTechClick(tool.id)}
                  className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`w-12 h-12 flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110 ${tool.color}`}>
                    <i className={tool.icon}></i>
                  </div>
                  <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors">
                    {tool.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
