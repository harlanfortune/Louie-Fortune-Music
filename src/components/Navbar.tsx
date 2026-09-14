import React, { useState, useEffect } from 'react';
import { Music, Calendar, Image as ImageIcon, User, Mail, Menu, X, Play, Volume2 } from 'lucide-react';
import { Track } from '../types';

interface NavbarProps {
  currentTrack: Track | null;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTrack, isPlaying, onTogglePlay }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Music', href: '#music', icon: Music },
    { name: 'Tour Dates', href: '#tour', icon: Calendar },
    { name: 'Gallery', href: '#gallery', icon: ImageIcon },
    { name: 'Booking & Contact', href: '#booking', icon: Mail },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0f0f12]/95 backdrop-blur-md border-b border-[#1a1a24] shadow-lg shadow-black/40 py-3'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group"
          id="brand-logo"
        >
          <div className="w-10 h-10 rounded-full bg-[#ff2a5f] text-white flex items-center justify-center font-black tracking-wider shadow-lg shadow-[#ff2a5f]/25 group-hover:scale-105 transition-transform duration-200">
            LF
          </div>
          <div className="flex flex-col">
            <span className="font-artist-title font-bold text-lg sm:text-xl tracking-wider text-white uppercase group-hover:text-[#ff2a5f] transition-colors">
              Louie Fortune
            </span>
            <span className="text-[10px] text-[#a0a0b0] tracking-widest uppercase -mt-1 font-medium">
              Urban Gospel
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#a0a0b0]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors duration-150 py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff2a5f] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Button & Active Song Pill */}
        <div className="hidden sm:flex items-center gap-3">
          {currentTrack && (
            <button
              onClick={onTogglePlay}
              className="flex items-center gap-2 bg-[#1a1a24] hover:bg-[#252535] text-xs px-3 py-1.5 rounded-full border border-white/10 transition-colors"
              title="Toggle audio playback"
            >
              {isPlaying ? (
                <span className="flex items-center gap-0.5 h-3">
                  <span className="w-0.5 h-2 bg-[#ff2a5f] animate-pulse" />
                  <span className="w-0.5 h-3.5 bg-[#ff2a5f] animate-pulse delay-75" />
                  <span className="w-0.5 h-1.5 bg-[#ff2a5f] animate-pulse delay-150" />
                </span>
              ) : (
                <Play className="w-3 h-3 text-[#ff2a5f] fill-current" />
              )}
              <span className="text-white font-medium truncate max-w-[120px]">
                {currentTrack.title}
              </span>
            </button>
          )}

          <a
            href="#music"
            className="bg-[#ff2a5f] hover:bg-[#e02350] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 shadow-md shadow-[#ff2a5f]/20 hover:-translate-y-0.5"
          >
            Listen Now
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-[#ff2a5f] transition-colors rounded-lg bg-[#1a1a24]/60"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0f0f12] border-b border-[#1a1a24] px-6 py-5 shadow-2xl transition-all">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-[#a0a0b0] hover:text-[#ff2a5f] text-base font-semibold py-2 border-b border-white/5 transition-colors"
                >
                  <Icon className="w-4 h-4 text-[#ff2a5f]" />
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="#tour"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#ff2a5f] hover:bg-[#e02350] text-white py-2.5 rounded-full font-bold text-sm tracking-wide shadow-md"
              >
                Get Tour Tickets
              </a>
              <a
                href="#music"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center border border-[#ff2a5f] text-[#ff2a5f] hover:bg-[#ff2a5f] hover:text-white py-2.5 rounded-full font-bold text-sm tracking-wide transition-colors"
              >
                Stream Songs of Hope
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
