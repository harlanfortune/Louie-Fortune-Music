import React, { useState } from 'react';
import { Play, Pause, Disc, Share2, Download, Radio, Volume2, Sparkles, Music, Youtube, ExternalLink, SlidersHorizontal, Check } from 'lucide-react';
import { Track } from '../types';
import { ARTIST_INFO, NEW_RELEASE } from '../data/artistData';

interface MusicSectionProps {
  tracks: Track[];
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  onSelectTrack: (track: Track) => void;
  onTogglePlay: () => void;
  onSeek: (seconds: number) => void;
}

export const MusicSection: React.FC<MusicSectionProps> = ({
  tracks,
  currentTrack,
  isPlaying,
  currentTime,
  duration,
  onSelectTrack,
  onTogglePlay,
  onSeek,
}) => {
  const [showSpotifyEmbed, setShowSpotifyEmbed] = useState<boolean>(true);
  const [activeEmbedTrackId, setActiveEmbedTrackId] = useState<string | null>(tracks[0]?.id || null);

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleShare = (track: Track, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: `${track.title} - Louie Fortune`,
        text: `Listen to "${track.title}" by Urban Gospel artist Louie Fortune!`,
        url: track.spotifyUrl || window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(track.spotifyUrl || window.location.href);
      alert(`Link to "${track.title}" copied to clipboard!`);
    }
  };

  // Determine which track to embed in the featured Spotify player
  const embedTrack = tracks.find(t => t.id === activeEmbedTrackId) || currentTrack || tracks[0];

  return (
    <section id="music" className="py-16 sm:py-20 border-b border-[#1a1a24] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-[#1a1a24] pb-4 mb-8 gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#ff2a5f] uppercase tracking-wider mb-1">
              <Disc className="w-4 h-4 animate-spin-slow" />
              <span>Official Singles & Streaming</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide uppercase">
              Popular Tracks & Releases
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1db954]/15 border border-[#1db954]/30 text-xs font-semibold text-[#1db954]">
              <span className="w-2 h-2 rounded-full bg-[#1db954] animate-pulse" />
              Spotify Audio Connected
            </span>
            <button
              onClick={() => setShowSpotifyEmbed(!showSpotifyEmbed)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a1a24] hover:bg-[#252535] text-xs font-medium text-[#a0a0b0] hover:text-white border border-white/10 transition-colors cursor-pointer"
            >
              <SlidersHorizontal className="w-3 h-3 text-[#ff2a5f]" />
              <span>{showSpotifyEmbed ? 'Hide Spotify Player' : 'Show Spotify Player'}</span>
            </button>
          </div>
        </div>

        {/* PROMINENT NEW RELEASE SPOTLIGHT CARD */}
        <div className="mb-10 p-5 sm:p-7 rounded-3xl bg-gradient-to-br from-[#1a1a28] via-[#14141e] to-[#0f0f15] border-2 border-[#ff2a5f]/40 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff2a5f]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#1db954]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            {/* Left: Artwork + Details */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="relative group shrink-0">
                <img
                  src={NEW_RELEASE.coverUrl}
                  alt="Knoflokskraal Single Artwork"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== NEW_RELEASE.coverFallbackUrl) {
                      target.src = NEW_RELEASE.coverFallbackUrl;
                    }
                  }}
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-2 border-amber-400/50 shadow-2xl shadow-black/80"
                />
                <div className="absolute -top-2 -left-2 bg-[#ff2a5f] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-lg">
                  NEW RELEASE
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1.5">
                  <span className="text-xs font-black uppercase tracking-widest text-[#ff2a5f] bg-[#ff2a5f]/15 border border-[#ff2a5f]/30 px-2.5 py-0.5 rounded-full">
                    Release Date: 20 September
                  </span>
                  <span className="text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-full uppercase">
                    All Streaming Platforms
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
                  {NEW_RELEASE.title}
                </h3>
                <p className="text-sm text-[#a0a0b0] mt-1">
                  Geskryf deur: <strong className="text-white">Louie Fortune</strong> • Khoi-munity
                </p>

                <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-xl leading-relaxed">
                  Available worldwide across all digital streaming platforms on <strong>20 September</strong>. Pre-save and stream the single on Spotify, Apple Music, YouTube Music, and DistroKid.
                </p>

                {/* Platform Badges */}
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-[#1db954]/20 text-[#1db954] border border-[#1db954]/30 font-semibold flex items-center gap-1">
                    <Disc className="w-3 h-3" /> Spotify
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/10 text-white border border-white/20 font-semibold flex items-center gap-1">
                    <Radio className="w-3 h-3" /> Apple Music
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#ff0000]/15 text-[#ff6b6b] border border-[#ff0000]/30 font-semibold flex items-center gap-1">
                    <Youtube className="w-3 h-3" /> YouTube Music
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-blue-500/15 text-blue-300 border border-blue-500/30 font-semibold">
                    DistroKid
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 w-full md:w-auto shrink-0 justify-end">
              <a
                href={NEW_RELEASE.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#1db954] hover:bg-[#1aa34a] text-black px-6 py-3 rounded-full font-black text-xs sm:text-sm tracking-wide shadow-lg shadow-[#1db954]/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Disc className="w-4 h-4" />
                <span>Stream on Spotify</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={NEW_RELEASE.appleMusicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5"
              >
                <Radio className="w-4 h-4" />
                <span>Listen on Apple Music</span>
              </a>

              <button
                onClick={() => {
                  const trackObj = tracks.find(t => t.id === NEW_RELEASE.id) || tracks[0];
                  onSelectTrack(trackObj);
                  setActiveEmbedTrackId(trackObj.id);
                  setShowSpotifyEmbed(true);
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#ff2a5f] hover:bg-[#e02350] text-white px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-[#ff2a5f]/25 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Play Preview Audio</span>
              </button>
            </div>
          </div>
        </div>

        {/* Featured Spotify Player Bar */}
        {showSpotifyEmbed && embedTrack?.spotifyEmbedUrl && (
          <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-[#14141e] border border-[#1db954]/30 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#1db954]/20 flex items-center justify-center text-[#1db954] shrink-0">
                  <Disc className="w-4 h-4 animate-spin-slow" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] bg-[#1db954] text-black font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Spotify Player
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {embedTrack.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#a0a0b0]">
                    Louie Fortune • {embedTrack.album} {embedTrack.isNewRelease ? '• Out 20 September' : ''}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <a
                  href={embedTrack.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1db954] hover:bg-[#1aa34a] text-black font-extrabold text-xs transition-colors shadow-sm"
                >
                  <span>Open on Spotify</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Embedded Spotify IFrame */}
            <div className="w-full overflow-hidden rounded-xl bg-black">
              <iframe
                key={embedTrack.spotifyTrackId || embedTrack.id}
                src={embedTrack.spotifyEmbedUrl}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full rounded-xl"
                title={`Spotify Player - ${embedTrack.title}`}
              />
            </div>
            <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#707080]">
              <span>Streams directly from Spotify's official player</span>
              <span>Tap play on the Spotify widget or use track controls below</span>
            </div>
          </div>
        )}

        {/* Tracks List */}
        <div className="track-list space-y-4" id="track-list">
          {tracks.map((track) => {
            const isThisTrackActive = currentTrack?.id === track.id;
            const isThisTrackPlaying = isThisTrackActive && isPlaying;
            const isThisTrackEmbedded = embedTrack.id === track.id && showSpotifyEmbed;

            return (
              <div
                key={track.id}
                id={`track-${track.id}`}
                onClick={() => {
                  onSelectTrack(track);
                  setActiveEmbedTrackId(track.id);
                }}
                className={`track-card p-4 sm:p-5 rounded-xl transition-all duration-200 cursor-pointer border flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                  isThisTrackActive
                    ? 'bg-[#222230] border-[#ff2a5f] shadow-lg shadow-[#ff2a5f]/15'
                    : isThisTrackEmbedded
                    ? 'bg-[#1b1f26] border-[#1db954]/40 hover:bg-[#202530]'
                    : 'bg-[#1a1a24] hover:bg-[#20202d] border-white/5'
                }`}
              >
                {/* Track Info */}
                <div className="track-info flex items-center gap-4 min-w-[240px]">
                  <div className="relative group/cover shrink-0">
                    <img
                      src={track.coverUrl}
                      alt={`${track.title} Cover`}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (track.coverFallbackUrl && target.src !== track.coverFallbackUrl) {
                          target.src = track.coverFallbackUrl;
                        }
                      }}
                      className="track-img w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover shadow-md"
                    />
                    <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center opacity-0 group-hover/cover:opacity-100 transition-opacity">
                      <Play className="w-6 h-6 text-white fill-current" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-base sm:text-lg font-bold text-white hover:text-[#ff2a5f] transition-colors">
                        {track.title}
                      </h4>
                      {track.isNewRelease && (
                        <span className="text-[10px] bg-[#ff2a5f] text-white font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                          New Release • 20 Sept
                        </span>
                      )}
                      {track.featured && !track.isNewRelease && (
                        <span className="text-[10px] bg-[#ff2a5f]/20 text-[#ff2a5f] font-bold px-2 py-0.5 rounded-full uppercase">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-[#a0a0b0] mt-0.5">
                      {track.type}
                    </p>
                    <span className="text-[11px] text-[#707080] font-medium">
                      {track.album} • {track.releaseYear} • {track.duration}
                    </span>
                  </div>
                </div>

                {/* Interactive Player Controls for Track */}
                <div className="flex-1 max-w-md w-full flex flex-col justify-center px-0 md:px-4">
                  {isThisTrackActive ? (
                    <div className="space-y-1.5" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-between text-xs text-[#a0a0b0] font-mono">
                        <span>{formatTime(currentTime)}</span>
                        <div className="flex items-center gap-1.5 text-[#ff2a5f]">
                          <span className="w-2 h-2 rounded-full bg-[#ff2a5f] animate-ping" />
                          <span className="text-[10px] font-bold uppercase tracking-wider">
                            {isThisTrackPlaying ? 'Playing Louie Fortune' : 'Paused'}
                          </span>
                        </div>
                        <span>{formatTime(duration || track.durationSeconds)}</span>
                      </div>
                      
                      {/* Scrubber */}
                      <input
                        type="range"
                        min={0}
                        max={duration || track.durationSeconds || 100}
                        value={currentTime}
                        onChange={(e) => onSeek(Number(e.target.value))}
                        className="w-full h-1.5 bg-[#0f0f12] rounded-lg appearance-none cursor-pointer accent-[#ff2a5f]"
                      />
                    </div>
                  ) : (
                    <div className="hidden sm:flex items-center gap-2 text-xs text-[#a0a0b0]">
                      <span className="text-xs font-mono text-white/70">{track.duration}</span>
                      <span className="text-white/20">•</span>
                      <span className="truncate">Click to play master recording of {track.title}</span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-2 shrink-0">
                  {/* Spotify Button: streams on Spotify or triggers embed */}
                  {track.spotifyUrl && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveEmbedTrackId(track.id);
                        setShowSpotifyEmbed(true);
                      }}
                      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full border text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                        isThisTrackEmbedded
                          ? 'bg-[#1db954] text-black border-[#1db954]'
                          : 'bg-[#1db954]/15 hover:bg-[#1db954] text-[#1db954] hover:text-black border-[#1db954]/30'
                      }`}
                      title={`Stream "${track.title}" on Spotify player`}
                      aria-label={`Stream "${track.title}" on Spotify`}
                    >
                      <Disc className="w-3.5 h-3.5" />
                      <span>Spotify</span>
                    </button>
                  )}

                  {/* Play / Pause button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveEmbedTrackId(track.id);
                      if (isThisTrackActive) {
                        onTogglePlay();
                      } else {
                        onSelectTrack(track);
                      }
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 cursor-pointer ${
                      isThisTrackPlaying
                        ? 'bg-[#ff2a5f] text-white shadow-md shadow-[#ff2a5f]/30'
                        : 'bg-white/10 hover:bg-[#ff2a5f] text-white hover:shadow-md'
                    }`}
                  >
                    {isThisTrackPlaying ? (
                      <>
                        <Pause className="w-4 h-4 fill-current" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                        <span>Play</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={(e) => handleShare(track, e)}
                    className="p-2 text-[#a0a0b0] hover:text-white hover:bg-white/5 rounded-full transition-colors"
                    title="Share Track"
                    aria-label={`Share ${track.title}`}
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Streaming Links Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-[#1a1a24] via-[#161622] to-[#1a1a24] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#ff2a5f]/20 flex items-center justify-center text-[#ff2a5f] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Available Across All Major Streaming Platforms
              </h4>
              <p className="text-xs text-[#a0a0b0]">
                Stream Louie Fortune's urban gospel releases on Spotify, Apple Music, YouTube Music, and DistroKid.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <a
              href={NEW_RELEASE.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#1db954] hover:bg-[#1aa34a] text-black font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <Disc className="w-3.5 h-3.5" />
              <span>Spotify</span>
            </a>
            <a
              href={NEW_RELEASE.appleMusicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black font-bold text-xs flex items-center gap-1.5 border border-white/20 transition-colors"
            >
              <Radio className="w-3.5 h-3.5" />
              <span>Apple Music</span>
            </a>
            <a
              href={ARTIST_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#ff0000]/20 hover:bg-[#ff0000] text-white font-bold text-xs flex items-center gap-1.5 border border-[#ff0000]/30 transition-colors"
            >
              <Youtube className="w-3.5 h-3.5" />
              <span>YouTube</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
