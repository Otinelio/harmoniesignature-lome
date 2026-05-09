import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Waves, CircleDot, Sparkles, Dumbbell, Trophy, Building2, Banknote } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDepartmentsOpen(false);
  }, [location]);

  return (
    <>
      <header className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            HARMONIE
          </Link>

          <nav className="nav-desktop">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>Accueil</NavLink>
            
            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => setDepartmentsOpen(true)}
              onMouseLeave={() => setDepartmentsOpen(false)}
            >
              <NavLink to="/departements" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Départements</NavLink>
              {departmentsOpen && (
                <div className="mega-menu">
                  <div className="mega-menu-grid">
                    <div className="mega-col">
                      <Link to="/piscine" className="mega-item">
                        <Waves size={20} />
                        <div>
                          <span className="mega-name">Piscine</span>
                          <span className="mega-desc">Bassin olympique</span>
                        </div>
                      </Link>
                      <Link to="/bowling" className="mega-item">
                        <CircleDot size={20} />
                        <div>
                          <span className="mega-name">Bowling</span>
                          <span className="mega-desc">Pistes lumineuses</span>
                        </div>
                      </Link>
                    </div>
                    <div className="mega-col">
                      <Link to="/spa" className="mega-item">
                        <Sparkles size={20} />
                        <div>
                          <span className="mega-name">Spa & Jacuzzi</span>
                          <span className="mega-desc">Détente absolue</span>
                        </div>
                      </Link>
                      <Link to="/gym" className="mega-item">
                        <Dumbbell size={20} />
                        <div>
                          <span className="mega-name">Gym & Fitness</span>
                          <span className="mega-desc">Équipement premium</span>
                        </div>
                      </Link>
                    </div>
                    <div className="mega-col">
                      <Link to="/sports" className="mega-item">
                        <Trophy size={20} />
                        <div>
                          <span className="mega-name">Tennis</span>
                          <span className="mega-desc">Terrains extérieurs</span>
                        </div>
                      </Link>
                      <Link to="/sports#basket" className="mega-item">
                        <CircleDot size={20} />
                        <div>
                          <span className="mega-name">Basket</span>
                          <span className="mega-desc">Terrain pro</span>
                        </div>
                      </Link>
                    </div>
                    <div className="mega-col">
                      <Link to="/contact" className="mega-item">
                        <Building2 size={20} />
                        <div>
                          <span className="mega-name">À propos</span>
                          <span className="mega-desc">Le complexe</span>
                        </div>
                      </Link>
                      <Link to="/tarifs" className="mega-item">
                        <Banknote size={20} />
                        <div>
                          <span className="mega-name">Tarifs</span>
                          <span className="mega-desc">Grille tarifaire</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/restauration" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Restauration</NavLink>
            <NavLink to="/spa" className={({ isActive }) => `nav-link nav-hide-tablet ${isActive ? 'active' : ''}`}>Spa & Wellness</NavLink>
            <NavLink to="/tarifs" className={({ isActive }) => `nav-link nav-hide-tablet ${isActive ? 'active' : ''}`}>Tarifs</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
          </nav>

          <div className="nav-actions">
            <Link to="/spa" className="cta-pill">Réserver au Spa</Link>
            <button className="mobile-toggle" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <button className="close-mobile" onClick={() => setMobileMenuOpen(false)}>
          <X size={32} />
        </button>
        <nav className="mobile-nav-list">
          <Link to="/" className="mobile-link">Accueil</Link>
          <div className="mobile-dropdown-wrapper">
            <button 
              className="mobile-link mobile-dropdown-toggle"
              onClick={() => setDepartmentsOpen(!departmentsOpen)}
            >
              Départements
            </button>
            {departmentsOpen && (
              <div className="mobile-sub-menu">
                <Link to="/departements" className="sub-link">Tous les univers</Link>
                <Link to="/piscine" className="sub-link"><Waves size={16}/> Piscine</Link>
                <Link to="/bowling" className="sub-link"><CircleDot size={16}/> Bowling</Link>
                <Link to="/spa" className="sub-link"><Sparkles size={16}/> Spa & Jacuzzi</Link>
                <Link to="/gym" className="sub-link"><Dumbbell size={16}/> Gym & Fitness</Link>
                <Link to="/sports" className="sub-link"><Trophy size={16}/> Sports Extérieurs</Link>
              </div>
            )}
          </div>
          <Link to="/restauration" className="mobile-link">Restauration</Link>
          <Link to="/spa" className="mobile-link">Spa & Wellness</Link>
          <Link to="/tarifs" className="mobile-link">Tarifs</Link>
          <Link to="/contact" className="mobile-link">Contact</Link>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
