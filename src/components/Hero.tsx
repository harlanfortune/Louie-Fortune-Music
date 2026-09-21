import React from 'react';
import { Music, Calendar, ArrowRight } from 'lucide-react';
import { ARTIST_INFO } from '../data/artistData';
import { getAssetUrl } from '../utils/assets';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative bg-[#1C1712] text-[#F4EFE6] pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden border-b border-[#33291F]"
    >
      {/* Subtle warm architectural ambient glow */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#C58A1B]/10 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#C58A1B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33291F]/80 border border-[#C58A1B]/40 text-[#E3B04B] text-[13px] font-medium tracking-wide">
              <span>{ARTIST_INFO.tagline}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4EFE6] leading-[1.12]">
              Louie Fortune
            </h1>

            <p className="text-[#C9BFAE] text-lg sm:text-xl leading-relaxed max-w-xl font-normal">
              Crafting soulful melodies of resilience, worship, and restorative hope that bridge South African vibrancy with global European audiences.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#music"
                id="hero-listen-btn"
                className="h-12 px-7 rounded-[10px] bg-[#C58A1B] hover:bg-[#A9740F] text-[#1F1A14] font-semibold text-base inline-flex items-center justify-center gap-2 shadow-sm transition-all hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#E3B04B]"
              >
                <Music className="w-4 h-4" />
                <span>Listen Now</span>
              </a>

              <a
                href="#booking"
                id="hero-book-btn"
                className="h-12 px-7 rounded-[10px] border border-[#F4EFE6]/30 hover:border-[#F4EFE6] hover:bg-white/5 text-[#F4EFE6] font-semibold text-base inline-flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#E3B04B]"
              >
                <Calendar className="w-4 h-4 text-[#E3B04B]" />
                <span>Book Louie</span>
              </a>
            </div>

            {/* Current Base note */}
            <div className="pt-2 flex items-center gap-2 text-[13px] text-[#C9BFAE]/80">
              <span className="w-2 h-2 rounded-full bg-[#C58A1B]" />
              <span>Based in {ARTIST_INFO.currentBase} · Available for Ministry & Concerts</span>
            </div>
          </div>

          {/* Right Column: Portrait Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Soft decorative frame */}
              <div className="absolute -inset-2 rounded-[14px] bg-gradient-to-b from-[#C58A1B]/20 to-transparent blur-sm pointer-events-none" />
              
              <div className="relative rounded-[12px] overflow-hidden border border-[#33291F] shadow-2xl bg-[#26201A]">
                <img
                  src={getAssetUrl(ARTIST_INFO.heroImage)}
                  alt="Louie Fortune in signature gold blazer"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-top filter brightness-95 contrast-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== getAssetUrl(ARTIST_INFO.profileImageFallback)) {
                      target.src = getAssetUrl(ARTIST_INFO.profileImageFallback);
                    }
                  }}
                />
                
                {/* Subtle caption bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1C1712] via-[#1C1712]/80 to-transparent p-5 pt-10">
                  <span className="font-serif text-lg font-semibold text-[#F4EFE6] block">
                    {ARTIST_INFO.name}
                  </span>
                  <span className="text-[13px] text-[#C9BFAE]">
                    Cape Town to Balbriggan · Songs of Hope
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Subtle Stats Row Beneath */}
        <div className="mt-16 pt-8 border-t border-[#33291F] grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
          {ARTIST_INFO.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-[#E3B04B]">
                {stat.value}
              </span>
              <p className="text-[13px] text-[#C9BFAE] font-medium tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
