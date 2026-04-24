import React from 'react';
import { useNavigate } from 'react-router-dom';

const DhimasDetail = ({ translations, currentLang }) => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-darkBg relative min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-bold transition-colors mb-12 group"
        >
          <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
          <span>{translations[currentLang]['common-back']}</span>
        </button>

        <div className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Company Logo */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex-shrink-0 flex items-center justify-center shadow-xl p-4 relative z-10">
              <img 
                src="/Picture/logo-dhimas.png" 
                alt="PT Dhimas Mitra Internasional" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=DMI&background=a855f7&color=fff' }}
              />
            </div>

            <div className="flex-1 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {translations[currentLang]['exp-intern-company']}
              </h2>
              <p className="text-purple-400 font-medium text-xl mb-6">
                {translations[currentLang]['exp-intern-title']}
              </p>

              <div className="text-gray-300 leading-relaxed space-y-4 mb-8">
                <p>
                  {currentLang === 'id'
                    ? 'PT Dhimas Mitra Internasional adalah perusahaan terkemuka yang bergerak di bidang manufaktur, importir, dan distributor material infrastruktur berkualitas tinggi. Mereka menyediakan berbagai produk seperti material karet industri, insulasi, dan material advertising untuk berbagai kebutuhan proyek konstruksi dan industri di seluruh Indonesia.'
                    : 'PT Dhimas Mitra Internasional is a leading company engaged in the manufacturing, importing, and distributing high-quality infrastructure materials. They provide various products such as industrial rubber materials, insulation, and advertising materials for various construction and industrial project needs throughout Indonesia.'}
                </p>
                <p>
                  {currentLang === 'id'
                    ? 'Selama magang, saya bertanggung jawab dalam pengelolaan marketplace, pemeliharaan website, serta memantau aktivitas belanja pelanggan untuk memastikan operasional berjalan lancar di dhimasmitra.co.id. Peran ini melibatkan optimasi listing produk, pembaruan konten website, analisis data penjualan, dan interaksi langsung dengan pelanggan untuk meningkatkan pengalaman belanja mereka.'
                    : 'During my internship, I was responsible for marketplace management, website maintenance, and monitoring customer shopping activities to ensure smooth operations at dhimasmitra.co.id. This role involved optimizing product listings, updating website content, analyzing sales data, and direct interaction with customers to enhance their shopping experience.'}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {['Marketplace Management', 'Website Maintenance', 'Customer Monitoring', 'Data Entry', 'Digital Marketing'].map((skill, index) => (
                  <span key={index} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-xs">
                    {skill}
                  </span>
                ))}
              </div>

              <a 
                href="https://dhimasmitra.co.id/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-bold transition-colors group/link"
              >
                <span>{currentLang === 'id' ? 'Kunjungi Website Perusahaan' : 'Visit Company Website'}</span>
                <i className="fas fa-external-link-alt text-sm group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"></i>
              </a>
            </div>
          </div>

          {/* Decorative Background Glow */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default DhimasDetail;
