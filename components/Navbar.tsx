import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'خدمات', href: '#services' },
    { name: 'درباره ما', href: '#about' },
    { name: 'نظرات مشتریان', href: '#testimonials' },
    { name: 'تماس با ما', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <Hexagon className="w-8 h-8 text-tekia-gold animate-pulse" />
            <span className="text-2xl font-bold text-white tracking-wide group-hover:text-tekia-gold transition-colors">
              تکیا
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-tekia-gold transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-tekia-gold after:right-0 after:-bottom-1 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold text-sm hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-0.5">
              دریافت مشاوره
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-nav absolute w-full border-t border-white/5">
          <div className="px-4 pt-4 pb-8 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-base font-medium text-slate-300 hover:text-tekia-gold py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full mt-4 px-5 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold hover:shadow-lg transition-all">
              دریافت مشاوره
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;