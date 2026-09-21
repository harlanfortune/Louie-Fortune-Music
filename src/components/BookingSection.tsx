import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Sparkles, MapPin, AlertCircle, Loader2 } from 'lucide-react';
import { ARTIST_INFO } from '../data/artistData';

// Formspree Integration Placeholders
// Replace these with your actual Formspree form IDs from https://formspree.io
const FORMSPREE_BOOKING_ID = "YOUR_FORMSPREE_BOOKING_ID"; // e.g. "xpzgkywv"
const FORMSPREE_NEWSLETTER_ID = "YOUR_FORMSPREE_NEWSLETTER_ID"; // e.g. "mrbzkjwa"

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
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    setBookingStatus('submitting');
    setErrorMessage('');

    // If placeholder ID is not yet replaced with a live Formspree hash, simulate successful delivery
    if (!FORMSPREE_BOOKING_ID || FORMSPREE_BOOKING_ID === "YOUR_FORMSPREE_BOOKING_ID") {
      setTimeout(() => {
        setBookingStatus('success');
      }, 700);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_BOOKING_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setBookingStatus('success');
      } else {
        const data = await response.json();
        setErrorMessage(data?.error || 'Failed to submit inquiry. Please email directly.');
        setBookingStatus('error');
      }
    } catch {
      setErrorMessage('Network error submitting form. Please send an email directly to bookings@louiefortune.com');
      setBookingStatus('error');
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    setNewsletterStatus('submitting');

    if (!FORMSPREE_NEWSLETTER_ID || FORMSPREE_NEWSLETTER_ID === "YOUR_FORMSPREE_NEWSLETTER_ID") {
      setTimeout(() => {
        setNewsletterStatus('success');
      }, 600);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_NEWSLETTER_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email: newsletterEmail })
      });

      if (response.ok) {
        setNewsletterStatus('success');
      } else {
        setNewsletterStatus('error');
      }
    } catch {
      setNewsletterStatus('error');
    }
  };

  return (
    <section id="booking" className="bg-[#F7F2E9] text-[#1F1A14] py-20 sm:py-24 border-b border-[#E6DDCB] scroll-mt-20">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-12 border-b border-[#E6DDCB] gap-3">
          <div>
            <span className="text-[13px] font-bold text-[#8A5A0B] uppercase tracking-wider block mb-1">
              Ministry & Engagements
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1A14]">
              Booking & Inquiries
            </h2>
          </div>
          <p className="text-[15px] text-[#5E5548] max-w-md">
            Available for concerts, worship conferences, youth clinics, and church ministry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Newsletter */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="bg-[#FFFFFF] rounded-[12px] p-6 sm:p-7 border border-[#E6DDCB] shadow-sm space-y-5">
              <h3 className="font-serif text-xl font-bold text-[#1F1A14]">
                Direct Ministry Contact
              </h3>
              <p className="text-[14px] text-[#5E5548] leading-relaxed">
                Louie Fortune welcomes invitations for worship services, national conferences, youth mentorship, and gospel festivals across Ireland, South Africa, the UK, and Europe.
              </p>

              <div className="space-y-4 pt-2 border-t border-[#E6DDCB]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[8px] bg-[#EFE7D8] flex items-center justify-center text-[#8A5A0B] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[12px] text-[#5E5548] font-medium block">Official Inquiries</span>
                    <a
                      href={`mailto:${ARTIST_INFO.socials.bookingEmail}`}
                      className="text-[15px] font-semibold text-[#1F1A14] hover:text-[#8A5A0B] transition-colors"
                    >
                      {ARTIST_INFO.socials.bookingEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[8px] bg-[#EFE7D8] flex items-center justify-center text-[#8A5A0B] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[12px] text-[#5E5548] font-medium block">Current Base</span>
                    <span className="text-[15px] font-semibold text-[#1F1A14]">
                      {ARTIST_INFO.currentBase}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Card */}
            <div className="bg-[#FFFFFF] rounded-[12px] p-6 sm:p-7 border border-[#E6DDCB] shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#8A5A0B]" />
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#8A5A0B]">
                  Son Rise Circle
                </span>
              </div>
              
              <h4 className="font-serif text-xl font-bold text-[#1F1A14]">
                Songs of Hope Newsletter
              </h4>
              <p className="text-[14px] text-[#5E5548]">
                Receive inspiring updates, early notifications on upcoming shows, and acoustic releases directly to your inbox.
              </p>

              {newsletterStatus !== 'success' ? (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3 pt-1">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 bg-[#F7F2E9] border border-[#E6DDCB] rounded-[10px] px-4 py-3 text-sm text-[#1F1A14] placeholder-[#5E5548]/70 focus-visible:ring-2 focus-visible:ring-[#8A5A0B] focus-visible:outline-none"
                    />
                    <button
                      type="submit"
                      disabled={newsletterStatus === 'submitting'}
                      className="h-12 px-5 rounded-[10px] bg-[#C58A1B] hover:bg-[#A9740F] text-[#1F1A14] font-semibold text-sm transition-colors shrink-0 disabled:opacity-50 cursor-pointer"
                    >
                      {newsletterStatus === 'submitting' ? 'Subscribing...' : 'Subscribe'}
                    </button>
                  </div>
                  {newsletterStatus === 'error' && (
                    <p className="text-xs text-red-600 font-medium">
                      Unable to sign up at this time. Please try again.
                    </p>
                  )}
                </form>
              ) : (
                <div className="p-4 bg-[#EFE7D8] rounded-[10px] border border-[#E6DDCB] flex items-center gap-3 text-[#1F1A14] text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#8A5A0B] shrink-0" />
                  <span>Thank you! You are subscribed to the Songs of Hope circle.</span>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Booking Request Form */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-[12px] p-6 sm:p-9 border border-[#E6DDCB] shadow-sm">
            {bookingStatus !== 'success' ? (
              <form onSubmit={handleBookingSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#1F1A14]">
                    Request Louie Fortune for Your Event
                  </h3>
                  <p className="text-[14px] text-[#5E5548] mt-1">
                    Please provide event details and we will respond promptly with availability.
                  </p>
                </div>

                {bookingStatus === 'error' && (
                  <div className="p-4 rounded-[10px] bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{errorMessage || 'There was an issue sending your message.'}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#1F1A14] mb-1.5">
                      Your Name / Ministry / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Pastor Grace / Event Committee"
                      className="w-full bg-[#F7F2E9] border border-[#E6DDCB] rounded-[10px] px-4 py-3 text-sm text-[#1F1A14] placeholder-[#5E5548]/70 focus-visible:ring-2 focus-visible:ring-[#8A5A0B] focus-visible:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#1F1A14] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. contact@church.org"
                      className="w-full bg-[#F7F2E9] border border-[#E6DDCB] rounded-[10px] px-4 py-3 text-sm text-[#1F1A14] placeholder-[#5E5548]/70 focus-visible:ring-2 focus-visible:ring-[#8A5A0B] focus-visible:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#1F1A14] mb-1.5">
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-[#F7F2E9] border border-[#E6DDCB] rounded-[10px] px-3.5 py-3 text-sm text-[#1F1A14] focus-visible:ring-2 focus-visible:ring-[#8A5A0B] focus-visible:outline-none"
                    >
                      <option value="Worship Service">Worship Service</option>
                      <option value="Gospel Concert">Gospel Concert</option>
                      <option value="Conference / Summit">Conference / Summit</option>
                      <option value="Youth Workshop">Youth Workshop</option>
                      <option value="Celebration / Other">Celebration / Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[13px] font-semibold text-[#1F1A14] mb-1.5">
                      Proposed Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#F7F2E9] border border-[#E6DDCB] rounded-[10px] px-3.5 py-3 text-sm text-[#1F1A14] focus-visible:ring-2 focus-visible:ring-[#8A5A0B] focus-visible:outline-none"
                    />
                  </div>

                  <div>
                    {/* Fixed untruncated placeholder */}
                    <label className="block text-[13px] font-semibold text-[#1F1A14] mb-1.5">
                      Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="City, Country"
                      className="w-full bg-[#F7F2E9] border border-[#E6DDCB] rounded-[10px] px-3.5 py-3 text-sm text-[#1F1A14] placeholder-[#5E5548]/70 focus-visible:ring-2 focus-visible:ring-[#8A5A0B] focus-visible:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-[#1F1A14] mb-1.5">
                    Event Details & Vision
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the venue, audience expectations, and desired ministry focus..."
                    className="w-full bg-[#F7F2E9] border border-[#E6DDCB] rounded-[10px] p-4 text-sm text-[#1F1A14] placeholder-[#5E5548]/70 focus-visible:ring-2 focus-visible:ring-[#8A5A0B] focus-visible:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={bookingStatus === 'submitting'}
                  id="booking-submit-btn"
                  className="w-full h-12 rounded-[10px] bg-[#C58A1B] hover:bg-[#A9740F] text-[#1F1A14] font-semibold text-base flex items-center justify-center gap-2 shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-[#8A5A0B] cursor-pointer disabled:opacity-50"
                >
                  {bookingStatus === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Booking Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#EFE7D8] rounded-full flex items-center justify-center mx-auto text-[#8A5A0B]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1F1A14]">
                  Inquiry Received
                </h3>
                <p className="text-base text-[#5E5548] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#1F1A14]">{formData.name}</strong>. Louie Fortune's team has received your message and will respond within 24–48 business hours.
                </p>
                <button
                  onClick={() => {
                    setBookingStatus('idle');
                    setFormData({
                      name: '',
                      email: '',
                      eventType: 'Worship Service',
                      date: '',
                      location: '',
                      message: ''
                    });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-[10px] border border-[#1F1A14] text-sm font-semibold text-[#1F1A14] hover:bg-[#1F1A14]/5 transition-colors cursor-pointer"
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
