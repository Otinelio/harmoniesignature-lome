import React, { useState } from 'react';
import { Clock, Phone, Zap, Dumbbell, Sparkles } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import './Piscine.css';
import './Gym.css';
import logoGym from '../images/logo/logo_gym.png';
import gym2 from '../images/salles/gym-2.jpg';
import gym3 from '../images/salles/gym-3.jpg';
import gym4 from '../images/salles/gym-4.jpg';
import gym5 from '../images/salles/gym-5.jpg';
import gym6 from '../images/salles/gym-6.jpg';
import gym7 from '../images/salles/gym-7.jpg';

const gymImages = [
  gym2,
  gym3,
  gym4,
  gym5,
  gym6,
  gym7
];

const gymPlans = [
  // ACCES GYM
  {
    category: 'Accès Gym',
    name: 'Séance Unique',
    price: '6.000',
    desc: 'Accès libre à tous les équipements pour une séance unique sans engagement.',
    duration: '1 Séance',
    badge: null,
  },
  {
    category: 'Accès Gym',
    name: 'Abonnement Hebdomadaire',
    price: '15.000',
    desc: 'Accès illimité à la salle de sport pendant 7 jours consécutifs.',
    duration: '1 Semaine',
    badge: null,
  },
  {
    category: 'Accès Gym',
    name: 'Abonnement 2 Semaines',
    price: '30.000',
    desc: 'Accès illimité à l\'espace fitness pendant 14 jours consécutifs.',
    duration: '2 Semaines',
    badge: null,
  },
  {
    category: 'Accès Gym',
    name: 'Abonnement 3 Semaines',
    price: '40.000',
    desc: 'Accès illimité à l\'espace fitness pendant 21 jours consécutifs.',
    duration: '3 Semaines',
    badge: null,
  },
  {
    category: 'Accès Gym',
    name: 'Abonnement Mensuel',
    price: '50.000',
    desc: 'Formule idéale pour un entraînement régulier. Accès illimité pendant 30 jours.',
    duration: '1 Mois',
    badge: 'Populaire',
  },
  {
    category: 'Accès Gym',
    name: 'Abonnement Trimestriel',
    price: '130.000',
    desc: 'Accès illimité pendant 3 mois. Suivi et progression garantis.',
    duration: '3 Mois',
    badge: null,
  },
  {
    category: 'Accès Gym',
    name: 'Abonnement Semestriel',
    price: '230.000',
    desc: 'Accès illimité pendant 6 mois pour un engagement de santé à moyen terme.',
    duration: '6 Mois',
    badge: null,
  },
  {
    category: 'Accès Gym',
    name: 'Abonnement Annuel',
    price: '360.000',
    desc: 'Accès illimité pendant 1 an. La formule suprême pour un mode de vie sain.',
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
    name: 'Abonnement Mensuel Combiné',
    price: '90.000',
    desc: 'Accès illimité à la gym et à la piscine olympique pendant 1 mois.',
    duration: '1 Mois',
    badge: 'Recommandé',
  },
  {
    category: 'Gym + Piscine (Combiné)',
    name: 'Abonnement Trimestriel Combiné',
    price: '260.000',
    desc: 'Le compromis parfait. Accès illimité gym et piscine pendant 3 mois.',
    duration: '3 Mois',
    badge: null,
  },
  {
    category: 'Gym + Piscine (Combiné)',
    name: 'Abonnement Semestriel Combiné',
    price: '475.000',
    desc: 'Accès illimité total à notre complexe sportif de prestige pendant 6 mois.',
    duration: '6 Mois',
    badge: null,
  },
  {
    category: 'Gym + Piscine (Combiné)',
    name: 'Abonnement Annuel Combiné',
    price: '600.000',
    desc: 'Accès illimité absolu 365 jours de l\'année. Formule ultime Harmonie Gold.',
    duration: '1 An',
    badge: 'Prestige VIP',
  },

  // COURS & ACTIVITES
  {
    category: 'Cours & Activités',
    name: 'Séance de Cours Gym',
    price: '3.000',
    desc: 'Participation à une séance collective encadrée par nos coachs certifiés.',
    duration: 'Séance',
    badge: null,
  },
  {
    category: 'Cours & Activités',
    name: 'Abonnement Mensuel Cours Gym',
    price: '20.000',
    desc: 'Accès illimité aux cours collectifs de fitness et gym pendant un mois.',
    duration: '1 Mois',
    badge: null,
  },
  {
    category: 'Cours & Activités',
    name: 'Cours de Combat',
    price: '30.000',
    desc: 'Soin de self-défense, boxe et arts martiaux encadrés par des professionnels.',
    duration: 'Tarif Mensuel',
    badge: 'Nouveau',
  },
  {
    category: 'Cours & Activités',
    name: 'Aqua-Gym',
    price: '30.000',
    desc: 'Gymnastique aquatique tonifiante et douce pour les articulations.',
    duration: 'Tarif Mensuel',
    badge: null,
  },
];

const categories = [
  'Tous',
  'Accès Gym',
  'Gym + Piscine (Combiné)',
  'Cours & Activités'
];

const Gym = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const getPlansByCategory = (cat: string) => {
    return gymPlans.filter(p => p.category === cat);
  };

  const formatWhatsAppMessage = (name: string, price: string, cat: string) => {
    return `https://wa.me/22892921889?text=Bonjour%20Harmonie%20Signature%2C%20je%20souhaite%20m'abonner%20%C3%A0%20la%20formule%20%22${encodeURIComponent(name)}%22%20de%20cat%C3%A9gorie%20${encodeURIComponent(cat)}%20au%20prix%20de%20${encodeURIComponent(price)}%20FCFA.`;
  };

  return (
    <div className="gym-page">

      {/* ─── HERO ─── */}
      <section className="p-hero">
        <div className="p-hero-bg" style={{ backgroundImage: `url(${gymImages[0]})` }}></div>
        <div className="p-hero-overlay"></div>
        <div className="p-hero-content">
          <div className="spa-hero-brand">
            <img src={logoGym} alt="Gym Harmonie Signature" className="spa-hero-dept-logo" />
          </div>
          <div className="spa-hero-info-bar">
            <span><Clock size={14} /> LUN–SAM 06H–22H</span>
            <span><Phone size={14} /> +228 92 92 18 89</span>
          </div>
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
                          S'abonner
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
              <Dumbbell size={16} />
              <span>Coaching personnalisé sur place</span>
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
