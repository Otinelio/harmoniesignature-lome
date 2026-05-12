import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Clock, Waves, CircleDot, Sparkles, Dumbbell, Trophy, CalendarCheck, ArrowRight, MapPin } from 'lucide-react';
import CountUp from 'react-countup';
import './Home.css';

import imgGym from '../images/salles/gym-2.jpg';
import imgHarmonie from '../images/harmonie.png';

const Home = () => {
  const [hoveredUnivers, setHoveredUnivers] = useState<string>('piscine');

  const universList = [
    { id: 'piscine', name: 'Piscine', img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2000&auto=format&fit=crop' },
    { id: 'bowling', name: 'Bowling', img: 'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?q=80&w=2000&auto=format&fit=crop' },
    { id: 'spa', name: 'Spa & Bien-être', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop' },
    { id: 'gym', name: 'Gym & Fitness', img: imgGym },
    { id: 'restauration', name: 'Restaurants', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop' },
    { id: 'sports', name: 'Terrains de Sport', img: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2000&auto=format&fit=crop' },
  ];

  return (
    <div className="home-page">
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-bg" style={{ backgroundImage: `url(${imgHarmonie})` }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-logo-container">
            <img src="/logo-harmonie.png" alt="Harmonie Signature Logo" className="hero-logo-img" />
          </div>
          <p className="hero-subtitle">
            Piscine · Bowling · Spa · Restaurants · Tennis · Basket · Gym
          </p>
          <div className="hero-actions">
            <Link to="/spa" className="cta-pill">Réserver au Spa</Link>
            <Link to="/departements" className="cta-ghost">Découvrir</Link>
          </div>
        </div>
        <div className="scroll-indicator">
          <ChevronDown size={22} />
        </div>
      </section>

      {/* SECTION VIDÉO */}
      <section className="video-section">
        <video
          className="video-bg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={imgHarmonie}
          aria-label="Vidéo de fond"
        >
          <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
        </video>
        <div className="video-vignette" aria-hidden="true"></div>
        <div className="video-top-overlay">
          <div className="video-line"></div>
          <p>BIENVENUE CHEZ HARMONIE SIGNATURE</p>
        </div>
        <div className="video-bottom-overlay">
          <h2>Votre complexe de référence à Lomé</h2>
          <p>Rue 243 Tot Ancien BSL, Résidence du Bénin · Lun - Sam : 07h00 - 23h00</p>
        </div>
      </section>



      {/* SECTION CAROUSEL UNIVERS */}
      <section className="carousel-univers-section">
        <div className="carousel-header">
          <h2 className="carousel-title">Nos Univers</h2>
          <p className="carousel-subtitle">FAITES DÉFILER POUR DÉCOUVRIR</p>
        </div>
        
        <div className="univers-grid">
          {universList.map((u, idx) => (
            <Link to={`/${u.id}`} key={u.id} className={`univers-grid-card card-${idx + 1}`}>
              <div className="carousel-card-number">0{idx + 1}</div>
              <div className="carousel-card-bg" style={{ backgroundImage: `url(${u.img})` }}></div>
              <div className="carousel-card-overlay"></div>
              <div className="carousel-card-content">
                <h3>{u.name}</h3>
                <span className="carousel-card-link">
                  Découvrir <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* SECTION INFOS PRATIQUES (STYLE DÉPARTEMENT) */}
        <div className="home-infos-section">
          <div className="sp-infos-card">
            <div className="sp-infos-icon-top"><Phone size={24} /></div>
            <p className="sp-infos-heading">Contact & Horaires</p>
            <div className="sp-infos-items">
              <div className="sp-info-item">
                <Phone size={16} />
                <span>Accueil : (+228) 92 92 18 89</span>
              </div>
              <div className="sp-info-sep"></div>
              <div className="sp-info-item">
                <Clock size={16} />
                <span>Lun – Sam : 07h00 – 23h00</span>
              </div>
              <div className="sp-info-sep"></div>
              <div className="sp-info-item">
                <MapPin size={16} />
                <span>Résidence du Bénin, Lomé</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION CTA SPA ACCUEIL */}
      <section className="cta-spa-section">
        <div className="cta-spa-content">
          <Sparkles size={32} className="cta-spa-icon" />
          <h2 className="cta-spa-title">Le Spa vous attend</h2>
          <p className="cta-spa-desc">Prenez soin de vous dans un cadre luxueux et apaisant au cœur de Lomé.</p>
          <Link to="/spa" className="cta-dark-btn">Découvrir les soins</Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
