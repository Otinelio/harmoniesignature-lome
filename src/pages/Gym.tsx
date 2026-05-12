import React, { useState } from 'react';
import { Clock, Phone, Zap, Dumbbell, Check } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import './Gym.css';

import gym2 from '../images/salles/gym-2.jpg';
import gym3 from '../images/salles/gym-3.jpg';
import gym4 from '../images/salles/gym-4.jpg';
import gym5 from '../images/salles/gym-5.jpg';
import gym6 from '../images/salles/gym-6.jpg';
import gym7 from '../images/salles/gym-7.jpg';
import gym8 from '../images/salles/gym-8.jpg';
import gym9 from '../images/salles/gym-9.jpg';
import gym10 from '../images/salles/gym-10.jpg';
import gym11 from '../images/salles/gym-11.jpg';

const gymImages = [
  gym2,
  gym3,
  gym4,
  gym5,
  gym6,
  gym7,
  gym8,
  gym9,
  gym10,
  gym11
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
      <section className="sp-hero">
        <div className="sp-hero-bg" style={{ backgroundImage: `url(${gymImages[0]})` }}></div>
        <div className="sp-hero-overlay"></div>
        <div className="sp-hero-content">
          <div className="sp-hero-logo-row">
            <Dumbbell size={22} className="sp-hero-icon" />
            <h1 className="sp-hero-title">Gym & Fitness</h1>
          </div>
          <div className="sp-hero-info-bar">
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
              <span>Contact : +228 92 92 18 89</span>
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
