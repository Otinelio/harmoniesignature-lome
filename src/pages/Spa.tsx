import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Clock, Phone, X, CalendarCheck, Sparkles } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import './Spa.css';
import harmonieImg from '../images/harmonie.png';

// import spa1 from '../images/spa/spa-1.jpg';
import spa2 from '../images/spa/spa-2.jpg';
import spa3 from '../images/spa/spa-3.jpg';
import spa4 from '../images/spa/spa-4.jpg';

const spaImages = [
  // spa1,
  spa2,
  spa3,
  spa4,
  harmonieImg
];

const soins = [
  {
    image: spaImages[0],
    name: 'Massage Thaï traditionnel',
    duration: '60 min',
    desc: 'Technique ancestrale Thaïlandaise, pressions et étirements doux.',
    price: '25 000',
  },
  {
    image: spaImages[1],
    name: 'Massage relaxant',
    duration: '45 min',
    desc: 'Détente musculaire profonde aux huiles essentielles.',
    price: '18 000',
  },
  {
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1400&auto=format&fit=crop',
    name: 'Jacuzzi Privatif',
    duration: '30 min',
    desc: 'Bain à jets, accès privé pour son ressourcement.',
    price: '12 000',
  },
  {
    image: spaImages[4],
    name: 'Soin du Visage',
    duration: '45 min',
    desc: 'Nettoyage en profondeur, masque hydratant.',
    price: '20 000',
  },
  {
    image: 'https://images.unsplash.com/photo-1573461160327-f89d31f6d50f?q=80&w=1400&auto=format&fit=crop',
    name: 'Massage en duo et jacuzzi',
    duration: '90 min',
    desc: 'Combo massage relaxant + accès jacuzzi privatif.',
    price: '40 000',
  },
  {
    image: spaImages[2],
    name: 'Corps de Gommage',
    duration: '50 min',
    desc: 'Exfoliation douce aux extraits naturels.',
    price: '15 000',
  },
];

const Spa = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedSoin, setSelectedSoin] = useState('Massage Thaï traditionnel');
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
              {soins.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
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

      {/* ─── HERO ─── */}
      <section className="sp-hero">
        <div className="sp-hero-bg" style={{ backgroundImage: `url(${spaImages[0]})` }}></div>
        <div className="sp-hero-overlay"></div>
        <div className="sp-hero-content">
          <div className="sp-hero-logo-row">
            <Sparkles size={22} className="sp-hero-icon" />
            <h1 className="sp-hero-title">Le Spa Harmonie</h1>
          </div>
          <div className="sp-hero-info-bar">
            <span><Clock size={14} /> LUN–DIM 09H–21H</span>
            <span><Phone size={14} /> +228 92 92 18 89</span>
          </div>
        </div>
      </section>

      {/* ─── SOINS CARDS ─── */}
      <section className="sp-soins-section">
        <div className="sp-soins-grid">
          {soins.map((soin, i) => (
            <div key={i} className="sp-soin-card">
              <div className="sp-soin-img-wrap">
                <img src={soin.image} alt={soin.name} />
              </div>
              <div className="sp-soin-body">
                <div className="sp-soin-header">
                  <h3>{soin.name}</h3>
                  <span className="sp-soin-duration">{soin.duration}</span>
                </div>
                <p className="sp-soin-desc">{soin.desc}</p>
                <div className="sp-soin-footer">
                  <span className="sp-soin-price">{soin.price} FCFA</span>
                  <button className="sp-soin-btn" onClick={() => openBooking(soin.name)}>
                    Réserver ce soin
                  </button>
                </div>
              </div>
            </div>
          ))}
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
              <span>Réservation 24h à l'avance</span>
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
