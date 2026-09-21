import React, { useState, useRef, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MusicSection } from './components/MusicSection';
import { TourSection } from './components/TourSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { BookingSection } from './components/BookingSection';
import { FloatingPlayer } from './components/FloatingPlayer';
import { TicketModal } from './components/TicketModal';
import { Footer } from './components/Footer';
import { TRACKS, TOUR_DATES, GALLERY_ITEMS } from './data/artistData';
import { Track, TourDate } from './types';

export default function App() {
  const [currentTrack, setCurrentTrack] = useState<Track>(TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [showFloatingPlayer, setShowFloatingPlayer] = useState(false);
  const [selectedTour, setSelectedTour] = useState<TourDate | null>(null);

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
      setDuration(audio.duration || currentTrack.durationSeconds || 180);
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

  // Play a specific track
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
        console.warn("Audio playback preview error:", err);
        setIsPlaying(false);
      });
    }
  };

  // Toggle Play / Pause
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
        console.warn("Audio playback error:", err);
        setIsPlaying(false);
      });
    }
  };

  // Select a track from list
  const handleSelectTrack = (track: Track) => {
    if (currentTrack.id === track.id) {
      togglePlay();
    } else {
      playTrack(track);
    }
  };

  // Next track
  const handleNextTrack = () => {
    const currentIndex = TRACKS.findIndex((t) => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % TRACKS.length;
    playTrack(TRACKS[nextIndex]);
  };

  // Previous track
  const handlePrevTrack = () => {
    const currentIndex = TRACKS.findIndex((t) => t.id === currentTrack.id);
    const prevIndex = (currentIndex - 1 + TRACKS.length) % TRACKS.length;
    playTrack(TRACKS[prevIndex]);
  };

  // Seek position
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
    <div className="min-h-screen bg-[#F7F2E9] text-[#1F1A14] flex flex-col font-sans selection:bg-[#C58A1B] selection:text-[#1F1A14]">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* About Section */}
        <AboutSection />

        {/* Music & Featured Single */}
        <MusicSection
          tracks={TRACKS}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          onSelectTrack={handleSelectTrack}
          onTogglePlay={togglePlay}
        />

        {/* Upcoming Shows (Renamed from Tour Dates) */}
        <TourSection
          dates={TOUR_DATES}
          onSelectTour={(tour) => setSelectedTour(tour)}
        />

        {/* Real Photo Gallery */}
        <GallerySection items={GALLERY_ITEMS} />

        {/* Booking & Contact with Formspree */}
        <BookingSection />
      </main>

      {/* Floating Audio Player */}
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

      {/* Ticket / Seat Reservation Modal */}
      {selectedTour && (
        <TicketModal
          tour={selectedTour}
          onClose={() => setSelectedTour(null)}
        />
      )}

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
