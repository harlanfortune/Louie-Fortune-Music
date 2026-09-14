import React from 'react';
import { Play, Disc, ExternalLink, MapPin, Sparkles, Youtube } from 'lucide-react';
import { ARTIST_INFO } from '../data/artistData';

interface HeroProps {
  onPlayFeaturedTrack: () => void;
  isPlaying: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onPlayFeaturedTrack, isPlaying }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[70vh] md:min-h-[75vh] flex items-end pb-12 pt-28 sm:pt-36 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(15, 15, 18, 0.4) 0%, rgba(15, 15, 18, 0.75) 60%, #0f0f12 100%), url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80')`,
      }}
    >
      {/* Subtle decorative glow */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#ff2a5f]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1a1a24]/80 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 w-full z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1a1a24]/90 border border-[#ff2a5f]/30 text-xs sm:text-sm font-medium text-white mb-4 backdrop-blur-sm shadow-md">
          <span className="w-2 h-2 rounded-full bg-[#ff2a5f] animate-ping" />
          <span className="text-[#ff2a5f] font-semibold">Featured Single:</span>
          <span>"I Am Yours Lord" Out on Spotify</span>
        </div>

        {/* Modern Stacked Artist Title */}
        <h1 className="font-artist-title select-none uppercase tracking-tight leading-[0.85] mt-2 mb-4" id="artist-title">
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tight drop-shadow-2xl">
            Louie
          </span>
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#ff2a5f] tracking-tighter drop-shadow-[0_10px_35px_rgba(255,42,95,0.45)] mt-1 sm:mt-2">
            Fortune
          </span>
        </h1>

        {/* Subtitle / Tagline */}
        <p className="mt-3 text-lg sm:text-xl md:text-2xl text-[#a0a0b0] font-light max-w-3xl flex flex-wrap items-center gap-2">
          <span>Urban Gospel Music Artist</span>
          <span className="hidden sm:inline text-[#ff2a5f]">•</span>
          <span className="flex items-center gap-1.5 text-white/90 font-normal">
            <MapPin className="w-4 h-4 text-[#ff2a5f] inline shrink-0" />
            South Africa <span className="text-[#ff2a5f]">|</span> Republic of Ireland
          </span>
        </p>

        {/* Action / Social Bar */}
        <div className="mt-7 flex flex-wrap items-center gap-3.5 sm:gap-4" id="social-bar">
          <button
            onClick={onPlayFeaturedTrack}
            id="btn-listen-now"
            className="flex items-center gap-2.5 bg-[#ff2a5f] hover:bg-[#e02350] text-white px-7 py-3 rounded-full font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-[#ff2a5f]/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <Play className={`w-4 h-4 fill-current ${isPlaying ? 'animate-spin' : ''}`} />
            <span>{isPlaying ? 'Playing "I Am Yours Lord"' : 'Listen Now'}</span>
          </button>

          <a
            href={ARTIST_INFO.socials.spotify}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-spotify"
            className="flex items-center gap-2 bg-transparent border-2 border-[#ff2a5f] hover:bg-[#ff2a5f] text-[#ff2a5f] hover:text-white px-6 py-2.5 rounded-full font-bold text-sm sm:text-base tracking-wide transition-all duration-200 hover:-translate-y-0.5"
          >
            <Disc className="w-4 h-4" />
            <span>Spotify</span>
          </a>

          <a
            href={ARTIST_INFO.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-youtube"
            className="flex items-center gap-2 bg-transparent border-2 border-[#ff2a5f] hover:bg-[#ff2a5f] text-[#ff2a5f] hover:text-white px-6 py-2.5 rounded-full font-bold text-sm sm:text-base tracking-wide transition-all duration-200 hover:-translate-y-0.5"
          >
            <Youtube className="w-4 h-4" />
            <span>YouTube Music</span>
          </a>

          <a
            href={ARTIST_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-instagram"
            className="flex items-center gap-2 bg-transparent border-2 border-[#ff2a5f] hover:bg-[#ff2a5f] text-[#ff2a5f] hover:text-white px-6 py-2.5 rounded-full font-bold text-sm sm:text-base tracking-wide transition-all duration-200 hover:-translate-y-0.5"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Instagram</span>
          </a>

          <a
            href="#tour"
            className="text-xs sm:text-sm text-[#a0a0b0] hover:text-white px-4 py-2.5 rounded-full hover:bg-[#1a1a24]/60 transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#ff2a5f]" />
            <span>View Tour Schedule</span>
          </a>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-left">
          {ARTIST_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs text-[#a0a0b0] uppercase tracking-wider font-medium mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
