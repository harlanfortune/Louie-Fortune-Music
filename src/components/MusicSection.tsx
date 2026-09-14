import React, { useState } from 'react';
import { Play, Pause, Disc, Share2, Download, Radio, Volume2, Sparkles, Music, Youtube, ExternalLink, SlidersHorizontal } from 'lucide-react';
import { Track } from '../types';
import { ARTIST_INFO } from '../data/artistData';

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
  const [activeEmbedTrackId, setActiveEmbedTrackId] = useState<string | null>(null);

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
              Popular Tracks
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
                    Louie Fortune • {embedTrack.album}
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
                      {track.featured && (
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
            <div className="w-12 h-12 rounded-xl bg-[#ff2a5f]/20 flex items-center justify-center text-[#ff2a5f] shrink-0">
              <Radio className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">
                Stream Louie Fortune on All Major Platforms
              </h4>
              <p className="text-xs sm:text-sm text-[#a0a0b0] mt-0.5">
                Available on Spotify, Apple Music, YouTube Music, and Amazon Music.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={ARTIST_INFO.socials.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1db954] hover:bg-[#1aa34a] text-xs font-bold text-black border border-transparent transition-colors"
            >
              <Disc className="w-3.5 h-3.5" />
              <span>Spotify</span>
            </a>
            <a
              href={ARTIST_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1a1a24] hover:bg-[#ff2a5f] text-xs font-bold text-white border border-white/10 transition-colors"
            >
              <Youtube className="w-3.5 h-3.5" />
              <span>YouTube</span>
            </a>
            <a
              href={ARTIST_INFO.socials.appleMusic}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#1a1a24] hover:bg-[#ff2a5f] text-xs font-bold text-white border border-white/10 transition-colors"
            >
              Apple Music
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
