import React, { useState } from 'react';
import { Phone, Clock, Target, Trophy, Users, X, CalendarCheck } from 'lucide-react';
import { createPortal } from 'react-dom';
import Lightbox from '../components/Lightbox';
import './Piscine.css';
import './Sports.css';

import imgTennisBasket1 from '../images/tennis&Basketball/tennis&Basketball1.jpg';
import imgTennisBasket2 from '../images/tennis&Basketball/tennis&Basketball2.jpg';
import imgTennisBasket3 from '../images/tennis&Basketball/tennis&Basketball3.jpg';
import imgTennisBasket4 from '../images/tennis&Basketball/tennis&Basketball4.jpg';
import imgTennisBasket5 from '../images/tennis&Basketball/tennis&Basketball5.jpg';
import imgTennisBasket6 from '../images/tennis&Basketball/tennis&Basketball6.jpg';
import imgTennisBasket7 from '../images/tennis&Basketball/tennis&Basketball7.jpg';
import imgTennisBasket8 from '../images/tennis&Basketball/tennis&Basketball8.jpg';
import imgTennisBasket9 from '../images/tennis&Basketball/tennis&Basketball9.jpg';
import imgTennisBasket10 from '../images/tennis&Basketball/tennis&Basketball10.jpg';
import imgTennisBasket11 from '../images/tennis&Basketball/tennis&Basketball11.jpg';

const tennisImages = [imgTennisBasket1, imgTennisBasket2, imgTennisBasket3, imgTennisBasket4];
const basketImages = [imgTennisBasket5, imgTennisBasket6, imgTennisBasket7, imgTennisBasket8];
const sportsImages = [imgTennisBasket1, imgTennisBasket2, imgTennisBasket3, imgTennisBasket4, imgTennisBasket5, imgTennisBasket6, imgTennisBasket7, imgTennisBasket8, imgTennisBasket9, imgTennisBasket10, imgTennisBasket11];

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
  { row: 2, col: 1, imgIndex: 0 },
];

const tennisServices = [
  {
    image: tennisImages[0],
    name: 'Tarif Horaire',
    duration: '1h',
    desc: 'Accès libre aux courts de tennis de qualité supérieure pour vos matchs en simple ou double.',
    price: '5 000',
    unit: 'par personne',
  },
  {
    image: tennisImages[1],
    name: 'Abonnement Mensuel',
    duration: '1 mois',
    desc: 'Accès illimité aux installations de tennis tout au long du mois pour les passionnés.',
    price: '15 000',
    unit: 'par mois',
  },
];

const basketServices = [
  {
    image: basketImages[0],
    name: 'Tarif Horaire',
    duration: '1h',
    desc: 'Accès libre au terrain de basketball professionnel pour vos séances de tirs ou matchs.',
    price: '1 000',
    unit: 'par personne',
  },
  {
    image: basketImages[1],
    name: 'Tarif Samedi',
    duration: '4h',
    desc: 'Session spéciale de 4h le samedi, idéale pour des matchs de groupe ou tournois.',
    price: '2 500',
    unit: 'par personne',
  },
];

const Sports = () => {
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
        while (nextIndex === prev) {
          nextIndex = Math.floor(Math.random() * sportsImages.length);
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
    <div className="sports-page">

      {/* ─── HERO ─── */}
      <section className="p-hero">
        <div className="p-hero-bg" style={{ backgroundImage: `url(${imgTennisBasket1})` }}></div>
        <div className="p-hero-overlay"></div>
        <div className="p-hero-content">
          <div className="spa-hero-brand">
            <h1 className="sports-hero-title">Tennis & Basket</h1>
          </div>
          <div className="spa-hero-info-bar">
            <span><Clock size={14} /> LUN–DIM 08H–22H  </span>
            <span><Phone size={14} /> +228 92 92 18 89</span>
          </div>
        </div>
      </section>

      {/* ─── TENNIS ─── */}
      <section className="sp-soins-section">
        <div className="sports-section-header">
          <Target size={24} className="section-icon" />
          <h2 className="sports-section-title">Tennis</h2>
        </div>
        <p className="sports-section-desc">Terrains en dur éclairés pour une pratique loisir ou intensive, même en soirée.</p>
        <div className="sp-soins-grid">
          {tennisServices.map((service, i) => (
            <div key={i} className="sp-soin-card">
              <div className="sp-soin-img-wrap">
                <img src={service.image} alt={service.name} />
              </div>
              <div className="sp-soin-body">
                <div className="sp-soin-header">
                  <h3>{service.name}</h3>
                  <span className="sp-soin-duration">{service.duration}</span>
                </div>
                <p className="sp-soin-desc">{service.desc}</p>
                <div className="sp-soin-footer">
                  <span className="sp-soin-price">
                    {service.price} FCFA
                    {service.unit && <span className="sp-price-unit"> / {service.unit}</span>}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BASKETBALL ─── */}
      <section className="sp-soins-section">
        <div className="sports-section-header">
          <Users size={24} className="section-icon" />
          <h2 className="sports-section-title">Basketball</h2>
        </div>
        <p className="sports-section-desc">Un terrain professionnel extérieur pour des matchs 5x5 ou 3x3 intenses, avec projecteurs LED.</p>
        <div className="sp-soins-grid">
          {basketServices.map((service, i) => (
            <div key={i} className="sp-soin-card">
              <div className="sp-soin-img-wrap">
                <img src={service.image} alt={service.name} />
              </div>
              <div className="sp-soin-body">
                <div className="sp-soin-header">
                  <h3>{service.name}</h3>
                  <span className="sp-soin-duration">{service.duration}</span>
                </div>
                <p className="sp-soin-desc">{service.desc}</p>
                <div className="sp-soin-footer">
                  <span className="sp-soin-price">
                    {service.price} FCFA
                    {service.unit && <span className="sp-price-unit"> / {service.unit}</span>}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── INFOS PRATIQUES ─── */}
      <section className="sp-infos-section">
        <div className="sp-infos-card">
          <div className="sp-infos-icon-top"><Trophy size={28} /></div>
          <p className="sp-infos-heading">Informations pratiques</p>
          <div className="sp-infos-items">
            <div className="sp-info-item"><Clock size={16} /><span>Ouvert 7j/7 de 08h00 à 22h00</span></div>
            <div className="sp-info-sep"></div>
            <div className="sp-info-item"><Phone size={16} /><span>Contact : +228 92 92 18 89</span></div>
          </div>
        </div>
      </section>

      {/* ─── GALERIE CARRÉE ROTATIVE ─── */}
      <section className="sp-gallery-section">
        <h2 className="sp-gallery-title">Les Sports en images</h2>
        
        <div className="bw-square-gallery-container">
          <div className="bw-square-gallery">
            {/* Perimeter Slots (12 images mapped to 8 actual files) */}
            {outerSlots.map((slot, idx) => {
              const isHighlighted = activeIndex === slot.imgIndex;
              return (
                <div
                  key={idx}
                  className={`bw-gallery-item ${isHighlighted ? 'active-slot' : ''}`}
                  style={{ gridArea: `${slot.row} / ${slot.col}` }}
                  onClick={() => selectImage(slot.imgIndex)}
                >
                  <img src={sportsImages[slot.imgIndex]} alt={`Sport Perimeter ${idx + 1}`} loading="lazy" />
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
              <img src={sportsImages[activeIndex]} alt="Sport Active Center" />
              <div className="bw-center-hover-overlay">
                <span className="bw-center-hover-text">Agrandir</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        images={sportsImages}
        currentIndex={currentImage}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImage}
        backgroundColor="rgba(24, 32, 48, 0.98)"
      />
    </div>
  );
};

export default Sports;
