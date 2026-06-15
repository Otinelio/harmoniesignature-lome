import React, { useState, useEffect } from 'react';
import { getSpaServices, SpaService, getDepartments, Department } from '../utils/storage';
import { createPortal } from 'react-dom';
import { Clock, Phone, Sparkles, CalendarCheck, ShoppingBag, Plus, Minus, X, ChevronDown, Send } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import './Piscine.css';
import './Spa.css';


// (department?.images || []) indices for lightbox


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

interface Soin {
  category: string;
  name: string;
  duration: string;
  desc: string;
  price: string;
}

interface CartItem extends Soin {
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
const priceToNumber = (p: string) => parseInt(p.replace(/\./g, ''), 10);
const formatPrice = (n: number) => n.toLocaleString('fr-FR').replace(/\s/g, '.') + ' FCFA';

const Spa = () => {
  const [soins, setSoins] = useState<Soin[]>([]);
  const [department, setDepartment] = useState<Department | null>(null);
  useEffect(() => {
    // Assuming getSpaServices is synchronous for now, but ready for async
    const fetchServices = async () => {
      const data = await getSpaServices();
      setSoins(data as Soin[]);
      const deps = await getDepartments();
      setDepartment(deps.find((d: Department) => d.id === 'spa') || null);
    };
    fetchServices();
  }, []);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  // Panier
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Rotating square gallery states
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);
  const [timerTrigger, setTimerTrigger] = useState(0);

  // Automatic 4-second sequential rotation
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const len = (department?.images || []).length;
        if (len === 0) return 0;
        return (prev + 1) % len;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, [timerTrigger, department]);

  React.useEffect(() => {
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
  const addToCart = (soin: Soin) => {
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
          <img src={'/images/logo/logo_spa.png'} alt="Spa Harmonie Signature" className="bw-hero-dept-logo" />
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
                  {images.length > 0 && <img src={images[safeImgIndex]} alt={`Spa ${idx + 1}`} loading="lazy" />}
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
                return <img src={imgs[safeIndex]} alt="Spa Active Center" loading="lazy" />;
              })()}
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

export default Spa;
