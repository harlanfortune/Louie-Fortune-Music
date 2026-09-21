import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, X, Disc } from 'lucide-react';
import { Track } from '../types';
import { getAssetUrl } from '../utils/assets';

interface FloatingPlayerProps {
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  onTogglePlay: () => void;
  onNextTrack: () => void;
  onPrevTrack: () => void;
  onSeek: (seconds: number) => void;
  onVolumeChange: (vol: number) => void;
  onClose: () => void;
}

export const FloatingPlayer: React.FC<FloatingPlayerProps> = ({
  currentTrack,
  isPlaying,
  currentTime,
  duration,
  volume,
  onTogglePlay,
  onNextTrack,
  onPrevTrack,
  onSeek,
  onVolumeChange,
  onClose,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(volume);

  if (!currentTrack) return null;

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      onVolumeChange(prevVolume || 0.8);
    } else {
      setPrevVolume(volume);
      setIsMuted(true);
      onVolumeChange(0);
    }
  };

  return (
    <aside
      aria-label="Audio player"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#1C1712]/95 backdrop-blur-md border-t border-[#33291F] px-4 py-3 shadow-2xl animate-fade-in text-[#F4EFE6]"
    >
      {/* Top Gold Scrubber Progress Line */}
      <div
        className="absolute -top-1 left-0 right-0 h-1 bg-[#33291F] cursor-pointer"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const percent = (e.clientX - rect.left) / rect.width;
          onSeek(percent * (duration || 1));
        }}
      >
        <div
          className="h-full bg-[#C58A1B]"
          style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
        />
      </div>

      <div className="max-w-[1100px] mx-auto flex items-center justify-between gap-3 sm:gap-6">
        
        {/* Track Details */}
        <div className="flex items-center gap-3 min-w-0 max-w-[200px] sm:max-w-xs">
          <div className="relative shrink-0">
            <img
              src={getAssetUrl(currentTrack.coverUrl)}
              alt={currentTrack.title}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-[6px] object-cover border border-[#33291F]"
              onError={(e) => {
                const target = e.currentTarget;
                if (currentTrack.coverFallbackUrl && target.src !== getAssetUrl(currentTrack.coverFallbackUrl)) {
                  target.src = getAssetUrl(currentTrack.coverFallbackUrl);
                }
              }}
            />
            {isPlaying && (
              <div className="absolute inset-0 bg-black/40 rounded-[6px] flex items-center justify-center">
                <Disc className="w-4 h-4 text-[#E3B04B] animate-spin" />
              </div>
            )}
          </div>

          <div className="min-w-0 truncate">
            <h4 className="text-sm font-semibold text-[#F4EFE6] truncate">
              {currentTrack.title}
            </h4>
            <p className="text-[12px] text-[#C9BFAE] truncate">
              Louie Fortune · {currentTrack.album}
            </p>
          </div>
        </div>

        {/* Playback Controls & Progress */}
        <div className="flex flex-col items-center gap-1 flex-1 max-w-md">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onPrevTrack}
              className="p-1.5 text-[#C9BFAE] hover:text-[#F4EFE6] transition-colors"
              aria-label="Previous track"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              onClick={onTogglePlay}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#C58A1B] hover:bg-[#A9740F] text-[#1F1A14] flex items-center justify-center shadow-md transition-transform hover:scale-105"
              aria-label={isPlaying ? "Pause audio" : "Play audio"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-current" />
              ) : (
                <Play className="w-4 h-4 fill-current ml-0.5" />
              )}
            </button>

            <button
              onClick={onNextTrack}
              className="p-1.5 text-[#C9BFAE] hover:text-[#F4EFE6] transition-colors"
              aria-label="Next track"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Time scrubber slider */}
          <div className="hidden sm:flex items-center gap-2 w-full text-[11px] text-[#C9BFAE]">
            <span className="w-8 text-right font-medium">{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={(e) => onSeek(Number(e.target.value))}
              className="flex-1 h-1 bg-[#33291F] accent-[#C58A1B] rounded-lg cursor-pointer"
              aria-label="Seek track position"
            />
            <span className="w-8 text-left font-medium">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Volume & Close */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="text-[#C9BFAE] hover:text-[#F4EFE6] transition-colors p-1"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                const val = Number(e.target.value);
                if (isMuted) setIsMuted(false);
                onVolumeChange(val);
              }}
              className="w-16 h-1 bg-[#33291F] accent-[#C58A1B] rounded-lg cursor-pointer"
              aria-label="Adjust volume"
            />
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#C9BFAE] hover:text-[#F4EFE6] rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close audio player"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </aside>
  );
};
