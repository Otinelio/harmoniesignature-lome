import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Clock, Phone, X, CalendarCheck, Sparkles } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import './Piscine.css';
import './Spa.css';
import logoSpa from '../images/logo/logo_spa.png';

import spa2 from '../images/spa/spa-2.jpg';
import spa3 from '../images/spa/spa-3.jpg';
import spa4 from '../images/spa/spa-4.jpg';
import spa5 from '../images/spa/spa-5.jpg';

// spaImages indices for lightbox
const spaImages = [
  spa2,
  spa3,
  spa4,
  spa5,
  spa5,
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
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedSoin, setSelectedSoin] = useState('Massage Aromathérapie 1h');
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [formState, setFormState] = useState({
    date: '',
    heure: '10:00',
    nom: '',
    telephone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const openBooking = (soinName?: string) => {
    if (soinName) setSelectedSoin(soinName);
    setBookingOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Demande de RDV Spa — Harmonie Signature%0ASoin : ${selectedSoin}%0ADate : ${formState.date} à ${formState.heure}%0ANom : ${formState.nom}%0ATel : ${formState.telephone}%0ADemande : ${formState.message}`;
    window.open(`https://wa.me/22892921889?text=${text}`, '_blank');
    setIsSubmitted(true);
    setTimeout(() => { setIsSubmitted(false); setBookingOpen(false); }, 3000);
    setFormState({ date: '', heure: '10:00', nom: '', telephone: '', message: '' });
  };

  // Group soins by category for structured layout
  const getSoinsByCategory = (cat: string) => {
    return soins.filter(s => s.category === cat);
  };

  // Booking popup portal
  const bookingPortal = createPortal(
    <>
      <div className={`sp-modal-overlay ${bookingOpen ? 'open' : ''}`} onClick={() => setBookingOpen(false)}></div>
      <div className={`sp-modal ${bookingOpen ? 'open' : ''}`}>
        <div className="sp-modal-header">
          <div>
            <h3>Prendre rendez-vous</h3>
            <p>Notre équipe confirme sous 2h via WhatsApp</p>
          </div>
          <button className="sp-modal-close" onClick={() => setBookingOpen(false)}><X size={22} /></button>
        </div>
        <form onSubmit={handleFormSubmit} className="sp-form">
          <div className="sp-form-group">
            <label>Soin souhaité</label>
            <select value={selectedSoin} onChange={e => setSelectedSoin(e.target.value)} required>
              {soins.map(s => <option key={s.name} value={s.name}>{s.name} ({s.duration}) - {s.price} F</option>)}
            </select>
          </div>
          <div className="sp-form-row">
            <div className="sp-form-group">
              <label>Date</label>
              <input type="date" value={formState.date} onChange={e => setFormState({ ...formState, date: e.target.value })} min={new Date().toISOString().split('T')[0]} required />
            </div>
            <div className="sp-form-group">
              <label>Heure</label>
              <select value={formState.heure} onChange={e => setFormState({ ...formState, heure: e.target.value })} required>
                {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'].map(h => (
                  <option key={h} value={h}>{h}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="sp-form-group">
            <label>Prénom & Nom</label>
            <input type="text" placeholder="Votre nom complet" value={formState.nom} onChange={e => setFormState({ ...formState, nom: e.target.value })} required />
          </div>
          <div className="sp-form-group">
            <label>Téléphone WhatsApp</label>
            <input type="tel" placeholder="+228 XX XX XX XX" value={formState.telephone} onChange={e => setFormState({ ...formState, telephone: e.target.value })} required />
          </div>
          <div className="sp-form-group">
            <label>Message (optionnel)</label>
            <textarea rows={3} placeholder="Précisions, préférences…" value={formState.message} onChange={e => setFormState({ ...formState, message: e.target.value })}></textarea>
          </div>
          <button type="submit" className="sp-submit-btn">
            <CalendarCheck size={18} /> Confirmer via WhatsApp
          </button>
          {isSubmitted && <div className="sp-success-msg">✅ Demande envoyée ! Confirmation sous 2h.</div>}
        </form>
      </div>
    </>,
    document.body
  );

  return (
    <div className="spa-page">

      {/* ─── HERO (même bannière que Piscine : classes p-hero / Piscine.css) ─── */}
      <section className="p-hero">
        <div className="p-hero-bg" style={{ backgroundImage: `url(${spaImages[2]})` }}></div>
        <div className="p-hero-overlay"></div>
        <div className="p-hero-content">
          <div className="spa-hero-brand">
            <img src={logoSpa} alt="Spa Harmonie Signature" className="spa-hero-dept-logo" />
          </div>
          <div className="spa-hero-info-bar">
            <span><Clock size={14} /> LUN–DIM 09H–21H</span>
            <span><Phone size={14} /> +228 92 92 18 89</span>
          </div>
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
                    <div key={idx} className="sp-menu-item-row" onClick={() => openBooking(soin.name)}>
                      <div className="sp-menu-item-top">
                        <span className="sp-menu-item-name">{soin.name}</span>
                        <span className="sp-menu-item-dots"></span>
                        <span className="sp-menu-item-price">{soin.price} FCFA</span>
                      </div>
                      <div className="sp-menu-item-bottom">
                        <span className="sp-menu-item-duration">{soin.duration}</span>
                        <p className="sp-menu-item-desc">{soin.desc}</p>
                        <button 
                          className="sp-menu-item-book"
                          onClick={(e) => {
                            e.stopPropagation();
                            openBooking(soin.name);
                          }}
                        >
                          Réserver
                        </button>
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
        <h2 className="sp-gallery-title">Le Spa en images</h2>
        <div className="sp-gallery-grid">
          {spaImages.map((src, idx) => (
            <div key={idx} className="sp-gallery-item" onClick={() => openLightbox(idx)}>
              <img src={src} alt={`Spa ${idx + 1}`} />
              <div className="sp-gallery-hover"></div>
            </div>
          ))}
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
              <span>Contact : +228 92 92 18 89</span>
            </div>
            <div className="sp-info-sep"></div>
            <div className="sp-info-item">
              <CalendarCheck size={16} />
              <span>Réservation 24h à l\'avance</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FLOATING BUTTON ─── */}
      <button type="button" className="sp-floating-btn" onClick={() => openBooking()} aria-label="Ouvrir la réservation">
        <CalendarCheck size={20} />
        <span>Réservation</span>
      </button>

      {bookingPortal}

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
