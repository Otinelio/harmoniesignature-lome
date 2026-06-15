import React, { useState, useEffect } from 'react';
import { getBowlingPlans, BowlingPlan, getDepartments, Department } from '../utils/storage';
import { Clock, Phone, Check, Sun, Zap } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import './Bowling.css';





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
  const [plans, setPlans] = useState<BowlingPlan[]>([]);
  const [department, setDepartment] = useState<Department | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getBowlingPlans();
      setPlans(data);
      const deps = await getDepartments();
      setDepartment(deps.find(d => d.id === 'bowling') || null);
    };
    fetchData();
  }, []);
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
        const numImages = (department?.images || []).length;
        if (numImages <= 1) return 0;
        // Ensure the randomly chosen image index is different from the current one
        while (nextIndex === prev) {
          nextIndex = Math.floor(Math.random() * numImages);
        }
        return nextIndex;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, [timerTrigger, department]);

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
          <img src={'/images/logo/logo_bowling.png'} alt="Bowling Harmonie Signature" className="bw-hero-dept-logo" />
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
              const images = department?.images || [];
              const safeImgIndex = images.length > 0 ? slot.imgIndex % images.length : 0;
              const isHighlighted = activeIndex === slot.imgIndex;
              return (
                <div
                  key={idx}
                  className={`bw-gallery-item ${isHighlighted ? 'active-slot' : ''}`}
                  style={{ gridArea: `${slot.row} / ${slot.col}` }}
                  onClick={() => selectImage(slot.imgIndex)}
                >
                  {images.length > 0 && <img src={images[safeImgIndex]} alt={`Bowling Perimeter ${idx + 1}`} loading="lazy" />}
                  <div className="bw-gallery-hover"></div>
                </div>
              );
            })}

            {/* Spanned Center Item (Active large image) */}
            <div
              className={`bw-gallery-center ${fadeState ? 'fade-in' : 'fade-out'}`}
              style={{ gridArea: '2 / 2 / 4 / 4' }}
              onClick={() => {
                const images = department?.images || [];
                openLightbox(images.length > 0 ? activeIndex % images.length : 0);
              }}
            >
              {(department?.images || []).length > 0 && <img src={(department?.images || [])[activeIndex % (department?.images.length || 1)]} alt="Bowling Active Center" />}
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
        images={(department?.images || [])}
        currentIndex={currentImage}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImage}
      />
    </div>
  );
};

export default Bowling;
