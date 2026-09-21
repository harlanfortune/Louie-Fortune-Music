import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera } from 'lucide-react';
import { GalleryItem } from '../types';
import { getAssetUrl } from '../utils/assets';

interface GallerySectionProps {
  items: GalleryItem[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ items }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev! > 0 ? prev! - 1 : items.length - 1));
  }, [activePhotoIndex, items.length]);

  const handleNext = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev! < items.length - 1 ? prev! + 1 : 0));
  }, [activePhotoIndex, items.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') setActivePhotoIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, handlePrev, handleNext]);

  const currentActivePhoto = activePhotoIndex !== null ? items[activePhotoIndex] : null;

  return (
    <section id="gallery" className="bg-[#EFE7D8] text-[#1F1A14] py-16 sm:py-20 border-b border-[#E6DDCB] scroll-mt-20">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 mb-10 border-b border-[#E6DDCB] gap-3">
          <div>
            <span className="text-[13px] font-bold text-[#8A5A0B] uppercase tracking-wider block mb-1">
              Visual Journey & Media
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F1A14]">
              Photo & Media Gallery
            </h2>
          </div>
          <p className="text-[15px] text-[#5E5548] max-w-md">
            Authentic moments from studio sessions, artwork releases, and live worship ministry.
          </p>
        </div>

        {/* Gallery Grid - Real assets only, soft rounded corners, light hover zoom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" id="gallery-grid">
          {items.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActivePhotoIndex(idx)}
              className="group bg-[#FFFFFF] rounded-[12px] border border-[#E6DDCB] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/5] sm:aspect-square overflow-hidden bg-[#F7F2E9]">
                <img
                  src={getAssetUrl(item.imageUrl)}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (item.imageUrl.includes('cover-knoflokskraal')) {
                      target.src = getAssetUrl('/images/knoflokskraal-artwork.jpg');
                    }
                  }}
                />
                <div className="absolute inset-0 bg-[#1C1712]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-[#1F1A14] text-xs font-semibold inline-flex items-center gap-1.5 shadow-sm">
                    <Maximize2 className="w-3.5 h-3.5 text-[#8A5A0B]" />
                    <span>View Image</span>
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1F1A14] group-hover:text-[#8A5A0B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#5E5548] mt-1.5 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E6DDCB] flex items-center justify-between text-xs text-[#8A5A0B] font-semibold">
                  <span>Louie Fortune Media</span>
                  <span className="group-hover:translate-x-1 transition-transform">Enlarge →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {currentActivePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#1C1712]/90 backdrop-blur-md animate-fade-in"
          onClick={() => setActivePhotoIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image Preview"
        >
          <div
            className="relative max-w-4xl w-full bg-[#FFFFFF] rounded-[14px] overflow-hidden border border-[#E6DDCB] shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Title & Close */}
            <div className="px-6 py-4 border-b border-[#E6DDCB] flex items-center justify-between bg-[#F7F2E9]">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#1F1A14]">
                  {currentActivePhoto.title}
                </h4>
                <p className="text-[13px] text-[#5E5548]">
                  Photo {activePhotoIndex! + 1} of {items.length}
                </p>
              </div>

              <button
                onClick={() => setActivePhotoIndex(null)}
                className="p-2 rounded-full hover:bg-[#EFE7D8] text-[#1F1A14] transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Container */}
            <div className="relative flex-1 bg-[#1C1712] flex items-center justify-center p-4 min-h-[300px] max-h-[65vh] overflow-hidden">
              <img
                src={getAssetUrl(currentActivePhoto.imageUrl)}
                alt={currentActivePhoto.title}
                className="max-h-[60vh] max-w-full object-contain rounded-md"
              />

              {/* Prev / Next navigation buttons */}
              {items.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1C1712]/70 hover:bg-[#C58A1B] text-[#F4EFE6] hover:text-[#1F1A14] transition-colors"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1C1712]/70 hover:bg-[#C58A1B] text-[#F4EFE6] hover:text-[#1F1A14] transition-colors"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Caption Footer */}
            <div className="px-6 py-4 bg-[#FFFFFF] border-t border-[#E6DDCB] text-left">
              <p className="text-[14px] text-[#5E5548]">
                {currentActivePhoto.caption}
              </p>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
