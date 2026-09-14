import { Track, TourDate, GalleryItem } from '../types';

export const ARTIST_INFO = {
  name: "Louie Fortune",
  tagline: "Urban Gospel Music Artist • South Africa | Republic of Ireland",
  hometown: "Cape Town, South Africa",
  currentBase: "Balbriggan, Co. Dublin, Ireland",
  profileImage: "https://lh3.googleusercontent.com/pw/AP1GczPqPfj-C-PtP431SDaWpBWRlZNrY2_JIP0GR51je4CpjSuPdIVjRpXh4b8uo3rN0eXjmEUKokdFhftvYX0nazg33ONuZMTzQl725C9ZXo15rI05Pw=w1000",
  bioParagraph1: "Born in Cape Town, South Africa, Louie Fortune discovered his faith and passion for Gospel music at an early age. Starting in youth choirs and founding pioneering groups like New Creation and CHARISMA, Louie dedicated his journey to empowering young talent and spreading hope through music.",
  bioParagraph2: "Moving to Ireland in 2005, Louie took South African Gospel music to the international stage—representing his country at the Karaoke World Championship in Finland and launching the NPO South African Son Rise. Now based in Balbriggan, Ireland, the Songs of Hope artist continues to build global music connections and inspire audiences worldwide.",
  socials: {
    spotify: "https://open.spotify.com/artist/20a7UmLtccQTf2xYbzSOqg",
    youtube: "https://www.youtube.com/channel/UC2mf6naFepLPa1rHWAfTUBA",
    youtubeMusic: "https://www.youtube.com/channel/UC2mf6naFepLPa1rHWAfTUBA",
    instagram: "https://instagram.com",
    appleMusic: "https://music.apple.com",
    facebook: "https://facebook.com",
    bookingEmail: "bookings@louiefortune.com"
  },
  stats: [
    { label: "Years of Ministry", value: "20+" },
    { label: "International Tours", value: "8 Countries" },
    { label: "Community Youth Mentored", value: "5,000+" },
    { label: "Studio Releases", value: "4 Projects" }
  ]
};

export const TRACKS: Track[] = [
  {
    id: "track-1",
    title: "I Am Yours Lord",
    type: "Gospel Worship • Single",
    album: "Pray for me - EP",
    duration: "4:32",
    durationSeconds: 272,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c9/30/27/c93027c2-204c-f47e-7d47-db0b4d6c9fee/artwork.jpg/600x600bb.jpg",
    audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ea/1d/86/ea1d862f-e7be-2efa-d56d-1d5422e2faca/mzaf_13783277432741926944.plus.aac.p.m4a",
    releaseYear: "2025",
    featured: true,
    spotifyUrl: "https://open.spotify.com/track/7jsIBMXgAgcAiK9K4wSXqF?si=c345c79792a948b4",
    spotifyTrackId: "7jsIBMXgAgcAiK9K4wSXqF",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/7jsIBMXgAgcAiK9K4wSXqF?utm_source=generator&theme=0"
  },
  {
    id: "track-2",
    title: "Give Your Heart To The Lord",
    type: "Inspirational Praise",
    album: "Pray for me - EP",
    duration: "3:48",
    durationSeconds: 228,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c9/30/27/c93027c2-204c-f47e-7d47-db0b4d6c9fee/artwork.jpg/600x600bb.jpg",
    audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/67/d9/b7/67d9b771-2fa2-576e-419d-c3013c0b8287/mzaf_10252982328689737580.plus.aac.p.m4a",
    releaseYear: "2025",
    featured: true,
    spotifyUrl: "https://open.spotify.com/track/3JuexVj31peLQdMQoi8FQY?si=6404228232d04100",
    spotifyTrackId: "3JuexVj31peLQdMQoi8FQY",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/3JuexVj31peLQdMQoi8FQY?utm_source=generator&theme=0"
  },
  {
    id: "track-3",
    title: "Pray For Me",
    type: "Soulful Worship Ballad",
    album: "Pray for me - EP",
    duration: "4:15",
    durationSeconds: 255,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/c9/30/27/c93027c2-204c-f47e-7d47-db0b4d6c9fee/artwork.jpg/600x600bb.jpg",
    audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/06/30/6d/06306d7e-08af-f79d-22a5-ac7b41f2b5cc/mzaf_4347940651869218347.plus.aac.p.m4a",
    releaseYear: "2025",
    featured: false,
    spotifyUrl: "https://open.spotify.com/track/529wTQ75x0XAitJGUOJvwl?si=2864f14538614ad8",
    spotifyTrackId: "529wTQ75x0XAitJGUOJvwl",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/529wTQ75x0XAitJGUOJvwl?utm_source=generator&theme=0"
  },
  {
    id: "track-4",
    title: "Thank You Lord",
    type: "Urban Praise Anthem",
    album: "Thank you Lord - Single",
    duration: "3:52",
    durationSeconds: 232,
    coverUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7e/b8/47/7eb84713-4656-d736-fbe1-e54fd18beaa1/artwork.jpg/600x600bb.jpg",
    audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/51/5c/f8/515cf8f4-0655-a0cb-a1b6-8c07da6084cb/mzaf_8487363145407596703.plus.aac.p.m4a",
    releaseYear: "2026",
    featured: false,
    spotifyUrl: "https://open.spotify.com/track/1rw8mS93pODHiDSBBlCedX?si=490e8693650a4549",
    spotifyTrackId: "1rw8mS93pODHiDSBBlCedX",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/1rw8mS93pODHiDSBBlCedX?utm_source=generator&theme=0"
  }
];

export const TOUR_DATES: TourDate[] = [];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Louie Fortune Official Portrait",
    category: "Live",
    imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczPqPfj-C-PtP431SDaWpBWRlZNrY2_JIP0GR51je4CpjSuPdIVjRpXh4b8uo3rN0eXjmEUKokdFhftvYX0nazg33ONuZMTzQl725C9ZXo15rI05Pw=w1000",
    caption: "Official portrait of Louie Fortune, Urban Gospel Music Artist."
  },
  {
    id: "gallery-2",
    title: "Studio Session",
    category: "Studio",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    caption: "Vocal and acoustic recording sessions for the Songs of Hope release."
  },
  {
    id: "gallery-3",
    title: "Concert Audience",
    category: "Tour",
    imageUrl: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80",
    caption: "Hands lifted in unity and celebration across vibrant packed venues."
  },
  {
    id: "gallery-4",
    title: "Vocal Harmony Rehearsal",
    category: "Studio",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    caption: "Harmonizing rich African choral traditions with contemporary urban grooves."
  },
  {
    id: "gallery-5",
    title: "Dublin Stage Lights",
    category: "Live",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    caption: "An electrifying night of live gospel praise and fellowship."
  },
  {
    id: "gallery-6",
    title: "Youth Mentorship Workshop",
    category: "Tour",
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    caption: "Son Rise initiative mentoring the next generation of musical leaders."
  }
];
