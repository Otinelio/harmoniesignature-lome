import React, { useState } from 'react';
import { Clock, Phone, Sparkles, CalendarCheck } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import './Piscine.css';
import './Spa.css';
import logoSpa from '../images/logo/logo_spa.png';

import spa1 from '../images/spa/spa-1.jpg';
import spa2 from '../images/spa/spa-2.jpg';
import spa3 from '../images/spa/spa-3.jpg';
import spa4 from '../images/spa/spa-4.jpg';
import spa5 from '../images/spa/spa-5.jpg';
import spa6 from '../images/spa/spa-6.jpg';
import spa7 from '../images/spa/spa-7.jpg';
import spa8 from '../images/spa/spa-8.jpg';
import spa9 from '../images/spa/spa-9.jpg';
import spa10 from '../images/spa/spa-10.jpg';
import spa11 from '../images/spa/spa-11.jpg';
import spa12 from '../images/spa/spa-12.jpg';
import spa13 from '../images/spa/spa-13.jpg';
import spa14 from '../images/spa/spa-14.jpg';
import spa15 from '../images/spa/spa-15.jpg';

// spaImages indices for lightbox
const spaImages = [
  spa1,
  spa2,
  spa3,
  spa4,
  spa5,
  spa6,
  spa7,
  spa8,
  spa9,
  spa10,
  spa11,
  spa12,
  spa13,
  spa14,
  spa15,
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

const soins = [
  // SOINS DU CORPS
  {
    category: 'Soins du Corps',
    name: 'Massage Aromathérapie 1h',
    duration: '60 min',
    desc: 'Soin relaxant profond associant les vertus thérapeutiques des huiles essentielles.',
    price: '30.000',
  },
  {
    category: 'Soins du Corps',
    name: 'Relax Touche 30min',
    duration: '30 min',
    desc: 'Massage ciblé rapide pour libérer les tensions accumulées.',
    price: '15.000',
  },
  {
    category: 'Soins du Corps',
    name: 'Relax Touche 1h',
    duration: '60 min',
    desc: 'Massage relaxant complet pour apaiser le corps et l\'esprit.',
    price: '25.000',
  },
  {
    category: 'Soins du Corps',
    name: 'Massage Pierres Chaudes',
    duration: '60 min',
    desc: 'Massage réconfortant avec des pierres de basalte volcaniques chauffées.',
    price: '40.000',
  },
  {
    category: 'Soins du Corps',
    name: 'Four Hands 50min',
    duration: '50 min',
    desc: 'Une harmonie parfaite réalisée par deux praticiens pour une relaxation absolue.',
    price: '40.000',
  },
  {
    category: 'Soins du Corps',
    name: 'Escale Plantaire 30min',
    duration: '30 min',
    desc: 'Massage relaxant des pieds inspiré de la réflexologie plantaire.',
    price: '17.000',
  },
  {
    category: 'Soins du Corps',
    name: 'Duo Force Vital 1h',
    duration: '60 min',
    desc: 'Partagez un moment d\'énergie et de complicité à deux en cabine double.',
    price: '55.000',
  },
  {
    category: 'Soins du Corps',
    name: 'Duo Toucher Apaisant 1h',
    duration: '60 min',
    desc: 'Massage relaxant à deux pour une évasion sensorielle partagée.',
    price: '40.000',
  },
  {
    category: 'Soins du Corps',
    name: 'Duo Pierres Chaudes 1h30',
    duration: '90 min',
    desc: 'Expérience sensorielle divine à deux avec des pierres volcaniques chaudes.',
    price: '70.000',
  },
  {
    category: 'Soins du Corps',
    name: 'Force Vital 30min',
    duration: '30 min',
    desc: 'Soin dynamisant rapide pour relancer l\'énergie corporelle.',
    price: '20.000',
  },
  {
    category: 'Soins du Corps',
    name: 'Force Vital 1h',
    duration: '60 min',
    desc: 'Soin énergétique complet pour retrouver vitalité et équilibre.',
    price: '30.000',
  },

  // GOMMAGE
  {
    category: 'Gommage',
    name: 'Gommage du Corps 30min',
    duration: '30 min',
    desc: 'Exfoliation douce pour éliminer les cellules mortes et sublimer la peau.',
    price: '22.000',
  },

  // EPILATION A LA CIRE
  {
    category: 'Épilation à la Cire',
    name: 'Épilation Jambes, Bras, Maillot Intégral & Aisselles',
    duration: 'Prestation',
    desc: 'Formule complète pour une douceur absolue de tout le corps.',
    price: '32.000',
  },
  {
    category: 'Épilation à la Cire',
    name: 'Épilation Jambes, Maillot Intégral & Aisselles',
    duration: 'Prestation',
    desc: 'Formule corps essentielle pour une peau lisse et douce.',
    price: '26.000',
  },
  {
    category: 'Épilation à la Cire',
    name: 'Épilation Jambes, Bras & Aisselles',
    duration: 'Prestation',
    desc: 'Formule douce pour les zones visibles du corps.',
    price: '22.000',
  },
  {
    category: 'Épilation à la Cire',
    name: 'Cire Jambes Complètes',
    duration: 'Prestation',
    desc: 'Épilation soignée de toute la longueur des jambes.',
    price: '12.000',
  },
  {
    category: 'Épilation à la Cire',
    name: 'Cire Jambes Demi',
    duration: 'Prestation',
    desc: 'Épilation rapide des demi-jambes.',
    price: '6.000',
  },
  {
    category: 'Épilation à la Cire',
    name: 'Cire Bras Completes',
    duration: 'Prestation',
    desc: 'Épilation complète des bras pour une douceur uniforme.',
    price: '7.000',
  },
  {
    category: 'Épilation à la Cire',
    name: 'Cire Bras Demi',
    duration: 'Prestation',
    desc: 'Épilation des avant-bras ou demi-bras.',
    price: '4.000',
  },
  {
    category: 'Épilation à la Cire',
    name: 'Cire Maillot Integral Completes',
    duration: 'Prestation',
    desc: 'Épilation intégrale professionnelle du maillot.',
    price: '12.000',
  },
  {
    category: 'Épilation à la Cire',
    name: 'Cire Maillot Integral Demi',
    duration: 'Prestation',
    desc: 'Épilation classique ou demi-maillot.',
    price: '6.000',
  },
  {
    category: 'Épilation à la Cire',
    name: 'Torse Femme',
    duration: 'Prestation',
    desc: 'Épilation douce et nette du torse pour femme.',
    price: '10.000',
  },
  {
    category: 'Épilation à la Cire',
    name: 'Torse Homme',
    duration: 'Prestation',
    desc: 'Épilation nette et soignée du torse pour homme.',
    price: '15.000',
  },
  {
    category: 'Épilation à la Cire',
    name: 'Moustache',
    duration: 'Prestation',
    desc: 'Épilation précise de la lèvre supérieure.',
    price: '3.000',
  },
  {
    category: 'Épilation à la Cire',
    name: 'Aisselles',
    duration: 'Prestation',
    desc: 'Épilation classique des aisselles.',
    price: '5.000',
  },
  {
    category: 'Épilation à la Cire',
    name: 'Visage Complet',
    duration: 'Prestation',
    desc: 'Épilation intégrale du visage (sourcils, lèvre, menton, joues).',
    price: '10.000',
  },
  {
    category: 'Épilation à la Cire',
    name: 'Sourcil',
    duration: 'Prestation',
    desc: 'Restructuration et épilation précise de la ligne des sourcils.',
    price: '5.000',
  },
  {
    category: 'Épilation à la Cire',
    name: 'Dos Femme Complet',
    duration: 'Prestation',
    desc: 'Épilation soignée de l\'intégralité du dos pour femme.',
    price: '10.000',
  },
  {
    category: 'Épilation à la Cire',
    name: 'Dos Homme Complet',
    duration: 'Prestation',
    desc: 'Épilation de l\'intégralité du dos pour homme.',
    price: '12.000',
  },
  {
    category: 'Épilation à la Cire',
    name: 'Fesse Femme',
    duration: 'Prestation',
    desc: 'Épilation douce de la zone des fessiers pour femme.',
    price: '10.000',
  },
  {
    category: 'Épilation à la Cire',
    name: 'Fesse Homme',
    duration: 'Prestation',
    desc: 'Épilation professionnelle de la zone des fessiers pour homme.',
    price: '12.000',
  },

  // BEAUTE DES MAINS/PIEDS
  {
    category: 'Beauté des Mains & Pieds',
    name: 'Manucure',
    duration: 'Soin',
    desc: 'Mise en beauté complète des mains : limage, cuticules et hydratation.',
    price: '7.000',
  },
  {
    category: 'Beauté des Mains & Pieds',
    name: 'Pédicure',
    duration: 'Soin',
    desc: 'Soin complet des pieds pour retrouver une peau douce et des ongles parfaits.',
    price: '10.000',
  },
  {
    category: 'Beauté des Mains & Pieds',
    name: 'Manucure et Pédicure',
    duration: 'Soin',
    desc: 'Formule combinée pour une beauté totale des mains et des pieds.',
    price: '15.000',
  },
  {
    category: 'Beauté des Mains & Pieds',
    name: 'Vernis Semi Permanent Mains',
    duration: 'Soin',
    desc: 'Pose de vernis semi-permanent longue tenue pour les mains.',
    price: '5.000',
  },
  {
    category: 'Beauté des Mains & Pieds',
    name: 'Vernis Semi Permanent Pieds',
    duration: 'Soin',
    desc: 'Pose de vernis semi-permanent longue tenue pour les pieds.',
    price: '8.000',
  },
  {
    category: 'Beauté des Mains & Pieds',
    name: 'Pose Vernis Mains/Pieds',
    duration: 'Soin',
    desc: 'Pose de vernis à ongles classique de haute qualité.',
    price: '3.000',
  },
  {
    category: 'Beauté des Mains & Pieds',
    name: 'Pose Capsule',
    duration: 'Soin',
    desc: 'Extension des ongles avec capsules pour un rendu parfait et résistant.',
    price: '10.000',
  },
  {
    category: 'Beauté des Mains & Pieds',
    name: 'Dépose',
    duration: 'Soin',
    desc: 'Retrait soigné et respectueux du vernis semi-permanent ou des capsules.',
    price: '5.000',
  },
  {
    category: 'Beauté des Mains & Pieds',
    name: 'Soin Jelly Main ou Pieds',
    duration: 'Soin',
    desc: 'Bain de gelée sensorielle hydratante et relaxante.',
    price: '4.000',
  },

  // JACUZZI - SAUNA
  {
    category: 'Jacuzzi & Sauna',
    name: 'Jacuzzi 30min/Personne',
    duration: '30 min',
    desc: 'Bain bouillonnant relaxant individuel dans notre espace bien-être.',
    price: '10.000',
  },
  {
    category: 'Jacuzzi & Sauna',
    name: 'Sauna 30min/Personne',
    duration: '30 min',
    desc: 'Bain de chaleur sèche bienfaisant pour éliminer les toxines.',
    price: '10.000',
  },
  {
    category: 'Jacuzzi & Sauna',
    name: 'Jacuzzi 1h/Personne',
    duration: '60 min',
    desc: 'Séance prolongée de balnéothérapie relaxante pour une détente totale.',
    price: '18.000',
  },
  {
    category: 'Jacuzzi & Sauna',
    name: 'Sauna 1h/Personne',
    duration: '60 min',
    desc: 'Séance complète de détoxification et relaxation par la chaleur sèche.',
    price: '18.000',
  },
];

const categories = [
  'Tous',
  'Soins du Corps',
  'Gommage',
  'Épilation à la Cire',
  'Beauté des Mains & Pieds',
  'Jacuzzi & Sauna'
];

const Spa = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  // Rotating square gallery states
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);
  const [timerTrigger, setTimerTrigger] = useState(0);

  // Automatic 4-second sequential rotation to avoid repeated images too often
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % spaImages.length);
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


  // Group soins by category for structured layout
  const getSoinsByCategory = (cat: string) => {
    return soins.filter(s => s.category === cat);
  };


  return (
    <div className="spa-page">

      {/* ─── HERO (identique au Bowling/Restauration) ─── */}
      <section className="bw-hero">
        <div className="bw-hero-bg"></div>
        <div className="bw-hero-overlay"></div>
        <div className="bw-hero-content bw-hero-logo-only">
          <img src={logoSpa} alt="Spa Harmonie Signature" className="bw-hero-dept-logo" />
        </div>
      </section>

      {/* ─── CATEGORY TABS SELECTOR ─── */}
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

      {/* ─── SOINS CARTE MENU ─── */}
      <section className="sp-soins-section">
        <div className="sp-menu-wrapper">
          {categories.filter(c => c !== 'Tous').map(cat => {
            const catSoins = getSoinsByCategory(cat);
            const isVisible = selectedCategory === 'Tous' || selectedCategory === cat;

            if (catSoins.length === 0 || !isVisible) return null;

            return (
              <div key={cat} className="sp-menu-category-block">
                <div className="sp-menu-category-title-wrap">
                  <span className="sp-menu-cat-sparkle"><Sparkles size={16} /></span>
                  <h2 className="sp-menu-category-title">{cat.toUpperCase()}</h2>
                  <span className="sp-menu-cat-sparkle"><Sparkles size={16} /></span>
                </div>
                <div className="sp-menu-items-grid">
                  {catSoins.map((soin, idx) => (
                    <article key={idx} className="sp-menu-item-row">
                      <div className="sp-menu-item-top">
                        <span className="sp-menu-item-name">{soin.name}</span>
                        <span className="sp-menu-item-dots"></span>
                        <span className="sp-menu-item-price">{soin.price} FCFA</span>
                      </div>
                      <div className="sp-menu-item-bottom">
                        <span className="sp-menu-item-duration">{soin.duration}</span>
                        <p className="sp-menu-item-desc">{soin.desc}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── GALERIE CARRÉE ROTATIVE ─── */}
      <section className="sp-gallery-section">
        <h2 className="sp-gallery-title">Le Spa en images</h2>

        <div className="bw-square-gallery-container">
          <div className="bw-square-gallery">
            {/* Perimeter Slots (12 unique image positions) */}
            {outerSlots.map((slot, idx) => {
              const isHighlighted = activeIndex === slot.imgIndex;
              return (
                <div
                  key={idx}
                  className={`bw-gallery-item ${isHighlighted ? 'active-slot' : ''}`}
                  style={{ gridArea: `${slot.row} / ${slot.col}` }}
                  onClick={() => selectImage(slot.imgIndex)}
                >
                  <img src={spaImages[slot.imgIndex]} alt={`Spa Perimeter ${idx + 1}`} loading="lazy" />
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
              <img src={spaImages[activeIndex]} alt="Spa Active Center" />
              <div className="bw-center-hover-overlay">
                <span className="bw-center-hover-text">Agrandir</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INFOS PRATIQUES ─── */}
      <section className="sp-infos-section">
        <div className="sp-infos-card">
          <div className="sp-infos-icon-top">
            <Sparkles size={28} />
          </div>
          <p className="sp-infos-heading">Informations pratiques</p>
          <div className="sp-infos-items">
            <div className="sp-info-item">
              <Clock size={16} />
              <span>Ouvert 7j/7 de 09h00 à 21h00</span>
            </div>
            <div className="sp-info-sep"></div>
            <div className="sp-info-item">
              <Phone size={16} />
              <span>Contact : +228 90 00 04 40</span>
            </div>
            <div className="sp-info-sep"></div>
            <div className="sp-info-item">
              <CalendarCheck size={16} />
              <span>Réservation 24h à l\'avance</span>
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        images={spaImages}
        currentIndex={currentImage}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImage}
        backgroundColor="rgba(24, 32, 48, 0.98)"
      />
    </div>
  );
};

export default Spa;
