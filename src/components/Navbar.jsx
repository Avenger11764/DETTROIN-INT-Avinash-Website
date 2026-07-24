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
    <nav className={`fixed top-0 w-full z-50 bg-white/90 glass-nav transition-all duration-300 ${isScrolled ? 'shadow-md py-3' : 'shadow-sm py-4'}`}>
      <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Transparent Official School Logo */}
        <Link to="/" className="hover:opacity-90 transition-opacity">
          <Logo variant="dark" />
        </Link>

        {/* Desktop Navigation Links */}
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

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/admissions"
            className="bg-[#000666] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#1a237e] transition-all shadow-md hover-lift"
          >
            Enquiry Now
          </Link>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
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

      {/* Mobile Drawer Menu */}
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
  );
};

export default Navbar;
