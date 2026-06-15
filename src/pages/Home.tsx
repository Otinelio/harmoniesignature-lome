import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getSettings, Settings } from '../utils/storage';
import { ChevronDown, Waves, CircleDot, Sparkles, Dumbbell, Trophy, CalendarCheck, ArrowRight } from 'lucide-react';
import CountUp from 'react-countup';
import './Home.css';



const Home = () => {
  const [hoveredUnivers, setHoveredUnivers] = useState<string>('piscine');
  const [settings, setSettings] = useState<Settings | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    getSettings().then(setSettings);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!settings) return null;

  const universList = [
    { id: 'bowling', name: 'Bowling', img: '/images/logo/logo_bowling.png', isLogo: true },
    { id: 'spa', name: 'Lotus Spa', img: '/images/logo/logo_spa.png', isLogo: true },
    { id: 'gym', name: 'Platinum Fitness', img: '/images/logo/logo_gym.png', isLogo: true },
    { id: 'restauration', name: 'Tropicana', img: '/images/logo/logo_tropicana.png', isLogo: true },
    { id: 'piscine', name: 'Piscine', isTextCenter: true },
    { id: 'sports', name: 'Tennis & Basket', isTextCenter: true },
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
          preload="auto"
          aria-label="Vidéo de fond"
        >
          <source src={isMobile && settings.heroVideoMobileUrl ? settings.heroVideoMobileUrl : settings.heroVideoUrl} type="video/mp4" />
        </video>
        <div className="video-vignette" aria-hidden="true"></div>
        <div className="video-top-overlay">
          <div className="video-line"></div>
          <p>{settings.homeHeroTitle}</p>
        </div>
        <div className="video-bottom-overlay">
          <h2>{settings.homeHeroSubtitle}</h2>
          <p>Harmonie Signature · tous les jours de 06h00 à 22h00</p>
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
                <video className="spa-video-item" autoPlay muted loop playsInline poster="/images/spa/spaDeo/SpaDeo1-poster.jpg">
                  <source src={settings.spaVideo1Url || "/images/spa/spaDeo/SpaDeo1.mp4"} type="video/mp4" />
                </video>
                <div className="spa-video-label">Spa à l'honneur</div>
              </div>
              <div className="spa-video-card">
                <video className="spa-video-item" autoPlay muted loop playsInline poster="/images/spa/spaDeo/SpaDeo2-poster.jpg">
                  <source src={settings.spaVideo2Url || "/images/spa/spaDeo/SpaDeo2.mp4"} type="video/mp4" />
                </video>
                <div className="spa-video-label">Espace détente</div>
              </div>
              <div className="spa-video-card">
                <video className="spa-video-item" autoPlay muted loop playsInline poster="/images/spa/spaDeo/SpaDeo3-poster.jpg">
                  <source src={settings.spaVideo3Url || "/images/spa/spaDeo/SpaDeo3.mp4"} type="video/mp4" />
                </video>
                <div className="spa-video-label">Rituels bien-être</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
