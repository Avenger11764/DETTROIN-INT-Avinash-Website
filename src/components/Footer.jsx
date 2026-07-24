import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181b23] text-white w-full rounded-t-3xl md:rounded-t-4xl mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        <div className="space-y-6">
          <Link to="/" onClick={handleLogoClick} className="inline-block hover:opacity-90 transition-opacity">
            <Logo variant="light" />
          </Link>
          <p className="text-[#c4c6d2] text-sm leading-relaxed max-w-sm">
            Empowering minds, enriching lives, and shaping future global citizens through value-based excellence in Aligarh.
          </p>
          <div className="flex gap-3">
            <a className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-[#feb300] hover:text-[#181b23] transition-colors" href="#">
              <span className="material-symbols-outlined text-sm">qr_code_2</span>
            </a>
            <a className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-[#feb300] hover:text-[#181b23] transition-colors" href="#">
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
            <a className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-[#feb300] hover:text-[#181b23] transition-colors" href="#">
              <span className="material-symbols-outlined text-sm">groups</span>
            </a>
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
            <li><a className="text-[#c4c6d2] hover:text-[#ffdeac] transition-all hover:translate-x-1 inline-block" href="#">Student Portal</a></li>
            <li><a className="text-[#c4c6d2] hover:text-[#ffdeac] transition-all hover:translate-x-1 inline-block" href="#">Fee Structure</a></li>
            <li><a className="text-[#c4c6d2] hover:text-[#ffdeac] transition-all hover:translate-x-1 inline-block" href="#">Privacy Policy</a></li>
            <li><a className="text-[#c4c6d2] hover:text-[#ffdeac] transition-all hover:translate-x-1 inline-block" href="#">Terms of Service</a></li>
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
    </footer>
  );
};

export default Footer;
