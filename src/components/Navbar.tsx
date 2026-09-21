import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Music', href: '#music' },
    { name: 'Upcoming Shows', href: '#shows' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Booking & Contact', href: '#booking' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F2E9]/95 backdrop-blur-md border-b border-[#E6DDCB] shadow-sm py-3 text-[#1F1A14]'
          : 'bg-transparent py-5 text-[#F4EFE6]'
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo: LF Monogram + Name */}
        <a
          href="#"
          className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#8A5A0B] rounded-lg"
          id="brand-logo"
        >
          <div className="w-10 h-10 rounded-[10px] bg-[#C58A1B] text-[#1F1A14] flex items-center justify-center font-bold text-base tracking-wider shadow-sm transition-transform duration-200 group-hover:scale-105">
            LF
          </div>
          <div className="flex flex-col">
            <span
              className={`font-serif font-bold text-lg sm:text-xl tracking-tight leading-none transition-colors ${
                isScrolled ? 'text-[#1F1A14]' : 'text-[#F4EFE6]'
              }`}
            >
              Louie Fortune
            </span>
            <span
              className={`text-[11px] uppercase tracking-widest mt-1 font-medium ${
                isScrolled ? 'text-[#5E5548]' : 'text-[#C9BFAE]'
              }`}
            >
              Urban Gospel
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          aria-label="Main Navigation"
          className={`hidden md:flex items-center gap-7 text-sm font-medium transition-colors ${
            isScrolled ? 'text-[#5E5548]' : 'text-[#C9BFAE]'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`py-1 transition-colors duration-150 relative hover:${
                isScrolled ? 'text-[#1F1A14]' : 'text-[#F4EFE6]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Button: ONE gold Listen Now button */}
        <div className="hidden sm:flex items-center">
          <a
            href="#music"
            id="nav-listen-now-btn"
            className="h-10 px-5 rounded-[10px] bg-[#C58A1B] hover:bg-[#A9740F] text-[#1F1A14] font-semibold text-sm inline-flex items-center justify-center transition-all shadow-sm hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#8A5A0B]"
          >
            Listen Now
          </a>
        </div>

        {/* Clean Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-[10px] transition-colors focus-visible:ring-2 focus-visible:ring-[#8A5A0B] ${
            isScrolled
              ? 'text-[#1F1A14] hover:bg-[#EFE7D8]'
              : 'text-[#F4EFE6] hover:bg-white/10'
          }`}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F2E9] border-b border-[#E6DDCB] px-6 py-6 shadow-xl text-[#1F1A14] animate-fade-in">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-base font-medium text-[#1F1A14] hover:text-[#8A5A0B] border-b border-[#E6DDCB]/60 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#8A5A0B]">→</span>
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#music"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full h-12 rounded-[10px] bg-[#C58A1B] hover:bg-[#A9740F] text-[#1F1A14] font-semibold text-sm inline-flex items-center justify-center transition-all shadow-sm"
              >
                Listen Now
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
