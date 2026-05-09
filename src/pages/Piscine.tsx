import React, { useState } from 'react';
import { Clock, Phone } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import './Piscine.css';

const poolImages = [
  'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1200&auto=format&fit=crop'
];

const Piscine = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  return (
    <div className="piscine-page">
      <section className="dept-hero">
        <div className="dept-hero-bg" style={{ backgroundImage: `url(${poolImages[0]})` }}></div>
        <div className="dept-hero-overlay"></div>
        <div className="dept-hero-content">
          <h1 className="dept-title">La Piscine</h1>
          <div className="dept-badge">OUVERT DU LUNDI AU SAMEDI</div>
        </div>
      </section>

      <section className="dept-presentation">
        <div className="presentation-container">
          <div className="presentation-text">
            <h2>L'eau comme chez soi.</h2>
            <p>Plongez dans un bassin olympique aux eaux cristallines, pensé pour la détente absolue comme pour les longueurs matinales. Entouré d'une végétation tropicale luxuriante, c'est un havre de paix au milieu de l'effervescence urbaine.</p>
          </div>
          <div className="presentation-image" style={{ backgroundImage: `url(${poolImages[1]})` }}></div>
        </div>
      </section>

      <div className="wave-separator">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="wave-svg">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="wave-path"></path>
        </svg>
      </div>

      <section className="dept-gallery">
        <div className="gallery-masonry">
          {poolImages.map((src, idx) => (
            <div key={idx} className="gallery-item" onClick={() => openLightbox(idx)}>
              <img src={src} alt={`Piscine ${idx}`} />
              <div className="gallery-overlay"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="dept-info">
        <div className="info-cards">
          <div className="tarif-card">
            <h3>Tarifs</h3>
            <div className="tarif-line"><span>Adulte</span><span className="price">6 000 FCFA</span></div>
            <div className="tarif-line"><span>Enfant</span><span className="price">3 000 FCFA</span></div>
            <div className="tarif-badge">Abonnement disponible</div>
          </div>
          <div className="contact-card">
            <h3>Informations</h3>
            <div className="contact-line"><Clock size={18} /><span>Lun – Sam : 07h00 – 23h00</span></div>
            <div className="contact-line"><Phone size={18} /><span>(+228) 92 92 18 89</span></div>
          </div>
        </div>
      </section>

      <Lightbox 
        images={poolImages}
        currentIndex={currentImage}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImage}
      />
    </div>
  );
};

export default Piscine;
