import React, { useState, useEffect } from 'react';
import { getPoolPlans, PoolPlan, getDepartments, Department } from '../utils/storage';
import { Phone, Waves, Sun, Sparkles } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import './Piscine.css';
import './Spa.css';






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
  const [poolPlans, setPoolPlans] = useState<PoolPlan[]>([]);
  const [department, setDepartment] = useState<Department | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPoolPlans();
      setPoolPlans(data);
      const deps = await getDepartments();
      setDepartment(deps.find(d => d.id === 'piscine') || null);
    };
    fetchData();
  }, []);
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
        <div className="p-hero-bg" style={{ backgroundImage: `url(${(department?.images || [])[0]})` }}></div>
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
              let images = department?.images || [];
              if (typeof images === 'string') {
                try { images = JSON.parse(images); } catch(e) { images = []; }
              }
              const safeImgIndex = images.length > 0 ? slot.imgIndex % images.length : 0;
              const isHighlighted = activeIndex === slot.imgIndex;
              return (
                <div
                  key={idx}
                  className={`bw-gallery-item ${isHighlighted ? 'active-slot' : ''}`}
                  style={{ gridArea: `${slot.row} / ${slot.col}` }}
                  onClick={() => selectImage(slot.imgIndex)}
                >
                  {images.length > 0 && <img src={images[safeImgIndex]} alt={`Piscine ${slot.imgIndex + 1}`} loading="lazy" />}
                  <div className="bw-gallery-hover"></div>
                </div>
              );
            })}

            <div
              className={`bw-gallery-center ${fadeState ? 'fade-in' : 'fade-out'}`}
              style={{ gridArea: '2 / 2 / 4 / 4' }}
              onClick={() => {
                let images = department?.images || [];
                if (typeof images === 'string') {
                  try { images = JSON.parse(images); } catch(e) { images = []; }
                }
                openLightbox(images.length > 0 ? activeIndex % images.length : 0);
              }}
            >
              {(() => {
                let imgs = department?.images || [];
                if (typeof imgs === 'string') {
                  try { imgs = JSON.parse(imgs); } catch(e) { imgs = []; }
                }
                if (!Array.isArray(imgs) || imgs.length === 0) return null;
                const safeIndex = activeIndex % imgs.length;
                return <img src={imgs[safeIndex]} alt="Piscine active center" loading="lazy" />;
              })()}
              <div className="bw-center-hover-overlay">
                <span className="bw-center-hover-text">Agrandir</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INFOS PRATIQUES ─── */}
      <Lightbox
        images={(department?.images || [])}
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
