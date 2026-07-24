import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FloatingDock = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
      {isOpen && (
        <div className="bg-white p-4 rounded-2xl shadow-2xl border border-[#c6c5d4] space-y-3 animate-fade-in w-64">
          <div className="border-b border-[#c6c5d4]/40 pb-2">
            <p className="font-bold text-sm text-[#000666]">Krishna Helpdesk</p>
            <p className="text-[11px] text-[#454652]">Mon – Sat: 8:00 AM – 4:00 PM</p>
          </div>
          <div className="space-y-2">
            <a
              href="https://wa.me/919876543210?text=Hello,%20I%20would%20like%20to%20inquire%20about%20admissions%20at%20Krishna%20International%20School%20Aligarh."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-[#25D366]/10 text-[#075E54] hover:bg-[#25D366]/20 font-bold text-xs transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center text-sm font-bold">
                💬
              </span>
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-[#e0e0ff] text-[#000666] hover:bg-[#c6c5d4]/30 font-bold text-xs transition-colors"
            >
              <span className="material-symbols-outlined text-base bg-[#000666] text-white p-1 rounded-full">
                call
              </span>
              <span>Call Helpline (+91 98765...)</span>
            </a>

            <Link
              to="/admissions"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-[#ffdeac] text-[#7e5700] hover:bg-[#feb300]/40 font-bold text-xs transition-colors"
            >
              <span className="material-symbols-outlined text-base bg-[#7e5700] text-white p-1 rounded-full">
                edit_note
              </span>
              <span>Apply Online 2026-27</span>
            </Link>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#feb300] text-[#281900] font-bold px-5 py-3.5 rounded-full shadow-2xl hover:bg-[#ffdeac] hover-lift transition-all flex items-center gap-2 text-sm border-2 border-white"
        aria-label="Toggle Quick Assistance Dock"
      >
        <span className="material-symbols-outlined text-2xl">
          {isOpen ? 'close' : 'support_agent'}
        </span>
        <span className="hidden sm:inline font-bold">Quick Help</span>
      </button>
    </div>
  );
};

export default FloatingDock;
