import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Waves, CircleDot, Sparkles, Dumbbell, Trophy, CalendarCheck, ArrowRight, Phone, Clock, MapPin } from 'lucide-react';
import CountUp from 'react-countup';
import { getSettings, Settings } from '../utils/storage';
import './Home.css';

import imgGym from '../images/salles/gym-2.jpg';
import videoDeo1 from '../images/spa/spaDeo/SpaDeo1.mp4';
import videoDeo2 from '../images/spa/spaDeo/SpaDeo2.mp4';
import videoDeo3 from '../images/spa/spaDeo/SpaDeo3.mp4';
import posterDeo1 from '../images/spa/spaDeo/SpaDeo1-poster.jpg';
import posterDeo2 from '../images/spa/spaDeo/SpaDeo2-poster.jpg';
import posterDeo3 from '../images/spa/spaDeo/SpaDeo3-poster.jpg';

import logoBowling from '../images/logo/logo_bowling.png';
import logoSpa from '../images/logo/logo_spa.png';
import logoGym from '../images/logo/logo_gym.png';
import logoTropicana from '../images/logo/logo_tropicana.png';
import imgTennisBasket1 from '../images/tennis&Basketball/tennis&Basketball1.jpg';
import imgPiscine1 from '../images/piscine/piscine1.jpg';

const Home = () => {
  const [hoveredUnivers, setHoveredUnivers] = useState<string>('piscine');
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    setSettings(getSettings());
  }, []);

  const universList = [
    { id: 'bowling', name: 'Bowling', img: logoBowling, isLogo: true },
    { id: 'spa', name: 'Lotus Spa', img: logoSpa, isLogo: true },
    { id: 'gym', name: 'Platinum Fitness', img: logoGym, isLogo: true },
    { id: 'restauration', name: 'Tropicana', img: logoTropicana, isLogo: true },
    { id: 'piscine', name: 'Piscine', isTextCenter: true },
    { id: 'sports', name: 'Tennis & Basket', isTextCenter: true },
  ];

  return (
    <div className="home-page">
      {/* SECTION VIDÉO */}
      <section className="video-section">
        <video
          key={settings?.heroVideoUrl}
          className="video-bg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/videoAccueil-poster.jpg"
          aria-label="Vidéo de fond"
        >
          <source src={settings?.heroVideoUrl || "/videoAccueil-4k.mp4"} type="video/mp4" />
        </video>
        <div className="video-vignette" aria-hidden="true"></div>
        <div className="video-top-overlay">
          <div className="video-line"></div>
          <p>BIENVENUE CHEZ HARMONIE SIGNATURE</p>
        </div>
        <div className="video-bottom-overlay">
          <h2>{settings?.homeHeroTitle || "Votre complexe de référence à Lomé"}</h2>
          <p>{settings?.homeHeroSubtitle || "Harmonie Signature · Lundi – Dimanche de 06h00 à 22h00"}</p>
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
              <div 
                className={`carousel-card-bg ${u.isLogo ? 'carousel-card-logo-bg' : ''} ${u.isTextCenter ? 'carousel-card-text-center' : ''}`} 
                style={u.img ? { backgroundImage: `url(${u.img})` } : undefined}
              >
                {u.isTextCenter && <span className="card-center-text">{u.name}</span>}
              </div>
              <div className="carousel-card-overlay"></div>
              <div className="carousel-card-content">
                {!u.isTextCenter && <h3>{u.name}</h3>}
                <span className="carousel-card-link">
                  Découvrir <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
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
                <video className="spa-video-item" autoPlay muted loop playsInline poster={posterDeo1}>
                  <source src={settings?.spaVideo1Url || videoDeo1} type="video/mp4" />
                </video>
                <div className="spa-video-label">Spa à l'honneur</div>
              </div>
              <div className="spa-video-card">
                <video className="spa-video-item" autoPlay muted loop playsInline poster={posterDeo2}>
                  <source src={settings?.spaVideo2Url || videoDeo2} type="video/mp4" />
                </video>
                <div className="spa-video-label">Espace détente</div>
              </div>
              <div className="spa-video-card">
                <video className="spa-video-item" autoPlay muted loop playsInline poster={posterDeo3}>
                  <source src={settings?.spaVideo3Url || videoDeo3} type="video/mp4" />
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
              <span>{settings?.generalHours || "Ouverture : Lundi – Dimanche de 06h00 à 22h00"}</span>
            </div>
            <div className="sp-info-item">
              <Clock size={16} />
              <span>Week-end & jours fériés : fermeture à 20h</span>
            </div>
            <div className="sp-info-sep"></div>
            <div className="sp-info-item">
              <MapPin size={16} />
              <span>{settings?.address || "Résidence du Bénin, Lomé"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
