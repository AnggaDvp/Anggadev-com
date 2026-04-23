import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import AOS from 'aos';

const TechDetail = ({ currentLang }) => {
  const { id } = useParams();

  const techData = [
    {
      id: 'flutter',
      name: 'Flutter',
      icon: 'fas fa-mobile-alt',
      color: 'text-purple-500',
      category: 'Mobile Framework',
      description: {
        id: 'Flutter adalah framework open-source dari Google untuk membangun aplikasi antarmuka pengguna (UI) yang dikompilasi secara native untuk mobile (iOS, Android), web, dan desktop dari satu basis kode tunggal.',
        en: 'Flutter is an open-source framework by Google for building natively compiled user interface (UI) applications for mobile (iOS, Android), web, and desktop from a single codebase.'
      },
      features: {
        id: [
          'Hot Reload: Melihat perubahan kode secara instan tanpa kehilangan state.',
          'Widget Custom: Semua elemen UI adalah widget yang bisa dikustomisasi penuh.',
          'Native Performance: Dikompilasi langsung ke kode mesin ARM.',
          'Satu Codebase: Tulis satu kali, jalankan di mana saja.'
        ],
        en: [
          'Hot Reload: See code changes instantly without losing state.',
          'Custom Widgets: All UI elements are fully customizable widgets.',
          'Native Performance: Compiled directly to ARM machine code.',
          'Single Codebase: Write once, run anywhere.'
        ]
      },
      useCase: {
        id: 'Digunakan untuk membangun aplikasi mobile modern yang responsif, aplikasi desktop lintas platform, dan website interaktif.',
        en: 'Used for building modern responsive mobile apps, cross-platform desktop applications, and interactive websites.'
      }
    },
    {
      id: 'react-js',
      name: 'React JS',
      icon: 'fab fa-react',
      color: 'text-purple-500',
      category: 'Frontend Library',
      description: {
        id: 'React adalah library JavaScript populer untuk membangun antarmuka pengguna yang dinamis dan interaktif.',
        en: 'React is a popular JavaScript library for building dynamic and interactive user interfaces.'
      },
      features: {
        id: [
          'Berbasis Komponen: Membangun UI yang kompleks dari bagian-bagian kecil yang terisolasi.',
          'Virtual DOM: Meningkatkan performa dengan meminimalkan manipulasi DOM langsung.',
          'JSX: Sintaks deklaratif yang menggabungkan HTML dengan kekuatan JavaScript.',
          'Hooks: Mengelola state dan fitur React lainnya tanpa menulis class.'
        ],
        en: [
          'Component-Based: Build complex UIs from small, isolated parts.',
          'Virtual DOM: Enhances performance by minimizing direct DOM manipulation.',
          'JSX: Declarative syntax that combines HTML with the power of JavaScript.',
          'Hooks: Manage state and other React features without writing classes.'
        ]
      },
      useCase: {
        id: 'Digunakan untuk membangun Single Page Applications (SPA) yang responsif dan dashboard admin yang kompleks.',
        en: 'Used for building responsive Single Page Applications (SPA) and complex admin dashboards.'
      }
    },
    {
      id: 'laravel',
      name: 'Laravel',
      icon: 'fab fa-laravel',
      color: 'text-red-500',
      category: 'Framework PHP',
      description: {
        id: 'Laravel adalah framework PHP paling populer di dunia saat ini, yang dirancang untuk pengembangan aplikasi web mengikuti arsitektur model-view-controller (MVC). Laravel dikenal dengan sintaksnya yang elegan, ekspresif, dan memanjakan developer (Developer Experience).',
        en: 'Laravel is the most popular PHP framework in the world today, designed for web application development following the model-view-controller (MVC) architecture. Laravel is known for its elegant, expressive syntax and excellent Developer Experience.'
      },
      features: {
        id: [
          'Eloquent ORM: Sistem pemetaan database yang sangat intuitif.',
          'Blade Templating: Engine template yang powerful namun ringan.',
          'Sistem Keamanan Terintegrasi: Proteksi terhadap SQL injection, cross-site request forgery, dan cross-site scripting.',
          'Ekosistem Luas: Memiliki alat pendukung seperti Forge, Vapor, dan Nova.'
        ],
        en: [
          'Eloquent ORM: A highly intuitive database mapping system.',
          'Blade Templating: A powerful yet lightweight template engine.',
          'Integrated Security System: Protection against SQL injection, CSRF, and XSS.',
          'Vast Ecosystem: Support tools like Forge, Vapor, and Nova.'
        ]
      },
      useCase: {
        id: 'Digunakan untuk membangun sistem backend yang kompleks, API berskala besar, sistem manajemen konten (CMS), hingga platform e-commerce.',
        en: 'Used for building complex backend systems, large-scale APIs, Content Management Systems (CMS), and e-commerce platforms.'
      }
    },
    {
      id: 'node-js',
      name: 'Node.js',
      icon: 'fab fa-node-js',
      color: 'text-green-500',
      category: 'Runtime JavaScript',
      description: {
        id: 'Node.js adalah lingkungan runtime JavaScript open-source yang berjalan di engine V8 Chrome. Node.js memungkinkan eksekusi kode JavaScript di sisi server, yang sebelumnya hanya bisa dilakukan di browser.',
        en: 'Node.js is an open-source JavaScript runtime environment built on Chrome\'s V8 engine. Node.js allows JavaScript code execution on the server side, which was previously only possible in browsers.'
      },
      features: {
        id: [
          'Asynchronous & Event Driven: Menangani ribuan koneksi secara bersamaan tanpa blocking.',
          'Single Threaded: Sangat efisien dalam penggunaan memori.',
          'NPM (Node Package Manager): Akses ke jutaan library siap pakai.',
          'Sangat Cepat: Menggunakan engine V8 yang dikompilasi ke kode mesin.'
        ],
        en: [
          'Asynchronous & Event Driven: Handles thousands of simultaneous connections without blocking.',
          'Single Threaded: Highly efficient in memory usage.',
          'NPM (Node Package Manager): Access to millions of ready-to-use libraries.',
          'Extremely Fast: Uses the V8 engine compiled to machine code.'
        ]
      },
      useCase: {
        id: 'Sangat cocok untuk aplikasi real-time seperti chat, streaming video, kolaborasi dokumen, dan API microservices.',
        en: 'Perfect for real-time applications like chat, video streaming, document collaboration, and microservices APIs.'
      }
    },
    {
        id: 'php',
        name: 'PHP',
        icon: 'fab fa-php',
        color: 'text-indigo-400',
        category: 'Programming Language',
        description: {
          id: 'PHP (Hypertext Preprocessor) adalah bahasa skrip sisi-server yang dirancang khusus untuk pengembangan web. PHP adalah salah satu bahasa pemrograman pertama yang dapat disisipkan langsung ke dalam kode HTML.',
          en: 'PHP (Hypertext Preprocessor) is a server-side scripting language specifically designed for web development. PHP was one of the first languages that could be embedded directly into HTML code.'
        },
        features: {
          id: [
            'Mudah Dipelajari: Sintaks yang ramah bagi pemula.',
            'Dukungan Database Luas: Sangat mudah terhubung dengan MySQL, PostgreSQL, dan lainnya.',
            'Performa Stabil: Terus berkembang dengan versi terbaru (PHP 8+) yang jauh lebih cepat.',
            'Open Source: Gratis digunakan dan didukung oleh komunitas global yang masif.'
          ],
          en: [
            'Easy to Learn: Beginner-friendly syntax.',
            'Broad Database Support: Easily connects with MySQL, PostgreSQL, and more.',
            'Stable Performance: Continuously evolving with latest versions (PHP 8+) being much faster.',
            'Open Source: Free to use and supported by a massive global community.'
          ]
        },
        useCase: {
        id: 'Used by over 70% of websites worldwide, including WordPress, Facebook, and Wikipedia.',
        en: 'Used by over 70% of websites worldwide, including WordPress, Facebook, and Wikipedia.'
      }
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: 'fab fa-js',
      color: 'text-purple-500',
      category: 'Programming Language',
      description: {
        id: 'JavaScript adalah bahasa pemrograman paling populer yang digunakan untuk membuat website interaktif. JS memungkinkan Anda menambahkan fitur kompleks ke website seperti animasi, update konten secara dinamis, dan kontrol multimedia.',
        en: 'JavaScript is the most popular programming language used to create interactive websites. JS allows you to add complex features to websites like animations, dynamic content updates, and multimedia controls.'
      },
      features: {
        id: [
          'Interaktivitas: Mengatur elemen UI secara real-time.',
          'Ekosistem Raksasa: Akses ke library seperti React, Vue, dan Angular.',
          'Universal: Bisa digunakan di frontend, backend (Node.js), dan mobile.',
          'Asynchronous: Mendukung proses latar belakang tanpa mengganggu tampilan.'
        ],
        en: [
          'Interactivity: Controlling UI elements in real-time.',
          'Giant Ecosystem: Access to libraries like React, Vue, and Angular.',
          'Universal: Can be used in frontend, backend (Node.js), and mobile.',
          'Asynchronous: Supports background processes without affecting the UI.'
        ]
      },
      useCase: {
        id: 'Digunakan di hampir setiap website modern untuk logika sisi klien dan aplikasi web satu halaman (SPA).',
        en: 'Used in almost every modern website for client-side logic and single-page applications (SPA).'
      }
    },
    {
      id: 'html5',
      name: 'HTML5',
      icon: 'fab fa-html5',
      color: 'text-purple-500',
      category: 'Markup Language',
      description: {
        id: 'HTML5 adalah standar terbaru dari bahasa markup yang mendefinisikan struktur konten di web. Ini adalah kerangka dasar dari setiap website yang Anda lihat.',
        en: 'HTML5 is the latest standard of the markup language that defines the content structure on the web. It is the basic framework of every website you see.'
      },
      features: {
        id: [
          'Tag Semantik: Membantu SEO dengan struktur konten yang jelas.',
          'Dukungan Multimedia: Tag native untuk video dan audio.',
          'Canvas API: Menggambar grafik 2D/3D secara native.',
          'Offline Storage: Memungkinkan website bekerja tanpa internet.'
        ],
        en: [
          'Semantic Tags: Helps SEO with clear content structure.',
          'Multimedia Support: Native tags for video and audio.',
          'Canvas API: Drawing 2D/3D graphics natively.',
          'Offline Storage: Allows websites to work without internet.'
        ]
      },
      useCase: {
        id: 'Menjadi pondasi utama dalam pembuatan semua halaman web di internet.',
        en: 'Serves as the main foundation for creating all web pages on the internet.'
      }
    },
    {
      id: 'css3',
      name: 'CSS3',
      icon: 'fab fa-css3-alt',
      color: 'text-purple-500',
      category: 'Styling Language',
      description: {
        id: 'CSS3 adalah bahasa yang digunakan untuk mendesain tampilan website agar terlihat menarik, responsif, dan profesional. CSS3 menangani warna, layout, font, dan animasi.',
        en: 'CSS3 is the language used to design the website layout to look attractive, responsive, and professional. CSS3 handles colors, layouts, fonts, and animations.'
      },
      features: {
        id: [
          'Flexbox & Grid: Membuat tata letak kompleks dengan mudah.',
          'Media Queries: Membuat website responsif di semua perangkat.',
          'Animasi & Transisi: Memberikan efek visual tanpa JavaScript.',
          'Variabel CSS: Mempermudah manajemen warna dan tema.'
        ],
        en: [
          'Flexbox & Grid: Creating complex layouts easily.',
          'Media Queries: Making websites responsive across all devices.',
          'Animations & Transitions: Providing visual effects without JavaScript.',
          'CSS Variables: Simplifying color and theme management.'
        ]
      },
      useCase: {
        id: 'Digunakan untuk mempercantik dan mengatur tata letak semua halaman web.',
        en: 'Used to beautify and arrange the layout of all web pages.'
      }
    },
    {
      id: 'mysql',
      name: 'MySQL',
      icon: 'fas fa-database',
      color: 'text-purple-500',
      category: 'Database Management System',
      description: {
        id: 'MySQL adalah sistem manajemen database relasional open-source paling populer. MySQL digunakan untuk menyimpan dan mengelola data secara aman dan efisien.',
        en: 'MySQL is the most popular open-source relational database management system. MySQL is used to store and manage data securely and efficiently.'
      },
      features: {
        id: [
          'Keamanan Tinggi: Sistem enkripsi dan hak akses yang ketat.',
          'Performa Cepat: Dioptimalkan untuk query data dalam jumlah besar.',
          'Relasional: Mengatur data dalam tabel yang saling berhubungan.',
          'Skalabilitas: Mampu menangani database dari skala kecil hingga raksasa.'
        ],
        en: [
          'High Security: Encryption systems and strict access rights.',
          'Fast Performance: Optimized for large data queries.',
          'Relational: Organizing data in interconnected tables.',
          'Scalability: Capable of handling databases from small to giant scales.'
        ]
      },
      useCase: {
        id: 'Digunakan sebagai penyimpanan data utama untuk WordPress, e-commerce, dan sistem informasi perusahaan.',
        en: 'Used as the primary data storage for WordPress, e-commerce, and corporate information systems.'
      }
    },
    {
      id: 'bootstrap',
      name: 'Bootstrap',
      icon: 'fab fa-bootstrap',
      color: 'text-purple-500',
      category: 'CSS Framework',
      description: {
        id: 'Bootstrap adalah framework CSS paling populer di dunia untuk membuat website responsif dan mobile-first dengan cepat menggunakan komponen siap pakai.',
        en: 'Bootstrap is the world\'s most popular CSS framework for creating responsive, mobile-first websites quickly using ready-to-use components.'
      },
      features: {
        id: [
          'Grid System: Tata letak 12-kolom yang sangat fleksibel.',
          'Komponen Siap Pakai: Modal, Navbar, Button, dan Card.',
          'Responsif Otomatis: Website langsung menyesuaikan di HP/Tablet.',
          'Dokumentasi Lengkap: Memiliki komunitas dan panduan yang sangat luas.'
        ],
        en: [
          'Grid System: Highly flexible 12-column layout.',
          'Ready-to-use Components: Modals, Navbars, Buttons, and Cards.',
          'Auto-Responsive: Websites instantly adjust on Mobile/Tablet.',
          'Complete Documentation: Has a very vast community and guides.'
        ]
      },
      useCase: {
        id: 'Digunakan untuk mempercepat pembuatan dashboard, prototipe website, dan landing page profesional.',
        en: 'Used to speed up the creation of dashboards, website prototypes, and professional landing pages.'
      }
    },
    {
      id: 'word',
        name: 'Microsoft Word',
        icon: 'fas fa-file-word',
        color: 'text-blue-600',
        category: 'Office Tool',
        description: {
          id: 'Microsoft Word adalah aplikasi pengolah kata standar industri yang digunakan untuk membuat dokumen profesional seperti laporan, proposal, dan surat resmi.',
          en: 'Microsoft Word is an industry-standard word processing application used for creating professional documents like reports, proposals, and official letters.'
        },
        features: {
          id: [
            'Formatting Lanjutan: Kontrol penuh atas tata letak dan gaya dokumen.',
            'Kolaborasi Real-time: Edit dokumen bersama tim secara daring.',
            'Template Profesional: Ribuan desain siap pakai.',
            'Integrasi Cloud: Simpan dan akses dokumen di mana saja lewat OneDrive.'
          ],
          en: [
            'Advanced Formatting: Full control over layout and document styles.',
            'Real-time Collaboration: Edit documents online with your team.',
            'Professional Templates: Thousands of ready-to-use designs.',
            'Cloud Integration: Save and access documents anywhere via OneDrive.'
          ]
        },
        useCase: {
          id: 'Digunakan untuk pembuatan dokumentasi proyek, panduan teknis, dan administrasi perkantoran.',
          en: 'Used for project documentation, technical guides, and office administration.'
        }
      },
      {
        id: 'excel',
        name: 'Microsoft Excel',
        icon: 'fas fa-file-excel',
        color: 'text-green-600',
        category: 'Data Analysis Tool',
        description: {
          id: 'Microsoft Excel adalah aplikasi spreadsheet yang sangat powerful untuk pengolahan data, perhitungan numerik, dan analisis statistik.',
          en: 'Microsoft Excel is a highly powerful spreadsheet application for data processing, numerical calculations, and statistical analysis.'
        },
        features: {
          id: [
            'Formula & Fungsi: Ribuan rumus untuk perhitungan otomatis.',
            'Pivot Tables: Meringkas ribuan baris data dalam hitungan detik.',
            'Visualisasi Data: Grafik dan diagram interaktif.',
            'VBA & Makro: Automasi tugas berulang menggunakan bahasa pemrograman.'
          ],
          en: [
            'Formulas & Functions: Thousands of formulas for automatic calculations.',
            'Pivot Tables: Summarize thousands of data rows in seconds.',
            'Data Visualization: Interactive charts and diagrams.',
            'VBA & Macros: Automate repetitive tasks using programming.'
          ]
        },
        useCase: {
          id: 'Digunakan untuk pelaporan keuangan, manajemen stok, analisis data bisnis, dan pemodelan statistik.',
          en: 'Used for financial reporting, stock management, business data analysis, and statistical modeling.'
        }
      },
      {
        id: 'powerpoint',
        name: 'Microsoft PowerPoint',
        icon: 'fas fa-file-powerpoint',
        color: 'text-orange-600',
        category: 'Presentation Tool',
        description: {
          id: 'Microsoft PowerPoint adalah standar emas untuk membuat presentasi visual yang menarik guna menyampaikan ide atau hasil kerja kepada audiens.',
          en: 'Microsoft PowerPoint is the gold standard for creating engaging visual presentations to convey ideas or work results to an audience.'
        },
        features: {
          id: [
            'Desain Visual: Penambahan gambar, video, dan animasi transisi.',
            'SmartArt: Mengubah teks menjadi diagram profesional secara instan.',
            'Presenter View: Catatan rahasia untuk pembicara saat presentasi.',
            'Export Beragam: Simpan sebagai PDF, Video, atau gambar.'
          ],
          en: [
            'Visual Design: Adding images, videos, and transition animations.',
            'SmartArt: Instantly turn text into professional diagrams.',
            'Presenter View: Private speaker notes during presentations.',
            'Various Export: Save as PDF, Video, or images.'
          ]
        },
        useCase: {
          id: 'Digunakan untuk presentasi proyek ke klien, edukasi tim, dan pelaporan progres kerja.',
          en: 'Used for client project presentations, team education, and work progress reporting.'
        }
      },
      {
        id: 'phpmyadmin',
        name: 'phpMyAdmin',
        icon: 'fas fa-database',
        color: 'text-orange-500',
        category: 'Database Management',
        description: {
          id: 'phpMyAdmin adalah alat administrasi open-source berbasis web untuk MySQL dan MariaDB. Sangat memudahkan developer dalam mengelola database tanpa perlu menulis perintah SQL manual.',
          en: 'phpMyAdmin is a web-based open-source administration tool for MySQL and MariaDB. It makes it easy for developers to manage databases without writing manual SQL commands.'
        },
        features: {
          id: [
            'Antarmuka Web: Kelola tabel, baris, dan kolom lewat browser.',
            'Import/Export: Pindahkan data dengan format SQL, CSV, XML, dan lainnya.',
            'Query Builder: Membuat query SQL kompleks dengan bantuan UI.',
            'Manajemen User: Mengatur hak akses dan keamanan database.'
          ],
          en: [
            'Web Interface: Manage tables, rows, and columns via browser.',
            'Import/Export: Move data with SQL, CSV, XML, and other formats.',
            'Query Builder: Create complex SQL queries with UI assistance.',
            'User Management: Managing database access rights and security.'
          ]
        },
        useCase: {
          id: 'Digunakan untuk pemeliharaan database aplikasi, debugging data, dan backup rutin.',
          en: 'Used for application database maintenance, data debugging, and routine backups.'
        }
      }
  ];

  const tech = techData.find(t => t.id === id) || techData[0]; // Fallback to Laravel if not found

  useEffect(() => {
    // window.scrollTo(0, 0); // Removed to allow ScrollToTop component to handle it
    AOS.init({ duration: 600, easing: 'ease-out-cubic', once: true });
  }, []);

  return (
    <main className="pt-28 pb-20 px-4 min-h-screen bg-darkBg">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="text-center mb-12" data-aos="fade-up">
            <div className={`w-24 h-24 mx-auto mb-6 flex items-center justify-center text-6xl rounded-3xl bg-white/5 border border-purple-500/20 ${tech.color}`}>
              <i className={tech.icon}></i>
            </div>
            <span className="px-4 py-1.5 rounded-full bg-purple-900/30 text-purple-400 text-sm font-bold tracking-widest uppercase">
              {tech.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4">
              {tech.name}
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {tech.description[currentLang]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card rounded-2xl p-8 bg-white/5 border border-purple-900/20" data-aos="fade-right">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <i className="fas fa-star text-purple-500"></i> {currentLang === 'id' ? 'Fitur Utama' : 'Key Features'}
              </h3>
              <ul className="space-y-4">
                {tech.features[currentLang].map((feature, index) => (
                  <li key={index} className="flex gap-3 text-gray-400">
                    <i className="fas fa-check-circle text-purple-500 mt-1"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-8 bg-white/5 border border-purple-900/20" data-aos="fade-left">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <i className="fas fa-lightbulb text-purple-500"></i> {currentLang === 'id' ? 'Kegunaan' : 'Use Case'}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {tech.useCase[currentLang]}
              </p>
              <div className="mt-8 pt-8 border-t border-purple-900/20">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">
                    {currentLang === 'id' ? 'Status Keahlian' : 'Proficiency Status'}
                </h4>
                <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-500 h-full rounded-full w-[90%]"></div>
                </div>
                <p className="text-xs text-purple-400 mt-2 font-bold">Expert / Advanced</p>
              </div>
            </div>
          </div>

          <div className="text-center" data-aos="fade-up">
            <Link to="/" className="inline-flex items-center gap-2 text-purple-400 font-bold hover:gap-4 transition-all">
              <i className="fas fa-arrow-left"></i> {currentLang === 'id' ? 'Kembali ke Portfolio' : 'Back to Portfolio'}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TechDetail;
