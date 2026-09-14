import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, X, Disc } from 'lucide-react';
import { Track } from '../types';

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
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#14141e]/95 backdrop-blur-lg border-t border-[#ff2a5f]/30 px-4 py-2.5 shadow-2xl animate-fade-in">
      {/* Top Scrubber Line */}
      <div className="absolute -top-1 left-0 right-0 h-1 bg-[#1a1a24]">
        <div
          className="h-full bg-[#ff2a5f]"
          style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
        />
      </div>

      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 sm:gap-6">
        
        {/* Track Details */}
        <div className="flex items-center gap-3 min-w-0 max-w-[200px] sm:max-w-xs">
          <div className="relative shrink-0">
            <img
              src={currentTrack.coverUrl}
              alt={currentTrack.title}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
            />
            {isPlaying && (
              <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
                <Disc className="w-5 h-5 text-[#ff2a5f] animate-spin-slow" />
              </div>
            )}
          </div>
          <div className="truncate">
            <h5 className="text-xs sm:text-sm font-bold text-white truncate">
              {currentTrack.title}
            </h5>
            <p className="text-[11px] text-[#a0a0b0] truncate">
              Louie Fortune • {currentTrack.album}
            </p>
          </div>
        </div>

        {/* Playback Controls & Timeline */}
        <div className="flex-1 max-w-md flex flex-col items-center gap-1">
          <div className="flex items-center gap-3">
            <button
              onClick={onPrevTrack}
              className="text-[#a0a0b0] hover:text-white transition-colors p-1"
              aria-label="Previous track"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              onClick={onTogglePlay}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#ff2a5f] hover:bg-[#e02350] text-white flex items-center justify-center shadow-md shadow-[#ff2a5f]/30 transition-transform active:scale-95"
              aria-label={isPlaying ? "Pause track" : "Play track"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-current" />
              ) : (
                <Play className="w-4 h-4 fill-current ml-0.5" />
              )}
            </button>

            <button
              onClick={onNextTrack}
              className="text-[#a0a0b0] hover:text-white transition-colors p-1"
              aria-label="Next track"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Timeline Bar on Desktop */}
          <div className="hidden sm:flex items-center gap-2 w-full text-[11px] text-[#a0a0b0] font-mono">
            <span className="w-8 text-right">{formatTime(currentTime)}</span>
            <input
              type="range"
              min={0}
              max={duration || currentTrack.durationSeconds || 100}
              value={currentTime}
              onChange={(e) => onSeek(Number(e.target.value))}
              className="flex-1 h-1 bg-[#252535] rounded-lg appearance-none cursor-pointer accent-[#ff2a5f]"
            />
            <span className="w-8">{formatTime(duration || currentTrack.durationSeconds)}</span>
          </div>
        </div>

        {/* Volume, Spotify & Close */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {currentTrack.spotifyUrl && (
            <a
              href={currentTrack.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1db954]/20 hover:bg-[#1db954] text-[#1db954] hover:text-white border border-[#1db954]/40 font-bold text-xs transition-colors"
              title="Open track in Spotify"
            >
              <Disc className="w-3.5 h-3.5" />
              <span>Spotify</span>
            </a>
          )}

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="text-[#a0a0b0] hover:text-white transition-colors"
              aria-label="Toggle mute"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4 text-rose-400" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                setIsMuted(false);
                onVolumeChange(Number(e.target.value));
              }}
              className="w-16 h-1 bg-[#252535] rounded-lg appearance-none cursor-pointer accent-[#ff2a5f]"
            />
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#a0a0b0] hover:text-white hover:bg-white/10 rounded-full transition-colors"
            title="Dismiss player bar"
            aria-label="Close floating audio player"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
