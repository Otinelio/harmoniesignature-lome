import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import './Lightbox.css';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
  backgroundColor?: string;
}

const Lightbox: React.FC<LightboxProps> = ({ images, currentIndex, isOpen, onClose, onNavigate, backgroundColor = 'rgba(12, 16, 24, 0.96)' }) => {
  // Prevent background body scrolling when the Lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen) return null;

  return (
    <div 
      className="lightbox-overlay" 
      style={{ backgroundColor }}
      onClick={onClose}
    >
      <div className="lightbox-top-bar" onClick={(e) => e.stopPropagation()}>
        <span className="lightbox-counter">{currentIndex + 1} / {images.length}</span>
        <button className="lightbox-close" onClick={onClose}>
          <X size={24} />
        </button>
      </div>

      <button 
        className="lightbox-nav prev" 
        onClick={(e) => { e.stopPropagation(); onNavigate((currentIndex - 1 + images.length) % images.length); }}
      >
        <ChevronLeft size={40} />
      </button>

      <div 
        className="lightbox-content" 
        onClick={(e) => {
          // Close Lightbox when clicking outside the active image on the empty container space
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <img 
          src={images[currentIndex]} 
          alt={`Gallery ${currentIndex}`} 
          className="lightbox-image"
          onClick={(e) => e.stopPropagation()} // Clicking on the image itself should not close it
        />
      </div>

      <button 
        className="lightbox-nav next" 
        onClick={(e) => { e.stopPropagation(); onNavigate((currentIndex + 1) % images.length); }}
      >
        <ChevronRight size={40} />
      </button>
    </div>
  );
};

export default Lightbox;
