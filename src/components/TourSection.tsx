import React, { useState } from 'react';
import { Calendar, MapPin, Ticket, AlertCircle, Bell, Check } from 'lucide-react';
import { TourDate } from '../types';
import { TicketModal } from './TicketModal';

interface TourSectionProps {
  tourDates: TourDate[];
}

export const TourSection: React.FC<TourSectionProps> = ({ tourDates }) => {
  const [selectedTour, setSelectedTour] = useState<TourDate | null>(null);
  const [remindedTours, setRemindedTours] = useState<Record<string, boolean>>({});

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
              <span>Live Praise & Ministry</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide uppercase">
              Upcoming Tour Dates
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
          <ul className="tour-list space-y-3.5" id="tour-list">
            {tourDates.map((item) => (
              <li
                key={item.id}
                className="tour-item bg-[#1a1a24] hover:bg-[#20202e] p-4 sm:px-6 sm:py-4 rounded-xl border border-white/5 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                {/* Date & Venue Info */}
                <div className="flex items-start sm:items-center gap-4">
                  {/* Date Block */}
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

                {/* Actions */}
                <div className="flex items-center gap-3 self-end sm:self-center">
                  {/* Notification Bell */}
                  <button
                    onClick={(e) => toggleReminder(item.id, e)}
                    className={`p-2 rounded-full border text-xs transition-colors ${
                      remindedTours[item.id]
                        ? 'border-[#ff2a5f] text-[#ff2a5f] bg-[#ff2a5f]/10'
                        : 'border-white/10 text-[#a0a0b0] hover:text-white hover:border-white/30'
                    }`}
                    title={remindedTours[item.id] ? "Reminder active" : "Remind me before show"}
                    aria-label="Toggle show reminder"
                  >
                    {remindedTours[item.id] ? (
                      <Check className="w-4 h-4 text-[#ff2a5f]" />
                    ) : (
                      <Bell className="w-4 h-4" />
                    )}
                  </button>

                  {/* Ticket Button */}
                  <button
                    onClick={() => setSelectedTour(item)}
                    className="btn btn-outline border-2 border-[#ff2a5f] hover:bg-[#ff2a5f] text-[#ff2a5f] hover:text-white px-5 py-2 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-sm flex items-center gap-1.5"
                  >
                    <Ticket className="w-3.5 h-3.5" />
                    <span>Tickets</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
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
    </section>
  );
};
