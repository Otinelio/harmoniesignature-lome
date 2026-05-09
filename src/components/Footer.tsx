import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6';
import { MapPin, Phone, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Col 1 */}
          <div className="footer-col animate-col-1">
            <h2 className="footer-logo">HARMONIE</h2>
            <p className="footer-tagline">Détente complète à Lomé</p>
            <div className="social-links">
              <a href="https://facebook.com/harmoniesignature" target="_blank" rel="noreferrer"><FaFacebook size={20} /></a>
              <a href="https://tiktok.com/@harmoniesignature" target="_blank" rel="noreferrer"><FaTiktok size={20} /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram size={20} /></a>
              <a href="https://x.com/HarmonieSigna" target="_blank" rel="noreferrer"><FaXTwitter size={20} /></a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="footer-col animate-col-2">
            <h3 className="footer-heading">Navigation rapide</h3>
            <nav className="footer-nav">
              <Link to="/">Accueil</Link>
              <Link to="/departements">Départements</Link>
              <Link to="/restauration">Restauration</Link>
              <Link to="/spa">Spa & Wellness</Link>
              <Link to="/tarifs">Tarifs</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          {/* Col 3 */}
          <div className="footer-col animate-col-3">
            <h3 className="footer-heading">Informations</h3>
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
                <span>Lun – Sam : 07h00 – 23h00 · Dim : Fermé</span>
              </div>
              <div className="info-item">
                <Clock size={18} />
                <span>Bowling : Mar – Dim : 16h00 – 00h00</span>
              </div>
            </div>
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
