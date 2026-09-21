import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ExternalLink, Ticket, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { TourDate } from '../types';
import { getAssetUrl } from '../utils/assets';

interface TourSectionProps {
  dates: TourDate[];
  onSelectTour: (tour: TourDate) => void;
}

export const TourSection: React.FC<TourSectionProps> = ({ dates, onSelectTour }) => {
  const [showAllMinisters, setShowAllMinisters] = useState(false);

  // If there's at least one event, display the featured showcase card
  const primaryShow = dates[0];

  return (
    <section id="shows" className="bg-[#EFE7D8] text-[#1F1A14] py-16 sm:py-20 border-b border-[#E6DDCB] scroll-mt-20">
      {/* Anchor alias for backwards compatibility */}
      <span id="tour" className="sr-only" />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-10 border-b border-[#E6DDCB] gap-3">
          <div>
            <span className="text-[13px] font-bold text-[#8A5A0B] uppercase tracking-wider block mb-1">
              Live Ministry & Appearances
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1A14]">
              Upcoming Shows
            </h2>
          </div>
          <p className="text-[15px] text-[#5E5548] max-w-md">
            Join Louie Fortune live for an uplifting encounter of urban gospel, heartfelt worship, and fellowship.
          </p>
        </div>

        {/* Featured Upcoming Show Card */}
        {primaryShow && (
          <div className="bg-[#FFFFFF] border border-[#E6DDCB] rounded-[14px] shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Event Flyer / Media Column */}
              <div className="lg:col-span-5 bg-[#F7F2E9] border-b lg:border-b-0 lg:border-r border-[#E6DDCB] flex items-center justify-center p-6 sm:p-8">
                <div className="relative group w-full max-w-[340px] rounded-[10px] overflow-hidden shadow-md border border-[#E6DDCB] bg-[#EFE7D8]">
                  <img
                    src={getAssetUrl(primaryShow.posterImage || '/images/event-flyer.jpg')}
                    alt={primaryShow.eventTitle || "Upcoming Show Flyer"}
                    className="w-full h-auto object-cover max-h-[460px]"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (primaryShow.posterFallbackUrl && target.src !== getAssetUrl(primaryShow.posterFallbackUrl)) {
                        target.src = getAssetUrl(primaryShow.posterFallbackUrl);
                      }
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-[#1C1712]/80 text-[#F4EFE6] text-xs font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm">
                    Official Event Poster
                  </div>
                </div>
              </div>

              {/* Event Details Column */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between text-left space-y-6">
                
                <div className="space-y-4">
                  {/* Category & Status */}
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-[#C58A1B] text-[#1F1A14] text-[12px] font-bold uppercase tracking-wider">
                      Featured Event
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#EFE7D8] text-[#8A5A0B] text-[12px] font-semibold">
                      {primaryShow.occasion || "Album Launch & Worship"}
                    </span>
                  </div>

                  {/* Title & Theme */}
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F1A14] leading-snug">
                      {primaryShow.eventTitle}
                    </h3>
                    {primaryShow.theme && (
                      <p className="text-[#8A5A0B] text-base font-semibold mt-1">
                        Theme: {primaryShow.theme}
                      </p>
                    )}
                  </div>

                  {/* Event Metadata Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {/* Date */}
                    <div className="flex items-start gap-3 p-3.5 rounded-[10px] bg-[#F7F2E9] border border-[#E6DDCB]">
                      <Calendar className="w-5 h-5 text-[#8A5A0B] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[12px] uppercase tracking-wider text-[#5E5548] font-bold block">Date</span>
                        <span className="text-[15px] font-semibold text-[#1F1A14]">{primaryShow.date}</span>
                      </div>
                    </div>

                    {/* Time */}
                    <div className="flex items-start gap-3 p-3.5 rounded-[10px] bg-[#F7F2E9] border border-[#E6DDCB]">
                      <Clock className="w-5 h-5 text-[#8A5A0B] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[12px] uppercase tracking-wider text-[#5E5548] font-bold block">Times</span>
                        <span className="text-[15px] font-semibold text-[#1F1A14]">
                          Doors: {primaryShow.doorsOpen} · Start: {primaryShow.startTime}
                        </span>
                      </div>
                    </div>

                    {/* Venue */}
                    <div className="flex items-start gap-3 p-3.5 rounded-[10px] bg-[#F7F2E9] border border-[#E6DDCB]">
                      <MapPin className="w-5 h-5 text-[#8A5A0B] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[12px] uppercase tracking-wider text-[#5E5548] font-bold block">Venue</span>
                        <span className="text-[15px] font-semibold text-[#1F1A14] block">{primaryShow.venue}</span>
                        <span className="text-[13px] text-[#5E5548] block mt-0.5">{primaryShow.address}</span>
                      </div>
                    </div>

                    {/* Eircode (Correctly spelled) */}
                    <div className="flex items-start gap-3 p-3.5 rounded-[10px] bg-[#F7F2E9] border border-[#E6DDCB]">
                      <Sparkles className="w-5 h-5 text-[#8A5A0B] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[12px] uppercase tracking-wider text-[#5E5548] font-bold block">Eircode</span>
                        <span className="text-[15px] font-semibold text-[#1F1A14] block">{primaryShow.eirCode}</span>
                        <span className="text-[13px] text-[#5E5548] block mt-0.5">Dublin 24, Ireland</span>
                      </div>
                    </div>
                  </div>

                  {/* Featured Guest Ministers: Louie + 3-4 with "+ more" expander */}
                  {primaryShow.featuredMinisters && (
                    <div className="pt-2">
                      <span className="text-[13px] font-bold text-[#1F1A14] block mb-2">
                        Guest Ministers & Artistes:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {(showAllMinisters
                          ? primaryShow.featuredMinisters
                          : primaryShow.featuredMinisters.slice(0, 4)
                        ).map((minister, idx) => (
                          <span
                            key={idx}
                            className={`text-[13px] px-3 py-1 rounded-full border ${
                              idx === 0
                                ? 'bg-[#C58A1B]/15 border-[#C58A1B] text-[#8A5A0B] font-bold'
                                : 'bg-[#F7F2E9] border-[#E6DDCB] text-[#5E5548] font-medium'
                            }`}
                          >
                            {minister}
                          </span>
                        ))}

                        {primaryShow.featuredMinisters.length > 4 && (
                          <button
                            onClick={() => setShowAllMinisters(!showAllMinisters)}
                            className="text-[13px] px-3 py-1 rounded-full bg-[#EFE7D8] hover:bg-[#E6DDCB] text-[#8A5A0B] font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer"
                          >
                            <span>
                              {showAllMinisters
                                ? 'Show less'
                                : `+${primaryShow.featuredMinisters.length - 4} more`}
                            </span>
                            {showAllMinisters ? (
                              <ChevronUp className="w-3.5 h-3.5" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Admission info */}
                  <div className="text-[13px] text-[#5E5548] pt-1">
                    <span>Admission: </span>
                    <strong className="text-[#1F1A14]">{primaryShow.price}</strong>
                  </div>
                </div>

                {/* Actions: Directions & RSVP Buttons */}
                <div className="pt-4 border-t border-[#E6DDCB] flex flex-wrap items-center gap-3">
                  {/* RSVP / Reserve Tickets */}
                  <button
                    onClick={() => onSelectTour(primaryShow)}
                    id="rsvp-show-btn"
                    className="h-12 px-6 rounded-[10px] bg-[#C58A1B] hover:bg-[#A9740F] text-[#1F1A14] font-semibold text-sm inline-flex items-center gap-2 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-[#8A5A0B] cursor-pointer"
                  >
                    <Ticket className="w-4 h-4" />
                    <span>Reserve Seat / RSVP</span>
                  </button>

                  {/* Google Maps Directions */}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${primaryShow.venue} ${primaryShow.address} ${primaryShow.eirCode}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 px-6 rounded-[10px] border border-[#1F1A14] hover:bg-[#1F1A14]/5 text-[#1F1A14] font-semibold text-sm inline-flex items-center gap-2 transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-[#8A5A0B]" />
                    <span>Get Directions (Maps)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#5E5548]" />
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
