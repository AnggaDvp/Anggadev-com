import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AOS from 'aos';

const TechDetail = ({ currentLang }) => {
  const { id } = useParams();

  const techData = [
    {
      id: 'react-js',
      name: 'React JS',
      icon: 'fab fa-react',
      color: 'text-cyan-400',
      category: 'Frontend Library',
      description: {
        id: 'React adalah library JavaScript populer untuk membangun antarmuka pengguna yang dinamis dan interaktif.',
        en: 'React is a popular JavaScript library for building dynamic and interactive user interfaces.'
      },
      features: {
        id: ['Berbasis Komponen', 'Virtual DOM', 'JSX Syntax', 'Hooks API'],
        en: ['Component-Based', 'Virtual DOM', 'JSX Syntax', 'Hooks API']
      },
      useCase: {
        id: 'Membangun Single Page Applications (SPA) yang responsif.',
        en: 'Building responsive Single Page Applications (SPA).'
      },
      discussions: [
        { title: 'Frontend Development', content: 'Membahas ekosistem frontend modern dengan React.' },
        { title: 'State Management', content: 'Eksplorasi Redux, Context API, dan Zustand.' }
      ]
    },
    {
      id: 'angular-js',
      name: 'Angular JS',
      icon: 'fab fa-angular',
      color: 'text-red-600',
      category: 'Frontend Framework',
      description: {
        id: 'Angular adalah platform pengembangan untuk membangun aplikasi web mobile dan desktop.',
        en: 'Angular is a development platform for building mobile and desktop web applications.'
      },
      features: {
        id: ['Dependency Injection', 'Two-way Data Binding', 'Modular Architecture', 'TypeScript Based'],
        en: ['Dependency Injection', 'Two-way Data Binding', 'Modular Architecture', 'TypeScript Based']
      },
      useCase: {
        id: 'Aplikasi skala enterprise yang kompleks.',
        en: 'Complex enterprise-scale applications.'
      },
      discussions: [
        { title: 'Enterprise Architecture', content: 'Membangun aplikasi skala besar yang terstruktur.' },
        { title: 'Dependency Injection', content: 'Penerapan pola desain DI dalam Angular.' }
      ]
    },
    {
      id: 'vue-js',
      name: 'Vue JS',
      icon: 'fab fa-vuejs',
      color: 'text-emerald-500',
      category: 'Frontend Framework',
      description: {
        id: 'Vue.js adalah framework progresif untuk membangun antarmuka pengguna.',
        en: 'Vue.js is a progressive framework for building user interfaces.'
      },
      features: {
        id: ['Reactivity System', 'Composition API', 'Directives', 'Vue Router & Vuex'],
        en: ['Reactivity System', 'Composition API', 'Directives', 'Vue Router & Vuex']
      },
      useCase: {
        id: 'Proyek web yang membutuhkan integrasi cepat dan performa tinggi.',
        en: 'Web projects requiring fast integration and high performance.'
      },
      discussions: [
        { title: 'Composition API', content: 'Evolusi penulisan logika di Vue 3.' },
        { title: 'Progresif Framework', content: 'Bagaimana Vue beradaptasi dengan kebutuhan proyek.' }
      ]
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      icon: 'fas fa-leaf',
      color: 'text-green-500',
      category: 'NoSQL Database',
      description: {
        id: 'MongoDB adalah database NoSQL berbasis dokumen yang skalabel.',
        en: 'MongoDB is a scalable document-based NoSQL database.'
      },
      features: {
        id: ['Document-Oriented', 'High Availability', 'Horizontal Scaling', 'Flexible Schema'],
        en: ['Document-Oriented', 'High Availability', 'Horizontal Scaling', 'Flexible Schema']
      },
      useCase: {
        id: 'Penyimpanan data yang tidak terstruktur dan aplikasi real-time.',
        en: 'Unstructured data storage and real-time applications.'
      },
      discussions: [
        { title: 'NoSQL Database', content: 'Kelebihan penyimpanan dokumen dibanding relasional.' },
        { title: 'Scalability', content: 'Teknik sharding dan replikasi di MongoDB.' }
      ]
    },
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      icon: 'fas fa-database',
      color: 'text-blue-400',
      category: 'Relational Database',
      description: {
        id: 'PostgreSQL adalah sistem database relasional open-source yang canggih.',
        en: 'PostgreSQL is an advanced open-source relational database system.'
      },
      features: {
        id: ['ACID Compliance', 'Extensibility', 'JSONB Support', 'Advanced Indexing'],
        en: ['ACID Compliance', 'Extensibility', 'JSONB Support', 'Advanced Indexing']
      },
      useCase: {
        id: 'Aplikasi yang membutuhkan integritas data tinggi dan query kompleks.',
        en: 'Applications requiring high data integrity and complex queries.'
      },
      discussions: [
        { title: 'Data Integrity', content: 'Pentingnya transaksi ACID dalam aplikasi finansial.' },
        { title: 'Advanced Querying', content: 'Mengoptimalkan query SQL yang kompleks.' }
      ]
    },
    {
      id: 'laravel',
      name: 'Laravel',
      icon: 'fab fa-laravel',
      color: 'text-red-500',
      category: 'PHP Framework',
      description: {
        id: 'Laravel adalah framework PHP untuk artisan web dengan sintaks yang elegan.',
        en: 'Laravel is a PHP framework for web artisans with elegant syntax.'
      },
      features: {
        id: ['Eloquent ORM', 'Blade Engine', 'Artisan CLI', 'Migrations'],
        en: ['Eloquent ORM', 'Blade Engine', 'Artisan CLI', 'Migrations']
      },
      useCase: {
        id: 'Pengembangan backend web yang cepat dan terstandarisasi.',
        en: 'Fast and standardized web backend development.'
      },
      discussions: [
        { title: 'MVC Pattern', content: 'Implementasi Model-View-Controller di Laravel.' },
        { title: 'Eloquent ORM', content: 'Memudahkan interaksi database dengan PHP.' }
      ]
    },
    {
      id: 'next-js',
      name: 'Next.js',
      icon: 'fas fa-terminal',
      color: 'text-white',
      category: 'React Framework',
      description: {
        id: 'Next.js memberikan pengalaman pengembang terbaik dengan semua fitur yang dibutuhkan untuk produksi.',
        en: 'Next.js gives you the best developer experience with all the features you need for production.'
      },
      features: {
        id: ['Server Side Rendering', 'Static Site Generation', 'Image Optimization', 'API Routes'],
        en: ['Server Side Rendering', 'Static Site Generation', 'Image Optimization', 'API Routes']
      },
      useCase: {
        id: 'Aplikasi web modern yang mementingkan SEO dan performa.',
        en: 'Modern web applications prioritizing SEO and performance.'
      },
      discussions: [
        { title: 'Rendering Strategies', content: 'Kapan menggunakan SSR vs SSG.' },
        { title: 'Fullstack React', content: 'Membangun API dan UI dalam satu framework.' }
      ]
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      icon: 'fab fa-js-square',
      color: 'text-blue-600',
      category: 'Programming Language',
      docUrl: 'https://www.typescriptlang.org/docs/',
      description: {
        id: `**TypeScript: Fondasi Modern untuk Pengembangan Web yang Lebih Aman dan Terstruktur** 
        *By Angga* 
        
        Di dunia pengembangan web modern, kebutuhan akan kode yang rapi, mudah dipelajari, dan minim kesalahan semakin meningkat. Salah satu teknologi yang hadir untuk menjawab kebutuhan tersebut adalah TypeScript. TypeScript merupakan pengembangan dari JavaScript yang menambahkan sistem tipe (type system), sehingga developer dapat menulis kode dengan lebih aman dan terstruktur. 
        
        Berbeda dengan JavaScript yang bersifat dinamis, TypeScript memungkinkan kita untuk menentukan tipe data sejak awal. Dengan adanya tipe data seperti string, number, dan boolean, kesalahan dapat dideteksi lebih cepat bahkan sebelum kode dijalankan. Hal ini sangat membantu dalam mengurangi bug, terutama pada proyek berskala besar. 
        
        Salah satu keunggulan utama TypeScript adalah kemampuannya dalam mendefinisikan struktur data menggunakan interface. Dengan interface, developer dapat memastikan bahwa setiap objek memiliki format yang konsisten. Selain itu, TypeScript juga mendukung fitur modern seperti optional property dan union type, yang membuat kode lebih fleksibel tanpa kehilangan kontrol. 
        
        TypeScript banyak digunakan dalam berbagai framework populer seperti React, Angular, dan Next.js. Hal ini menunjukkan bahwa TypeScript bukan hanya tren sementara, tetapi sudah menjadi standar dalam pengembangan aplikasi modern. Dengan dukungan komunitas yang besar dan dokumentasi yang lengkap, TypeScript menjadi pilihan yang tepat bagi developer yang ingin meningkatkan kualitas kodenya. 
        
        Meskipun memiliki banyak keunggulan, TypeScript tetap membutuhkan pemahaman dasar JavaScript yang kuat. Oleh karena itu, sangat disarankan untuk memahami konsep dasar JavaScript terlebih dahulu sebelum beralih ke TypeScript. 
        
        Kesimpulannya, TypeScript adalah solusi yang tepat untuk membangun aplikasi yang lebih stabil, scalable, dan mudah dikembangkan. Dengan memanfaatkan TypeScript, developer dapat bekerja lebih efisien serta menghasilkan kode yang lebih profesional dan siap digunakan dalam dunia industri.`,
        en: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.'
      },
      features: {
        id: ['Static Typing', 'Interfaces', 'Generics', 'Enums'],
        en: ['Static Typing', 'Interfaces', 'Generics', 'Enums']
      },
      useCase: {
        id: 'Pengembangan aplikasi skala besar yang membutuhkan keamanan tipe data.',
        en: 'Large-scale application development requiring type safety.'
      },
      discussions: [
        { title: 'Type Safety', content: 'Menghindari runtime error dengan static typing.' },
        { title: 'Modern JavaScript', content: 'Fitur terbaru JS yang didukung TypeScript.' }
      ]
    },
    {
      id: 'python',
      name: 'Python',
      icon: 'fab fa-python',
      color: 'text-yellow-500',
      category: 'Programming Language',
      description: {
        id: 'Python adalah bahasa pemrograman tingkat tinggi yang menekankan keterbacaan kode.',
        en: 'Python is a high-level programming language emphasizing code readability.'
      },
      features: {
        id: ['Easy to Learn', 'Versatile Library', 'Data Science Tools', 'Automation Scripting'],
        en: ['Easy to Learn', 'Versatile Library', 'Data Science Tools', 'Automation Scripting']
      },
      useCase: {
        id: 'Data science, AI, scripting, dan backend development.',
        en: 'Data science, AI, scripting, and backend development.'
      },
      discussions: [
        { title: 'Data Science', content: 'Ekosistem Python untuk analisis data.' },
        { title: 'Automation', content: 'Menyederhanakan tugas berulang dengan Python.' }
      ]
    },
    {
      id: 'php',
      name: 'PHP',
      icon: 'fab fa-php',
      color: 'text-indigo-400',
      category: 'Programming Language',
      description: {
        id: 'PHP adalah bahasa skrip populer yang digunakan untuk pengembangan web.',
        en: 'PHP is a popular scripting language used for web development.'
      },
      features: {
        id: ['Server-side Scripting', 'Large Ecosystem', 'Database Integration', 'CMS Support'],
        en: ['Server-side Scripting', 'Large Ecosystem', 'Database Integration', 'CMS Support']
      },
      useCase: {
        id: 'Pengembangan website dinamis dan sistem backend.',
        en: 'Dynamic website development and backend systems.'
      },
      discussions: [
        { title: 'Web Development', content: 'Sejarah dan masa depan PHP di dunia web.' },
        { title: 'CMS Platforms', content: 'Membangun dengan WordPress dan framework PHP.' }
      ]
    },
    {
      id: 'flutter',
      name: 'Flutter',
      icon: 'fas fa-mobile-alt',
      color: 'text-cyan-500',
      category: 'Mobile Framework',
      description: {
        id: 'Flutter adalah framework UI dari Google untuk membangun aplikasi multi-platform.',
        en: 'Flutter is Google\'s UI framework for building multi-platform applications.'
      },
      features: {
        id: ['Hot Reload', 'Native Performance', 'Custom Widgets', 'Single Codebase'],
        en: ['Hot Reload', 'Native Performance', 'Custom Widgets', 'Single Codebase']
      },
      useCase: {
        id: 'Membangun aplikasi mobile Android & iOS secara simultan.',
        en: 'Building Android & iOS mobile apps simultaneously.'
      },
      discussions: [
        { title: 'Cross-platform Development', content: 'Efisiensi satu basis kode untuk banyak platform.' },
        { title: 'UI/UX Design', content: 'Membuat desain kustom yang indah dengan Flutter.' }
      ]
    },
    {
      id: 'node-js',
      name: 'Node.js',
      icon: 'fab fa-node-js',
      color: 'text-green-600',
      category: 'Runtime Environment',
      description: {
        id: 'Node.js adalah runtime JavaScript yang dibangun di atas engine V8 Chrome.',
        en: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine.'
      },
      features: {
        id: ['Asynchronous I/O', 'Event Driven', 'NPM Ecosystem', 'Fast Execution'],
        en: ['Asynchronous I/O', 'Event Driven', 'NPM Ecosystem', 'Fast Execution']
      },
      useCase: {
        id: 'Aplikasi real-time, microservices, and backend API.',
        en: 'Real-time applications, microservices, and backend APIs.'
      },
      discussions: [
        { title: 'Event Loop', content: 'Memahami cara kerja asinkronus di Node.js.' },
        { title: 'Package Management', content: 'Mengelola dependensi dengan NPM dan Yarn.' }
      ]
    }
  ];

  const tech = techData.find(t => t.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  if (!tech) {
    return (
      <div className="min-h-screen bg-darkBg flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Tech not found</h2>
          <Link to="/" className="text-purple-400 hover:text-purple-300">Back to Home</Link>
        </div>
      </div>
    );
  }

  const handleDocClick = () => {
    if (tech.id === 'typescript' && tech.docUrl) {
      window.open(tech.docUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-darkBg text-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors group">
          <i className="fas fa-arrow-left mr-2 transform group-hover:-translate-x-1 transition-transform"></i>
          Back to Home
        </Link>

        {/* Header */}
        <div className="glass-card p-8 rounded-3xl mb-8" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div 
              className={`w-24 h-24 flex items-center justify-center text-6xl ${tech.color} cursor-pointer hover:scale-110 transition-transform`}
              onClick={handleDocClick}
              title={tech.id === 'typescript' ? 'Click for Documentation' : ''}
            >
              <i className={tech.icon}></i>
            </div>
            <div className="text-center md:text-left">
              <span className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm font-medium mb-3 inline-block">
                {tech.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{tech.name}</h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <section className="glass-card p-8 rounded-3xl" data-aos="fade-up" data-aos-delay="100">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <i className="fas fa-info-circle mr-3 text-purple-400"></i>
                Overview
              </h2>
              <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                {tech.description[currentLang] || tech.description.id}
              </div>
            </section>

            {/* Discussions Section */}
            {tech.discussions && (
              <section className="glass-card p-8 rounded-3xl" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <i className="fas fa-comments mr-3 text-purple-400"></i>
                  Kategori Pembahasan
                </h2>
                <div className="space-y-6">
                  {tech.discussions.map((disc, index) => (
                    <div key={index} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                      <h3 className="font-bold text-purple-400 mb-2">{disc.title}</h3>
                      <p className="text-gray-400 text-sm">{disc.content}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <section className="glass-card p-8 rounded-3xl" data-aos="fade-up" data-aos-delay="300">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <i className="fas fa-star mr-3 text-purple-400"></i>
                Key Features
              </h2>
              <ul className="space-y-4">
                {(tech.features[currentLang] || tech.features.id).map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-400 text-sm">
                    <i className="fas fa-check-circle mt-1 mr-3 text-purple-500"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <section className="glass-card p-8 rounded-3xl" data-aos="fade-up" data-aos-delay="400">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <i className="fas fa-lightbulb mr-3 text-purple-400"></i>
                Use Case
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                {tech.useCase[currentLang] || tech.useCase.id}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
};

export default TechDetail;
