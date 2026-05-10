import React, { useState } from 'react';
import { Phone, Check, Sun, UtensilsCrossed, Waves } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import './Piscine.css';

const poolImages = [
  'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1400&auto=format&fit=crop',
];

const plans = [
  {
    label: 'Adulte (Séance)',
    price: '6 000',
    features: ['Accès bassin olympique', 'Transats & Parasols', 'Vestiaires Impeccables'],
    highlight: false,
    badge: null,
  },
  {
    label: 'Enfant (Séance)',
    price: '3 000',
    features: ['Accès bassin olympique', 'Transats & Parasols', 'Vestiaires Impeccables'],
    highlight: false,
    badge: null,
  },
  {
    label: 'Abonnement mensuel adulte',
    price: '50 000',
    features: ['Accès bassin olympique', 'Transats & Parasols', 'Vestiaires Impeccables'],
    highlight: true,
    badge: 'OFFRE MENSUELLE',
  },
  {
    label: 'Abonnement mensuel enfant',
    price: '30 000',
    features: ['Accès bassin olympique', 'Transats & Parasols', 'Vestiaires Impeccables'],
    highlight: true,
    badge: 'OFFRE MENSUELLE',
  },
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

      {/* ─── HERO ─── */}
      <section className="p-hero">
        <div className="p-hero-bg" style={{ backgroundImage: `url(${poolImages[0]})` }}></div>
        <div className="p-hero-overlay"></div>
        <div className="p-hero-content">
          <h1 className="p-hero-title">Piscine Olympique</h1>
          <p className="p-hero-sub">NAGE · DÉTENTE · LONGUEURS</p>
        </div>
      </section>

      {/* ─── PLANS TARIFAIRES ─── */}
      <section className="p-plans-section">
        <h2 className="p-section-title">Accès et abonnements</h2>
        <div className="p-plans-grid">
          {plans.map((plan, i) => (
            <div key={i} className={`p-plan-card ${plan.highlight ? 'highlighted' : ''}`}>
              {plan.badge && <div className="p-plan-badge">{plan.badge}</div>}
              <div className="p-plan-label">{plan.label}</div>
              <div className="p-plan-price">
                {plan.price} <span>FCFA</span>
              </div>
              <ul className="p-plan-features">
                {plan.features.map((f, j) => (
                  <li key={j}><Check size={14} /> {f}</li>
                ))}
              </ul>
              <a
                href={`https://wa.me/22892921889?text=Bonjour%20Harmonie%20Signature%2C%20je%20souhaite%20avoir%20des%20informations%20sur%20la%20formule%20%22${encodeURIComponent(plan.label)}%22%20pour%20la%20piscine.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-plan-btn"
              >
                <Phone size={13} /> Infos via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ─── GALERIE ─── */}
      <section className="p-gallery-section">
        <h2 className="p-section-title">La Piscine en images</h2>
        <div className="p-gallery-grid">
          {poolImages.map((src, idx) => (
            <div key={idx} className="p-gallery-item" onClick={() => openLightbox(idx)}>
              <img src={src} alt={`Piscine ${idx + 1}`} />
              <div className="p-gallery-hover"></div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── INFOS PRATIQUES ─── */}
      <section className="p-infos-section">
        <div className="p-infos-card">
          <div className="p-infos-icon-top">
            <Waves size={28} />
          </div>
          <p className="p-infos-heading">Informations pratiques</p>
          <div className="p-infos-items">
            <div className="p-info-item">
              <Sun size={16} />
              <span>Ouvert 7j/7 de 06h00 à 22h00</span>
            </div>
            <div className="p-info-sep"></div>
            <div className="p-info-item">
              <Phone size={16} />
              <span>Contact : +228 92 92 18 89</span>
            </div>
            <div className="p-info-sep"></div>
            <div className="p-info-item">
              <UtensilsCrossed size={16} />
              <span>Rafraîchissements au Snack Bar Tasty</span>
            </div>
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
