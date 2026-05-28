import React, { useState } from 'react';
import { Phone, Waves, Clock, Sun, Sparkles } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import './Piscine.css';

const poolImages = [
  'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1400&auto=format&fit=crop',
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

const Piscine = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const getPlansByCategory = (cat: string) => {
    return poolPlans.filter(p => p.category === cat);
  };

  const formatWhatsAppMessage = (name: string, price: string, cat: string) => {
    return `https://wa.me/22892921889?text=Bonjour%20Harmonie%20Signature%2C%20je%20souhaite%20obtenir%20des%20informations%20et%20m'inscrire%20pour%20la%20formule%20%22${encodeURIComponent(name)}%22%20de%20cat%C3%A9gorie%20${encodeURIComponent(cat)}%20au%20prix%20de%20${encodeURIComponent(price)}%20FCFA%20pour%20la%20Piscine.`;
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
                    <div 
                      key={idx} 
                      className={`sp-menu-item-row ${plan.badge ? 'sp-menu-item-featured' : ''}`}
                      onClick={() => window.open(formatWhatsAppMessage(plan.name, plan.price, plan.category), '_blank')}
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
                        <a 
                          href={formatWhatsAppMessage(plan.name, plan.price, plan.category)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sp-menu-item-book"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Info via WhatsApp
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
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
              <Waves size={16} />
              <span>Vestiaires et douches à disposition</span>
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
