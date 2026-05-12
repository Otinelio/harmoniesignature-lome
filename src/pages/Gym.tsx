import React, { useState } from 'react';
import { Clock, Phone, Zap, Dumbbell, Check } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import './Piscine.css';
import './Gym.css';
import logoGym from '../images/logo/logo_gym.png';

const gymImages = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1593079831268-3381b0c1352b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop'
];

const gymPlans = [
  {
    badge: null,
    name: 'Séance unique',
    tagline: 'À l\'unité, sans engagement',
    price: '3 000',
    highlight: false,
  },
  {
    badge: 'Réduction périodique',
    name: 'Mensuel',
    tagline: 'Accès illimité 30 jours',
    price: '25 000',
    highlight: false,
  },
  {
    badge: 'Meilleure offre',
    name: 'Annuel',
    tagline: '12 mois · 2 mois offerts',
    price: '200 000',
    highlight: true,
  },
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

      {/* ─── HERO ─── */}
      <section className="p-hero">
        <div className="p-hero-bg" style={{ backgroundImage: `url(${gymImages[0]})` }}></div>
        <div className="p-hero-overlay"></div>
        <div className="p-hero-content">
          <div className="spa-hero-brand">
            <img src={logoGym} alt="Gym Harmonie Signature" className="spa-hero-dept-logo" />
          </div>
          <div className="spa-hero-info-bar">
            <span><Clock size={14} /> LUN–SAM 06H–22H</span>
            <span><Phone size={14} /> +228 92 92 18 89</span>
          </div>
        </div>
      </section>

      {/* ─── PRICING CARDS ─── */}
      <section className="sp-soins-section">
        <h2 className="sp-soins-title">Nos formules</h2>
        <p className="sp-soins-subtitle">Choisissez la formule adaptée à votre rythme d'entraînement.</p>
        <div className="gym-plans-grid">
          {gymPlans.map((plan, i) => (
            <div key={i} className={`gym-plan-card ${plan.highlight ? 'gym-plan-highlight' : ''}`}>
              {plan.badge && <div className="gym-plan-badge">{plan.badge}</div>}
              <div className="gym-plan-name">{plan.name}</div>
              <div className="gym-plan-price">{plan.price} <span>FCFA</span></div>
              <div className="gym-plan-tagline">{plan.tagline}</div>
              <a
                href={`https://wa.me/22892921889?text=Bonjour%20Harmonie%20Signature%2C%20je%20souhaite%20des%20infos%20sur%20la%20formule%20%22${encodeURIComponent(plan.name)}%22%20de%20la%20Gym.`}
                target="_blank"
                rel="noopener noreferrer"
                className="gym-plan-btn"
              >
                Infos via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ─── GALERIE ─── */}
      <section className="sp-gallery-section">
        <h2 className="sp-gallery-title">La Gym en images</h2>
        <div className="sp-gallery-grid">
          {gymImages.map((src, idx) => (
            <div key={idx} className="sp-gallery-item" onClick={() => openLightbox(idx)}>
              <img src={src} alt={`Gym ${idx + 1}`} />
              <div className="sp-gallery-hover"></div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── INFOS PRATIQUES ─── */}
      <section className="sp-infos-section">
        <div className="sp-infos-card">
          <div className="sp-infos-icon-top">
            <Zap size={28} />
          </div>
          <p className="sp-infos-heading">Informations pratiques</p>
          <div className="sp-infos-items">
            <div className="sp-info-item">
              <Clock size={16} />
              <span>Ouvert 6j/7 de 06h00 à 22h00</span>
            </div>
            <div className="sp-info-sep"></div>
            <div className="sp-info-item">
              <Phone size={16} />
              <span>Contact : +228 92 9290 18 89</span>
            </div>
            <div className="sp-info-sep"></div>
            <div className="sp-info-item">
              <Zap size={16} />
              <span>Seance : 2 000 FCFA</span>
            </div>
          </div>
        </div>
      </section>


      <Lightbox 
        images={gymImages}
        currentIndex={currentImage}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImage}
        backgroundColor="rgba(24, 32, 48, 0.98)"
      />
    </div>
  );
};

export default Gym;
