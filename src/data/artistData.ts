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

export const NEW_RELEASE = {
  id: "track-knoflokskraal",
  title: "Knoflokskraal (Moenie worry nie)",
  subtitle: "New Single Release",
  writtenBy: "Louie Fortune",
  releaseDate: "20 September 2026",
  releaseDateLabel: "Release Date: 20 September",
  album: "Knoflokskraal (Moenie worry nie) - Single",
  type: "Urban Gospel • Afrikaans Praise Single",
  duration: "5:03",
  durationSeconds: 303,
  coverUrl: "/images/knoflokskraal-artwork.jpg",
  coverFallbackUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3e/55/57/3e555710-5a4a-a82b-b246-180a6043c958/artwork.jpg/1000x1000bb.jpg",
  audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e6/23/43/e6234338-a91a-d3f5-95eb-14adea8fea14/mzaf_18162642492627282682.plus.aac.p.m4a",
  spotifyUrl: "https://open.spotify.com/album/2LUAs2nnZ68Bw2G5OlUia3",
  spotifyEmbedUrl: "https://open.spotify.com/embed/album/2LUAs2nnZ68Bw2G5OlUia3?utm_source=generator&theme=0",
  appleMusicUrl: "https://music.apple.com/us/album/knoflokskraal-moenie-worry-nie/6811858945?i=6811858946",
  youtubeUrl: "https://www.youtube.com/channel/UC2mf6naFepLPa1rHWAfTUBA",
  distrokidUrl: "https://open.spotify.com/album/2LUAs2nnZ68Bw2G5OlUia3",
  description: "An evocative, heartfelt Urban Gospel single written and performed by Louie Fortune. Highlighting the resilience, heritage, and faith of the community with the resonant rallying cry 'Moenie worry nie'. Available across Spotify, Apple Music, YouTube Music, DistroKid, and all major streaming platforms."
};

export const TRACKS: Track[] = [
  {
    id: "track-knoflokskraal",
    title: "Knoflokskraal (Moenie worry nie)",
    type: "Brand New Single • All Platforms",
    album: "Knoflokskraal (Moenie worry nie) - Single",
    duration: "5:03",
    durationSeconds: 303,
    coverUrl: "/images/knoflokskraal-artwork.jpg",
    audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e6/23/43/e6234338-a91a-d3f5-95eb-14adea8fea14/mzaf_18162642492627282682.plus.aac.p.m4a",
    releaseYear: "2026",
    releaseDateLabel: "Release Date: 20 September",
    featured: true,
    isNewRelease: true,
    spotifyUrl: "https://open.spotify.com/album/2LUAs2nnZ68Bw2G5OlUia3",
    spotifyTrackId: "6811858946",
    spotifyEmbedUrl: "https://open.spotify.com/embed/album/2LUAs2nnZ68Bw2G5OlUia3?utm_source=generator&theme=0",
    appleMusicUrl: "https://music.apple.com/us/album/knoflokskraal-moenie-worry-nie/6811858945?i=6811858946",
    youtubeUrl: "https://www.youtube.com/channel/UC2mf6naFepLPa1rHWAfTUBA"
  },
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

export const TOUR_DATES: TourDate[] = [
  {
    id: "tour-worship-experience-2026",
    eventTitle: "Mysteries of True Worship Experience",
    theme: "The Joyful Sound (Psalms 89:15)",
    occasion: "Grace Amah Album Launching",
    date: "Saturday, October 24, 2026",
    month: "OCT",
    day: "24",
    year: "2026",
    venue: "St. Mark's GAA Club",
    address: "McGee Park, Cookstown Est Rd, Springfield, Dublin 24",
    eirCode: "D24 VN59",
    city: "Dublin",
    country: "Republic of Ireland",
    countryCode: "IE",
    ticketStatus: "available",
    price: "Free Admission / Ministry Fellowship",
    doorsOpen: "4:00 PM",
    startTime: "5:00 PM",
    organizer: "God's Grace Gospel Music (Republic of Ireland) in conjunction with The Hallelujah Family Mission and Global Evangelism",
    posterImage: "/images/mysteries-of-true-worship-poster.jpg?t=1789586153670",
    featuredMinisters: [
      "Grace Amah (Host / Album Launch Artiste)",
      "Louie Fortune (Special Guest Minister)",
      "Apostle Joseph Obamwonyi (aka Jesus boy)",
      "Psalmistpat Aka Minister Patrick",
      "Pastor E. J. Ezekiel",
      "Maame Serwaa",
      "Pastor Jessica A.A Osei",
      "Sista Philo",
      "Medofopa Gifty Cudjoe",
      "Minister Joel Sackey",
      "Pastor Fred Emeka MSRPM Dublin Ireland",
      "Abimbola Wise",
      "Dr. Taiye Attah Dominion"
    ],
    contactPhone: "0830637943",
    socialHandle: "@Grace Amah"
  }
];

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
