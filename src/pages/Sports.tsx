import React, { useState } from 'react';
import { Phone, Clock, Target, Trophy, Users, X, CalendarCheck } from 'lucide-react';
import { createPortal } from 'react-dom';
import Lightbox from '../components/Lightbox';
import './Piscine.css';
import './Sports.css';
import logoBowling from '../images/logo/logo_bowling.png';

const tennisImages = [
  'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1530915365347-2a62886f48a1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1572560372864-1507bb0a22c5?q=80&w=1200&auto=format&fit=crop'
];

const basketImages = [
  'https://images.unsplash.com/photo-1505666287802-931dc83948e9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?q=80&w=1200&auto=format&fit=crop'
];

const tennisServices = [
  {
    image: tennisImages[0],
    name: 'Court Central',
    duration: '1h',
    desc: 'Terrain principal en dur éclairé, idéal pour les matchs compétitifs.',
    price: '10 000',
  },
  {
    image: tennisImages[1],
    name: 'Court Loisir',
    duration: '1h',
    desc: 'Terrain secondaire pour les sessions d\'entraînement et loisirs.',
    price: '8 000',
  },
  {
    image: tennisImages[2],
    name: 'Cours Particulier',
    duration: '1h30',
    desc: 'Leçon personnalisée avec coach professionnel.',
    price: '15 000',
  },
];

const basketServices = [
  {
    image: basketImages[0],
    name: 'Terrain 5x5',
    duration: '1h',
    desc: 'Terrain complet pour matchs d\'équipe, éclairé pour les soirées.',
    price: '15 000',
  },
  {
    image: basketImages[1],
    name: 'Terrain 3x3',
    duration: '45 min',
    desc: 'Espace réduit pour des parties rapides et intenses.',
    price: '10 000',
  },
  {
    image: basketImages[2],
    name: 'Entraînement',
    duration: '1h',
    desc: 'Session d\'entraînement collectif avec coach.',
    price: '12 000',
  },
];

const Sports = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [activeGallery, setActiveGallery] = useState<string[]>([]);

  const openLightbox = (images: string[], index: number) => {
    setActiveGallery(images);
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  return (
    <div className="sports-page">

      {/* ─── HERO ─── */}
      <section className="p-hero">
        <div className="p-hero-bg" style={{ backgroundImage: `url(${tennisImages[0]})` }}></div>
        <div className="p-hero-overlay"></div>
        <div className="p-hero-content">
          <div className="spa-hero-brand">
            <img src={logoBowling} alt="Sports Harmonie Signature" className="spa-hero-dept-logo" />
          </div>
          <div className="spa-hero-info-bar">
            <span><Clock size={14} /> LUN–DIM 08H–22H  </span>
            <span><Phone size={14} /> +228 92 92 18 89</span>
          </div>
        </div>
      </section>

      {/* ─── TENNIS ─── */}
      <section className="sp-soins-section">
        <div className="sports-section-header">
          <Target size={24} className="section-icon" />
          <h2 className="sports-section-title">Tennis</h2>
        </div>
        <p className="sports-section-desc">Terrains en dur éclairés pour une pratique loisir ou intensive, même en soirée.</p>
        <div className="sp-soins-grid">
          {tennisServices.map((service, i) => (
            <div key={i} className="sp-soin-card">
              <div className="sp-soin-img-wrap">
                <img src={service.image} alt={service.name} />
              </div>
              <div className="sp-soin-body">
                <div className="sp-soin-header">
                  <h3>{service.name}</h3>
                  <span className="sp-soin-duration">{service.duration}</span>
                </div>
                <p className="sp-soin-desc">{service.desc}</p>
                <div className="sp-soin-footer">
                  <span className="sp-soin-price">{service.price} FCFA</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BASKETBALL ─── */}
      <section className="sp-soins-section">
        <div className="sports-section-header">
          <Users size={24} className="section-icon" />
          <h2 className="sports-section-title">Basketball</h2>
        </div>
        <p className="sports-section-desc">Un terrain professionnel extérieur pour des matchs 5x5 ou 3x3 intenses, avec projecteurs LED.</p>
        <div className="sp-soins-grid">
          {basketServices.map((service, i) => (
            <div key={i} className="sp-soin-card">
              <div className="sp-soin-img-wrap">
                <img src={service.image} alt={service.name} />
              </div>
              <div className="sp-soin-body">
                <div className="sp-soin-header">
                  <h3>{service.name}</h3>
                  <span className="sp-soin-duration">{service.duration}</span>
                </div>
                <p className="sp-soin-desc">{service.desc}</p>
                <div className="sp-soin-footer">
                  <span className="sp-soin-price">{service.price} FCFA</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── INFOS PRATIQUES ─── */}
      <section className="sp-infos-section">
        <div className="sp-infos-card">
          <div className="sp-infos-icon-top"><Trophy size={28} /></div>
          <p className="sp-infos-heading">Informations pratiques</p>
          <div className="sp-infos-items">
            <div className="sp-info-item"><Clock size={16} /><span>Ouvert 7j/7 de 08h00 à 22h00</span></div>
            <div className="sp-info-sep"></div>
            <div className="sp-info-item"><Phone size={16} /><span>Contact : +228 92 92 18 89</span></div>
          </div>
        </div>
      </section>

      {/* ─── GALERIE ─── */}
      <section className="sp-gallery-section">
        <h2 className="sp-gallery-title">Les Sports en images</h2>
        <div className="sp-gallery-grid">
          {[...tennisImages, ...basketImages].map((src, idx) => (
            <div key={idx} className="sp-gallery-item" onClick={() => openLightbox([...tennisImages, ...basketImages], idx)}>
              <img src={src} alt={`Sport ${idx + 1}`} />
              <div className="sp-gallery-hover"></div>
            </div>
          ))}
        </div>
      </section>

      <Lightbox
        images={activeGallery}
        currentIndex={currentImage}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImage}
        backgroundColor="rgba(24, 32, 48, 0.98)"
      />
    </div>
  );
};

export default Sports;
