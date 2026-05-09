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
    <div className="lightbox-overlay" style={{ backgroundColor }}>
      <button className="lightbox-close" onClick={onClose}>
        <X size={32} />
      </button>

      <button className="lightbox-nav prev" onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}>
        <ChevronLeft size={48} />
      </button>

      <div className="lightbox-content">
        <img src={images[currentIndex]} alt={`Gallery ${currentIndex}`} />
      </div>

      <button className="lightbox-nav next" onClick={() => onNavigate((currentIndex + 1) % images.length)}>
        <ChevronRight size={48} />
      </button>
    </div>
  );
};

export default Lightbox;
