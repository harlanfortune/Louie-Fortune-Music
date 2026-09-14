import React, { useState, useRef, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MusicSection } from './components/MusicSection';
import { TourSection } from './components/TourSection';
import { GallerySection } from './components/GallerySection';
import { BookingSection } from './components/BookingSection';
import { FloatingPlayer } from './components/FloatingPlayer';
import { Footer } from './components/Footer';
import { TRACKS, TOUR_DATES, GALLERY_ITEMS } from './data/artistData';
import { Track } from './types';

export default function App() {
  const [currentTrack, setCurrentTrack] = useState<Track>(TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [showFloatingPlayer, setShowFloatingPlayer] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element event listeners
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(currentTrack.audioUrl);
      audioRef.current.volume = volume;
    }

    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || currentTrack.durationSeconds);
    };

    const handleEnded = () => {
      handleNextTrack();
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  // Helper to start playback of a track
  const playTrack = (track: Track) => {
    setShowFloatingPlayer(true);
    setCurrentTrack(track);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.src = track.audioUrl;
      audioRef.current.load();
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Playback error:", err);
        setIsPlaying(false);
      });
    }
  };

  // Handle Play / Pause toggle
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setShowFloatingPlayer(true);
      if (!audioRef.current.src || !audioRef.current.src.endsWith(currentTrack.audioUrl.slice(-30))) {
        audioRef.current.src = currentTrack.audioUrl;
        audioRef.current.load();
      }
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Playback error:", err);
        setIsPlaying(false);
      });
    }
  };

  // Select track from track list
  const handleSelectTrack = (track: Track) => {
    if (currentTrack.id === track.id) {
      togglePlay();
    } else {
      playTrack(track);
    }
  };

  // Skip to next track
  const handleNextTrack = () => {
    const currentIndex = TRACKS.findIndex((t) => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % TRACKS.length;
    playTrack(TRACKS[nextIndex]);
  };

  // Skip to previous track
  const handlePrevTrack = () => {
    const currentIndex = TRACKS.findIndex((t) => t.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + TRACKS.length) % TRACKS.length;
    playTrack(TRACKS[prevIndex]);
  };

  // Seek to position
  const handleSeek = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = seconds;
      setCurrentTime(seconds);
    }
  };

  // Volume change
  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f12] text-white flex flex-col font-sans selection:bg-[#ff2a5f] selection:text-white">
      {/* Top Navigation */}
      <Navbar
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
      />

      {/* Hero Section */}
      <Hero
        onPlayFeaturedTrack={() => {
          if (!isPlaying) {
            handleSelectTrack(TRACKS[0]);
          } else {
            togglePlay();
          }
        }}
        isPlaying={isPlaying && currentTrack.id === TRACKS[0].id}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* About Section */}
        <AboutSection />

        {/* Music Player & Discography */}
        <MusicSection
          tracks={TRACKS}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          onSelectTrack={handleSelectTrack}
          onTogglePlay={togglePlay}
          onSeek={handleSeek}
        />

        {/* Upcoming Shows / Tour Dates */}
        <TourSection tourDates={TOUR_DATES} />

        {/* Photo Gallery with Lightbox */}
        <GallerySection items={GALLERY_ITEMS} />

        {/* Booking & Newsletter Inquiries */}
        <BookingSection />
      </main>

      {/* Persistent Floating Bottom Audio Player */}
      {showFloatingPlayer && (
        <FloatingPlayer
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          volume={volume}
          onTogglePlay={togglePlay}
          onNextTrack={handleNextTrack}
          onPrevTrack={handlePrevTrack}
          onSeek={handleSeek}
          onVolumeChange={handleVolumeChange}
          onClose={() => {
            setShowFloatingPlayer(false);
            if (audioRef.current) {
              audioRef.current.pause();
              setIsPlaying(false);
            }
          }}
        />
      )}

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
