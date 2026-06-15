import React, { useState, useEffect } from 'react';
import { getGymPlans, GymPlan, getDepartments, Department } from '../utils/storage';
import { Clock, Phone, Zap, Dumbbell, Sparkles } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import './Piscine.css';
import './Gym.css';



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



const categories = [
  'Tous',
  'Accès Gym',
  'Gym + Piscine (Combiné)',
  'Cours & Activités'
];

const Gym = () => {
  const [gymPlans, setGymPlans] = useState<GymPlan[]>([]);
  const [department, setDepartment] = useState<Department | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getGymPlans();
      setGymPlans(data);
      const deps = await getDepartments();
      setDepartment(deps.find(d => d.id === 'gym') || null);
    };
    fetchData();
  }, []);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Tous');

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

  const getPlansByCategory = (cat: string) => {
    return gymPlans.filter(p => p.category === cat);
  };

  const formatWhatsAppMessage = (name: string, price: string, cat: string) => {
    return `https://wa.me/22896297777?text=Bonjour%20Platinum%20Fitness%2C%20je%20souhaite%20obtenir%20des%20informations%20et%20m'inscrire%20pour%20la%20formule%20%22${encodeURIComponent(name)}%22%20de%20cat%C3%A9gorie%20${encodeURIComponent(cat)}%20au%20prix%20de%20${encodeURIComponent(price)}%20FCFA.`;
  };

  return (
    <div className="gym-page">

      {/* ─── HERO (identique au Bowling/Restauration) ─── */}
      <section className="bw-hero">
        <div className="bw-hero-bg"></div>
        <div className="bw-hero-overlay"></div>
        <div className="bw-hero-content bw-hero-logo-only">
          <img src={'/images/logo/logo_gym.png'} alt="Gym Harmonie Signature" className="bw-hero-dept-logo" />
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
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── GALERIE CARRÉE ROTATIVE ─── */}
      <section className="sp-gallery-section">
        <h2 className="sp-gallery-title">La Gym en images</h2>
        
        <div className="bw-square-gallery-container">
          <div className="bw-square-gallery">
            {/* Perimeter Slots (12 images mapped to 10 actual files) */}
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
                  {images.length > 0 && <img src={images[safeImgIndex]} alt={`Gym Perimeter ${idx + 1}`} loading="lazy" />}
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
              {(department?.images || []).length > 0 && <img src={(department?.images || [])[activeIndex % (department?.images.length || 1)]} alt="Gym Active Center" />}
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
              <span>Contact : +228 96 29 77 77</span>
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
        images={(department?.images || [])}
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
