import React from 'react';
import { Globe, Heart, Award, Music2, Quote } from 'lucide-react';
import { ARTIST_INFO } from '../data/artistData';

export const AboutSection: React.FC = () => {
  const milestones = [
    {
      year: "Early Roots",
      title: "Cape Town Youth Choirs",
      description: "Discovered faith and music, founding pioneering gospel collectives New Creation and CHARISMA.",
      icon: Music2,
    },
    {
      year: "2005",
      title: "Journey to Ireland",
      description: "Relocated to the Emerald Isle, bridging vibrant South African gospel vibrancy with European audiences.",
      icon: Globe,
    },
    {
      year: "Global Stage",
      title: "Finland World Championship",
      description: "Represented South Africa on the prestigious world stage, bringing authentic worship across borders.",
      icon: Award,
    },
    {
      year: "Son Rise NPO",
      title: "Empowering Young Talent",
      description: "Founded the Non-Profit Organization South African Son Rise to mentor underserved youth through music.",
      icon: Heart,
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 border-b border-[#1a1a24] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b-2 border-[#1a1a24] pb-3 mb-10">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide uppercase">
              About Louie
            </h2>
            <span className="text-xs px-2.5 py-1 rounded bg-[#ff2a5f]/20 text-[#ff2a5f] font-semibold uppercase tracking-wider">
              Biography
            </span>
          </div>
          <span className="text-xs text-[#a0a0b0] hidden sm:inline">
            From Cape Town to Balbriggan
          </span>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Main Bio Text */}
          <div className="lg:col-span-7 space-y-6 text-[#d0d0dc] text-base sm:text-lg leading-relaxed font-normal">
            <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-[#ff2a5f] first-letter:mr-2 first-letter:float-left">
              {ARTIST_INFO.bioParagraph1}
            </p>

            <p>
              {ARTIST_INFO.bioParagraph2}
            </p>

            {/* Quote Callout */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#1a1a24] border border-[#ff2a5f]/20 relative mt-6">
              <Quote className="w-8 h-8 text-[#ff2a5f]/40 absolute top-3 right-3" />
              <p className="italic text-white font-medium text-base sm:text-lg relative z-10">
                "Music is a sanctuary of restoration. Whether in Cape Town or Balbriggan, the mission remains: to spark hope and awaken faith in every listening heart."
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-[#ff2a5f]" />
                <span className="text-xs text-[#ff2a5f] font-bold uppercase tracking-wider">Louie Fortune</span>
              </div>
            </div>

            {/* Son Rise NPO Feature Pill */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#1a1a24] to-[#12121a] border border-white/10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#ff2a5f]/20 flex items-center justify-center shrink-0 text-[#ff2a5f]">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm sm:text-base flex items-center gap-2">
                  South African Son Rise NPO
                  <span className="text-[10px] bg-[#ff2a5f] text-white px-2 py-0.5 rounded-full uppercase font-extrabold">Active Cause</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#a0a0b0] mt-1">
                  A registered non-profit initiative dedicated to youth empowerment, musical mentorship, and educational workshops across disadvantaged communities.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Showcase / Milestones */}
          <div className="lg:col-span-5 space-y-6">
            {/* Artist Portrait Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-[#1a1a24]">
              <img
                src={ARTIST_INFO.profileImage}
                alt="Louie Fortune"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== window.location.origin + '/images/louie-fortune-bio.jpg') {
                    target.src = '/images/louie-fortune-bio.jpg';
                  }
                }}
                className="w-full h-80 sm:h-96 object-cover object-top group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f12]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="font-artist-title text-sm font-bold text-white uppercase tracking-wider bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  Louie Fortune
                </span>
                <span className="text-[11px] text-[#ff2a5f] font-semibold bg-[#ff2a5f]/15 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#ff2a5f]/30">
                  Urban Gospel Artist
                </span>
              </div>
            </div>

            {/* Timeline Milestones */}
            <div className="bg-[#1a1a24] rounded-2xl p-5 border border-white/5 space-y-4">
              <h4 className="text-xs font-bold text-[#a0a0b0] uppercase tracking-wider pb-2 border-b border-white/10">
                Key Musical Milestones
              </h4>
              <div className="space-y-3.5">
                {milestones.map((m, idx) => {
                  const Icon = m.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 text-left">
                      <div className="w-8 h-8 rounded-lg bg-[#0f0f12] border border-[#ff2a5f]/30 flex items-center justify-center shrink-0 text-[#ff2a5f]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h5 className="text-xs sm:text-sm font-bold text-white truncate">
                            {m.title}
                          </h5>
                          <span className="text-[11px] text-[#ff2a5f] font-mono font-medium">
                            {m.year}
                          </span>
                        </div>
                        <p className="text-xs text-[#a0a0b0] mt-0.5 line-clamp-2">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
