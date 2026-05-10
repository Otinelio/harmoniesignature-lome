import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Clock, Waves, CircleDot, Sparkles, Dumbbell, Trophy, CalendarCheck, ArrowRight } from 'lucide-react';
import CountUp from 'react-countup';
import './Home.css';

const Home = () => {
  const [hoveredUnivers, setHoveredUnivers] = useState<string>('piscine');

  const universList = [
    { id: 'piscine', name: 'Piscine', img: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2000&auto=format&fit=crop' },
    { id: 'bowling', name: 'Bowling', img: 'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?q=80&w=2000&auto=format&fit=crop' },
    { id: 'spa', name: 'Spa & Bien-être', img: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop' },
    { id: 'gym', name: 'Gym & Fitness', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop' },
    { id: 'restauration', name: 'Restaurants', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop' },
    { id: 'sports', name: 'Terrains de Sport', img: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2000&auto=format&fit=crop' },
  ];

  return (
    <div className="home-page">
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop)' }}></div>
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
        {/* Placeholder video with Unsplash image for now */}
        <div className="video-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000&auto=format&fit=crop)' }}></div>
        <div className="video-top-overlay">
          <div className="video-line"></div>
          <p>BIENVENUE CHEZ HARMONIE SIGNATURE</p>
        </div>
        <div className="video-bottom-overlay">
          <h2>Votre complexe de référence à Lomé</h2>
          <p>Rue 243 Tot Ancien BSL, Résidence du Bénin · Lun - Sam : 07h00 - 23h00</p>
        </div>
      </section>

      {/* SECTION CONTACT ACCUEIL */}
      <section className="contact-strip">
        <div className="contact-strip-container">
          <div className="contact-item">
            <Phone size={18} color="#C8A84B" />
            <span>Accueil : (+228) 92 92 18 89</span>
          </div>
          <div className="contact-item">
            <Clock size={18} color="#C8A84B" />
            <span>Lun – Sam : 07h00 – 23h00 · Dim : Fermé</span>
          </div>
        </div>
      </section>

      {/* SECTION CAROUSEL UNIVERS */}
      <section className="carousel-univers-section">
        <div className="carousel-header">
          <h2 className="carousel-title">Nos Univers</h2>
          <p className="carousel-subtitle">FAITES DÉFILER POUR DÉCOUVRIR</p>
        </div>
        
        <div className="univers-carousel">
          {universList.map((u) => (
            <Link to={`/${u.id}`} key={u.id} className="carousel-card">
              <div className="carousel-card-bg" style={{ backgroundImage: `url(${u.img})` }}></div>
              <div className="carousel-card-overlay"></div>
              <div className="carousel-card-content">
                <h3>{u.name}</h3>
                <span className="carousel-card-link">
                  Explorer <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION CHIFFRES SIGNATURE */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">
              <CountUp end={7} duration={2.5} />h00
            </div>
            <div className="stat-label">Ouverture chaque jour</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              <CountUp end={7} duration={2.5} />
            </div>
            <div className="stat-label">Univers de loisirs</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              <CountUp end={6000} duration={2.5} separator=" " /> FCFA
            </div>
            <div className="stat-label">Séance piscine adulte</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              <CountUp end={3} duration={2.5} />
            </div>
            <div className="stat-label">Restaurants sur place</div>
          </div>
        </div>
      </section>

      {/* SECTION CTA SPA */}
      <section className="cta-spa-section">
        <div className="cta-spa-content">
          <h2 className="cta-spa-title">Le spa vous attend.</h2>
          <p className="cta-spa-desc">Un espace de détente absolue au cœur de Lomé.</p>
          <Link to="/spa" className="cta-dark-btn">
            Réserver maintenant <CalendarCheck size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
