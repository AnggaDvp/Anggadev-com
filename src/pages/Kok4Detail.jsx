import React from 'react';
import { useNavigate } from 'react-router-dom';

const Kok4Detail = ({ translations, currentLang }) => {
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
                src="/Picture/logo_ko4.png" 
                alt="KOK4INSTUDIO" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=K4I&background=a855f7&color=fff' }}
              />
            </div>

            <div className="flex-1 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {translations[currentLang]['exp-kok4-company']}
              </h2>
              <p className="text-purple-400 font-medium text-xl mb-6">
                {translations[currentLang]['exp-kok4-title']}
              </p>

              <div className="text-gray-300 leading-relaxed space-y-4 mb-8">
                <p>
                  {currentLang === 'id'
                    ? 'KOK4INSTUDIO adalah brand fashion yang lahir dari semangat untuk terus berkarya dan menghadirkan produk berkualitas bagi setiap pelanggan. Kami baru memulai perjalanan di dunia fashion, namun kami memiliki komitmen yang kuat untuk menghasilkan berbagai produk custom yang dibuat dengan perhatian terhadap detail, kualitas, dan identitas yang khas.'
                    : 'KOK4INSTUDIO is a fashion brand born from the spirit to keep creating and presenting quality products for every customer. We are just starting our journey in the fashion world, but we have a strong commitment to producing various custom products made with attention to detail, quality, and unique identity.'}
                </p>
                <p>
                  {currentLang === 'id'
                    ? 'Setiap produk yang kami hadirkan dirancang untuk memberikan kenyamanan, nilai estetika, serta karakter yang dapat mewakili gaya dan kepribadian penggunanya. Kami percaya bahwa sebuah produk tidak hanya sekadar pakaian atau aksesori, tetapi juga menjadi bagian dari identitas dan ekspresi diri.'
                    : 'Every product we present is designed to provide comfort, aesthetic value, and character that can represent the style and personality of its users. We believe that a product is not just clothing or accessories, but also part of identity and self-expression.'}
                </p>
                <p>
                  {currentLang === 'id'
                    ? 'Dengan mengutamakan kualitas bahan, proses produksi yang teliti, serta pelayanan terbaik, KOK4INSTUDIO terus berupaya berkembang dan menghadirkan karya-karya yang dapat dibanggakan. Terima kasih telah menjadi bagian dari perjalanan kami dalam menciptakan produk fashion yang autentik dan bernilai.'
                    : 'By prioritizing material quality, meticulous production processes, and the best service, KOK4INSTUDIO continues to strive to grow and present works that can be proud of. Thank you for being part of our journey in creating authentic and valuable fashion products.'}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {['Brand Development', 'Digital Strategy', 'Product Design', 'Quality Control', 'E-Commerce'].map((skill, index) => (
                  <span key={index} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-xs">
                    {skill}
                  </span>
                ))}
              </div>

              <a 
                href="https://kok4instudio.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-bold transition-colors group/link"
              >
                <span>{currentLang === 'id' ? 'Kunjungi Website KOK4INSTUDIO' : 'Visit KOK4INSTUDIO Website'}</span>
                <i className="fas fa-external-link-alt text-sm group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"></i>
              </a>
            </div>
          </div>

          {/* Gallery */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="/Picture/Page01.png" 
                alt="KOK4INSTUDIO Product" 
                className="w-full h-64 object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80' }}
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="/Picture/pic.png" 
                alt="KOK4INSTUDIO Collection" 
                className="w-full h-64 object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80' }}
              />
            </div>
          </div>

          {/* Decorative Background Glow */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Kok4Detail;
