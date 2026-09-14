export interface Track {
  id: string;
  title: string;
  type: string;
  album: string;
  duration: string;
  durationSeconds: number;
  coverUrl: string;
  audioUrl: string;
  releaseYear: string;
  featured?: boolean;
  spotifyUrl?: string;
  spotifyTrackId?: string;
  spotifyEmbedUrl?: string;
}

export interface TourDate {
  id: string;
  date: string;
  month: string;
  day: string;
  year: string;
  venue: string;
  city: string;
  country: string;
  countryCode: 'IE' | 'ZA';
  ticketStatus: 'available' | 'few_left' | 'sold_out';
  price: string;
  doorsOpen: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Live' | 'Studio' | 'Tour';
  imageUrl: string;
  caption: string;
}

export interface BookingSubmission {
  name: string;
  email: string;
  eventType: string;
  date: string;
  location: string;
  message: string;
}
