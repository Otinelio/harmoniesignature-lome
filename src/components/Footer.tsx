import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa6';
import { MapPin, Phone, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* GRILLE PRINCIPALE */}
        <div className="footer-grid">

          {/* Col 1 — Réseaux sociaux */}
          <div className="footer-col animate-col-1">
            <p className="footer-heading">Suivez-nous</p>
            <div className="social-links">
              <a href="https://tiktok.com/@harmoniesignature" target="_blank" rel="noreferrer" aria-label="TikTok">
                <FaTiktok size={20} />
                <span>TikTok</span>
              </a>
              <a href="https://www.instagram.com/harmoniesignature" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram size={20} />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Col 2 — Infos */}
          <div className="footer-col animate-col-2">
            <p className="footer-heading">Nous trouver</p>
            <div className="footer-info">
              <div className="info-item">
                <MapPin size={16} />
                <span>Rue 243 Tot Ancien BSL, Résidence du Bénin, Lomé, Togo</span>
              </div>
              <div className="info-item">
                <Phone size={16} />
                <a href="tel:+22892921889">(+228) 92 92 18 89</a>
              </div>
              <div className="info-item">
                <Clock size={16} />
                <span>Tous les jours : 06h00 – 22h00</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>© 2025 Harmonie Signature · Tous droits réservés · Lomé, Togo</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
