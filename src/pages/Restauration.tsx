import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ShoppingCart, Plus, Minus, Trash2, X, MessageCircle, Phone, ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { getRestaurants, Restaurant, MenuItem, CartItem, getCart, saveCart } from '../utils/storage';
import './Restauration.css';

const Restauration = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [activeTab, setActiveTab] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  
  // Checkout form
  const [checkoutName, setCheckoutName] = useState('');
  const [checkoutTime, setCheckoutTime] = useState('19:00');

  useEffect(() => {
    setRestaurants(getRestaurants());
  }, []);

  useEffect(() => {
    if (restaurants.length > 0) {
      const activeRestId = restaurants[activeTab].id;
      setCart(getCart(activeRestId));
    }
  }, [activeTab, restaurants]);

  // Handle saving cart
  useEffect(() => {
    if (restaurants.length > 0) {
      saveCart(restaurants[activeTab].id, cart);
    }
  }, [cart, activeTab, restaurants]);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart(prev => {
      return prev.map(i => {
        if (i.id === itemId) {
          const newQ = i.quantity + delta;
          return { ...i, quantity: newQ };
        }
        return i;
      }).filter(i => i.quantity > 0);
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => prev.filter(i => i.id !== itemId));
  };

  const sendWhatsAppOrder = () => {
    if (cart.length === 0 || !checkoutName) return;
    
    const rest = restaurants[activeTab];
    let orderText = `Bonjour Harmonie Signature%0ACommande au ${rest.name} :%0A%0A`;
    
    let total = 0;
    cart.forEach(item => {
      orderText += `- ${item.name} x${item.quantity} — ${item.price * item.quantity} FCFA%0A`;
      total += item.price * item.quantity;
    });
    
    orderText += `%0ASous-total : ${total} FCFA%0APrénom : ${checkoutName}%0AHeure souhaitée : ${checkoutTime}`;
    
    window.open(`https://wa.me/${rest.whatsapp}?text=${orderText}`, '_blank');
    setCart([]);
    setCartOpen(false);
  };

  if (restaurants.length === 0) return null;

  const currentRest = restaurants[activeTab];
  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Fallback images
  const heroImages = [
    'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544025162-811114b30e01?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop'
  ];

  // Cart floating button + popup rendered via portal so they escape the transform parent
  const cartPortal = createPortal(
    <>
      {/* FLOATING CART BUTTON */}
      <button className="floating-cart-btn" onClick={() => setCartOpen(true)}>
        <ShoppingCart size={22} color="#0C1018" />
        {cartCount > 0 && <span className="cart-badge bounce">{cartCount}</span>}
      </button>

      {/* CART POPUP */}
      <div className={`cart-overlay ${cartOpen ? 'open' : ''}`} onClick={() => setCartOpen(false)}></div>
      <div className={`cart-drawer ${cartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <div>
            <h3 className="cart-rest-name">{currentRest.name}</h3>
            <span className="cart-subtitle">COMMANDE EN COURS</span>
          </div>
          <button className="cart-close" onClick={() => setCartOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <ShoppingCart size={48} />
              <p>Votre sélection est vide</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img" style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">{(item.price * item.quantity).toLocaleString('fr-FR')} FCFA</div>
                  <div className="cart-item-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}><Minus size={14} /></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}><Plus size={14} /></button>
                  </div>
                </div>
                <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-row">
              <span>Sous-total</span>
              <span className="cart-total-price">{cartTotal.toLocaleString('fr-FR')} FCFA</span>
            </div>
            
            <div className="cart-form">
              <input 
                type="text" 
                placeholder="Prénom" 
                value={checkoutName} 
                onChange={e => setCheckoutName(e.target.value)} 
                required 
              />
              <input 
                type="time" 
                value={checkoutTime} 
                onChange={e => setCheckoutTime(e.target.value)} 
                required 
              />
            </div>

            <button 
              className="checkout-btn" 
              onClick={sendWhatsAppOrder}
              disabled={!checkoutName}
            >
              Commander via WhatsApp <MessageCircle size={18} />
            </button>
          </div>
        )}
      </div>
    </>,
    document.body
  );

  return (
    <div className="restauration-page">
      <section className="rest-hero-banner">
        <div className="rest-hero-bg" style={{ backgroundImage: `url(${heroImages[activeTab % heroImages.length]})` }}></div>
        <div className="rest-hero-overlay"></div>
        <div className="rest-hero-content">
          <h1 className="rest-hero-title">Restauration</h1>
          
          <div className="rest-banner-cards">
            {restaurants.map((rest, idx) => (
              <button 
                key={rest.id} 
                className={`rest-banner-card ${activeTab === idx ? 'active' : ''}`}
                onClick={() => {
                  if (cart.length > 0 && activeTab !== idx) {
                    const confirmChange = window.confirm('Vous avez des articles dans votre panier actuel. Vider le panier et changer de restaurant ?');
                    if (confirmChange) {
                      setCart([]);
                      setActiveTab(idx);
                    }
                  } else {
                    setActiveTab(idx);
                  }
                }}
              >
                <div className="rest-card-logo" style={{ backgroundImage: `url(${heroImages[idx % heroImages.length]})` }}></div>
                <div className="rest-card-name">{rest.name}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="rest-content fade-in-up" key={currentRest.id}>
        <div className="rest-header">
          <h2 className="rest-name">{currentRest.name}</h2>
          <div className="rest-info-bar">
            <div className="contact-line"><Phone size={16} /><span>(+228) 92 92 18 89</span></div>
            <div className="contact-line"><Clock size={16} /><span>{currentRest.hours}</span></div>
          </div>
        </div>

        {!currentRest.isOpen && (
          <div style={{ textAlign: 'center', padding: '24px', backgroundColor: 'rgba(224, 90, 90, 0.1)', color: '#E05A5A', borderRadius: '8px', margin: '0 auto 40px', maxWidth: '900px' }}>
            Ce restaurant est actuellement fermé.
          </div>
        )}

        <div className="classic-menu-list">
          {currentRest.menu.map(item => (
            <div key={item.id} className="classic-menu-item">
              <div className="c-menu-img" style={{ backgroundImage: `url(${item.image})` }}></div>
              <div className="c-menu-body">
                <div className="c-menu-header">
                  <h3 className="c-menu-name">{item.name}</h3>
                  <div className="c-menu-dots"></div>
                  <span className="c-menu-price">{item.price.toLocaleString('fr-FR')} FCFA</span>
                </div>
                <p className="c-menu-desc">{item.description}</p>
                <div className="c-menu-actions">
                  <button className="c-menu-add-btn" onClick={() => addToCart(item)} disabled={!currentRest.isOpen}>
                    <Plus size={14} /> Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          ))}
          {currentRest.menu.length === 0 && (
            <p style={{ textAlign: 'center', opacity: 0.5, fontStyle: 'italic' }}>Menu en cours d'élaboration.</p>
          )}
        </div>
      </section>

      {cartPortal}
    </div>
  );
};

export default Restauration;
