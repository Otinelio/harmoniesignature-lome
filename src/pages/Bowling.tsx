import React, { useState } from 'react';
import { Clock, Phone, Check, Sun, Zap } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import './Bowling.css';

const bowlingImages = [
  'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520627685600-e9e99a8341da?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511216113888-0fa3debf4401?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1481515259972-005bf5541e2d?q=80&w=1400&auto=format&fit=crop',
];

const plans = [
  {
    badge: null,
    name: 'Partie Simple',
    tagline: '1 joueur · Chaussures incluses',
    price: '5 000',
    features: ['1 piste réservée', 'Chaussures fournies', 'Balle au choix'],
    highlight: false,
  },
  {
    badge: 'Populaire',
    name: 'Groupe (4 pers.)',
    tagline: 'Idéal entre amis ou en famille',
    price: '18 000',
    features: ['1 piste réservée', 'Chaussures fournies', '2 parties incluses'],
    highlight: true,
  },
  {
    badge: null,
    name: 'Soirée VIP',
    tagline: 'Piste privée · 2h · Boissons',
    price: '35 000',
    features: ['Piste privatisée 2h', 'Chaussures fournies', 'Boissons offertes'],
    highlight: false,
  },
];

const Bowling = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bowling-page">

      {/* ─── HERO ─── */}
      <section className="bw-hero">
        <div className="bw-hero-bg" style={{ backgroundImage: `url(${bowlingImages[0]})` }}></div>
        <div className="bw-hero-overlay"></div>
        <div className="bw-neon-lines">
          <span></span><span></span><span></span>
        </div>
        <div className="bw-hero-content">
          <div className="bw-hero-eyebrow">Harmonie Signature · Loisirs</div>
          <h1 className="bw-hero-title">
            <span className="bw-neon-letter" style={{ '--i': 0 } as React.CSSProperties}>B</span>
            <span className="bw-neon-letter" style={{ '--i': 1 } as React.CSSProperties}>O</span>
            <span className="bw-neon-letter" style={{ '--i': 2 } as React.CSSProperties}>W</span>
            <span className="bw-neon-letter" style={{ '--i': 3 } as React.CSSProperties}>L</span>
            <span className="bw-neon-letter" style={{ '--i': 4 } as React.CSSProperties}>I</span>
            <span className="bw-neon-letter" style={{ '--i': 5 } as React.CSSProperties}>N</span>
            <span className="bw-neon-letter" style={{ '--i': 6 } as React.CSSProperties}>G</span>
          </h1>
          <p className="bw-hero-sub">PISTES ILLUMINÉES · SON IMMERSIF · AMBIANCE ÉLECTRIQUE</p>
        </div>
      </section>

      {/* ─── PLANS ─── */}
      <section className="bw-plans-section">
        <h2 className="bw-section-title">Nos formules</h2>
        <div className="bw-plans-grid">
          {plans.map((plan, i) => (
            <div key={i} className={`bw-plan-card ${plan.highlight ? 'bw-highlight' : ''}`}>
              {plan.badge && <div className="bw-plan-badge">{plan.badge}</div>}
              <div className="bw-plan-name">{plan.name}</div>
              <div className="bw-plan-price">{plan.price} <span>FCFA</span></div>
              <div className="bw-plan-tagline">{plan.tagline}</div>
              <ul className="bw-plan-features">
                {plan.features.map((f, j) => (
                  <li key={j}><Check size={13} /> {f}</li>
                ))}
              </ul>
              <a
                href={`https://wa.me/22892921889?text=Bonjour%20Harmonie%20Signature%2C%20je%20souhaite%20des%20infos%20sur%20la%20formule%20Bowling%20%22${encodeURIComponent(plan.name)}%22.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bw-plan-btn"
              >
                Infos via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ─── GALERIE ─── */}
      <section className="bw-gallery-section">
        <h2 className="bw-section-title">Le Bowling en images</h2>
        <div className="bw-gallery-grid">
          {bowlingImages.map((src, idx) => (
            <div key={idx} className="bw-gallery-item" onClick={() => openLightbox(idx)}>
              <img src={src} alt={`Bowling ${idx + 1}`} />
              <div className="bw-gallery-hover"></div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── INFOS PRATIQUES ─── */}
      <section className="bw-infos-section">
        <div className="bw-infos-card">
          <div className="bw-infos-icon"><Zap size={28} /></div>
          <p className="bw-infos-heading">Informations pratiques</p>
          <div className="bw-infos-items">
            <div className="bw-info-item"><Sun size={15} /><span>Mar – Dim : 16h00 – 00h00 · Lundi fermé</span></div>
            <div className="bw-info-sep"></div>
            <div className="bw-info-item"><Phone size={15} /><span>Contact : +228 92 92 18 89</span></div>
            <div className="bw-info-sep"></div>
            <div className="bw-info-item"><Clock size={15} /><span>Réservation recommandée le week-end</span></div>
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
