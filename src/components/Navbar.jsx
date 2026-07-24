import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

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

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'School Life', path: '/school-life' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="bg-[#000666] text-white py-1.5 px-3 sm:px-4 text-xs font-semibold overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-2 sm:gap-3 overflow-hidden w-full sm:w-auto">
            <span className="bg-[#feb300] text-[#281900] px-2 py-0.5 rounded font-bold text-[10px] uppercase tracking-wider shrink-0">
              ANNOUNCEMENT
            </span>
            <div className="truncate text-white/90 text-xs sm:text-xs">
              <span className="inline-block mr-4 sm:mr-6">🎉 Admissions Open 2026–27</span>
              <span className="inline-block mr-4 sm:mr-6 font-normal opacity-40">|</span>
              <span className="inline-block mr-4 sm:mr-6">🏆 100% Pass Result in CBSE Class X & XII</span>
              <span className="inline-block mr-4 sm:mr-6 font-normal opacity-40">|</span>
              <span className="inline-block">🚌 AC Transport Across Aligarh</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 shrink-0 text-xs text-white/80 font-medium">
            <a href="tel:+919876543210" className="hover:text-[#feb300] transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">call</span>
              <span>+91 98765 43210</span>
            </a>
            <span className="opacity-30">|</span>
            <Link to="/contact" className="hover:text-[#feb300] transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">location_on</span>
              <span>Aligarh, UP</span>
            </Link>
          </div>
        </div>
      </div>

      <nav className={`w-full bg-white/95 glass-nav transition-all duration-300 ${isScrolled ? 'shadow-md py-3' : 'shadow-sm py-4'}`}>
        <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="hover:opacity-90 transition-opacity flex items-center cursor-pointer"
          >
            <Logo variant="dark" />
          </Link>

          <div className="hidden lg:flex gap-6 xl:gap-8 items-center">
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

          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/admissions"
              className="bg-[#000666] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#1a237e] transition-all shadow-md hover-lift flex items-center gap-1.5"
            >
              <span>Enquiry Now</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-[#000666] p-2 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {isMobileOpen && (
          <div className="lg:hidden bg-white border-t border-[#c6c5d4]/40 px-6 py-6 space-y-4 shadow-xl animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-semibold py-2 transition-colors ${
                    location.pathname === link.path ? 'text-[#000666] font-bold' : 'text-[#454652]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="pt-2">
              <Link
                to="/admissions"
                className="block w-full text-center bg-[#feb300] text-[#281900] font-bold py-3 rounded-full shadow-md"
              >
                Enquiry Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
