import React, { useState } from 'react';
import { Play, Pause, ExternalLink, Music2, Disc3 } from 'lucide-react';
import { Track } from '../types';
import { NEW_RELEASE } from '../data/artistData';
import { getAssetUrl } from '../utils/assets';

interface MusicSectionProps {
  tracks: Track[];
  currentTrack: Track | null;
  isPlaying: boolean;
  onSelectTrack: (track: Track) => void;
  onTogglePlay: () => void;
}

export const MusicSection: React.FC<MusicSectionProps> = ({
  tracks,
  currentTrack,
  isPlaying,
  onSelectTrack,
  onTogglePlay,
}) => {
  const [showEmbed, setShowEmbed] = useState(false);

  const isNewReleasePlaying = currentTrack?.id === NEW_RELEASE.id && isPlaying;

  const handlePlayNewRelease = () => {
    const match = tracks.find((t) => t.id === NEW_RELEASE.id);
    if (match) {
      if (currentTrack?.id === match.id) {
        onTogglePlay();
      } else {
        onSelectTrack(match);
      }
    }
  };

  return (
    <section id="music" className="scroll-mt-20">
      
      {/* 1. Featured New Single Card - Deep Espresso Section */}
      <div className="bg-[#1C1712] text-[#F4EFE6] py-16 sm:py-20 border-b border-[#33291F]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          
          <div className="bg-[#241D17] border border-[#3A2F24] rounded-[14px] p-6 sm:p-10 shadow-xl relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C58A1B]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
              
              {/* Cover Artwork */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group w-full max-w-[320px]">
                  <img
                    src={getAssetUrl(NEW_RELEASE.coverUrl)}
                    alt={NEW_RELEASE.title}
                    className="w-full aspect-square object-cover rounded-[10px] shadow-lg border border-[#3A2F24]"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== getAssetUrl(NEW_RELEASE.coverFallbackUrl)) {
                        target.src = getAssetUrl(NEW_RELEASE.coverFallbackUrl);
                      }
                    }}
                  />
                  {/* Play Overlay */}
                  <button
                    onClick={handlePlayNewRelease}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#C58A1B] text-[#1F1A14] flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#E3B04B]"
                    aria-label={isNewReleasePlaying ? "Pause single preview" : "Play single preview"}
                  >
                    {isNewReleasePlaying ? (
                      <Pause className="w-7 h-7 fill-current" />
                    ) : (
                      <Play className="w-7 h-7 fill-current ml-1" />
                    )}
                  </button>
                </div>
              </div>

              {/* Release Info & Streaming Buttons */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="px-3.5 py-1 rounded-full bg-[#C58A1B] text-[#1F1A14] text-[13px] font-bold uppercase tracking-wider">
                    Out Now
                  </span>
                  <span className="text-[13px] text-[#C9BFAE] font-medium">
                    New Single Release
                  </span>
                </div>

                <div>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F4EFE6] leading-tight">
                    {NEW_RELEASE.title}
                  </h2>
                  <p className="text-[#C9BFAE] text-[15px] mt-1 font-medium">
                    Written and performed by {NEW_RELEASE.writtenBy}
                  </p>
                </div>

                <p className="text-[#C9BFAE] text-base leading-relaxed">
                  {NEW_RELEASE.description}
                </p>

                {/* Primary Audio Play + Spotify Embed toggle */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={handlePlayNewRelease}
                    className="h-12 px-6 rounded-[10px] bg-[#C58A1B] hover:bg-[#A9740F] text-[#1F1A14] font-semibold text-sm inline-flex items-center gap-2.5 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-[#E3B04B] cursor-pointer"
                  >
                    {isNewReleasePlaying ? (
                      <>
                        <Pause className="w-4 h-4 fill-current" />
                        <span>Pause Preview</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-current" />
                        <span>Play Audio Preview</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setShowEmbed(!showEmbed)}
                    className="h-12 px-5 rounded-[10px] border border-[#F4EFE6]/30 hover:border-[#F4EFE6] hover:bg-white/5 text-[#F4EFE6] font-semibold text-sm inline-flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Disc3 className="w-4 h-4 text-[#E3B04B]" />
                    <span>{showEmbed ? 'Hide Spotify Player' : 'Open Spotify Player'}</span>
                  </button>
                </div>

                {/* Neutral Outline Platform Links */}
                <div className="pt-2 border-t border-[#3A2F24]">
                  <span className="text-[13px] text-[#C9BFAE] block mb-2 font-medium">
                    Stream on your preferred platform:
                  </span>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href={NEW_RELEASE.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 px-4 rounded-[10px] border border-[#3A2F24] hover:border-[#C58A1B] bg-[#1C1712] hover:bg-[#2A231C] text-[#F4EFE6] text-[13px] font-medium inline-flex items-center gap-2 transition-colors"
                    >
                      <span>Spotify</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#C9BFAE]" />
                    </a>

                    <a
                      href={NEW_RELEASE.appleMusicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 px-4 rounded-[10px] border border-[#3A2F24] hover:border-[#C58A1B] bg-[#1C1712] hover:bg-[#2A231C] text-[#F4EFE6] text-[13px] font-medium inline-flex items-center gap-2 transition-colors"
                    >
                      <span>Apple Music</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#C9BFAE]" />
                    </a>

                    <a
                      href={NEW_RELEASE.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 px-4 rounded-[10px] border border-[#3A2F24] hover:border-[#C58A1B] bg-[#1C1712] hover:bg-[#2A231C] text-[#F4EFE6] text-[13px] font-medium inline-flex items-center gap-2 transition-colors"
                    >
                      <span>YouTube Music</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#C9BFAE]" />
                    </a>
                  </div>
                </div>

                {/* Embedded Spotify player when toggled */}
                {showEmbed && (
                  <div className="mt-4 pt-4 border-t border-[#3A2F24] animate-fade-in">
                    <iframe
                      src={NEW_RELEASE.spotifyEmbedUrl}
                      width="100%"
                      height="152"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="rounded-[10px] border border-[#3A2F24]"
                      title="Spotify player for Knoflokskraal"
                    />
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 2. Popular Tracks - Warm Cream Section */}
      <div className="bg-[#F7F2E9] text-[#1F1A14] py-16 sm:py-20 border-b border-[#E6DDCB]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-8 border-b border-[#E6DDCB] gap-3">
            <div>
              <span className="text-[13px] font-bold text-[#8A5A0B] uppercase tracking-wider block mb-1">
                Discography & Releases
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1A14]">
                Popular Tracks
              </h2>
            </div>
            <p className="text-[15px] text-[#5E5548] max-w-md">
              Select any song to listen to audio previews or open the full release on Spotify.
            </p>
          </div>

          {/* Clean Track Rows with Identical Heights */}
          <div className="bg-[#FFFFFF] rounded-[12px] border border-[#E6DDCB] divide-y divide-[#E6DDCB] shadow-sm overflow-hidden">
            {tracks.map((track, index) => {
              const isCurrent = currentTrack?.id === track.id;
              const isCurrentPlaying = isCurrent && isPlaying;

              return (
                <div
                  key={track.id}
                  onClick={() => {
                    if (isCurrent) {
                      onTogglePlay();
                    } else {
                      onSelectTrack(track);
                    }
                  }}
                  className={`flex items-center justify-between p-4 sm:px-6 sm:py-4 transition-colors cursor-pointer group ${
                    isCurrent
                      ? 'bg-[#EFE7D8]/70 border-l-4 border-l-[#C58A1B]'
                      : 'hover:bg-[#F7F2E9]/60'
                  }`}
                >
                  {/* Left: Index + Cover + Title & Info */}
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="w-5 text-center text-sm font-semibold text-[#5E5548] shrink-0">
                      {index + 1}
                    </span>

                    {/* Thumbnail */}
                    <div className="relative w-12 h-12 rounded-[8px] overflow-hidden shrink-0 border border-[#E6DDCB] bg-[#EFE7D8]">
                      <img
                        src={getAssetUrl(track.coverUrl)}
                        alt={track.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (track.coverFallbackUrl && target.src !== getAssetUrl(track.coverFallbackUrl)) {
                            target.src = getAssetUrl(track.coverFallbackUrl);
                          }
                        }}
                      />
                      <div
                        className={`absolute inset-0 bg-[#1C1712]/50 flex items-center justify-center transition-opacity ${
                          isCurrent ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}
                      >
                        {isCurrentPlaying ? (
                          <Pause className="w-5 h-5 text-[#E3B04B] fill-current" />
                        ) : (
                          <Play className="w-5 h-5 text-[#E3B04B] fill-current ml-0.5" />
                        )}
                      </div>
                    </div>

                    {/* Title & Metadata */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className={`text-base font-semibold truncate ${
                          isCurrent ? 'text-[#8A5A0B]' : 'text-[#1F1A14]'
                        }`}>
                          {track.title}
                        </h3>
                        {track.isNewRelease && (
                          <span className="px-2 py-0.5 rounded-full bg-[#C58A1B]/20 text-[#8A5A0B] text-[11px] font-bold uppercase tracking-wider">
                            New Release
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-[13px] text-[#5E5548] mt-0.5 truncate">
                        <span>{track.type}</span>
                        <span>·</span>
                        <span>{track.releaseYear}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Duration + Spotify Button + Play Trigger */}
                  <div className="flex items-center gap-3 sm:gap-4 shrink-0 pl-2">
                    <span className="text-sm font-medium text-[#5E5548] hidden sm:inline">
                      {track.duration}
                    </span>

                    {track.spotifyUrl && (
                      <a
                        href={track.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 sm:px-3 sm:py-1.5 rounded-[8px] border border-[#E6DDCB] hover:border-[#8A5A0B] bg-white text-[#1F1A14] text-[13px] font-medium inline-flex items-center gap-1.5 transition-colors"
                        title="Open on Spotify"
                      >
                        <span className="hidden sm:inline">Spotify</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#5E5548]" />
                      </a>
                    )}

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isCurrent) {
                          onTogglePlay();
                        } else {
                          onSelectTrack(track);
                        }
                      }}
                      className="w-10 h-10 rounded-[8px] bg-[#EFE7D8] group-hover:bg-[#C58A1B] text-[#1F1A14] flex items-center justify-center transition-colors cursor-pointer"
                      aria-label={isCurrentPlaying ? `Pause ${track.title}` : `Play ${track.title}`}
                    >
                      {isCurrentPlaying ? (
                        <Pause className="w-4 h-4 fill-current" />
                      ) : (
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      )}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>

    </section>
  );
};
