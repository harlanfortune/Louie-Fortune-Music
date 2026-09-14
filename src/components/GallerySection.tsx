import React, { useState } from 'react';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, Maximize2, Tag } from 'lucide-react';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  items: GalleryItem[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const categories = ['All', 'Live', 'Studio', 'Tour'];

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter((item) => item.category === selectedCategory);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
  };

  const currentActivePhoto = activePhotoIndex !== null ? filteredItems[activePhotoIndex] : null;

  return (
    <section id="gallery" className="py-16 sm:py-20 border-b border-[#1a1a24] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-[#1a1a24] pb-3 mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#ff2a5f] uppercase tracking-wider mb-1">
              <ImageIcon className="w-4 h-4" />
              <span>Visual Journey</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide uppercase">
              Gallery
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setActivePhotoIndex(null);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#ff2a5f] text-white shadow-md shadow-[#ff2a5f]/20'
                    : 'bg-[#1a1a24] text-[#a0a0b0] hover:text-white hover:bg-[#252535]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5" id="gallery-grid">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActivePhotoIndex(idx)}
              className="group relative h-56 sm:h-64 rounded-xl overflow-hidden cursor-pointer bg-[#1a1a24] border border-white/5 shadow-md"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[10px] font-bold text-[#ff2a5f] uppercase tracking-wider">
                  {item.category}
                </span>
                <h4 className="text-base font-bold text-white leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-[#a0a0b0] line-clamp-2 mt-1">
                  {item.caption}
                </p>
                <div className="mt-2 flex items-center gap-1 text-[11px] text-white/80 font-medium">
                  <Maximize2 className="w-3 h-3 text-[#ff2a5f]" />
                  <span>Click to expand</span>
                </div>
              </div>

              {/* Category chip always visible */}
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-white border border-white/10 group-hover:hidden">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if category filter has no results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-[#a0a0b0]">
            <p>No photos in this category yet.</p>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {currentActivePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setActivePhotoIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1a1a24] rounded-2xl overflow-hidden border border-white/15 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhotoIndex(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 text-white hover:bg-[#ff2a5f] transition-colors"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Main Image */}
            <div className="relative max-h-[70vh] bg-black flex items-center justify-center">
              <img
                src={currentActivePhoto.imageUrl}
                alt={currentActivePhoto.title}
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto object-contain mx-auto"
              />

              {/* Nav controls */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-[#ff2a5f] transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-[#ff2a5f] transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption bar */}
            <div className="p-4 sm:p-6 bg-[#1a1a24] flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-[#ff2a5f] uppercase tracking-wider">
                    {currentActivePhoto.category}
                  </span>
                  <span className="text-xs text-[#a0a0b0]">• Photo {activePhotoIndex! + 1} of {filteredItems.length}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  {currentActivePhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#a0a0b0] mt-1">
                  {currentActivePhoto.caption}
                </p>
              </div>

              <div className="hidden sm:block shrink-0">
                <span className="text-xs text-white/50 bg-[#0f0f12] px-3 py-1.5 rounded-lg border border-white/5 font-mono">
                  Esc to close
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
