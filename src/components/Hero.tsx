import React from 'react';
import { Play, Disc, ExternalLink, MapPin, Sparkles, Youtube, Calendar, Radio } from 'lucide-react';
import { ARTIST_INFO, NEW_RELEASE } from '../data/artistData';

interface HeroProps {
  onPlayFeaturedTrack: () => void;
  isPlaying: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onPlayFeaturedTrack, isPlaying }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[75vh] md:min-h-[85vh] flex items-end pb-12 pt-28 sm:pt-36 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(15, 15, 18, 0.45) 0%, rgba(15, 15, 18, 0.8) 55%, #0f0f12 100%), url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80')`,
      }}
    >
      {/* Subtle decorative glow */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#ff2a5f]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1a1a24]/80 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 w-full z-10">
        
        {/* Top Badges & Alerts */}
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          {/* New Release Alert Badge */}
          <a
            href="#music"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff2a5f]/15 border border-[#ff2a5f]/40 text-xs sm:text-sm font-semibold text-white backdrop-blur-md shadow-lg shadow-[#ff2a5f]/10 hover:bg-[#ff2a5f]/25 transition-all group"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff2a5f] animate-ping" />
            <span className="text-[#ff2a5f] font-bold uppercase tracking-wider">New Release:</span>
            <span className="text-white group-hover:underline">"Knoflokskraal (Moenie worry nie)" • Out 20 September</span>
          </a>

          {/* Upcoming Event Badge */}
          <a
            href="#tour"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1a1a24]/90 border border-white/10 text-xs font-medium text-[#a0a0b0] hover:text-white hover:border-[#ff2a5f]/40 transition-colors backdrop-blur-sm"
          >
            <Calendar className="w-3.5 h-3.5 text-[#ff2a5f]" />
            <span>Upcoming: Mysteries of True Worship (Dublin, 24 Oct)</span>
          </a>
        </div>

        {/* Modern Stacked Artist Title */}
        <h1 className="font-artist-title select-none uppercase tracking-tight leading-[0.85] mt-2 mb-3" id="artist-title">
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

        {/* Highlight Card: New Song Release Banner */}
        <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-[#14141e]/95 border border-[#ff2a5f]/30 backdrop-blur-md shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-3xl">
          <div className="flex items-center gap-4">
            <div className="relative group shrink-0">
              <img
                src={NEW_RELEASE.coverUrl}
                alt="Knoflokskraal (Moenie worry nie) Cover Art"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== NEW_RELEASE.coverFallbackUrl) {
                    target.src = NEW_RELEASE.coverFallbackUrl;
                  }
                }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-amber-400/40 shadow-lg shadow-black/60"
              />
              <span className="absolute -top-1.5 -right-1.5 bg-[#ff2a5f] text-white text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-tighter shadow-md">
                NEW
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#ff2a5f] bg-[#ff2a5f]/15 px-2 py-0.5 rounded-md border border-[#ff2a5f]/30">
                  Release Date: 20 September
                </span>
                <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">
                  Available on All Platforms
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-white mt-1">
                {NEW_RELEASE.title}
              </h3>
              <p className="text-xs text-[#a0a0b0]">
                Geskryf deur: <strong className="text-white">Louie Fortune</strong> • Spotify, Apple Music, YouTube, DistroKid
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 justify-end">
            <button
              onClick={onPlayFeaturedTrack}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-[#ff2a5f] hover:bg-[#e02350] text-white px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#ff2a5f]/25 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <Play className={`w-3.5 h-3.5 fill-current ${isPlaying ? 'animate-spin' : ''}`} />
              <span>{isPlaying ? 'Playing Single' : 'Preview'}</span>
            </button>

            <a
              href={NEW_RELEASE.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 bg-[#1db954] hover:bg-[#1aa34a] text-black font-extrabold px-4 py-2.5 rounded-full text-xs sm:text-sm transition-all duration-200 shadow-md shadow-[#1db954]/20 hover:-translate-y-0.5"
            >
              <Disc className="w-4 h-4" />
              <span>Spotify</span>
            </a>
          </div>
        </div>

        {/* Action / Social Bar */}
        <div className="mt-7 flex flex-wrap items-center gap-3.5 sm:gap-4" id="social-bar">
          <a
            href={NEW_RELEASE.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-spotify"
            className="flex items-center gap-2 bg-transparent border-2 border-[#1db954] hover:bg-[#1db954] text-[#1db954] hover:text-black px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5"
          >
            <Disc className="w-4 h-4" />
            <span>Spotify Album</span>
          </a>

          <a
            href={NEW_RELEASE.appleMusicUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-apple-music"
            className="flex items-center gap-2 bg-transparent border-2 border-white/30 hover:border-white hover:bg-white text-white hover:text-black px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5"
          >
            <Radio className="w-4 h-4" />
            <span>Apple Music</span>
          </a>

          <a
            href={ARTIST_INFO.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-youtube"
            className="flex items-center gap-2 bg-transparent border-2 border-[#ff2a5f] hover:bg-[#ff2a5f] text-[#ff2a5f] hover:text-white px-5 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5"
          >
            <Youtube className="w-4 h-4" />
            <span>YouTube Music</span>
          </a>

          <a
            href="#tour"
            className="text-xs sm:text-sm text-[#a0a0b0] hover:text-white px-4 py-2.5 rounded-full hover:bg-[#1a1a24]/60 transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#ff2a5f]" />
            <span>Upcoming Concerts (Dublin 24 Oct)</span>
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
