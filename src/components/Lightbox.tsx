import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
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

const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
  backgroundColor = 'rgba(12, 16, 24, 0.98)'
}) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);

  // Swipe gesture states for mobile support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  // Manage mounting/unmounting animation cycle
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else if (shouldRender) {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, 300); // Match CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

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

  // Keyboard navigation
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

  // History API for Android/Browser "Back" button
  useEffect(() => {
    if (isOpen) {
      if (!window.history.state?.lightboxOpen) {
        window.history.pushState({ lightboxOpen: true }, '');
      }
      
      const handlePopState = () => {
        onClose();
      };
      
      window.addEventListener('popstate', handlePopState);
      return () => {
        window.removeEventListener('popstate', handlePopState);
      };
    } else {
      if (window.history.state?.lightboxOpen) {
        window.history.back();
      }
    }
  }, [isOpen, onClose]);

  if (!shouldRender) return null;

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      onNavigate((currentIndex + 1) % images.length);
    } else if (isRightSwipe) {
      onNavigate((currentIndex - 1 + images.length) % images.length);
    }
  };

  return createPortal(
    <div
      className={`lightbox-overlay ${isClosing ? 'closing' : 'opening'}`}
      style={{ backgroundColor }}
      onClick={onClose}
    >
      <div className="lightbox-wrapper" onClick={(e) => e.stopPropagation()}>
        {/* Top Header Bar */}
        <div className="lightbox-header">
          <span className="lightbox-counter">{currentIndex + 1} / {images.length}</span>
          <button className="lightbox-close" onClick={onClose} aria-label="Fermer la galerie">
            <X size={24} />
          </button>
        </div>

        {/* Main Display Area */}
        <div className="lightbox-main">
          {/* Navigation Previous */}
          <button
            className="lightbox-nav-btn prev"
            onClick={(e) => { e.stopPropagation(); onNavigate((currentIndex - 1 + images.length) % images.length); }}
            aria-label="Image précédente"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Interactive Image Frame */}
          <div
            className="lightbox-image-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={onClose} // Clicking the empty space around the image closes the lightbox
          >
            <img
              key={currentIndex} // Re-keying triggers entry transition on image change
              src={images[currentIndex]}
              alt={`Agrandissement ${currentIndex + 1}`}
              className="lightbox-image"
              onClick={(e) => e.stopPropagation()} // Prevent clicking on the image itself from closing
            />
          </div>

          {/* Navigation Next */}
          <button
            className="lightbox-nav-btn next"
            onClick={(e) => { e.stopPropagation(); onNavigate((currentIndex + 1) % images.length); }}
            aria-label="Image suivante"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Lightbox;
