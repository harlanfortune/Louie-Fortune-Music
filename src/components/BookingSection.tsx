import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Sparkles, MapPin, Phone, Calendar } from 'lucide-react';
import { ARTIST_INFO } from '../data/artistData';

export const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: 'Worship Service',
    date: '',
    location: '',
    message: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [bookingSent, setBookingSent] = useState(false);
  const [newsletterSent, setNewsletterSent] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setBookingSent(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSent(true);
  };

  return (
    <section id="booking" className="py-16 sm:py-20 border-b border-[#1a1a24] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-[#1a1a24] pb-3 mb-10 gap-2">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#ff2a5f] uppercase tracking-wider mb-1">
              <Mail className="w-4 h-4" />
              <span>Ministry & Events</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide uppercase">
              Booking & Contact
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#a0a0b0]">
            Inquiries for concerts, conferences & worship ministry
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Newsletter */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1a1a24] rounded-2xl p-6 border border-white/5 space-y-4">
              <h3 className="text-xl font-bold text-white uppercase">
                Direct Management
              </h3>
              <p className="text-xs sm:text-sm text-[#a0a0b0] leading-relaxed">
                Louie Fortune is available for international tours, guest ministry, youth mentorship clinics, and festival appearances across Ireland, South Africa, the UK, and beyond.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-8 h-8 rounded-lg bg-[#0f0f12] flex items-center justify-center text-[#ff2a5f]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#a0a0b0] block">Official Inquiries</span>
                    <a href={`mailto:${ARTIST_INFO.socials.bookingEmail}`} className="font-bold hover:text-[#ff2a5f] transition-colors">
                      {ARTIST_INFO.socials.bookingEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-white">
                  <div className="w-8 h-8 rounded-lg bg-[#0f0f12] flex items-center justify-center text-[#ff2a5f]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#a0a0b0] block">Headquarters</span>
                    <span className="font-semibold">{ARTIST_INFO.currentBase}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Card */}
            <div className="bg-gradient-to-br from-[#1a1a24] to-[#12121a] rounded-2xl p-6 border border-[#ff2a5f]/25 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff2a5f]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-2 text-xs font-bold text-[#ff2a5f] uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Son Rise Circle</span>
              </div>
              <h4 className="text-lg font-bold text-white">
                Join the Songs of Hope Newsletter
              </h4>
              <p className="text-xs text-[#a0a0b0] mt-1 mb-4">
                Be the first to receive new singles, acoustic releases, and exclusive ticket presales.
              </p>

              {!newsletterSent ? (
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 bg-[#0f0f12] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ff2a5f]"
                    />
                    <button
                      type="submit"
                      className="bg-[#ff2a5f] hover:bg-[#e02350] text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-3 bg-[#ff2a5f]/15 rounded-xl border border-[#ff2a5f]/30 flex items-center gap-2.5 text-[#ff2a5f] text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you! You are subscribed to the Son Rise Circle.</span>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Booking Request Form */}
          <div className="lg:col-span-7 bg-[#1a1a24] rounded-2xl p-6 sm:p-8 border border-white/5">
            {!bookingSent ? (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white uppercase mb-2">
                  Request Louie Fortune for Your Event
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#a0a0b0] tracking-wider mb-1">
                      Your Name / Organization
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Pastor David / Festival Committee"
                      className="w-full bg-[#0f0f12] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff2a5f]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-[#a0a0b0] tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contact@church.org"
                      className="w-full bg-[#0f0f12] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff2a5f]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#a0a0b0] tracking-wider mb-1">
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-[#0f0f12] border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff2a5f]"
                    >
                      <option value="Worship Service">Worship Service</option>
                      <option value="Gospel Concert">Gospel Concert</option>
                      <option value="Conference / Summit">Conference / Summit</option>
                      <option value="Youth Workshop">Youth Workshop</option>
                      <option value="Wedding / Celebration">Wedding / Celebration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-[#a0a0b0] tracking-wider mb-1">
                      Proposed Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#0f0f12] border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff2a5f]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-[#a0a0b0] tracking-wider mb-1">
                      City & Country
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Dublin, IE or Cape Town, ZA"
                      className="w-full bg-[#0f0f12] border border-white/15 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff2a5f]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#a0a0b0] tracking-wider mb-1">
                    Event Details & Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the venue, audience size, and the vision for the event..."
                    className="w-full bg-[#0f0f12] border border-white/15 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-[#ff2a5f] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ff2a5f] hover:bg-[#e02350] text-white font-bold py-3 rounded-xl transition-all shadow-md shadow-[#ff2a5f]/25 flex items-center justify-center gap-2 uppercase tracking-wide text-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Booking Inquiry</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#ff2a5f]/20 rounded-full flex items-center justify-center mx-auto text-[#ff2a5f]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase">
                  Inquiry Received!
                </h3>
                <p className="text-sm text-[#a0a0b0] max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Louie Fortune's management team has received your message and will be in touch within 24-48 business hours.
                </p>
                <button
                  onClick={() => setBookingSent(false)}
                  className="mt-4 px-6 py-2 rounded-full border border-white/20 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
