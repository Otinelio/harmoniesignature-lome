import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Clock, Waves, CircleDot, Sparkles, Dumbbell, Trophy, CalendarCheck, ArrowRight, MapPin } from 'lucide-react';
import CountUp from 'react-countup';
import './Home.css';

import imgGym from '../images/salles/gym-2.jpg';
import imgHarmonie from '../images/harmonie.png';
import videoDeo1 from '../images/spa/spaDeo/SpaDeo1.mp4';
import videoDeo2 from '../images/spa/spaDeo/SpaDeo2.mp4';
import videoDeo3 from '../images/spa/spaDeo/SpaDeo3.mp4';

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
        <div className="scroll-indicator">
          <ChevronDown size={22} />
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
      </section>

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
            <Link to="/contact" className="cta-primary-hero">Nous contacter</Link>
          </div>
        </div>
      </section>

      {/* SECTION CTA SPA ACCUEIL */}
      <section className="cta-spa-section">
        <div className="spa-cta-card">
          <div className="spa-cta-copy">
           
            <h2 className="spa-cta-title">Le Spa vous attend</h2>
            <p className="spa-cta-desc">Prenez soin de vous dans un cadre luxueux et apaisant au cœur de Lomé.</p>
            <div className="spa-cta-info">
              <div className="spa-cta-info-item">Massages personnalisés</div>
              <div className="spa-cta-info-item">Jacuzzi privé</div>
              <div className="spa-cta-info-item">Rituels bien-être</div>
            </div>
            <Link to="/spa" className="spa-cta-button">Découvrir les soins</Link>
          </div>

          <div className="spa-videos-frame">
            <div className="spa-videos-trio">
              <div className="spa-video-card">
                <video className="spa-video-item" autoPlay muted loop playsInline preload="metadata">
                  <source src={videoDeo1} type="video/mp4" />
                </video>
                <div className="spa-video-label">Spa à l'honneur</div>
              </div>
              <div className="spa-video-card">
                <video className="spa-video-item" autoPlay muted loop playsInline preload="metadata">
                  <source src={videoDeo2} type="video/mp4" />
                </video>
                <div className="spa-video-label">Espace détente</div>
              </div>
              <div className="spa-video-card">
                <video className="spa-video-item" autoPlay muted loop playsInline preload="metadata">
                  <source src={videoDeo3} type="video/mp4" />
                </video>
                <div className="spa-video-label">Rituels bien-être</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION INFOS PRATIQUES (STYLE DÉPARTEMENT) - En dernière position */}
      <div className="home-infos-section" id="contact">
        <div className="sp-infos-card">
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
    </div>
  );
};

export default Home;
