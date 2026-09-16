import React, { useState } from 'react';
import { Calendar, MapPin, Ticket, AlertCircle, Bell, Check, Clock, Phone, ExternalLink, Sparkles, UserCheck, Eye, X } from 'lucide-react';
import { TourDate } from '../types';
import { TicketModal } from './TicketModal';

interface TourSectionProps {
  tourDates: TourDate[];
}

export const TourSection: React.FC<TourSectionProps> = ({ tourDates }) => {
  const [selectedTour, setSelectedTour] = useState<TourDate | null>(null);
  const [remindedTours, setRemindedTours] = useState<Record<string, boolean>>({});
  const [posterLightboxUrl, setPosterLightboxUrl] = useState<string | null>(null);

  const toggleReminder = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setRemindedTours((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="tour" className="py-16 sm:py-20 border-b border-[#1a1a24] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-[#1a1a24] pb-3 mb-8 gap-2">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#ff2a5f] uppercase tracking-wider mb-1">
              <Calendar className="w-4 h-4" />
              <span>Live Praise & Ministry Experience</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide uppercase">
              Upcoming Events & Tour Dates
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#a0a0b0]">
            Catch Louie Fortune live in Europe & Southern Africa
          </p>
        </div>

        {/* Tour List or Empty State */}
        {tourDates.length === 0 ? (
          <div className="p-8 sm:p-12 rounded-2xl bg-[#1a1a24] border border-white/5 text-center flex flex-col items-center justify-center relative overflow-hidden" id="tour-empty-state">
            <div className="w-16 h-16 rounded-2xl bg-[#ff2a5f]/15 border border-[#ff2a5f]/30 flex items-center justify-center text-[#ff2a5f] mb-4 shadow-lg shadow-[#ff2a5f]/10">
              <Calendar className="w-8 h-8" />
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide">
              No Confirmed Tour Dates at This Time
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#a0a0b0] max-w-lg leading-relaxed">
              There are currently no confirmed tour dates. Louie Fortune is in the studio working on new music and preparing upcoming ministry engagements across Europe and Southern Africa.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 bg-[#ff2a5f] hover:bg-[#e02350] text-white px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#ff2a5f]/25 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Request Booking for Your Event</span>
              </a>
              <a
                href="https://www.youtube.com/channel/UC2mf6naFepLPa1rHWAfTUBA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm border border-white/10 transition-colors"
              >
                <span>Follow on YouTube</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-8" id="tour-list">
            {tourDates.map((item) => {
              const isDetailedEvent = !!item.posterImage || !!item.eventTitle;

              if (isDetailedEvent) {
                // FEATURED EVENT CARD WITH FLYER DETAILS
                return (
                  <div
                    key={item.id}
                    id={`tour-${item.id}`}
                    className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1b1b28] via-[#14141e] to-[#0f0f15] border-2 border-[#ff2a5f]/40 shadow-2xl relative overflow-hidden"
                  >
                    {/* Decorative backdrop glow */}
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff2a5f]/10 rounded-full blur-3xl pointer-events-none" />

                    {/* Presenter Headline */}
                    {item.presentedBy && (
                      <div className="mb-4 pb-3 border-b border-white/10 flex items-center gap-2 text-xs text-[#a0a0b0]">
                        <Sparkles className="w-3.5 h-3.5 text-[#ff2a5f] shrink-0" />
                        <span className="italic uppercase tracking-wider font-semibold">
                          {item.presentedBy}
                        </span>
                      </div>
                    )}

                    <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8">
                      {/* Event Poster / Flyer Preview */}
                      {item.posterImage && (
                        <div className="w-full lg:w-72 shrink-0 flex flex-col items-center">
                          <div className="relative group rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-2xl bg-black">
                            <img
                              src={item.posterImage}
                              alt={item.eventTitle || 'Event Poster'}
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                const target = e.currentTarget;
                                if (item.posterFallbackUrl && target.src !== item.posterFallbackUrl) {
                                  target.src = item.posterFallbackUrl;
                                }
                              }}
                              className="w-full max-h-96 lg:max-h-80 object-contain sm:object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <button
                              onClick={() => setPosterLightboxUrl(item.posterImage || null)}
                              className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-white font-bold text-xs"
                              title="Click to zoom event poster"
                            >
                              <Eye className="w-6 h-6 text-[#ff2a5f]" />
                              <span>View Full Event Flyer</span>
                            </button>
                          </div>
                          <button
                            onClick={() => setPosterLightboxUrl(item.posterImage || null)}
                            className="mt-2.5 text-xs text-[#ff2a5f] hover:underline flex items-center gap-1 font-semibold"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Enlarge Event Flyer</span>
                          </button>
                        </div>
                      )}

                      {/* Event Details Content */}
                      <div className="flex-1 w-full space-y-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="bg-[#ff2a5f] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                            Live Concert & Launch
                          </span>
                          {item.occasion && (
                            <span className="bg-amber-400/15 text-amber-300 border border-amber-400/30 text-xs font-bold px-3 py-1 rounded-full">
                              {item.occasion}
                            </span>
                          )}
                          <span className="bg-white/10 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                            Dublin, Ireland
                          </span>
                        </div>

                        <div>
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                            {item.eventTitle || item.venue}
                          </h3>
                          {item.theme && (
                            <p className="text-sm sm:text-base font-semibold text-amber-200 mt-1">
                              Theme: {item.theme}
                            </p>
                          )}
                        </div>

                        {/* Date, Time, Venue Box */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-4 rounded-2xl bg-[#0f0f15]/80 border border-white/10">
                          {/* Date & Time */}
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
                              <Calendar className="w-4 h-4 text-[#ff2a5f]" />
                              <span>Saturday, 24th October 2026</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#a0a0b0]">
                              <Clock className="w-4 h-4 text-[#ff2a5f]" />
                              <span>Doors: <strong>{item.doorsOpen}</strong> • Starts: <strong>{item.programStarts || '5:00 PM'}</strong></span>
                            </div>
                          </div>

                          {/* Venue & Location */}
                          <div className="space-y-1.5">
                            <div className="flex items-start gap-2 text-white font-bold text-sm sm:text-base">
                              <MapPin className="w-4 h-4 text-[#ff2a5f] shrink-0 mt-0.5" />
                              <div>
                                <span>{item.venue}</span>
                                <p className="text-xs font-normal text-[#a0a0b0] mt-0.5">
                                  {item.address}
                                </p>
                                {item.eirCode && (
                                  <p className="text-xs text-amber-300 font-mono">
                                    EIR Code: {item.eirCode}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Special Guest Notice */}
                        <div className="p-3 rounded-xl bg-[#ff2a5f]/10 border border-[#ff2a5f]/30 flex items-center gap-2.5">
                          <UserCheck className="w-5 h-5 text-[#ff2a5f] shrink-0" />
                          <span className="text-xs sm:text-sm text-white">
                            Featuring <strong>Louie Fortune</strong> as Special Guest Minister alongside anointed music ministers.
                          </span>
                        </div>

                        {/* Featured Ministers Lineup */}
                        {item.featuredMinisters && item.featuredMinisters.length > 0 && (
                          <div>
                            <span className="text-xs uppercase font-extrabold tracking-wider text-[#a0a0b0] block mb-2">
                              Guest Ministers & Gospel Artists:
                            </span>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {item.featuredMinisters.map((minister, mIdx) => (
                                <span
                                  key={mIdx}
                                  className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${
                                    minister.toLowerCase().includes('louie') || minister.toLowerCase().includes('louis')
                                      ? 'bg-[#ff2a5f] text-white border-[#ff2a5f] font-bold shadow-md'
                                      : 'bg-white/5 text-gray-200 border-white/10'
                                  }`}
                                >
                                  {minister}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Contacts & Action Buttons */}
                        <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                          <div className="flex flex-wrap items-center gap-3 text-xs text-[#a0a0b0]">
                            {item.moreInfoPhone && (
                              <a
                                href={`tel:${item.moreInfoPhone}`}
                                className="flex items-center gap-1.5 text-white hover:text-[#ff2a5f] font-bold"
                              >
                                <Phone className="w-3.5 h-3.5 text-[#ff2a5f]" />
                                <span>Info: {item.moreInfoPhone}</span>
                              </a>
                            )}
                            {item.socialHandles && (
                              <span className="text-xs text-amber-300">
                                Socials: {item.socialHandles}
                              </span>
                            )}
                          </div>

                          <div className="flex flex-wrap items-center gap-2.5">
                            {/* Reminder button */}
                            <button
                              onClick={(e) => toggleReminder(item.id, e)}
                              className={`p-2.5 rounded-full border text-xs transition-colors ${
                                remindedTours[item.id]
                                  ? 'border-[#ff2a5f] text-[#ff2a5f] bg-[#ff2a5f]/15'
                                  : 'border-white/20 text-[#a0a0b0] hover:text-white hover:border-white/40'
                              }`}
                              title={remindedTours[item.id] ? "Reminder active" : "Remind me before show"}
                            >
                              {remindedTours[item.id] ? (
                                <Check className="w-4 h-4 text-[#ff2a5f]" />
                              ) : (
                                <Bell className="w-4 h-4" />
                              )}
                            </button>

                            {/* Google Maps directions */}
                            <a
                              href="https://www.google.com/maps/search/?api=1&query=St.+Mark%27s+GAA+Club+McGee+Park+Cookstown+Est+Rd+Springfield+Dublin+24+D24+VN59"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black font-bold text-xs transition-colors"
                            >
                              <MapPin className="w-3.5 h-3.5" />
                              <span>Directions (Maps)</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>

                            {/* Ticket Reservation */}
                            <button
                              onClick={() => setSelectedTour(item)}
                              className="inline-flex items-center gap-1.5 bg-[#ff2a5f] hover:bg-[#e02350] text-white px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#ff2a5f]/30 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                            >
                              <Ticket className="w-4 h-4" />
                              <span>Reserve Tickets / RSVP</span>
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                );
              }

              // Standard tour list row
              return (
                <div
                  key={item.id}
                  className="tour-item bg-[#1a1a24] hover:bg-[#20202e] p-4 sm:px-6 sm:py-4 rounded-xl border border-white/5 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-[#0f0f12] border border-[#ff2a5f]/30 shrink-0">
                      <span className="text-[11px] font-bold text-[#a0a0b0] uppercase tracking-wider">
                        {item.month}
                      </span>
                      <span className="text-xl font-black text-[#ff2a5f] leading-none">
                        {item.day}
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="tour-date font-black text-base sm:text-lg text-white">
                          {item.venue}
                        </span>
                        {item.ticketStatus === 'few_left' && (
                          <span className="text-[10px] bg-amber-500/20 text-amber-400 font-bold px-2 py-0.5 rounded-full uppercase">
                            Limited Seats
                          </span>
                        )}
                      </div>
                      <div className="tour-venue text-xs sm:text-sm text-[#a0a0b0] flex items-center gap-1.5 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#ff2a5f] shrink-0" />
                        <span>{item.city}, {item.country}</span>
                        <span className="text-white/20">•</span>
                        <span className="text-white/60">Doors {item.doorsOpen}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <button
                      onClick={(e) => toggleReminder(item.id, e)}
                      className={`p-2 rounded-full border text-xs transition-colors ${
                        remindedTours[item.id]
                          ? 'border-[#ff2a5f] text-[#ff2a5f] bg-[#ff2a5f]/10'
                          : 'border-white/10 text-[#a0a0b0] hover:text-white hover:border-white/30'
                      }`}
                      title={remindedTours[item.id] ? "Reminder active" : "Remind me before show"}
                    >
                      {remindedTours[item.id] ? (
                        <Check className="w-4 h-4 text-[#ff2a5f]" />
                      ) : (
                        <Bell className="w-4 h-4" />
                      )}
                    </button>

                    <button
                      onClick={() => setSelectedTour(item)}
                      className="btn btn-outline border-2 border-[#ff2a5f] hover:bg-[#ff2a5f] text-[#ff2a5f] hover:text-white px-5 py-2 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-sm flex items-center gap-1.5"
                    >
                      <Ticket className="w-3.5 h-3.5" />
                      <span>Tickets</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Booking note banner */}
        <div className="mt-8 p-4 rounded-xl bg-[#0f0f12] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-[#a0a0b0]">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <AlertCircle className="w-4 h-4 text-[#ff2a5f] shrink-0 hidden sm:inline" />
            <span>Interested in booking Louie Fortune for your city, church conference, or festival?</span>
          </div>
          <a
            href="#booking"
            className="text-[#ff2a5f] hover:underline font-bold whitespace-nowrap"
          >
            Submit Booking Inquiry →
          </a>
        </div>

      </div>

      {/* Ticket Reservation Modal */}
      {selectedTour && (
        <TicketModal
          tour={selectedTour}
          onClose={() => setSelectedTour(null)}
        />
      )}

      {/* Flyer Poster Lightbox Modal */}
      {posterLightboxUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setPosterLightboxUrl(null)}
        >
          <div
            className="relative max-w-2xl max-h-[90vh] bg-[#14141e] rounded-2xl overflow-hidden border border-[#ff2a5f]/40 p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPosterLightboxUrl(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/80 hover:bg-[#ff2a5f] text-white flex items-center justify-center transition-colors"
              aria-label="Close poster view"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={posterLightboxUrl}
              alt="Full Event Poster"
              referrerPolicy="no-referrer"
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <div className="p-3 text-center text-xs text-[#a0a0b0]">
              Mysteries of True Worship Experience • 24 Oct 2026 • St. Mark's GAA Club, Dublin
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
