import React, { useState } from 'react';
import { Phone, Waves, Sun, Sparkles } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import './Piscine.css';
import './Spa.css';

import imgPiscine1 from '../images/piscine/piscine1.jpg';
import imgPiscine2 from '../images/piscine/piscine2.jpg';
import imgPiscine3 from '../images/piscine/piscine3.jpg';
import imgPiscine4 from '../images/piscine/piscine4.jpg';
import imgPiscine5 from '../images/piscine/piscine5.jpg';
import imgPiscine6 from '../images/piscine/piscine6.jpg';
import imgPiscine7 from '../images/piscine/piscine7.jpg';
import imgPiscine8 from '../images/piscine/piscine8.jpg';
import imgPiscine9 from '../images/piscine/piscine9.jpg';
import imgPiscine10 from '../images/piscine/piscine10.jpg';
import imgPiscine11 from '../images/piscine/piscine11.jpg';
import imgPiscine12 from '../images/piscine/piscine12.jpg';
import imgPiscine13 from '../images/piscine/piscine13.jpg';

const poolImages = [
  imgPiscine1,
  imgPiscine2,
  imgPiscine3,
  imgPiscine4,
  imgPiscine5,
  imgPiscine6,
  imgPiscine7,
  imgPiscine8,
  imgPiscine9,
  imgPiscine10,
  imgPiscine11,
  imgPiscine12,
  imgPiscine13,
];

const poolPlans = [
  // ACCES PISCINE
  {
    category: 'Accès Piscine',
    name: 'Séance Unique',
    price: '5.000',
    desc: 'Entrée unique donnant accès libre au grand bassin olympique, transats et parasols.',
    duration: '1 Séance',
    badge: null,
  },
  {
    category: 'Accès Piscine',
    name: 'Hebdomadaire',
    price: '15.000',
    desc: 'Accès libre à la piscine olympique pendant 7 jours consécutifs.',
    duration: '1 Semaine',
    badge: null,
  },
  {
    category: 'Accès Piscine',
    name: '2 Semaines',
    price: '30.000',
    desc: 'Accès libre à la piscine olympique pendant 14 jours consécutifs.',
    duration: '2 Semaines',
    badge: null,
  },
  {
    category: 'Accès Piscine',
    name: '3 Semaines',
    price: '40.000',
    desc: 'Accès libre à la piscine olympique pendant 21 jours consécutifs.',
    duration: '3 Semaines',
    badge: null,
  },
  {
    category: 'Accès Piscine',
    name: 'Mensuel',
    price: '50.000',
    desc: 'La formule mensuelle idéale pour les amateurs de natation régulière. 30 jours.',
    duration: '1 Mois',
    badge: 'Populaire',
  },
  {
    category: 'Accès Piscine',
    name: 'Trimestriel',
    price: '130.000',
    desc: 'Accès libre pendant 3 mois à nos installations de baignade de prestige.',
    duration: '3 Mois',
    badge: null,
  },
  {
    category: 'Accès Piscine',
    name: 'Semestriel',
    price: '230.000',
    desc: 'Accès libre pendant 6 mois. Idéal pour s\'entraîner tout au long des saisons.',
    duration: '6 Mois',
    badge: null,
  },
  {
    category: 'Accès Piscine',
    name: 'Annuel',
    price: '360.000',
    desc: 'Accès complet et illimité 365 jours de l\'année. Économisez sur la durée.',
    duration: '1 An',
    badge: 'Économique',
  },

  // GYM + PISCINE (COMBINE)
  {
    category: 'Gym + Piscine (Combiné)',
    name: 'Séance Combinée unique',
    price: '10.000',
    desc: 'Accès combiné à la salle de sport et à la piscine olympique pour une journée.',
    duration: '1 Séance',
    badge: 'Duo Journée',
  },
  {
    category: 'Gym + Piscine (Combiné)',
    name: 'Mensuel Combiné',
    price: '90.000',
    desc: 'Accès illimité à la gym et à la piscine olympique pendant 1 mois.',
    duration: '1 Mois',
    badge: 'Recommandé',
  },
  {
    category: 'Gym + Piscine (Combiné)',
    name: 'Trimestriel Combiné',
    price: '260.000',
    desc: 'Le compromis parfait. Accès illimité gym et piscine pendant 3 mois.',
    duration: '3 Mois',
    badge: null,
  },
  {
    category: 'Gym + Piscine (Combiné)',
    name: 'Semestriel Combiné',
    price: '475.000',
    desc: 'Accès illimité total à notre complexe sportif de prestige pendant 6 mois.',
    duration: '6 Mois',
    badge: null,
  },
  {
    category: 'Gym + Piscine (Combiné)',
    name: 'Annuel Combiné',
    price: '600.000',
    desc: 'Accès illimité absolu 365 jours de l\'année. Formule ultime Harmonie Gold.',
    duration: '1 An',
    badge: 'Prestige VIP',
  },

  // COURS DE NATATION
  {
    category: 'Cours de Natation',
    name: 'Séance de Natation coachée',
    price: '5.000',
    desc: 'Apprentissage ou perfectionnement des techniques de nage avec notre maître-nageur certifié.',
    duration: 'Séance unique',
    badge: 'Coach individuel',
  },
];

const categories = [
  'Tous',
  'Accès Piscine',
  'Gym + Piscine (Combiné)',
  'Cours de Natation'
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

const Piscine = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('Tous');
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [fadeState, setFadeState] = useState(true);

  const getPlansByCategory = (cat: string) => {
    return poolPlans.filter(p => p.category === cat);
  };

  const selectImage = (index: number) => {
    setFadeState(false);
    setTimeout(() => {
      setActiveIndex(index);
      setCurrentImage(index);
      setFadeState(true);
    }, 150);
  };

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  return (
    <div className="piscine-page spa-page">

      {/* ─── HERO ─── */}
      <section className="p-hero">
        <div className="p-hero-bg" style={{ backgroundImage: `url(${poolImages[0]})` }}></div>
        <div className="p-hero-overlay"></div>
        <div className="p-hero-content">
          <h1 className="p-hero-title">Piscine</h1>
          <p className="p-hero-sub">NAGE · DÉTENTE · LONGUEURS</p>
        </div>
      </section>

      {/* ─── TABS SELECTOR ─── */}
      <section className="sp-tabs-section">
        <div className="sp-tabs-container">
          {categories.map(cat => (
            <button
              key={cat}
              className={`sp-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ─── PRICING CARTE MENU ─── */}
      <section className="sp-soins-section">
        <div className="sp-menu-wrapper">
          {categories.filter(c => c !== 'Tous').map(cat => {
            const catPlans = getPlansByCategory(cat);
            const isVisible = selectedCategory === 'Tous' || selectedCategory === cat;

            if (catPlans.length === 0 || !isVisible) return null;

            const isCombo = cat.includes('Combiné');

            return (
              <div key={cat} className={`sp-menu-category-block ${isCombo ? 'club-combo-block' : ''}`}>
                <div className="sp-menu-category-title-wrap">
                  <span className="sp-menu-cat-sparkle"><Sparkles size={16} /></span>
                  <h2 className="sp-menu-category-title">{cat.toUpperCase()}</h2>
                  <span className="sp-menu-cat-sparkle"><Sparkles size={16} /></span>
                </div>
                <div className="sp-menu-items-grid">
                  {catPlans.map((plan, idx) => (
                    <article
                      key={idx}
                      className={`sp-menu-item-row ${plan.badge ? 'sp-menu-item-featured' : ''}`}
                    >
                      <div className="sp-menu-item-top">
                        <span className="sp-menu-item-name">
                          {plan.name}
                          {plan.badge && <span className="sp-menu-item-badge">{plan.badge}</span>}
                        </span>
                        <span className="sp-menu-item-dots"></span>
                        <span className="sp-menu-item-price">{plan.price} F</span>
                      </div>
                      <div className="sp-menu-item-bottom">
                        <span className="sp-menu-item-duration">{plan.duration}</span>
                        <p className="sp-menu-item-desc">{plan.desc}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── GALERIE SPA-STYLE ─── */}
      <section className="sp-gallery-section">
        <h2 className="sp-gallery-title">La Piscine en images</h2>

        <div className="bw-square-gallery-container">
          <div className="bw-square-gallery">
            {outerSlots.map((slot, idx) => {
              const isHighlighted = activeIndex === slot.imgIndex;
              return (
                <div
                  key={idx}
                  className={`bw-gallery-item ${isHighlighted ? 'active-slot' : ''}`}
                  style={{ gridArea: `${slot.row} / ${slot.col}` }}
                  onClick={() => selectImage(slot.imgIndex)}
                >
                  <img src={poolImages[slot.imgIndex]} alt={`Piscine ${slot.imgIndex + 1}`} loading="lazy" />
                  <div className="bw-gallery-hover"></div>
                </div>
              );
            })}

            <div
              className={`bw-gallery-center ${fadeState ? 'fade-in' : 'fade-out'}`}
              style={{ gridArea: '2 / 2 / 4 / 4' }}
              onClick={() => openLightbox(activeIndex)}
            >
              <img src={poolImages[activeIndex]} alt="Piscine active center" />
              <div className="bw-center-hover-overlay">
                <span className="bw-center-hover-text">Agrandir</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INFOS PRATIQUES ─── */}
      <Lightbox
        images={poolImages}
        currentIndex={currentImage}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImage}
        backgroundColor="rgba(24, 32, 48, 0.98)"
      />

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
              <Waves size={16} />
              <span>Vestiaires et douches à disposition</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Piscine;
