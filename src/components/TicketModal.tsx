import React, { useState } from 'react';
import { X, Calendar, MapPin, Clock, Ticket, CheckCircle, Download, QrCode } from 'lucide-react';
import { TourDate } from '../types';

interface TicketModalProps {
  tour: TourDate | null;
  onClose: () => void;
}

export const TicketModal: React.FC<TicketModalProps> = ({ tour, onClose }) => {
  const [quantity, setQuantity] = useState(2);
  const [tier, setTier] = useState<'standard' | 'vip'>('standard');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!tour) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    const generatedId = `LF-${tour.countryCode}-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedId);
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#1a1a24] border border-[#ff2a5f]/40 rounded-2xl p-6 sm:p-8 shadow-2xl text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#a0a0b0] hover:text-white rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 text-xs font-bold text-[#ff2a5f] uppercase tracking-wider mb-2">
              <Ticket className="w-4 h-4" />
              <span>Official Tour Passes</span>
            </div>
            
            <h3 className="text-2xl font-black uppercase text-white">
              {tour.venue}
            </h3>

            <div className="mt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#a0a0b0]">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#ff2a5f]" />
                {tour.date}, {tour.year}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#ff2a5f]" />
                {tour.city}, {tour.country}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#ff2a5f]" />
                Doors: {tour.doorsOpen}
              </span>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Ticket Tier */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#a0a0b0] tracking-wider mb-2">
                  Select Pass Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTier('standard')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      tier === 'standard'
                        ? 'border-[#ff2a5f] bg-[#ff2a5f]/10 text-white'
                        : 'border-white/10 bg-[#0f0f12] text-[#a0a0b0]'
                    }`}
                  >
                    <div className="font-bold text-sm">General Admission</div>
                    <div className="text-xs text-[#ff2a5f] mt-1 font-semibold">{tour.price}</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTier('vip')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      tier === 'vip'
                        ? 'border-[#ff2a5f] bg-[#ff2a5f]/10 text-white'
                        : 'border-white/10 bg-[#0f0f12] text-[#a0a0b0]'
                    }`}
                  >
                    <div className="font-bold text-sm">VIP + Meet & Greet</div>
                    <div className="text-xs text-[#ff2a5f] mt-1 font-semibold">
                      {tour.countryCode === 'ZA' ? 'R 550' : '€45.00'}
                    </div>
                  </button>
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#a0a0b0] tracking-wider mb-1.5">
                  Number of Passes
                </label>
                <div className="flex items-center gap-3">
                  {[1, 2, 3, 4, 5].map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => setQuantity(q)}
                      className={`w-10 h-10 rounded-lg font-bold text-sm border transition-all ${
                        quantity === q
                          ? 'bg-[#ff2a5f] text-white border-[#ff2a5f]'
                          : 'bg-[#0f0f12] text-[#a0a0b0] border-white/10 hover:border-white/30'
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Attendee Name */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#a0a0b0] tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Sarah O'Connor"
                  className="w-full bg-[#0f0f12] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ff2a5f]"
                />
              </div>

              {/* Attendee Email */}
              <div>
                <label className="block text-xs font-bold uppercase text-[#a0a0b0] tracking-wider mb-1.5">
                  Email Address for Confirmation
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sarah@example.com"
                  className="w-full bg-[#0f0f12] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ff2a5f]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-4 bg-[#ff2a5f] hover:bg-[#e02350] text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-[#ff2a5f]/30 flex items-center justify-center gap-2 uppercase tracking-wide text-sm"
              >
                <span>Confirm Reservation ({quantity} Tickets)</span>
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-4 space-y-5 animate-fade-in">
            <div className="w-16 h-16 bg-[#ff2a5f]/20 rounded-full flex items-center justify-center mx-auto text-[#ff2a5f]">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold text-[#ff2a5f] uppercase tracking-widest">
                Reservation Confirmed!
              </span>
              <h3 className="text-2xl font-black text-white mt-1 uppercase">
                See You in {tour.city}!
              </h3>
              <p className="text-xs sm:text-sm text-[#a0a0b0] mt-2">
                Your confirmation and digital admission pass have been recorded for <strong className="text-white">{name}</strong> ({email}).
              </p>
            </div>

            {/* Ticket Card Stub */}
            <div className="bg-[#0f0f12] rounded-xl p-4 border border-[#ff2a5f]/30 text-left relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-xs font-bold text-[#ff2a5f] tracking-wider">
                  LOUIE FORTUNE LIVE TOUR
                </span>
                <span className="text-[10px] font-mono text-[#a0a0b0]">
                  PASS #{ticketId}
                </span>
              </div>
              <div className="py-2.5 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-base">{tour.venue}</h4>
                  <p className="text-xs text-[#a0a0b0]">{tour.city}, {tour.country} • {tour.date}</p>
                  <p className="text-xs text-[#ff2a5f] font-semibold mt-1">
                    {quantity}x {tier === 'vip' ? 'VIP Meet & Greet' : 'General Admission'}
                  </p>
                </div>
                <QrCode className="w-14 h-14 text-white p-1 bg-white/5 rounded-lg shrink-0" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => alert(`Ticket #${ticketId} receipt saved to your downloads!`)}
                className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Save E-Ticket</span>
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-[#ff2a5f] hover:bg-[#e02350] text-white font-bold py-2.5 rounded-xl text-xs sm:text-sm transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
