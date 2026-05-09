import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Clock, Waves, CircleDot, Sparkles, Dumbbell, Trophy, CalendarCheck } from 'lucide-react';
import CountUp from 'react-countup';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop)' }}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span>HARMONIE</span>
            <span>SIGNATURE</span>
          </h1>
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

      {/* SECTION MOSAÏQUE DÉPARTEMENTS */}
      <section className="mosaic-section">
        <div className="mosaic-header">
          <h2 className="mosaic-title">Nos Univers</h2>
          <p className="mosaic-subtitle">7 ESPACES · UN SEUL ENDROIT</p>
        </div>
        
        <div className="mosaic-grid">
          <Link to="/piscine" className="mosaic-cell cell-piscine">
            <div className="cell-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1000&auto=format&fit=crop)' }}></div>
            <div className="cell-overlay"></div>
            <div className="cell-content">
              <Waves size={24} color="#EDE8DF" />
              <span>Piscine</span>
            </div>
          </Link>
          <Link to="/bowling" className="mosaic-cell cell-bowling">
            <div className="cell-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?q=80&w=800&auto=format&fit=crop)' }}></div>
            <div className="cell-overlay"></div>
            <div className="cell-content">
              <CircleDot size={24} color="#EDE8DF" />
              <span>Bowling</span>
            </div>
          </Link>
          <Link to="/spa" className="mosaic-cell cell-spa">
            <div className="cell-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop)' }}></div>
            <div className="cell-overlay"></div>
            <div className="cell-content">
              <Sparkles size={24} color="#EDE8DF" />
              <span>Spa</span>
            </div>
          </Link>
          <Link to="/gym" className="mosaic-cell cell-gym">
            <div className="cell-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop)' }}></div>
            <div className="cell-overlay"></div>
            <div className="cell-content">
              <Dumbbell size={24} color="#EDE8DF" />
              <span>Gym</span>
            </div>
          </Link>
          <Link to="/restauration" className="mosaic-cell cell-resto">
            <div className="cell-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop)' }}></div>
            <div className="cell-overlay"></div>
            <div className="cell-content">
              <CircleDot size={24} color="#EDE8DF" />
              <span>Tropicana</span>
            </div>
          </Link>
          <Link to="/sports" className="mosaic-cell cell-tennis">
            <div className="cell-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=800&auto=format&fit=crop)' }}></div>
            <div className="cell-overlay"></div>
            <div className="cell-content">
              <Trophy size={24} color="#EDE8DF" />
              <span>Tennis</span>
            </div>
          </Link>
          <Link to="/sports" className="mosaic-cell cell-basket">
            <div className="cell-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1505666287802-931dc83948e9?q=80&w=800&auto=format&fit=crop)' }}></div>
            <div className="cell-overlay"></div>
            <div className="cell-content">
              <CircleDot size={24} color="#EDE8DF" />
              <span>Basket</span>
            </div>
          </Link>
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
