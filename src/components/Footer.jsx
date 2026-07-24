import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import ResourceModal from './ResourceModal';

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [shareToast, setShareToast] = useState(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShareClick = async () => {
    const shareData = {
      title: 'Krishna International School Aligarh',
      text: 'Explore Krishna International School Aligarh — Premier CBSE Institution in Uttar Pradesh.',
      url: 'https://dettroin-int-avinash-website.vercel.app/',
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share canceled', err);
      }
    } else {
      navigator.clipboard.writeText(shareData.url);
      setShareToast(true);
      setTimeout(() => setShareToast(false), 3000);
    }
  };

  return (
    <footer className="bg-[#181b23] text-white w-full rounded-t-3xl md:rounded-t-4xl mt-20 relative z-10">
      {shareToast && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-[#feb300] text-[#281900] font-bold px-6 py-3 rounded-full shadow-2xl animate-fade-in text-xs flex items-center gap-2 border-2 border-white">
          <span className="material-symbols-outlined text-sm">check_circle</span>
          <span>Website URL copied to clipboard!</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        <div className="space-y-6">
          <Link to="/" onClick={handleLogoClick} className="inline-block hover:opacity-90 transition-opacity">
            <Logo variant="light" />
          </Link>
          <p className="text-[#c4c6d2] text-sm leading-relaxed max-w-sm">
            Empowering minds, enriching lives, and shaping future global citizens through value-based excellence in Aligarh.
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setActiveModal('qr')}
              title="Digital Prospectus QR Code"
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-[#feb300] hover:text-[#181b23] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">qr_code_2</span>
            </button>
            <button
              type="button"
              onClick={handleShareClick}
              title="Share Website"
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-[#feb300] hover:text-[#181b23] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">share</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveModal('community')}
              title="Parent & Alumni Network"
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-[#feb300] hover:text-[#181b23] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">groups</span>
            </button>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 tracking-wide text-white">Quick Links</h4>
          <ul className="space-y-3.5 text-sm">
            <li><Link className="text-[#c4c6d2] hover:text-[#ffdeac] transition-all hover:translate-x-1 inline-block" to="/about">About Us</Link></li>
            <li><Link className="text-[#c4c6d2] hover:text-[#ffdeac] transition-all hover:translate-x-1 inline-block" to="/academics">Academics</Link></li>
            <li><Link className="text-[#c4c6d2] hover:text-[#ffdeac] transition-all hover:translate-x-1 inline-block" to="/admissions">Admissions</Link></li>
            <li><Link className="text-[#c4c6d2] hover:text-[#ffdeac] transition-all hover:translate-x-1 inline-block" to="/gallery">Gallery</Link></li>
            <li><Link className="text-[#c4c6d2] hover:text-[#ffdeac] transition-all hover:translate-x-1 inline-block" to="/school-life">School Life</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 tracking-wide text-white">Resources</h4>
          <ul className="space-y-3.5 text-sm">
            <li>
              <button
                type="button"
                onClick={() => setActiveModal('portal')}
                className="text-[#c4c6d2] hover:text-[#ffdeac] transition-all hover:translate-x-1 inline-block text-left"
              >
                Student Portal
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setActiveModal('fee')}
                className="text-[#c4c6d2] hover:text-[#ffdeac] transition-all hover:translate-x-1 inline-block text-left"
              >
                Fee Structure
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setActiveModal('privacy')}
                className="text-[#c4c6d2] hover:text-[#ffdeac] transition-all hover:translate-x-1 inline-block text-left"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setActiveModal('terms')}
                className="text-[#c4c6d2] hover:text-[#ffdeac] transition-all hover:translate-x-1 inline-block text-left"
              >
                Terms of Service
              </button>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-lg mb-6 tracking-wide text-white">Contact Us</h4>
          <div className="flex items-start gap-3 text-sm text-[#c4c6d2]">
            <span className="material-symbols-outlined text-[#feb300] text-lg mt-0.5">location_on</span>
            <span>Krishna Nagar, Opp. Reliance Petrol Pump, 5th Km, Delhi G.T. Road, Aligarh, UP 202001</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#c4c6d2]">
            <span className="material-symbols-outlined text-[#feb300] text-lg">call</span>
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#c4c6d2]">
            <span className="material-symbols-outlined text-[#feb300] text-lg">mail</span>
            <span>info@kisaligarh.com</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-[#c4c6d2]">
        © 2026 Krishna International School Aligarh. Affiliated to C.B.S.E., Delhi. All rights reserved.
      </div>

      <ResourceModal type={activeModal} onClose={() => setActiveModal(null)} />
    </footer>
  );
};

export default Footer;
