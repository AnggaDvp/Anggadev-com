import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = ({ translations, currentLang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        title: currentLang === 'id' ? 'Waduh, Belum Lengkap!' : 'Oops, Incomplete!',
        text: currentLang === 'id' 
          ? 'Isi dulu semua kolomnya dong, biar pesannya sampai ke tujuan! 🚀' 
          : 'Please fill in all fields first so your message reaches its destination! 🚀',
        icon: 'warning',
        background: document.documentElement.classList.contains('dark') ? '#0a0a0a' : '#fff',
        color: document.documentElement.classList.contains('dark') ? '#fff' : '#000',
        confirmButtonColor: '#a855f7',
        confirmButtonText: currentLang === 'id' ? 'Siap, Lengkapin!' : 'Okay, Got it!',
        customClass: {
          popup: 'rounded-3xl border border-purple-500/20 shadow-2xl backdrop-blur-xl'
        }
      });
      return false;
    }
    return true;
  };

  const handleWhatsApp = () => {
    if (!validateForm()) return;
    const phoneNumber = '6281315379958';
    const textWA = currentLang === 'id' 
      ? `Halo Bintang Dwi Anggara,%0A%0APerkenalkan saya *${formData.name}*.%0AEmail saya: ${formData.email}%0A%0ASaya ingin mendiskusikan hal berikut:%0A"${formData.message}"%0A%0ATerima kasih.`
      : `Hello Bintang Dwi Anggara,%0A%0AI am *${formData.name}*.%0AMy email: ${formData.email}%0A%0AI would like to discuss the following:%0A"${formData.message}"%0A%0AThank you.`;
    window.open(`https://wa.me/${phoneNumber}?text=${textWA}`, '_blank');
  };

  const handleEmail = () => {
    if (!validateForm()) return;
    const emailTo = 'bintangdwianggara9@gmail.com';
    const subject = currentLang === 'id' ? `Pesan dari ${formData.name} via Portfolio Website` : `Message from ${formData.name} via Portfolio Website`;
    const body = currentLang === 'id'
      ? `Halo Bintang Dwi Anggara,%0D%0A%0D%0APerkenalkan saya ${formData.name}.%0D%0AEmail: ${formData.email}%0D%0A%0D%0ASaya ingin mendiskusikan hal berikut:%0D%0A"${formData.message}"%0D%0A%0D%0ATerima kasih.`
      : `Hello Bintang Dwi Anggara,%0D%0A%0D%0AI am ${formData.name}.%0D%0AEmail: ${formData.email}%0D%0A%0D%0AI would like to discuss the following:%0D%0A"${formData.message}"%0D%0A%0D%0AThank you.`;
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="kontak" className="py-24 bg-darkBg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{translations[currentLang]['contact-title']}</h2>
          <p className="text-gray-400">{translations[currentLang]['contact-subtitle']}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-6">{translations[currentLang]['contact-info-title']}</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-purple-900/20">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-white font-medium">bintangdwianggara9@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-purple-900/20">
                    <i className="fab fa-google text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Google / Gmail</p>
                    <p className="text-white font-medium">bintangdwianggara9@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-purple-900/20">
                    <i className="fab fa-whatsapp text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <p className="text-white font-medium">+62 813-1537-9958</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <p className="text-white font-bold mb-4">{translations[currentLang]['contact-social-title']}</p>
                <div className="flex gap-4">
                  {[
                    { platform: 'github', url: 'https://github.com/AnggaDvp' },
                    { platform: 'linkedin', url: 'https://www.linkedin.com/in/bintang-dwi-anggara-938383382/' },
                    { platform: 'instagram', url: 'https://www.instagram.com/bgststarrr_/' }
                  ].map((social) => (
                    <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-900/40">
                      <i className={`fab fa-${social.platform}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <form className="glass-card p-8 rounded-3xl space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">{translations[currentLang]['contact-form-name']}</label>
                <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl outline-none transition" placeholder={translations[currentLang]['contact-form-name-placeholder']} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">{translations[currentLang]['contact-form-email']}</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl outline-none transition" placeholder={translations[currentLang]['contact-form-email-placeholder']} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">{translations[currentLang]['contact-form-message']}</label>
                <textarea id="message" value={formData.message} onChange={handleChange} rows="4" className="w-full px-4 py-3 rounded-xl outline-none transition resize-none" placeholder={translations[currentLang]['contact-form-message-placeholder']}></textarea>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button type="button" onClick={handleWhatsApp} className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-green-900/20 hover:shadow-green-900/40 hover:-translate-y-0.5">
                  <i className="fab fa-whatsapp text-lg"></i> {translations[currentLang]['contact-form-wa']}
                </button>
                <button type="button" onClick={handleEmail} className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 hover:-translate-y-0.5">
                  <i className="fas fa-envelope"></i> {translations[currentLang]['contact-form-email-btn']}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
