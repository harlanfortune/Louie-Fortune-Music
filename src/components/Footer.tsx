import React from 'react';
import { Disc, ExternalLink, Heart, ChevronUp, MapPin, Youtube } from 'lucide-react';
import { ARTIST_INFO } from '../data/artistData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0b0e] border-t border-[#1a1a24] pt-14 pb-20 text-[#a0a0b0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/5">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#ff2a5f] text-white flex items-center justify-center font-black text-sm">
                LF
              </div>
              <span className="font-extrabold text-lg text-white uppercase tracking-wider">
                Louie Fortune
              </span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed max-w-sm">
              Urban Gospel Music Artist spreading message, melody, and restoration across South Africa, Ireland, and global stages.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-white/70">
              <MapPin className="w-3.5 h-3.5 text-[#ff2a5f]" />
              <span>Cape Town, ZA • Balbriggan, IE</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">About & Ministry</a></li>
              <li><a href="#music" className="hover:text-white transition-colors">Popular Tracks</a></li>
              <li><a href="#tour" className="hover:text-white transition-colors">Upcoming Tour Dates</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Photo Gallery</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Bookings & Press</a></li>
            </ul>
          </div>

          {/* Col 3: Social & Streaming */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Stream & Follow
            </h4>
            <div className="flex flex-wrap gap-2">
              <a
                href={ARTIST_INFO.socials.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a1a24] hover:bg-[#ff2a5f] hover:text-white text-xs text-white/80 transition-colors"
              >
                <Disc className="w-3.5 h-3.5" />
                <span>Spotify</span>
              </a>
              <a
                href={ARTIST_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a1a24] hover:bg-[#ff2a5f] hover:text-white text-xs text-white/80 transition-colors"
              >
                <Youtube className="w-3.5 h-3.5" />
                <span>YouTube Music</span>
              </a>
              <a
                href={ARTIST_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a1a24] hover:bg-[#ff2a5f] hover:text-white text-xs text-white/80 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <a
                href={ARTIST_INFO.socials.appleMusic}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a1a24] hover:bg-[#ff2a5f] hover:text-white text-xs text-white/80 transition-colors"
              >
                Apple Music
              </a>
            </div>
            <p className="text-[11px] text-[#707080]">
              Supporting the non-profit work of South African Son Rise.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Louie Fortune. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors bg-[#1a1a24] hover:bg-[#252535] px-3 py-1.5 rounded-full"
          >
            <span>Back to top</span>
            <ChevronUp className="w-3.5 h-3.5 text-[#ff2a5f]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
