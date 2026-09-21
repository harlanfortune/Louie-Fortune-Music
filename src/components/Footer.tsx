import React from 'react';
import { ExternalLink, ChevronUp, MapPin, Disc, Music } from 'lucide-react';
import { ARTIST_INFO } from '../data/artistData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1712] text-[#F4EFE6] border-t border-[#33291F] pt-16 pb-20">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#33291F]">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[10px] bg-[#C58A1B] text-[#1F1A14] flex items-center justify-center font-bold text-base">
                LF
              </div>
              <span className="font-serif text-2xl font-bold text-[#F4EFE6]">
                Louie Fortune
              </span>
            </div>
            <p className="text-[15px] text-[#C9BFAE] leading-relaxed max-w-sm">
              Urban Gospel Music Artist spreading message, melody, and restoration across South Africa, Ireland, and global stages.
            </p>
            <div className="flex items-center gap-2 text-[14px] text-[#C9BFAE]">
              <MapPin className="w-4 h-4 text-[#E3B04B]" />
              <span>Cape Town, ZA · Balbriggan, Co. Dublin, IE</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#E3B04B]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-[15px]">
              <li>
                <a href="#about" className="text-[#C9BFAE] hover:text-[#F4EFE6] transition-colors">
                  About & Ministry
                </a>
              </li>
              <li>
                <a href="#music" className="text-[#C9BFAE] hover:text-[#F4EFE6] transition-colors">
                  Music & Singles
                </a>
              </li>
              <li>
                <a href="#shows" className="text-[#C9BFAE] hover:text-[#F4EFE6] transition-colors">
                  Upcoming Shows
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-[#C9BFAE] hover:text-[#F4EFE6] transition-colors">
                  Photo Gallery
                </a>
              </li>
              <li>
                <a href="#booking" className="text-[#C9BFAE] hover:text-[#F4EFE6] transition-colors">
                  Booking & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Stream & Follow Platforms */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#E3B04B]">
              Stream & Follow
            </h4>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={ARTIST_INFO.socials.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-[8px] bg-[#26201A] hover:bg-[#33291F] border border-[#3A2F24] hover:border-[#C58A1B] text-[13px] font-medium text-[#F4EFE6] inline-flex items-center gap-2 transition-colors"
              >
                <Disc className="w-4 h-4 text-[#E3B04B]" />
                <span>Spotify</span>
              </a>

              <a
                href={ARTIST_INFO.socials.appleMusic}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-[8px] bg-[#26201A] hover:bg-[#33291F] border border-[#3A2F24] hover:border-[#C58A1B] text-[13px] font-medium text-[#F4EFE6] inline-flex items-center gap-2 transition-colors"
              >
                <Music className="w-4 h-4 text-[#E3B04B]" />
                <span>Apple Music</span>
              </a>

              <a
                href={ARTIST_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-[8px] bg-[#26201A] hover:bg-[#33291F] border border-[#3A2F24] hover:border-[#C58A1B] text-[13px] font-medium text-[#F4EFE6] inline-flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-[#E3B04B]" />
                <span>YouTube Music</span>
              </a>

              <a
                href={ARTIST_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-[8px] bg-[#26201A] hover:bg-[#33291F] border border-[#3A2F24] hover:border-[#C58A1B] text-[13px] font-medium text-[#F4EFE6] inline-flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-[#E3B04B]" />
                <span>Instagram</span>
              </a>
            </div>

            <p className="text-[13px] text-[#C9BFAE]/80 leading-relaxed pt-1">
              Proudly supporting youth mentorship through the South African Son Rise Non-Profit Organization.
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#C9BFAE]">
          <p>© {new Date().getFullYear()} Louie Fortune. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#F4EFE6] hover:text-[#E3B04B] transition-colors px-4 py-2 rounded-full bg-[#26201A] hover:bg-[#33291F] border border-[#3A2F24] cursor-pointer"
          >
            <span>Back to top</span>
            <ChevronUp className="w-4 h-4 text-[#E3B04B]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
