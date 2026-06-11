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
import bowling6 from '../images/bowling/bowling_6.jpg';
import bowling7 from '../images/bowling/bowling_7.jpg';
import bowling8 from '../images/bowling/bowling_8.jpg';
import bowling9 from '../images/bowling/bowling_9.jpg';
import bowling10 from '../images/bowling/bowling_10.jpg';
import bowling11 from '../images/bowling/bowling_11.jpg';
import bowling12 from '../images/bowling/bowling_12.jpg';
import bowling13 from '../images/bowling/bowling_13.jpg';
import bowling14 from '../images/bowling/bowling_14.jpg';
import bowling15 from '../images/bowling/bowling_15.jpg';

const bowlingImages = [
  bowling1,
  bowling2,
  bowling3,
  bowling4,
  bowling5,
  bowling6,
  bowling7,
  bowling8,
  bowling9,
  bowling10,
  bowling11,
  bowling12,
  bowling13,
  bowling14,
  bowling15,
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

const outerSlots = [
  { row: 1, col: 1, imgIndex: 0 },
  { row: 1, col: 2, imgIndex: 1 },
  { row: 1, col: 3, imgIndex: 2 },
  { row: 1, col: 4, imgIndex: 3 },
  { row: 2, col: 4, imgIndex: 4 },
  { row: 3, col: 4, imgIndex: 5 },
  { row: 4, col: 4, imgIndex: 6 },
  { row: 4, col: 3, imgIndex: 7 },
  { row: 4, col: 2, imgIndex: 8 },
  { row: 4, col: 1, imgIndex: 9 },
  { row: 3, col: 1, imgIndex: 10 },
  { row: 2, col: 1, imgIndex: 11 },
];

const Bowling = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  
  // Rotating square gallery states
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);
  const [timerTrigger, setTimerTrigger] = useState(0);

  // Automatic 4-second random rotation interval
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        let nextIndex = prev;
        // Ensure the randomly chosen image index is different from the current one
        while (nextIndex === prev) {
          nextIndex = Math.floor(Math.random() * bowlingImages.length);
        }
        return nextIndex;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, [timerTrigger]);

  // Smooth fade transition on active image changes
  React.useEffect(() => {
    setFadeState(false);
    const timeout = setTimeout(() => setFadeState(true), 50);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  const selectImage = (index: number) => {
    setActiveIndex(index);
    setTimerTrigger((prev) => prev + 1); // Reset rotation timer
  };

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bowling-page">

      {/* ─── HERO ─── */}
      <section className="bw-hero">
        <div className="bw-hero-bg"></div>
        <div className="bw-hero-overlay"></div>
        <div className="bw-hero-content bw-hero-logo-only">
          <img src={logoBowling} alt="Bowling Harmonie Signature" className="bw-hero-dept-logo" />
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
                href={`https://wa.me/22872274390?text=Bonjour%20Bowling%2C%20je%20souhaite%20obtenir%20des%20informations%20sur%20la%20formule%20%22${encodeURIComponent(plan.name)}%22.`}
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

      {/* ─── GALERIE CARRÉE ROTATIVE ─── */}
      <section className="bw-gallery-section">
        <h2 className="bw-section-title">Le Bowling en images</h2>
        
        <div className="bw-square-gallery-container">
          <div className="bw-square-gallery">
            {/* Perimeter Slots (12 images) */}
            {outerSlots.map((slot, idx) => {
              const isHighlighted = activeIndex === slot.imgIndex;
              return (
                <div
                  key={idx}
                  className={`bw-gallery-item ${isHighlighted ? 'active-slot' : ''}`}
                  style={{ gridArea: `${slot.row} / ${slot.col}` }}
                  onClick={() => selectImage(slot.imgIndex)}
                >
                  <img src={bowlingImages[slot.imgIndex]} alt={`Bowling Perimeter ${idx + 1}`} loading="lazy" />
                  <div className="bw-gallery-hover"></div>
                </div>
              );
            })}

            {/* Spanned Center Item (Active large image) */}
            <div
              className={`bw-gallery-center ${fadeState ? 'fade-in' : 'fade-out'}`}
              style={{ gridArea: '2 / 2 / 4 / 4' }}
              onClick={() => openLightbox(activeIndex)}
            >
              <img src={bowlingImages[activeIndex]} alt="Bowling Active Center" />
              <div className="bw-center-hover-overlay">
                <span className="bw-center-hover-text">Agrandir</span>
              </div>
            </div>
          </div>
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
            <div className="bw-info-item"><Phone size={15} /><span>Contact : +228 72 27 43 90</span></div>
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
