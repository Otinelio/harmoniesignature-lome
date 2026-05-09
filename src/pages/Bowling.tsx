import React, { useState, useEffect } from 'react';
import { Clock, Phone } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import './Bowling.css';

const bowlingImages = [
  'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520627685600-e9e99a8341da?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511216113888-0fa3debf4401?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1481515259972-005bf5541e2d?q=80&w=1200&auto=format&fit=crop'
];

const Bowling = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [titleChars, setTitleChars] = useState<string[]>([]);

  useEffect(() => {
    setTitleChars("BOWLING".split(''));
  }, []);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bowling-page">
      <section className="dept-hero">
        <div className="dept-hero-bg" style={{ backgroundImage: `url(${bowlingImages[0]})` }}></div>
        <div className="dept-hero-overlay"></div>
        <div className="dept-hero-content">
          <h1 className="bowling-title">
            {titleChars.map((char, idx) => (
              <span key={idx} style={{ animationDelay: `${idx * 60}ms` }}>{char}</span>
            ))}
          </h1>
        </div>
      </section>

      <section className="dept-presentation">
        <div className="presentation-container">
          <div className="presentation-text">
            <h2>La piste t'attend.</h2>
            <p>Plongez dans l'ambiance nocturne et électrique de notre bowling. Des pistes illuminées de néons, un son immersif et un équipement professionnel pour des moments inoubliables entre amis ou en famille.</p>
          </div>
        </div>
      </section>

      <section className="bowling-gallery-section">
        <div className="bowling-gallery-scroll">
          {bowlingImages.map((src, idx) => (
            <div key={idx} className="bowling-gallery-item" onClick={() => openLightbox(idx)}>
              <img src={src} alt={`Bowling ${idx}`} />
              <div className="gallery-overlay"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="dept-info">
        <div className="info-cards">
          <div className="tarif-card">
            <h3>Tarifs</h3>
            <div className="tarif-line"><span>Partie classique</span><span className="price">5 000 FCFA</span></div>
            <div className="tarif-line"><span>Location chaussures</span><span className="price">Inclus</span></div>
          </div>
          <div className="contact-card">
            <h3>Informations</h3>
            <div className="contact-line"><Clock size={18} /><span>Mar – Dim : 16h00 – 00h00</span></div>
            <div className="contact-line"><Clock size={18} /><span>Lundi : Fermé</span></div>
            <div className="contact-line" style={{ marginTop: '8px' }}><Phone size={18} /><span>(+228) 92 92 18 89</span></div>
          </div>
        </div>
      </section>

      <Lightbox 
        images={bowlingImages}
        currentIndex={currentImage}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImage}
      />
    </div>
  );
};

export default Bowling;
