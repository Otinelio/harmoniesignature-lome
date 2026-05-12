import React, { useState } from 'react';
import { Clock, Phone, Check, Sun, Zap } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import './Bowling.css';
import logoBowling from '../images/logo/logo_bowling.png';
import bowling1 from '../images/bowling/bowling_1.jpg';
import bowling2 from '../images/bowling/bowling_2.jpg';
import bowling3 from '../images/bowling/bowling_3.jpg';
import bowling4 from '../images/bowling/bowling_4.jpg';
import bowling5 from '../images/bowling/bowling_5.jpg';

const bowlingImages = [
  bowling1,
  bowling2,
  bowling3,
  bowling4,
  bowling5,
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
          <img src={logoBowling} alt="Bowling Harmonie Signature" className="bw-hero-dept-logo" />
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
