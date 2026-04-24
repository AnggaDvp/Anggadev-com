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
        id: `React adalah library JavaScript yang dikembangkan oleh Meta (sebelumnya Facebook) untuk membangun antarmuka pengguna (UI) yang dinamis dan efisien. Sejak diluncurkan, React telah mengubah cara kita berpikir tentang pengembangan web.

**Konsep Inti: Komponen**
Bayangkan UI Anda sebagai kumpulan blok Lego; setiap blok adalah komponen mandiri yang memiliki logika dan tampilannya sendiri. Dengan memecah UI menjadi komponen-komponen kecil, kode menjadi lebih mudah dikelola, diuji, dan digunakan kembali. Komponen dapat menerima data melalui "props" dan mengelola data internalnya sendiri melalui "state".

**Virtual DOM & Rekonsiliasi**
Salah satu fitur revolusioner React adalah **Virtual DOM**. React tidak langsung memperbarui seluruh halaman web saat ada perubahan data, melainkan membuat salinan virtual dari DOM di memori. Ia kemudian menggunakan algoritma "diffing" untuk membandingkan salinan ini dengan DOM asli dan hanya melakukan pembaruan pada bagian yang benar-benar berubah. Hal ini membuat aplikasi React sangat cepat karena manipulasi DOM asli adalah operasi yang mahal secara performa.

**JSX (JavaScript XML)**
React menggunakan JSX, sebuah ekstensi sintaksis yang memungkinkan Anda menulis struktur HTML langsung di dalam JavaScript. Meskipun terlihat seperti HTML, JSX sebenarnya dikonversi menjadi pemanggilan fungsi JavaScript biasa, memberikan kekuatan penuh bahasa pemrograman di dalam tampilan Anda.

**The Power of Hooks**
Sejak versi 16.8, React memperkenalkan **Hooks** yang memungkinkan penggunaan state dan fitur React lainnya di dalam komponen fungsi (Functional Components). 
- \`useState\`: Untuk menyimpan data yang dapat berubah.
- \`useEffect\`: Untuk menangani side effects seperti fetching data atau manipulasi DOM manual.
- \`useContext\`: Untuk berbagi data global tanpa "prop drilling".
- \`useMemo\` & \`useCallback\`: Untuk optimasi performa dengan menyimpan hasil kalkulasi atau fungsi.

React bukan hanya tentang web; dengan React Native, Anda bahkan bisa menggunakan konsep yang sama untuk membangun aplikasi mobile native.`,
        en: `React is a JavaScript library developed by Meta (formerly Facebook) for building dynamic and efficient user interfaces (UI). Since its launch, React has transformed how we think about web development.

**Core Concept: Components**
Imagine your UI as a collection of Lego blocks; each block is an independent component with its own logic and appearance. By breaking the UI into small components, the code becomes easier to manage, test, and reuse. Components can receive data via "props" and manage their own internal data through "state".

**Virtual DOM & Reconciliation**
One of React's revolutionary features is the **Virtual DOM**. Instead of updating the entire webpage when data changes, React creates a virtual copy of the DOM in memory. It then uses a "diffing" algorithm to compare this copy with the original DOM and only updates the parts that have actually changed. This makes React applications incredibly fast because direct DOM manipulation is a performance-heavy operation.

**JSX (JavaScript XML)**
React uses JSX, a syntax extension that allows you to write HTML structures directly within JavaScript. Although it looks like HTML, JSX is actually converted into regular JavaScript function calls, giving you the full power of the programming language within your views.

**The Power of Hooks**
Since version 16.8, React introduced **Hooks**, allowing the use of state and other React features within Functional Components.
- \`useState\`: For storing mutable data.
- \`useEffect\`: For handling side effects like data fetching or manual DOM manipulation.
- \`useContext\`: For sharing global data without "prop drilling".
- \`useMemo\` & \`useCallback\`: For performance optimization by memoizing calculations or functions.

React isn't just for the web; with React Native, you can use the same concepts to build native mobile applications.`
      },
      features: {
        id: ['Berbasis Komponen', 'Virtual DOM', 'JSX Syntax', 'Hooks API', 'Unidirectional Data Flow', 'Rich Ecosystem', 'React Fiber Architecture'],
        en: ['Component-Based', 'Virtual DOM', 'JSX Syntax', 'Hooks API', 'Unidirectional Data Flow', 'Rich Ecosystem', 'React Fiber Architecture']
      },
      useCase: {
        id: 'Membangun Single Page Applications (SPA) yang responsif, dashboard interaktif, media sosial, dan aplikasi web skala besar dengan UI kompleks.',
        en: 'Building responsive Single Page Applications (SPA), interactive dashboards, social media platforms, and large-scale web apps with complex UI.'
      },
      discussions: [
        { title: 'Virtual DOM & Performa', content: 'Memahami mekanisme rekonsiliasi dan bagaimana React Fiber mengoptimalkan rendering dengan prioritas tugas.' },
        { title: 'State Management Modern', content: 'Eksplorasi evolusi dari Redux ke Context API, hingga library modern seperti Zustand, Recoil, dan TanStack Query.' },
        { title: 'React Server Components (RSC)', content: 'Mengenal masa depan React di mana komponen bisa dieksekusi di server untuk mengurangi beban JavaScript di sisi client.' },
        { title: 'Optimasi Rendering', content: 'Teknik menggunakan React.memo, useMemo, dan useCallback untuk mencegah render ulang yang tidak perlu.' }
      ]
    },
    {
      id: 'angular-js',
      name: 'Angular JS',
      icon: 'fab fa-angular',
      color: 'text-red-600',
      category: 'Frontend Framework',
      description: {
        id: `Angular (dikembangkan oleh Google) adalah platform pengembangan aplikasi web berbasis TypeScript yang sangat lengkap dan terstruktur. Berbeda dengan library seperti React, Angular adalah framework "batteries-included" yang menyediakan solusi lengkap untuk routing, form, dan HTTP client secara bawaan.

**Arsitektur Modular**
Aplikasi Angular dibangun di atas **NgModules**. Setiap modul mengelompokkan kode yang terkait (komponen, layanan, pipe) menjadi satu unit fungsional. Arsitektur ini sangat mendukung pengembangan aplikasi skala besar (Enterprise) karena memudahkan pembagian kerja antar tim dan implementasi "Lazy Loading" untuk mempercepat waktu muat awal aplikasi.

**Dependency Injection (DI)**
Ini adalah salah satu fitur paling kuat di Angular. DI memungkinkan komponen untuk menerima dependensi yang mereka butuhkan (seperti layanan data) dari luar, daripada membuatnya sendiri. Hal ini membuat kode Anda sangat modular, mudah diuji (unit testing), dan mengikuti prinsip "Single Responsibility".

**Data Binding & Directives**
Angular menawarkan sistem data binding yang sangat fleksibel:
- **Interpolation**: Menampilkan data model ke tampilan.
- **Property Binding**: Mengatur properti elemen HTML.
- **Event Binding**: Menangani input pengguna.
- **Two-way Data Binding**: Sinkronisasi otomatis antara model dan tampilan (v-model).
- **Directives**: Mengubah struktur atau tampilan DOM (seperti *ngIf dan *ngFor).

**RxJS & Pemrograman Reaktif**
Angular sangat terintegrasi dengan **RxJS** (Reactive Extensions for JavaScript). Hampir semua operasi asinkron di Angular, seperti permintaan HTTP atau event router, menggunakan "Observables". Ini memungkinkan developer untuk menangani aliran data yang kompleks dengan cara yang lebih deklaratif dan kuat.`,
        en: `Angular (developed by Google) is a comprehensive and structured TypeScript-based web development platform. Unlike libraries like React, Angular is a "batteries-included" framework that provides complete out-of-the-box solutions for routing, forms, and HTTP clients.

**Modular Architecture**
Angular applications are built on **NgModules**. Each module groups related code (components, services, pipes) into a single functional unit. This architecture strongly supports large-scale (Enterprise) application development by facilitating task division among teams and enabling "Lazy Loading" to speed up initial load times.

**Dependency Injection (DI)**
This is one of Angular's most powerful features. DI allows components to receive the dependencies they need (such as data services) from external sources rather than creating them themselves. This makes your code highly modular, easy to test (unit testing), and adheres to the "Single Responsibility" principle.

**Data Binding & Directives**
Angular offers a highly flexible data binding system:
- **Interpolation**: Displays model data in the view.
- **Property Binding**: Sets properties of HTML elements.
- **Event Binding**: Handles user input events.
- **Two-way Data Binding**: Automatic synchronization between the model and the view (v-model).
- **Directives**: Changes the structure or appearance of the DOM (such as *ngIf and *ngFor).

**RxJS & Reactive Programming**
Angular is deeply integrated with **RxJS** (Reactive Extensions for JavaScript). Almost all asynchronous operations in Angular, such as HTTP requests or router events, use "Observables". This allows developers to handle complex data streams in a more declarative and powerful way.`
      },
      features: {
        id: ['Dependency Injection', 'Two-way Data Binding', 'Modular Architecture', 'TypeScript Native', 'RxJS Observables', 'Angular CLI', 'AOT Compilation'],
        en: ['Dependency Injection', 'Two-way Data Binding', 'Modular Architecture', 'TypeScript Native', 'RxJS Observables', 'Angular CLI', 'AOT Compilation']
      },
      useCase: {
        id: 'Aplikasi skala enterprise yang kompleks, sistem perbankan, platform manajemen data besar, dan aplikasi internal korporasi.',
        en: 'Complex enterprise-scale applications, banking systems, large data management platforms, and corporate internal tools.'
      },
      discussions: [
        { title: 'Enterprise Patterns', content: 'Menerapkan pola desain arsitektur yang solid untuk aplikasi yang melibatkan ratusan komponen dan tim besar.' },
        { title: 'Observables & Stream', content: 'Menguasai RxJS untuk mengelola state dan aliran data asinkron secara reaktif dan efisien.' },
        { title: 'Angular Signals', content: 'Memahami fitur reaktivitas baru yang lebih sederhana dan performan untuk masa depan Angular.' },
        { title: 'AOT vs JIT', content: 'Perbedaan proses kompilasi Ahead-of-Time untuk performa produksi maksimal dibanding Just-in-Time.' }
      ]
    },
    {
      id: 'vue-js',
      name: 'Vue JS',
      icon: 'fab fa-vuejs',
      color: 'text-emerald-500',
      category: 'Frontend Framework',
      description: {
        id: `Vue.js sering disebut sebagai "Framework Progresif". Filosofi utamanya adalah kemudahan penggunaan. Anda dapat menggunakan Vue sebagai library sederhana untuk memperkaya halaman HTML biasa, atau sebagai framework lengkap untuk membangun Single Page Application (SPA) yang canggih.

**Kurva Pembelajaran yang Landai**
Salah satu alasan utama popularitas Vue adalah keramahannya bagi pemula. Jika Anda menguasai dasar HTML, CSS, dan JS, Anda bisa mulai membangun aplikasi Vue dalam hitungan jam. Sintaks templatenya sangat intuitif dan mudah dibaca.

**Reaktivitas Cerdas**
Vue memiliki salah satu sistem reaktivitas terbaik di dunia web. Di Vue 3, sistem ini dibangun menggunakan **JavaScript Proxy**. Saat Anda mengubah data, Vue secara otomatis melacak ketergantungan dan hanya memperbarui bagian DOM yang terpengaruh dengan sangat presisi. Developer tidak perlu memikirkan kapan harus me-render ulang; Vue menanganinya untuk Anda.

**Composition API vs Options API**
Vue memberikan fleksibilitas dalam cara Anda menulis kode:
- **Options API**: Cara klasik yang sangat terstruktur, memisahkan data, methods, dan computed properties.
- **Composition API**: Diperkenalkan di Vue 3, memungkinkan pengelompokan logika berdasarkan fitur, bukan berdasarkan opsi framework. Ini sangat mirip dengan Hooks di React namun dengan reaktivitas yang lebih stabil.

**Single File Components (SFC)**
File \`.vue\` memungkinkan Anda menulis template (HTML), script (JS/TS), dan style (CSS) dalam satu file yang sama. Ini memberikan isolasi gaya (scoped CSS) dan organisasi kode yang sangat rapi.

**Ekosistem Terintegrasi**
Tidak seperti framework lain yang mengandalkan library pihak ketiga, tim inti Vue mengembangkan dan memelihara **Vue Router** (navigasi) dan **Pinia** (manajemen state), memastikan integrasi yang sempurna dan pembaruan yang selaras.`,
        en: `Vue.js is often referred to as the "Progressive Framework." Its core philosophy is ease of use. You can use Vue as a simple library to enhance standard HTML pages or as a full-featured framework for building sophisticated Single Page Applications (SPA).

**Gentle Learning Curve**
One of the primary reasons for Vue's popularity is its beginner-friendliness. If you have a basic grasp of HTML, CSS, and JS, you can start building Vue applications within hours. Its template syntax is highly intuitive and easy to read.

**Intelligent Reactivity**
Vue boasts one of the best reactivity systems in the web world. In Vue 3, this system is built using **JavaScript Proxies**. When you change data, Vue automatically tracks dependencies and updates only the affected parts of the DOM with extreme precision. Developers don't need to worry about when to re-render; Vue handles it for you.

**Composition API vs Options API**
Vue provides flexibility in how you write your code:
- **Options API**: The classic, highly structured approach that separates data, methods, and computed properties.
- **Composition API**: Introduced in Vue 3, it allows grouping logic by feature rather than framework options. This is very similar to React Hooks but with more stable reactivity.

**Single File Components (SFC)**
\`.vue\` files allow you to write templates (HTML), scripts (JS/TS), and styles (CSS) within a single file. This provides style isolation (scoped CSS) and exceptionally neat code organization.

**Integrated Ecosystem**
Unlike other frameworks that rely on third-party libraries, the core Vue team develops and maintains **Vue Router** (navigation) and **Pinia** (state management), ensuring perfect integration and synchronized updates.`
      },
      features: {
        id: ['Reactivity System', 'Composition API', 'Directives (v-if, v-for)', 'Vue Router & Pinia', 'SFC (Single File Components)', 'Virtual DOM', 'Transitions & Animations'],
        en: ['Reactivity System', 'Composition API', 'Directives (v-if, v-for)', 'Vue Router & Pinia', 'SFC (Single File Components)', 'Virtual DOM', 'Transitions & Animations']
      },
      useCase: {
        id: 'Proyek web yang membutuhkan integrasi cepat, dashboard modern, aplikasi dengan performa tinggi, dan startup yang mementingkan kecepatan development.',
        en: 'Web projects requiring fast integration, modern dashboards, high-performance applications, and startups prioritizing development speed.'
      },
      discussions: [
        { title: 'Composition API', content: 'Mengorganisir logika bisnis yang kompleks agar tetap bersih dan dapat digunakan kembali (composables).' },
        { title: 'Vite & Build Tools', content: 'Menggunakan ekosistem Vite untuk pengalaman development yang sangat cepat dengan Hot Module Replacement (HMR).' },
        { title: 'State Management with Pinia', content: 'Mengelola data global dengan store yang ringan, modular, dan mendukung TypeScript secara penuh.' },
        { title: 'Performance Optimization', content: 'Teknik menggunakan defineAsyncComponent untuk lazy loading dan optimasi bundle size.' }
      ]
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      icon: 'fas fa-leaf',
      color: 'text-green-500',
      category: 'NoSQL Database',
      description: {
        id: `MongoDB adalah database NoSQL (Not Only SQL) paling populer yang menggunakan model data berbasis **Dokumen**. Alih-alih menggunakan tabel dan baris yang kaku, MongoDB menyimpan data dalam format BSON (Binary JSON) yang sangat fleksibel.

**Fleksibilitas Skema (Schema-less)**
Dalam MongoDB, setiap dokumen dalam satu koleksi (sebanding dengan tabel) dapat memiliki struktur yang berbeda. Anda tidak perlu melakukan migrasi database yang rumit hanya untuk menambah satu kolom baru. Ini sangat cocok untuk aplikasi modern di mana persyaratan data terus berubah dengan cepat.

**Skalabilitas Horizontal (Sharding)**
MongoDB dirancang dari awal untuk menangani data dalam jumlah masif. Melalui proses yang disebut "Sharding", data dapat didistribusikan ke banyak server. Saat beban aplikasi bertambah, Anda cukup menambah server baru ke dalam cluster, bukan sekadar memperbesar kapasitas satu server tunggal.

**Query Language yang Kuat**
Meskipun tidak menggunakan SQL, MongoDB memiliki bahasa query yang sangat kaya. Anda dapat melakukan pencarian berdasarkan field, jangkauan nilai, hingga pencarian teks lengkap (Full-text search). Fitur **Aggregation Framework** miliknya memungkinkan pemrosesan data kompleks (seperti join antar koleksi, filter, dan kalkulasi statistik) dilakukan langsung di dalam database dengan performa tinggi.

**High Availability (Replication)**
MongoDB mendukung "Replica Sets", di mana data Anda secara otomatis diduplikasi ke beberapa server. Jika server utama mati, server lain akan mengambil alih secara instan tanpa menghentikan aplikasi Anda, memastikan data selalu tersedia dan aman.`,
        en: `MongoDB is the most popular NoSQL (Not Only SQL) database, utilizing a **Document-based** data model. Instead of rigid tables and rows, MongoDB stores data in a highly flexible BSON (Binary JSON) format.

**Schema-less Flexibility**
In MongoDB, every document within a collection (comparable to a table) can have a different structure. You don't need to perform complex database migrations just to add a new field. This is perfectly suited for modern applications where data requirements change rapidly.

**Horizontal Scalability (Sharding)**
MongoDB is designed from the ground up to handle massive amounts of data. Through a process called "Sharding," data can be distributed across multiple servers. As the application load grows, you can simply add new servers to the cluster rather than just increasing the capacity of a single server.

**Powerful Query Language**
While it doesn't use SQL, MongoDB has a very rich query language. You can perform searches based on fields, value ranges, and even full-text searches. Its **Aggregation Framework** allows for complex data processing (such as joins between collections, filtering, and statistical calculations) to be performed directly within the database with high performance.

**High Availability (Replication)**
MongoDB supports "Replica Sets," where your data is automatically duplicated across several servers. If the primary server fails, another server takes over instantly without interrupting your application, ensuring that data is always available and secure.`
      },
      features: {
        id: ['Document-Oriented (BSON)', 'High Availability (Replica Sets)', 'Horizontal Scaling (Sharding)', 'Flexible Schema', 'Rich Aggregation Framework', 'Ad-hoc Queries', 'Geospatial Indexing'],
        en: ['Document-Oriented (BSON)', 'High Availability (Replica Sets)', 'Horizontal Scaling (Sharding)', 'Flexible Schema', 'Rich Aggregation Framework', 'Ad-hoc Queries', 'Geospatial Indexing']
      },
      useCase: {
        id: 'Aplikasi big data, sistem manajemen konten (CMS), katalog produk e-commerce, aplikasi real-time, dan penyimpanan data yang strukturnya dinamis.',
        en: 'Big data applications, Content Management Systems (CMS), e-commerce product catalogs, real-time apps, and dynamic data storage.'
      },
      discussions: [
        { title: 'NoSQL vs Relational', content: 'Memahami kapan model dokumen lebih unggul daripada model tabel tradisional (SQL).' },
        { title: 'Data Modeling Patterns', content: 'Strategi antara Embedding (menyisipkan data) vs Referencing (menghubungkan data) untuk efisiensi query.' },
        { title: 'Aggregation Pipeline', content: 'Menguasai tahapan pemrosesan data bertingkat untuk menghasilkan laporan dan analitik langsung dari database.' },
        { title: 'Security & Atlas', content: 'Implementasi keamanan database dan penggunaan layanan cloud MongoDB Atlas.' }
      ]
    },
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      icon: 'fas fa-database',
      color: 'text-blue-400',
      category: 'Relational Database',
      description: {
        id: `PostgreSQL (sering disebut Postgres) adalah sistem database relasional (RDBMS) open-source paling canggih di dunia. Selama lebih dari 30 tahun, Postgres telah terbukti sebagai database yang paling andal dalam hal integritas data dan kepatuhan standar.

**Integritas Data & ACID**
Postgres sangat ketat dalam menjaga kualitas data. Ia mendukung penuh prinsip **ACID** (Atomicity, Consistency, Isolation, Durability). Artinya, setiap transaksi database dijamin akan berhasil sepenuhnya atau tidak sama sekali, mencegah data korup atau tidak konsisten akibat kegagalan sistem di tengah proses transaksi.

**Kemampuan Multi-Model (SQL + NoSQL)**
Meskipun merupakan database SQL, Postgres memiliki dukungan luar biasa untuk data non-relasional. Tipe data **JSONB** miliknya memungkinkan penyimpanan data JSON yang terkompresi dan terindeks. Ini memberikan kecepatan query JSON yang sangat cepat, seringkali menyamai database NoSQL murni, sambil tetap mempertahankan kekuatan relasional (JOIN).

**Ekstensibilitas Luar Biasa**
Postgres dapat diperluas dengan berbagai plugin. Salah satu yang paling terkenal adalah **PostGIS**, yang mengubah Postgres menjadi database geografis terbaik untuk menangani peta dan koordinat. Ada juga ekstensi untuk pencarian teks (Full-text search) dan tipe data kustom.

**Fitur Enterprise Tingkat Lanjut**
- **Window Functions**: Untuk analisis data kompleks tanpa perlu self-join.
- **Common Table Expressions (CTE)**: Membuat query SQL yang panjang menjadi lebih terbaca dan terstruktur.
- **Materialized Views**: Menyimpan hasil query berat untuk akses instan.
- **Foreign Data Wrappers**: Menghubungkan Postgres ke database lain (seperti MySQL atau MongoDB) seolah-olah mereka adalah tabel internal.`,
        en: `PostgreSQL (often referred to as Postgres) is the world's most advanced open-source relational database system (RDBMS). For over 30 years, Postgres has proven to be the most reliable database in terms of data integrity and standards compliance.

**Data Integrity & ACID**
Postgres is exceptionally strict about maintaining data quality. It fully supports the **ACID** principles (Atomicity, Consistency, Isolation, Durability). This means every database transaction is guaranteed to either succeed completely or not at all, preventing data corruption or inconsistency due to system failures during the transaction process.

**Multi-Model Capabilities (SQL + NoSQL)**
Although it is primarily a SQL database, Postgres offers outstanding support for non-relational data. Its **JSONB** data type allows for the storage of compressed and indexed JSON data. This provides incredibly fast JSON query speeds, often rivaling pure NoSQL databases, while still retaining the power of relational operations (JOINs).

**Extraordinary Extensibility**
Postgres can be extended with various plugins. One of the most famous is **PostGIS**, which transforms Postgres into the premier geographic database for handling maps and coordinates. There are also extensions for full-text searches and custom data types.

**Advanced Enterprise Features**
- **Window Functions**: For complex data analysis without the need for self-joins.
- **Common Table Expressions (CTE)**: Makes long SQL queries more readable and structured.
- **Materialized Views**: Stores the results of heavy queries for instant access.
- **Foreign Data Wrappers**: Connects Postgres to other databases (like MySQL or MongoDB) as if they were internal tables.`
      },
      features: {
        id: ['Full ACID Compliance', 'JSONB Support', 'Advanced Indexing (GIN, GiST, BRIN)', 'Window Functions', 'Common Table Expressions (CTE)', 'PostGIS for Geospatial', 'Stored Procedures & Triggers'],
        en: ['Full ACID Compliance', 'JSONB Support', 'Advanced Indexing (GIN, GiST, BRIN)', 'Window Functions', 'Common Table Expressions (CTE)', 'PostGIS for Geospatial', 'Stored Procedures & Triggers']
      },
      useCase: {
        id: 'Aplikasi finansial yang kritis, sistem informasi geografis (GIS), analitik data kompleks, backend aplikasi web skala besar, dan sistem yang membutuhkan integritas data tinggi.',
        en: 'Critical financial apps, GIS systems, complex data analytics, large-scale web backends, and high data integrity systems.'
      },
      discussions: [
        { title: 'Database Normalization', content: 'Teknik merancang struktur tabel yang efisien untuk meminimalkan redundansi data.' },
        { title: 'Query Optimization', content: 'Menganalisis EXPLAIN ANALYZE untuk memahami bagaimana database mengeksekusi perintah dan mempercepatnya.' },
        { title: 'PostgreSQL vs MySQL', content: 'Perbandingan mendalam fitur, performa, dan skenario penggunaan yang tepat untuk masing-masing database.' },
        { title: 'Advanced Data Types', content: 'Memanfaatkan Array, Range, dan JSONB untuk kebutuhan data yang tidak konvensional.' }
      ]
    },
    {
      id: 'laravel',
      name: 'Laravel',
      icon: 'fab fa-laravel',
      color: 'text-red-500',
      category: 'PHP Framework',
      description: {
        id: `Laravel adalah framework PHP yang paling populer dan dicintai, dirancang untuk membuat pengembangan web menjadi mudah, cepat, dan menyenangkan. Diciptakan oleh Taylor Otwell, Laravel mengikuti pola arsitektur **MVC (Model-View-Controller)** yang rapi.

**Eloquent ORM: Keajaiban Database**
Fitur paling menonjol dari Laravel adalah Eloquent. Ini adalah Object-Relational Mapper yang sangat elegan. Anda dapat berinteraksi dengan database menggunakan sintaks PHP yang indah tanpa perlu menulis SQL manual. Contoh: \`User::all()\` akan mengambil semua data pengguna. Eloquent juga menangani hubungan antar tabel (Relationship) seperti "One to Many" atau "Many to Many" dengan sangat intuitif.

**Blade Templating Engine**
Blade adalah mesin template yang sangat kuat namun sederhana. Ia memungkinkan Anda menulis struktur kontrol PHP (if, loops) dengan sintaks yang sangat bersih di dalam file HTML. Blade dikompilasi menjadi kode PHP murni, sehingga tidak memberikan beban tambahan pada performa aplikasi.

**Artisan CLI**
Laravel menyertakan alat baris perintah bernama Artisan. Dengan Artisan, Anda dapat melakukan tugas-tugas membosankan secara otomatis, seperti membuat boilerplate kode (controller, model, migrasi), menjalankan tugas terjadwal (task scheduling), hingga melakukan pembersihan cache.

**Ekosistem "Batteries Included"**
Laravel bukan hanya framework, tapi sebuah ekosistem lengkap:
- **Breeze/Jetstream**: Untuk sistem login dan registrasi instan.
- **Migrations**: Sistem kontrol versi untuk database Anda.
- **Middleware**: Untuk memfilter permintaan HTTP (seperti pengecekan login).
- **Queues**: Untuk menjalankan tugas berat di latar belakang agar aplikasi tetap responsif.`,
        en: `Laravel is the most popular and beloved PHP framework, designed to make web development easy, fast, and enjoyable. Created by Taylor Otwell, Laravel follows the clean **MVC (Model-View-Controller)** architectural pattern.

**Eloquent ORM: Database Magic**
Laravel's standout feature is Eloquent. It is an exceptionally elegant Object-Relational Mapper. You can interact with your database using beautiful PHP syntax without needing to write manual SQL. For example, \`User::all()\` retrieves all user data. Eloquent also handles relationships between tables (Relationships), such as "One to Many" or "Many to Many," highly intuitively.

**Blade Templating Engine**
Blade is a powerful yet simple templating engine. It allows you to write PHP control structures (if, loops) with very clean syntax inside HTML files. Blade is compiled into plain PHP code, so it adds no additional performance overhead to your application.

**Artisan CLI**
Laravel includes a command-line tool called Artisan. With Artisan, you can automate tedious tasks, such as generating boilerplate code (controllers, models, migrations), running scheduled tasks (task scheduling), and performing cache clearing.

**"Batteries Included" Ecosystem**
Laravel is not just a framework, but a complete ecosystem:
- **Breeze/Jetstream**: For instant login and registration systems.
- **Migrations**: A version control system for your database.
- **Middleware**: For filtering HTTP requests (such as authentication checks).
- **Queues**: For running heavy tasks in the background to keep the application responsive.`
      },
      features: {
        id: ['Eloquent ORM', 'Blade Templating', 'Artisan CLI', 'Database Migrations', 'Built-in Authentication', 'Security (CSRF, XSS protection)', 'Task Scheduling & Queues'],
        en: ['Eloquent ORM', 'Blade Templating', 'Artisan CLI', 'Database Migrations', 'Built-in Authentication', 'Security (CSRF, XSS protection)', 'Task Scheduling & Queues']
      },
      useCase: {
        id: 'Pengembangan backend web yang cepat, aplikasi e-commerce, portal berita, sistem manajemen perusahaan (ERP), dan SaaS (Software as a Service).',
        en: 'Fast web backend development, e-commerce platforms, news portals, ERP systems, and SaaS (Software as a Service).'
      },
      discussions: [
        { title: 'MVC Architecture', content: 'Memahami bagaimana memisahkan data (Model), logika bisnis (Controller), dan tampilan (View) agar kode mudah dikelola.' },
        { title: 'Eloquent Relationships', content: 'Menguasai teknik menghubungkan antar tabel database dengan cara yang elegan dan efisien.' },
        { title: 'Laravel Ecosystem', content: 'Mengenal tools modern seperti Livewire (untuk UI dinamis tanpa JS berat) dan Inertia.js (menghubungkan Laravel dengan React/Vue).' },
        { title: 'API Development', content: 'Membangun RESTful API yang aman menggunakan Laravel Sanctum atau Passport.' }
      ]
    },
    {
      id: 'next-js',
      name: 'Next.js',
      icon: 'fas fa-terminal',
      color: 'text-white',
      category: 'React Framework',
      description: {
        id: `Next.js adalah framework React yang paling populer untuk membangun aplikasi web produksi. Jika React memberikan Anda kebebasan, Next.js memberikan Anda struktur dan fitur canggih yang dibutuhkan untuk membuat website yang sangat cepat dan ramah SEO (Search Engine Optimization).

**Strategi Rendering yang Fleksibel**
Ini adalah kekuatan utama Next.js. Anda bisa memilih cara halaman ditampilkan:
- **Server-Side Rendering (SSR)**: Halaman dibuat di server setiap kali ada permintaan, memastikan data selalu terbaru.
- **Static Site Generation (SSG)**: Halaman dibuat sekali saat proses build, menghasilkan website yang sangat cepat (loading instan).
- **Incremental Static Regeneration (ISR)**: Memungkinkan Anda memperbarui halaman statis secara berkala di latar belakang tanpa harus membangun ulang seluruh website.

**App Router & Server Components**
Di versi terbaru (13+), Next.js memperkenalkan "App Router". Ini memungkinkan penggunaan **React Server Components**. Komponen ini berjalan sepenuhnya di server, sehingga ukuran file JavaScript yang dikirim ke browser pengguna menjadi sangat kecil. Ini adalah lompatan besar dalam performa web.

**Optimasi Otomatis**
Next.js menangani banyak hal teknis yang rumit secara otomatis:
- **Optimasi Gambar**: Mengubah ukuran dan format gambar secara cerdas agar loading lebih cepat.
- **Optimasi Font**: Menghilangkan pergeseran tata letak (Layout Shift).
- **Code Splitting**: Hanya memuat kode yang dibutuhkan untuk halaman yang sedang dibuka.

**API Routes**
Anda bisa membangun backend (API) langsung di dalam folder proyek Next.js. Ini membuat Next.js menjadi solusi "Fullstack" yang sangat praktis untuk membangun aplikasi lengkap dari satu tempat.`,
        en: `Next.js is the most popular React framework for building production-ready web applications. While React offers freedom, Next.js provides the structure and advanced features needed to create incredibly fast and SEO-friendly (Search Engine Optimization) websites.

**Flexible Rendering Strategies**
This is the core strength of Next.js. You can choose how pages are rendered:
- **Server-Side Rendering (SSR)**: Pages are generated on the server for each request, ensuring data is always up-to-date.
- **Static Site Generation (SSG)**: Pages are generated once at build time, resulting in an extremely fast website (instant loading).
- **Incremental Static Regeneration (ISR)**: Allows you to update static pages periodically in the background without having to rebuild the entire website.

**App Router & Server Components**
In the latest versions (13+), Next.js introduced the "App Router." This enables the use of **React Server Components**. These components run entirely on the server, significantly reducing the size of the JavaScript files sent to the user's browser. This represents a massive leap in web performance.

**Automatic Optimizations**
Next.js automatically handles many complex technical tasks:
- **Image Optimization**: Intelligently resizes and formats images for faster loading.
- **Font Optimization**: Eliminates layout shifts (Layout Shift).
- **Code Splitting**: Only loads the code necessary for the page currently being viewed.

**API Routes**
You can build a backend (API) directly within the Next.js project folder. This makes Next.js a highly practical "Fullstack" solution for building complete applications from a single codebase.`
      },
      features: {
        id: ['SSR, SSG, & ISR', 'App Router (Server Components)', 'Automatic Image Optimization', 'API Routes', 'Middleware Support', 'Fast Refresh', 'Built-in CSS/Sass Support'],
        en: ['SSR, SSG, & ISR', 'App Router (Server Components)', 'Automatic Image Optimization', 'API Routes', 'Middleware Support', 'Fast Refresh', 'Built-in CSS/Sass Support']
      },
      useCase: {
        id: 'Website modern yang mementingkan SEO, blog, toko online (e-commerce), landing page dengan performa tinggi, dan aplikasi web fullstack.',
        en: 'Modern websites prioritizing SEO, blogs, e-commerce, high-performance landing pages, and fullstack web apps.'
      },
      discussions: [
        { title: 'Rendering Strategies', content: 'Mendalami kapan harus menggunakan SSR, SSG, atau ISR berdasarkan kebutuhan data aplikasi.' },
        { title: 'Server vs Client Components', content: 'Strategi memisahkan logika yang harus berjalan di server dan interaksi yang harus berjalan di browser.' },
        { title: 'SEO Optimization', content: 'Memanfaatkan fitur Metadata API dan rendering strategi untuk mendapatkan peringkat tinggi di Google.' },
        { title: 'Middleware & Edge Functions', content: 'Menjalankan logika (seperti otentikasi atau redirect) di lokasi server terdekat dengan pengguna.' }
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
        
        **Keamanan dengan Static Typing**
        Berbeda dengan JavaScript yang bersifat dinamis, TypeScript memungkinkan kita untuk menentukan tipe data sejak awal. Dengan adanya tipe data seperti string, number, dan boolean, kesalahan dapat dideteksi lebih cepat bahkan sebelum kode dijalankan. Hal ini sangat membantu dalam mengurangi bug, terutama pada proyek berskala besar di mana satu kesalahan kecil bisa berakibat fatal.
        
        **Interface & Struktur Data**
        Salah satu keunggulan utama TypeScript adalah kemampuannya dalam mendefinisikan struktur data menggunakan **Interface**. Dengan interface, developer dapat memastikan bahwa setiap objek memiliki format yang konsisten. Selain itu, TypeScript juga mendukung fitur modern seperti optional property dan union type, yang membuat kode lebih fleksibel tanpa kehilangan kontrol. 
        
        **Dukungan Framework Luas**
        TypeScript telah menjadi standar industri. Ia banyak digunakan dalam berbagai framework populer seperti React, Angular, dan Next.js. Hal ini menunjukkan bahwa TypeScript bukan hanya tren sementara, tetapi sudah menjadi fondasi utama dalam pengembangan aplikasi modern. Dengan dukungan komunitas yang besar dan dokumentasi yang lengkap, TypeScript menjadi pilihan yang tepat bagi developer yang ingin meningkatkan kualitas kodenya. 
        
        **Proses Belajar**
        Meskipun memiliki banyak keunggulan, TypeScript tetap membutuhkan pemahaman dasar JavaScript yang kuat. Oleh karena itu, sangat disarankan untuk memahami konsep dasar JavaScript terlebih dahulu sebelum beralih ke TypeScript. 
        
        **Kesimpulan**
        TypeScript adalah solusi yang tepat untuk membangun aplikasi yang lebih stabil, scalable, dan mudah dikembangkan. Dengan memanfaatkan TypeScript, developer dapat bekerja lebih efisien serta menghasilkan kode yang lebih profesional dan siap digunakan dalam dunia industri profesional.`,
        en: `**TypeScript: A Modern Foundation for Safer and More Structured Web Development**
*By Angga*

In the world of modern web development, the demand for clean, easy-to-learn, and error-free code is constantly increasing. One of the technologies that addresses these needs is TypeScript. TypeScript is an extension of JavaScript that adds a **type system**, allowing developers to write code more safely and with better structure.

**Safety through Static Typing**
Unlike JavaScript, which is dynamic, TypeScript allows us to define data types from the start. By specifying types like string, number, and boolean, errors can be detected much sooner, even before the code is executed. This is incredibly helpful in reducing bugs, especially in large-scale projects where a single small error can have fatal consequences.

**Interfaces & Data Structures**
One of TypeScript's primary advantages is its ability to define data structures using **Interfaces**. With interfaces, developers can ensure that every object follows a consistent format. Additionally, TypeScript supports modern features like optional properties and union types, making the code more flexible without sacrificing control.

**Broad Framework Support**
TypeScript has become an industry standard. It is widely used in various popular frameworks such as React, Angular, and Next.js. This demonstrates that TypeScript is not just a passing trend but has become a core foundation in modern application development. With its large community support and comprehensive documentation, TypeScript is the right choice for developers looking to elevate their code quality.

**Learning Path**
Despite its many benefits, TypeScript still requires a strong foundation in basic JavaScript. Therefore, it is highly recommended to understand core JavaScript concepts before transitioning to TypeScript.

**Conclusion**
TypeScript is the ideal solution for building more stable, scalable, and maintainable applications. By leveraging TypeScript, developers can work more efficiently and produce more professional, industry-ready code.`
      },
      features: {
        id: ['Static Typing', 'Interfaces & Types', 'Generics', 'Enums', 'Advanced Utility Types', 'Strict Null Checks', 'Decorators Support'],
        en: ['Static Typing', 'Interfaces & Types', 'Generics', 'Enums', 'Advanced Utility Types', 'Strict Null Checks', 'Decorators Support']
      },
      useCase: {
        id: 'Pengembangan aplikasi skala besar, library open-source, sistem yang membutuhkan keamanan data tinggi, dan tim developer profesional.',
        en: 'Large-scale application development, open-source libraries, systems requiring high data safety, and professional developer teams.'
      },
      discussions: [
        { title: 'Type Safety & DX', content: 'Bagaimana sistem tipe meningkatkan Developer Experience (DX) dengan autocompletion dan deteksi error instan.' },
        { title: 'Interfaces vs Type Aliases', content: 'Memahami perbedaan mendalam dan kapan harus menggunakan masing-masing fitur tersebut.' },
        { title: 'Generics Deep Dive', content: 'Membangun komponen dan fungsi yang fleksibel namun tetap memiliki keamanan tipe data yang ketat.' },
        { title: 'Utility Types', content: 'Memanfaatkan Partial, Omit, Pick, dan Readonly untuk memanipulasi tipe data yang sudah ada secara efisien.' }
      ]
    },
    {
      id: 'python',
      name: 'Python',
      icon: 'fab fa-python',
      color: 'text-yellow-500',
      category: 'Programming Language',
      description: {
        id: `Python adalah bahasa pemrograman yang paling populer bagi pemula maupun profesional karena sintaksnya yang sangat bersih dan menyerupai bahasa Inggris manusia. Filosofi utamanya adalah "The Zen of Python", yang menekankan bahwa kesederhanaan lebih baik daripada kerumitan.

**Bahasa Serba Guna (Versatile)**
Python adalah pisau lipat Swiss di dunia teknologi. Anda bisa menggunakannya untuk hampir segalanya:
- **Data Science & AI**: Menjadi bahasa standar untuk analisis data dan kecerdasan buatan.
- **Web Development**: Dengan framework kuat seperti Django dan Flask.
- **Automation**: Membuat script untuk menyelesaikan tugas rutin komputer dalam hitungan detik.
- **Scientific Computing**: Digunakan luas oleh ilmuwan dan peneliti di seluruh dunia.

**Ekosistem Library yang Raksasa**
Kekuatan sejati Python terletak pada komunitasnya. Melalui **PIP** (Python Package Index), Anda memiliki akses ke jutaan library siap pakai. Ingin membuat model AI? Ada TensorFlow. Ingin memproses tabel data? Ada Pandas. Ingin melakukan scraping website? Ada BeautifulSoup. Anda tidak perlu membuat semuanya dari nol.

**Keterbacaan & Produktivitas**
Karena sintaksnya yang sederhana, developer dapat menulis kode lebih sedikit dibandingkan bahasa lain seperti Java atau C++ untuk melakukan tugas yang sama. Ini berarti pengembangan aplikasi menjadi jauh lebih cepat dan kode lebih mudah dipelihara oleh tim lain.

**Interpretasi & Portabilitas**
Python adalah bahasa "interpreted", artinya kode dijalankan baris demi baris. Ini memudahkan proses debugging. Selain itu, Python bersifat lintas platform; kode yang Anda tulis di Windows akan berjalan dengan lancar di Linux atau macOS tanpa perubahan besar.`,
        en: `Python is the most popular programming language for both beginners and professionals due to its exceptionally clean syntax that closely resembles human English. Its core philosophy is "The Zen of Python," which emphasizes that simplicity is better than complexity.

**Versatile Language**
Python is the Swiss Army knife of the technology world. You can use it for almost anything:
- **Data Science & AI**: The industry standard for data analysis and artificial intelligence.
- **Web Development**: Powered by robust frameworks like Django and Flask.
- **Automation**: Create scripts to handle routine computer tasks in seconds.
- **Scientific Computing**: Widely used by scientists and researchers globally.

**Massive Library Ecosystem**
Python's true power lies in its community. Through **PIP** (Python Package Index), you have access to millions of ready-to-use libraries. Want to build an AI model? There's TensorFlow. Need to process data tables? There's Pandas. Want to scrape websites? There's BeautifulSoup. You don't have to build everything from scratch.

**Readability & Productivity**
Thanks to its simple syntax, developers can write significantly less code compared to other languages like Java or C++ to achieve the same task. This means application development is much faster, and the code is easier for teams to maintain.

**Interpretation & Portability**
Python is an "interpreted" language, meaning the code is executed line by line. This simplifies the debugging process. Furthermore, Python is cross-platform; the code you write on Windows will run smoothly on Linux or macOS without major modifications.`
      },
      features: {
        id: ['Simple & Clean Syntax', 'Massive Library Ecosystem', 'Interpreted Language', 'Dynamic Typing', 'Object-Oriented & Functional', 'Strong Community Support', 'Cross-platform Compatibility'],
        en: ['Simple & Clean Syntax', 'Massive Library Ecosystem', 'Interpreted Language', 'Dynamic Typing', 'Object-Oriented & Functional', 'Strong Community Support', 'Cross-platform Compatibility']
      },
      useCase: {
        id: 'Analisis data, Kecerdasan Buatan (AI/ML), otomasi tugas (scripting), backend web development, riset ilmiah, dan pengembangan prototype cepat.',
        en: 'Data analysis, Artificial Intelligence (AI/ML), automation scripts, web backend development, scientific research, and rapid prototyping.'
      },
      discussions: [
        { title: 'Python for AI & ML', content: 'Mengapa Python menjadi bahasa nomor satu untuk membangun masa depan teknologi kecerdasan buatan.' },
        { title: 'Virtual Environments', content: 'Pentingnya menggunakan venv atau Conda untuk mengisolasi dependensi antar proyek agar tidak terjadi konflik.' },
        { title: 'Django vs Flask', content: 'Memilih antara Django (lengkap/Enterprise) atau Flask (minimalis/fleksibel) untuk proyek web Anda.' },
        { title: 'Python Performance', content: 'Teknik mengoptimalkan kode Python dan kapan harus beralih ke bahasa tingkat rendah untuk kecepatan maksimal.' }
      ]
    },
    {
      id: 'php',
      name: 'PHP',
      icon: 'fab fa-php',
      color: 'text-indigo-400',
      category: 'Programming Language',
      description: {
        id: `PHP (Hypertext Preprocessor) adalah bahasa pemrograman yang dirancang khusus untuk pengembangan web. Meskipun banyak bahasa baru bermunculan, PHP tetap menjadi tulang punggung internet, menggerakkan lebih dari 75% website di seluruh dunia, termasuk platform besar seperti WordPress, Facebook, dan Wikipedia.

**PHP Modern (Versi 8+)**
Lupakan mitos bahwa PHP itu lambat atau kuno. PHP 8 memperkenalkan fitur-fitur revolusioner seperti **JIT (Just-In-Time) Compiler**, yang memberikan peningkatan performa sangat signifikan. Selain itu, PHP modern memiliki sistem tipe data yang jauh lebih ketat dan fitur Pemrograman Berorientasi Objek (OOP) yang setara dengan bahasa modern lainnya.

**Kaitan Erat dengan Web Server**
PHP bekerja di sisi server. Saat pengguna membuka website, server mengeksekusi kode PHP, mengambil data dari database, dan mengirimkan hasilnya dalam bentuk HTML ke browser. Integrasi PHP dengan server seperti Apache atau Nginx sangatlah matang dan mudah dikonfigurasi.

**Manajemen Paket dengan Composer**
Dahulu, mengelola library di PHP sangatlah sulit. Sekarang, dengan **Composer**, Anda bisa menginstal ribuan library open-source dengan satu baris perintah. Ini membuat ekosistem PHP tetap modern dan sangat produktif.

**Kemudahan Deployment**
Salah satu alasan utama PHP tetap populer adalah kemudahan "hosting"-nya. Hampir semua layanan cloud and hosting murah mendukung PHP secara langsung (Plug and Play). Ini menjadikannya pilihan paling ekonomis bagi bisnis kecil hingga menengah untuk meluncurkan produk web mereka.`,
        en: `PHP (Hypertext Preprocessor) is a programming language specifically designed for web development. Despite the emergence of many new languages, PHP remains the backbone of the internet, powering over 75% of websites worldwide, including major platforms like WordPress, Facebook, and Wikipedia.

**Modern PHP (Version 8+)**
Forget the myths that PHP is slow or outdated. PHP 8 introduced revolutionary features like the **JIT (Just-In-Time) Compiler**, which provides a very significant performance boost. Additionally, modern PHP features a much stricter type system and Object-Oriented Programming (OOP) capabilities on par with other modern languages.

**Tight Web Server Integration**
PHP operates on the server side. When a user opens a website, the server executes the PHP code, retrieves data from the database, and sends the result as HTML to the browser. PHP's integration with servers like Apache or Nginx is highly mature and easy to configure.

**Package Management with Composer**
In the past, managing libraries in PHP was difficult. Now, with **Composer**, you can install thousands of open-source libraries with a single command. This keeps the PHP ecosystem modern and highly productive.

**Ease of Deployment**
One of the primary reasons PHP remains popular is the ease of hosting. Almost all cloud services and budget hosting providers support PHP natively (Plug and Play). This makes it the most economical choice for small to medium businesses to launch their web products.`
      },
      features: {
        id: ['Server-side Execution', 'Strong Database Integration', 'JIT Compiler (PHP 8)', 'Robust OOP Support', 'Composer Package Manager', 'Massive Community Support', 'Built-in Web Support'],
        en: ['Server-side Execution', 'Strong Database Integration', 'JIT Compiler (PHP 8)', 'Robust OOP Support', 'Composer Package Manager', 'Massive Community Support', 'Built-in Web Support']
      },
      useCase: {
        id: 'Pengembangan website dinamis, CMS (WordPress, Laravel), sistem backend aplikasi, integrasi database, dan sistem e-commerce.',
        en: 'Dynamic website development, CMS platforms (WordPress, Laravel), backend systems, database integration, and e-commerce platforms.'
      },
      discussions: [
        { title: 'PHP 8 Features', content: 'Mendalami fitur baru seperti Attributes, Match Expression, dan Named Arguments yang membuat kode lebih bersih.' },
        { title: 'Modern PHP Workflow', content: 'Menerapkan standar PSR (PHP Standard Recommendation) untuk menulis kode yang konsisten dan profesional.' },
        { title: 'Security Best Practices', content: 'Teknik mengamankan aplikasi PHP dari serangan umum seperti SQL Injection dan XSS.' },
        { title: 'The Future of PHP', content: 'Mengapa PHP akan tetap relevan di era modern dan bagaimana ia terus berevolusi mengikuti tren teknologi.' }
      ]
    },
    {
      id: 'flutter',
      name: 'Flutter',
      icon: 'fas fa-mobile-alt',
      color: 'text-cyan-500',
      category: 'Mobile Framework',
      description: {
        id: `Flutter adalah framework UI (User Interface) buatan Google yang memungkinkan Anda membangun aplikasi cantik dan berperforma tinggi untuk Android, iOS, Web, dan Desktop hanya dengan **Satu Basis Kode**.

**Semuanya adalah Widget**
Filosofi utama Flutter adalah "Everything is a Widget". Dari elemen terkecil seperti tombol dan teks, hingga tata letak yang kompleks, semuanya dibangun menggunakan widget yang disusun secara hirarkis. Flutter tidak menggunakan komponen asli bawaan HP (seperti tombol Android standar), melainkan menggambar setiap pixel sendiri menggunakan engine grafis **Skia**. Hasilnya? Aplikasi Anda akan terlihat identik di semua jenis perangkat.

**Hot Reload: Produktivitas Instan**
Fitur paling dicintai di Flutter adalah Hot Reload. Anda bisa mengubah kode aplikasi dan melihat hasilnya langsung di layar HP dalam waktu kurang dari satu detik tanpa mengulang aplikasi dari awal. Ini membuat proses desain UI dan perbaikan bug menjadi sangat cepat.

**Bahasa Pemrograman Dart**
Flutter menggunakan bahasa Dart. Dart dirancang agar mudah dipelajari (sangat mirip dengan Java atau C#) dan dioptimalkan untuk performa UI yang halus (60-120 FPS). Dart mendukung kompilasi AOT (Ahead-of-Time) untuk performa cepat di perangkat pengguna, serta JIT (Just-in-Time) untuk pengembangan yang cepat.

**State Management**
Dalam aplikasi mobile yang kompleks, mengelola data (state) adalah tantangan besar. Flutter menawarkan berbagai solusi populer seperti **Provider, Bloc, dan Riverpod** untuk membantu developer mengelola aliran data aplikasi dengan rapi dan terukur.`,
        en: `Flutter is a UI (User Interface) framework by Google that enables you to build beautiful, high-performance applications for Android, iOS, Web, and Desktop using just **one codebase**.

**Everything is a Widget**
Flutter's core philosophy is "Everything is a Widget." From the smallest elements like buttons and text to complex layouts, everything is built using widgets arranged in a hierarchy. Flutter doesn't use the device's native components (like standard Android buttons); instead, it renders every pixel itself using the **Skia** graphics engine. The result? Your application looks identical across all types of devices.

**Hot Reload: Instant Productivity**
The most beloved feature of Flutter is Hot Reload. You can change your application's code and see the results instantly on the device screen in less than a second without restarting the app. This makes the UI design process and bug fixing incredibly fast.

**Dart Programming Language**
Flutter uses the Dart language. Dart is designed to be easy to learn (very similar to Java or C#) and optimized for smooth UI performance (60-120 FPS). Dart supports AOT (Ahead-of-Time) compilation for fast performance on user devices, as well as JIT (Just-in-Time) for rapid development.

**State Management**
In complex mobile applications, managing data (state) is a major challenge. Flutter offers various popular solutions such as **Provider, Bloc, and Riverpod** to help developers manage application data flow in a neat and scalable manner.`
      },
      features: {
        id: ['Hot Reload', 'Skia Graphics Engine', 'Rich Material & Cupertino Widgets', 'Single Codebase for Multi-platform', 'High Performance (60fps)', 'Customizable UI', 'Native Integration'],
        en: ['Hot Reload', 'Skia Graphics Engine', 'Rich Material & Cupertino Widgets', 'Single Codebase for Multi-platform', 'High Performance (60fps)', 'Customizable UI', 'Native Integration']
      },
      useCase: {
        id: 'Membangun aplikasi mobile Android & iOS berkualitas tinggi, aplikasi web progresif (PWA), dan aplikasi desktop secara efisien dari satu kode.',
        en: 'Building high-quality Android & iOS mobile apps, progressive web apps (PWA), and desktop applications efficiently from one codebase.'
      },
      discussions: [
        { title: 'Widget Lifecycle', content: 'Memahami siklus hidup widget (Stateless vs Stateful) untuk mengelola sumber daya aplikasi dengan benar.' },
        { title: 'State Management Patterns', content: 'Memilih antara Provider, Bloc, atau Riverpod sesuai dengan kompleksitas dan skala aplikasi Anda.' },
        { title: 'Flutter for Web & Desktop', content: 'Teknik menyesuaikan tata letak aplikasi agar responsif di layar besar maupun kecil.' },
        { title: 'Native Channels', content: 'Cara menghubungkan Flutter dengan fitur khusus HP (seperti kamera atau sensor) yang membutuhkan kode asli (Java/Swift).' }
      ]
    },
    {
      id: 'node-js',
      name: 'Node.js',
      icon: 'fab fa-node-js',
      color: 'text-green-600',
      category: 'Runtime Environment',
      description: {
        id: `Node.js adalah lingkungan runtime JavaScript yang berjalan di luar browser, memungkinkan Anda menggunakan JavaScript untuk membangun sistem di sisi **Server**. Dibangun di atas engine V8 milik Google Chrome, Node.js dikenal karena kecepatannya yang luar biasa.

**Model Asynchronous & Non-blocking I/O**
Inilah rahasia kecepatan Node.js. Server tradisional biasanya menangani setiap permintaan pengguna dengan membuat "thread" baru, yang bisa memakan banyak memori. Node.js menggunakan pendekatan "Single Threaded" namun tidak pernah berhenti menunggu proses lambat (seperti membaca file atau database). Sambil menunggu data siap, Node.js tetap bisa melayani pengguna lain. Hal ini membuatnya sangat ringan dan efisien.

**Event Loop**
Node.js bekerja berdasarkan "Event Loop". Bayangkan seperti pelayan restoran yang mencatat semua pesanan satu per satu tanpa menunggu makanan dimasak. Saat makanan siap, ia akan memberikan sinyal (callback) untuk mengantarkannya. Ini memungkinkan satu server Node.js menangani ribuan koneksi bersamaan tanpa "hang".

**NPM (Node Package Manager)**
Node.js memiliki ekosistem library terbesar di dunia. Melalui NPM, Anda bisa menemukan solusi untuk hampir semua masalah pemrograman, dari pengolahan gambar, otentikasi, hingga manajemen database, yang semuanya bisa dipasang secara instan.

**JavaScript Everywhere**
Dengan Node.js, tim developer bisa menggunakan satu bahasa (JavaScript/TypeScript) untuk frontend and backend. Ini memudahkan komunikasi antar tim, memungkinkan berbagi kode (shared code), and mempercepat siklus pengembangan produk.`,
        en: `Node.js is a JavaScript runtime environment that runs outside the browser, allowing you to use JavaScript to build **Server-side** systems. Built on Google Chrome's **V8 engine**, Node.js is renowned for its exceptional speed.

**Asynchronous & Non-blocking I/O Model**
This is the secret behind Node.js's speed. Traditional servers typically handle each user request by creating a new "thread," which can consume significant memory. Node.js uses a "Single Threaded" approach but never stops to wait for slow processes (like reading files or database queries). While waiting for data to be ready, Node.js can continue to serve other users. This makes it extremely lightweight and efficient.

**Event Loop**
Node.js operates based on an "Event Loop." Think of it like a restaurant waiter who takes all orders one by one without waiting for the food to be cooked. When the food is ready, he receives a signal (callback) to deliver it. This allows a single Node.js server to handle thousands of concurrent connections without "hanging."

**NPM (Node Package Manager) Ecosystem**
Node.js possesses the world's largest library ecosystem. Through **NPM**, you can find solutions for almost any programming problem—from image processing and authentication to database management—all of which can be installed instantly.

**JavaScript Everywhere**
With Node.js, developer teams can use a single language (JavaScript/TypeScript) for both frontend and backend. This simplifies team communication, enables code sharing (shared code), and accelerates the product development cycle.`
      },
      features: {
        id: ['Non-blocking I/O', 'Single-threaded Event Loop', 'V8 Engine Speed', 'NPM Ecosystem', 'Scalability', 'Cross-platform Support', 'Built-in Modules (FS, HTTP)'],
        en: ['Non-blocking I/O', 'Single-threaded Event Loop', 'V8 Engine Speed', 'NPM Ecosystem', 'Scalability', 'Cross-platform Support', 'Built-in Modules (FS, HTTP)']
      },
      useCase: {
        id: 'Aplikasi real-time (chat, game online), sistem API (REST/GraphQL), streaming data, sistem microservices, dan backend aplikasi web modern.',
        en: 'Real-time applications (chat, online games), API systems (REST/GraphQL), data streaming, microservices, and web development tools.'
      },
      discussions: [
        { title: 'Event Loop Deep Dive', content: 'Memahami fase-fase eksekusi di Node.js untuk menghindari "blocking" pada thread utama.' },
        { title: 'Microservices Architecture', content: 'Membangun sistem besar yang terbagi menjadi layanan-layanan kecil yang saling berkomunikasi menggunakan Node.js.' },
        { title: 'Express vs NestJS', content: 'Memilih antara framework minimalis (Express) atau framework terstruktur ala Angular (NestJS).' },
        { title: 'Security in Node.js', content: 'Melindungi server dari serangan common web vulnerabilities dan menjaga keamanan environment variables.' }
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
  );
};

export default TechDetail;
