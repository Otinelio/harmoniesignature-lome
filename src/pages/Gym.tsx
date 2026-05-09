import React, { useState } from 'react';
import { Clock, Phone } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import './Gym.css';

const gymImages = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1593079831268-3381b0c1352b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop'
];

const Gym = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  return (
    <div className="gym-page">
      <section className="dept-hero">
        <div className="dept-hero-bg" style={{ backgroundImage: `url(${gymImages[0]})`, filter: 'saturate(0.7) contrast(1.15)' }}></div>
        <div className="dept-hero-overlay"></div>
        <div className="dept-hero-content">
          <h1 className="dept-title">Gym & Fitness</h1>
        </div>
      </section>

      <section className="dept-presentation">
        <div className="presentation-container">
          <div className="presentation-text" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2>Plus fort chaque jour.</h2>
            <p>Découvrez notre espace d'entraînement industriel et moderne. Des équipements de musculation de pointe, des machines cardio de dernière génération et un espace dédié au renforcement libre. L'environnement idéal pour dépasser vos limites.</p>
          </div>
        </div>
      </section>

      <section className="dept-gallery">
        <div className="gallery-masonry" style={{ columnCount: 3 }}>
          {gymImages.map((src, idx) => (
            <div key={idx} className="gallery-item" onClick={() => openLightbox(idx)}>
              <img src={src} alt={`Gym ${idx}`} style={{ filter: 'saturate(0.7) contrast(1.15)' }} />
              <div className="gallery-overlay"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="gym-pricing-section">
        <div className="gym-pricing-container">
          <div className="gym-plan">
            <h3>Séance</h3>
            <div className="plan-price">2 000 FCFA</div>
            <p className="plan-desc">Accès d'une journée à toutes les machines.</p>
          </div>
          <div className="gym-plan">
            <div className="plan-badge">Réduction périodique disponible</div>
            <h3>Mensuel</h3>
            <div className="plan-price">25 000 FCFA</div>
            <p className="plan-desc">Accès illimité pendant 30 jours.</p>
          </div>
          <div className="gym-plan featured">
            <div className="plan-badge featured-badge">Meilleure offre</div>
            <h3>Annuel</h3>
            <div className="plan-price">250 000 FCFA</div>
            <p className="plan-desc">Accès illimité toute l'année avec avantages.</p>
          </div>
        </div>

        <div className="contact-card" style={{ maxWidth: '600px', margin: '64px auto 0' }}>
          <h3>Informations</h3>
          <div className="contact-line"><Clock size={18} /><span>Lun – Sam : 06h00 – 22h00</span></div>
          <div className="contact-line"><Phone size={18} /><span>(+228) 92 92 18 89</span></div>
        </div>
      </section>

      <Lightbox 
        images={gymImages}
        currentIndex={currentImage}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImage}
      />
    </div>
  );
};

export default Gym;
