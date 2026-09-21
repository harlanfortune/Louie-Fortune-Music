import React from 'react';
import { Globe, Heart, Award, Music2, Quote, Sparkles } from 'lucide-react';
import { ARTIST_INFO } from '../data/artistData';
import { getAssetUrl } from '../utils/assets';

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
      description: "Relocated to the Emerald Isle, bridging vibrant South African gospel artistry with European audiences.",
      icon: Globe,
    },
    {
      year: "Global Stage",
      title: "Finland World Championship",
      description: "Represented South Africa on the international stage, bringing authentic worship across borders.",
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
    <section
      id="about"
      className="bg-[#F7F2E9] text-[#1F1A14] py-20 sm:py-24 border-b border-[#E6DDCB] scroll-mt-20 relative"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-12 border-b border-[#E6DDCB] gap-3">
          <div>
            <span className="text-[13px] font-bold text-[#8A5A0B] uppercase tracking-wider block mb-1">
              Biography & Ministry
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1A14]">
              About Louie Fortune
            </h2>
          </div>
          <span className="text-[15px] text-[#5E5548]">
            From Cape Town to Balbriggan
          </span>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Main Bio Text Column */}
          <div className="lg:col-span-7 space-y-6 text-[#1F1A14] text-base sm:text-lg leading-relaxed font-normal">
            
            <p className="first-letter:float-left first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:text-[#8A5A0B] first-letter:mr-3 first-letter:leading-none">
              {ARTIST_INFO.bioParagraph1}
            </p>

            <p className="text-[#5E5548]">
              {ARTIST_INFO.bioParagraph2}
            </p>

            {/* Quote Callout - Fixed icon placement so it never overlaps text */}
            <div className="p-6 sm:p-7 rounded-[12px] bg-[#FFFFFF] border border-[#E6DDCB] shadow-sm relative mt-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-[#EFE7D8] flex items-center justify-center text-[#8A5A0B] shrink-0">
                  <Quote className="w-4 h-4 fill-current" />
                </div>
                <span className="text-[12px] font-bold uppercase tracking-widest text-[#8A5A0B]">
                  Artist Conviction
                </span>
              </div>

              <blockquote className="font-serif italic text-[#1F1A14] font-medium text-lg sm:text-xl leading-relaxed">
                "{ARTIST_INFO.quote}"
              </blockquote>

              <div className="mt-4 pt-3 border-t border-[#E6DDCB] flex items-center justify-between text-xs text-[#5E5548]">
                <span className="font-semibold text-[#1F1A14]">Louie Fortune</span>
                <span>Urban Gospel Singer-Songwriter</span>
              </div>
            </div>

            {/* South African Son Rise NPO Feature Box */}
            <div className="p-5 sm:p-6 rounded-[12px] bg-[#FFFFFF] border border-[#E6DDCB] shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-[10px] bg-[#C58A1B]/15 flex items-center justify-center shrink-0 text-[#8A5A0B]">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h4 className="font-serif text-lg font-bold text-[#1F1A14]">
                    South African Son Rise NPO
                  </h4>
                  <span className="text-[11px] bg-[#C58A1B] text-[#1F1A14] px-2.5 py-0.5 rounded-full uppercase font-bold tracking-wide">
                    Active Cause
                  </span>
                </div>
                <p className="text-sm text-[#5E5548] leading-relaxed">
                  A dedicated non-profit initiative founded to mentor underserved youth through music, vocational workshops, and spiritual encouragement across communities in South Africa and Ireland.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Artist Portrait & Key Milestones */}
          <div className="lg:col-span-5 space-y-6">
            {/* Real Artist Photo with Soft Rounded Frame */}
            <div className="relative rounded-[12px] overflow-hidden border border-[#E6DDCB] shadow-md bg-[#FFFFFF]">
              <img
                src={getAssetUrl(ARTIST_INFO.profileImage)}
                alt="Louie Fortune portrait"
                className="w-full h-80 sm:h-96 object-cover object-top"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== getAssetUrl(ARTIST_INFO.profileImageFallback)) {
                    target.src = getAssetUrl(ARTIST_INFO.profileImageFallback);
                  }
                }}
              />
              <div className="p-4 bg-[#FFFFFF] border-t border-[#E6DDCB] flex items-center justify-between">
                <div>
                  <span className="font-serif font-bold text-base text-[#1F1A14] block">
                    Louie Fortune
                  </span>
                  <span className="text-[13px] text-[#5E5548]">
                    Vocalist & Worship Leader
                  </span>
                </div>
                <span className="text-[12px] font-semibold text-[#8A5A0B] bg-[#EFE7D8] px-3 py-1 rounded-full">
                  Balbriggan, IE
                </span>
              </div>
            </div>

            {/* Key Musical Milestones */}
            <div className="bg-[#FFFFFF] rounded-[12px] p-6 border border-[#E6DDCB] shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#E6DDCB]">
                <Sparkles className="w-4 h-4 text-[#8A5A0B]" />
                <h4 className="text-[13px] font-bold text-[#1F1A14] uppercase tracking-wider">
                  Key Musical Milestones
                </h4>
              </div>

              <div className="space-y-4">
                {milestones.map((m, idx) => {
                  const Icon = m.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 text-left">
                      <div className="w-9 h-9 rounded-[8px] bg-[#EFE7D8] flex items-center justify-center shrink-0 text-[#8A5A0B] mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h5 className="text-sm font-bold text-[#1F1A14]">
                            {m.title}
                          </h5>
                          <span className="text-[12px] text-[#8A5A0B] font-semibold shrink-0">
                            {m.year}
                          </span>
                        </div>
                        <p className="text-[13px] text-[#5E5548] leading-normal mt-0.5">
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
