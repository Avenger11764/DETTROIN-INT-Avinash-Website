import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/school-life' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 bg-white/90 glass-nav transition-all duration-300 ${isScrolled ? 'shadow-md py-3' : 'shadow-sm py-4'}`}>
      <div className="flex justify-between items-center w-full px-6 md:px-16 max-w-[1360px] mx-auto">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#000666] rounded-full flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
          </div>
          <span className="font-bold text-xl md:text-2xl text-[#000666] tracking-tight font-headline-md">
            Krishna International
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? 'text-[#000666] font-bold border-b-2 border-[#7e5700] pb-1'
                    : 'text-[#191c1d] hover:text-[#7e5700]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <Link
            to="/admissions"
            className="bg-[#000666] text-white px-7 py-2.5 rounded-full text-sm font-bold active:scale-95 transition-all shadow hover:bg-[#1a237e]"
          >
            Enquiry Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 text-[#000666] focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="md:hidden bg-white border-b border-[#c6c5d4] px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  location.pathname === link.path
                    ? 'bg-[#000666] text-white'
                    : 'text-[#191c1d] hover:bg-[#edeeef]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-2 border-t border-[#c6c5d4]">
            <Link
              to="/admissions"
              className="w-full block text-center bg-[#feb300] text-[#281900] font-bold py-3 rounded-full shadow"
            >
              Enquiry Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
