import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTiktok } from 'react-icons/fa6';
import { MapPin, Phone, Clock, Sparkles } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Col 1 */}
          <div className="footer-col animate-col-1">
            <img src="/logo-harmonie.png" alt="Harmonie Signature Logo" className="footer-logo-img" />
            <p className="footer-tagline">Détente complète à Lomé, entre sport, bien-être et moments de plaisir.</p>
            <div className="social-links">
              <a href="https://tiktok.com/@harmoniesignature" target="_blank" rel="noreferrer"><FaTiktok size={20} /></a>
              <a href="https://www.instagram.com/harmoniesignature" target="_blank" rel="noreferrer"><FaInstagram size={20} /></a>
            </div>
            <div className="footer-badge">
              <Sparkles size={14} />
              <span>Un univers complet pour vos sorties et vos séances</span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="footer-col animate-col-2">
            <h3 className="footer-heading">Nos espaces</h3>
            <nav className="footer-links-grid">
              <Link to="/bowling">Bowling</Link>
              <Link to="/piscine">Piscine</Link>
              <Link to="/spa">Spa & détente</Link>
              <Link to="/gym">Gym</Link>
              <Link to="/sports">Tennis & basket</Link>
              <Link to="/restauration">Restauration</Link>
            </nav>
          </div>

          {/* Col 3 */}
          <div className="footer-col animate-col-3">
            <h3 className="footer-heading">Informations & réservation</h3>
            <div className="footer-info">
              <div className="info-item">
                <MapPin size={18} />
                <span>Rue 243 Tot Ancien BSL, Résidence du Bénin, Lomé, Togo</span>
              </div>
              <div className="info-item">
                <Phone size={18} />
                <span>(+228) 92 92 18 89</span>
              </div>
              <div className="info-item">
                <Clock size={18} />
                <span>Harmonie Signature : Lundi – Dimanche : 06h00 – 22h00</span>
              </div>
              <div className="info-item">
                <Clock size={18} />
                <span>Week-end & jours fériés : fermeture à 20h</span>
              </div>
              <div className="info-item">
                <Clock size={18} />
                <span>Bowling Le Logo : Mardi – Dimanche : 16h00 – 00h00 · fermé le lundi</span>
              </div>
            </div>
            <a className="footer-cta" href="tel:+22892921889">Réserver un moment</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Harmonie Signature · Tous droits réservés · Lomé, Togo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
