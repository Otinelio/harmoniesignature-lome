import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Clock, Phone, Sparkles, CalendarCheck, ShoppingBag, Plus, Minus, X, ChevronDown, Send } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import { getSpaServices, SpaService } from '../utils/storage';
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
  spa1, spa2, spa3, spa4, spa5, spa6, spa7, spa8,
  spa9, spa10, spa11, spa12, spa13, spa14, spa15,
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

interface CartItem extends SpaService {
  qty: number;
}

const categories = [
  'Tous',
  'Soins du Corps',
  'Gommage',
  'Épilation à la Cire',
  'Beauté des Mains & Pieds',
  'Jacuzzi & Sauna'
];

// Helpers
const priceToNumber = (p: string) => parseInt(p.replace(/\./g, '').replace(' FCFA', ''), 10);
const formatPrice = (n: number) => n.toLocaleString('fr-FR').replace(/\s/g, '.') + ' FCFA';

const Spa = () => {
  const [soins, setSoins] = useState<SpaService[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  // Panier
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    setSoins(getSpaServices());
  }, []);

  // Rotating square gallery states
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);
  const [timerTrigger, setTimerTrigger] = useState(0);

  // Automatic 4-second sequential rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % spaImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [timerTrigger]);

  useEffect(() => {
    setFadeState(false);
    const timeout = setTimeout(() => setFadeState(true), 50);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  const selectImage = (index: number) => {
    setActiveIndex(index);
    setTimerTrigger((prev) => prev + 1);
  };

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  // Panier fonctions
  const addToCart = (soin: SpaService) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === soin.name);
      if (existing) {
        return prev.map(i => i.name === soin.name ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...soin, qty: 1 }];
    });
    setCartOpen(true);
  };

  const updateQty = (name: string, delta: number) => {
    setCart(prev =>
      prev.map(i => i.name === name ? { ...i, qty: Math.max(0, i.qty + delta) } : i)
        .filter(i => i.qty > 0)
    );
  };

  const removeItem = (name: string) => {
    setCart(prev => prev.filter(i => i.name !== name));
  };

  const cartTotal = cart.reduce((sum, i) => sum + priceToNumber(i.price) * i.qty, 0);
  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  const sendWhatsApp = () => {
    const lines = cart.map(i => `• ${i.name} x${i.qty} — ${formatPrice(priceToNumber(i.price) * i.qty)}`);
    const msg = `Bonjour Lotus Spa 🌸\n\nJe souhaite réserver les soins suivants :\n\n${lines.join('\n')}\n\n*Total : ${formatPrice(cartTotal)}*\n\nMerci de confirmer ma réservation.`;
    window.open(`https://wa.me/22890000440?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const getSoinsByCategory = (cat: string) => soins.filter(s => s.category === cat);

  return (
    <div className="spa-page">

      {/* ─── HERO ─── */}
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
                  {catSoins.map((soin, idx) => {
                    const inCart = cart.find(i => i.name === soin.name);
                    return (
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
                        {/* ─── BOUTON AJOUT PANIER ─── */}
                        <div className="sp-cart-action">
                          {inCart ? (
                            <div className="sp-qty-control">
                              <button
                                className="sp-qty-btn"
                                onClick={() => updateQty(soin.name, -1)}
                                aria-label="Diminuer quantité"
                              >
                                <Minus size={13} />
                              </button>
                              <span className="sp-qty-value">{inCart.qty}</span>
                              <button
                                className="sp-qty-btn"
                                onClick={() => updateQty(soin.name, 1)}
                                aria-label="Augmenter quantité"
                              >
                                <Plus size={13} />
                              </button>
                            </div>
                          ) : (
                            <button
                              className="sp-add-btn"
                              onClick={() => addToCart(soin)}
                              aria-label={`Ajouter ${soin.name} au panier`}
                            >
                              <Plus size={14} />
                              <span>Ajouter</span>
                            </button>
                          )}
                        </div>
                      </article>
                    );
                  })}
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
            {outerSlots.map((slot, idx) => {
              const isHighlighted = activeIndex === slot.imgIndex;
              return (
                <div
                  key={idx}
                  className={`bw-gallery-item ${isHighlighted ? 'active-slot' : ''}`}
                  style={{ gridArea: `${slot.row} / ${slot.col}` }}
                  onClick={() => selectImage(slot.imgIndex)}
                >
                  <img src={spaImages[slot.imgIndex]} alt={`Spa ${idx + 1}`} loading="lazy" />
                  <div className="bw-gallery-hover"></div>
                </div>
              );
            })}
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
              <span>Réservation 24h à l'avance</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PANIER FLOTTANT
      ═══════════════════════════════════════ */}
      {cartCount > 0 && createPortal(
        <div className={`spa-cart-float ${cartOpen ? 'cart-open' : ''}`}>

          {/* Badge absolu (visible en mode bouton fermé) */}
          <span className="spa-cart-badge-float" aria-hidden="true">{cartCount}</span>

          {/* Toggle header */}
          <button
            className="spa-cart-header"
            onClick={() => setCartOpen(o => !o)}
            aria-expanded={cartOpen}
          >
            <div className="spa-cart-header-left">
              <ShoppingBag size={18} />
              {cartOpen && <span>Ma sélection</span>}
              {cartOpen && <span className="spa-cart-badge">{cartCount}</span>}
            </div>
            <div className="spa-cart-header-right">
              <span className="spa-cart-total-mini">{formatPrice(cartTotal)}</span>
              <ChevronDown size={16} className={`spa-cart-chevron ${cartOpen ? 'rotated' : ''}`} />
            </div>
          </button>

          {/* Items list */}
          {cartOpen && (
            <div className="spa-cart-body">
              <ul className="spa-cart-items">
                {cart.map(item => (
                  <li key={item.name} className="spa-cart-item">
                    <div className="spa-cart-item-info">
                      <span className="spa-cart-item-name">{item.name}</span>
                      <span className="spa-cart-item-unit">{formatPrice(priceToNumber(item.price))}</span>
                    </div>
                    <div className="spa-cart-item-controls">
                      <button className="sp-qty-btn sm" onClick={() => updateQty(item.name, -1)}><Minus size={11} /></button>
                      <span className="sp-qty-value">{item.qty}</span>
                      <button className="sp-qty-btn sm" onClick={() => updateQty(item.name, 1)}><Plus size={11} /></button>
                      <button className="spa-cart-remove" onClick={() => removeItem(item.name)} aria-label="Supprimer"><X size={13} /></button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="spa-cart-footer">
                <div className="spa-cart-total-row">
                  <span>Total estimé</span>
                  <strong>{formatPrice(cartTotal)}</strong>
                </div>
                <button className="spa-cart-send-btn" onClick={sendWhatsApp}>
                  <Send size={15} />
                  <span>Réserver via WhatsApp</span>
                </button>
              </div>
            </div>
          )}
        </div>,
        document.body
      )}

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
