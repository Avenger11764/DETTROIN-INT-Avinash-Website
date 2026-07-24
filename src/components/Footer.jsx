import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#181b23] text-white w-full rounded-t-[2.5rem] mt-20">
      <div className="max-w-[1360px] mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-[#000666] text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                school
              </span>
            </div>
            <div className="font-bold text-xl leading-tight font-headline-md">
              <div>Krishna</div>
              <div>International</div>
            </div>
          </div>
          <p className="text-[#c4c6d2] text-sm leading-relaxed max-w-sm">
            Empowering minds, enriching lives, and shaping future global citizens through value-based excellence.
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

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-6 tracking-wide">Quick Links</h4>
          <ul className="space-y-3.5 text-sm">
            <li><Link className="text-[#c4c6d2] hover:text-[#ffdeac] transition-all hover:translate-x-1 inline-block" to="/about">About Us</Link></li>
            <li><Link className="text-[#c4c6d2] hover:text-[#ffdeac] transition-all hover:translate-x-1 inline-block" to="/academics">Academics</Link></li>
            <li><Link className="text-[#c4c6d2] hover:text-[#ffdeac] transition-all hover:translate-x-1 inline-block" to="/admissions">Admissions</Link></li>
            <li><Link className="text-[#c4c6d2] hover:text-[#ffdeac] transition-all hover:translate-x-1 inline-block" to="/school-life">Gallery</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-bold text-lg mb-6 tracking-wide">Resources</h4>
          <ul className="space-y-3.5 text-sm">
            <li><a className="text-[#c4c6d2] hover:text-[#ffdeac] transition-all hover:translate-x-1 inline-block" href="#">Student Portal</a></li>
            <li><a className="text-[#c4c6d2] hover:text-[#ffdeac] transition-all hover:translate-x-1 inline-block" href="#">Fee Structure</a></li>
            <li><a className="text-[#c4c6d2] hover:text-[#ffdeac] transition-all hover:translate-x-1 inline-block" href="#">Privacy Policy</a></li>
            <li><a className="text-[#c4c6d2] hover:text-[#ffdeac] transition-all hover:translate-x-1 inline-block" href="#">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-bold text-lg mb-6 tracking-wide">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 text-[#c4c6d2]">
              <span className="material-symbols-outlined text-[#ffdeac] text-xl flex-shrink-0">location_on</span>
              <span>Ramghat Road, Aligarh, Uttar Pradesh, 202001</span>
            </li>
            <li className="flex gap-3 text-[#c4c6d2]">
              <span className="material-symbols-outlined text-[#ffdeac] text-xl flex-shrink-0">call</span>
              <span>+91 98765 43210</span>
            </li>
            <li className="flex gap-3 text-[#c4c6d2]">
              <span className="material-symbols-outlined text-[#ffdeac] text-xl flex-shrink-0">mail</span>
              <span>info@kisaligarh.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-6 py-6 text-center text-[#c4c6d2]/60 text-xs font-medium">
          © 2024 Krishna International School. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
