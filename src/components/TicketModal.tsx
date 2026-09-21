import React, { useState } from 'react';
import { X, Calendar, MapPin, Clock, Ticket, CheckCircle2, Sparkles } from 'lucide-react';
import { TourDate } from '../types';

interface TicketModalProps {
  tour: TourDate | null;
  onClose: () => void;
}

export const TicketModal: React.FC<TicketModalProps> = ({ tour, onClose }) => {
  const [attendees, setAttendees] = useState(2);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!tour) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    const generatedId = `LF-IE-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedId);
    setIsSuccess(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1712]/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg bg-[#FFFFFF] border border-[#E6DDCB] rounded-[14px] p-6 sm:p-8 shadow-2xl text-[#1F1A14]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#5E5548] hover:text-[#1F1A14] rounded-full hover:bg-[#EFE7D8] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 text-[12px] font-bold text-[#8A5A0B] uppercase tracking-wider mb-2">
              <Ticket className="w-4 h-4" />
              <span>Seat Reservation & RSVP</span>
            </div>
            
            <h3 className="font-serif text-2xl font-bold text-[#1F1A14] leading-tight">
              {tour.eventTitle || tour.venue}
            </h3>

            <div className="mt-3 p-3.5 bg-[#F7F2E9] rounded-[10px] border border-[#E6DDCB] space-y-2 text-[13px] text-[#5E5548]">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#8A5A0B] shrink-0" />
                <span className="font-semibold text-[#1F1A14]">{tour.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#8A5A0B] shrink-0" />
                <span>Doors Open: {tour.doorsOpen} · Program Start: {tour.startTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8A5A0B] shrink-0" />
                <span>{tour.venue} · Eircode: {tour.eirCode}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-[13px] font-semibold text-[#1F1A14] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full bg-[#F7F2E9] border border-[#E6DDCB] rounded-[10px] px-4 py-2.5 text-sm text-[#1F1A14] focus-visible:ring-2 focus-visible:ring-[#8A5A0B] focus-visible:outline-none"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[#1F1A14] mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. name@example.com"
                  className="w-full bg-[#F7F2E9] border border-[#E6DDCB] rounded-[10px] px-4 py-2.5 text-sm text-[#1F1A14] focus-visible:ring-2 focus-visible:ring-[#8A5A0B] focus-visible:outline-none"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-[#1F1A14] mb-1.5">
                  Number of Attendees
                </label>
                <select
                  value={attendees}
                  onChange={(e) => setAttendees(Number(e.target.value))}
                  className="w-full bg-[#F7F2E9] border border-[#E6DDCB] rounded-[10px] px-3.5 py-2.5 text-sm text-[#1F1A14] focus-visible:ring-2 focus-visible:ring-[#8A5A0B] focus-visible:outline-none"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-12 rounded-[10px] bg-[#C58A1B] hover:bg-[#A9740F] text-[#1F1A14] font-semibold text-sm shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-[#8A5A0B] cursor-pointer"
                >
                  Confirm Free Seat Reservation
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-[#EFE7D8] rounded-full flex items-center justify-center mx-auto text-[#8A5A0B]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#1F1A14]">
              Reservation Confirmed!
            </h3>

            <p className="text-[14px] text-[#5E5548] leading-relaxed max-w-sm mx-auto">
              We look forward to welcoming you, <strong className="text-[#1F1A14]">{name}</strong>. A confirmation has been registered for <strong className="text-[#1F1A14]">{attendees} guest(s)</strong>.
            </p>

            <div className="p-4 bg-[#F7F2E9] border border-[#E6DDCB] rounded-[10px] text-center space-y-1">
              <span className="text-[12px] uppercase tracking-wider text-[#5E5548] font-bold block">
                Your Confirmation Pass Code
              </span>
              <span className="font-serif text-xl font-bold text-[#8A5A0B]">
                {ticketId}
              </span>
            </div>

            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-[10px] bg-[#1F1A14] text-white text-sm font-semibold hover:bg-black transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
