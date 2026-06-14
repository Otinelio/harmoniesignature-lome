import React, { useState, useEffect } from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa6';
import { MapPin, Phone, Clock } from 'lucide-react';
import { getSettings, Settings } from '../utils/storage';
import './Footer.css';

const Footer = () => {
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    setSettings(getSettings());
  }, []);

  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* GRILLE PRINCIPALE */}
        <div className="footer-grid">

          {/* Col 1 — Réseaux sociaux */}
          <div className="footer-col animate-col-1">
            <p className="footer-heading">Suivez-nous</p>
            <div className="social-links">
              <a href={settings?.tiktokUrl || "https://tiktok.com/@harmoniesignature"} target="_blank" rel="noreferrer" aria-label="TikTok">
                <FaTiktok size={20} />
                <span>TikTok</span>
              </a>
              <a href={settings?.facebookUrl || "https://www.instagram.com/harmoniesignature"} target="_blank" rel="noreferrer" aria-label="Instagram">
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
                <span>{settings?.address || "Rue 243 Tot Ancien BSL, Résidence du Bénin, Lomé, Togo"}</span>
              </div>
              <div className="info-item">
                <Phone size={16} />
                <a href={`tel:${settings?.mainWhatsApp?.replace(/\D/g, '') || "+22892921889"}`}>
                  {settings?.mainWhatsApp || "(+228) 92 92 18 89"}
                </a>
              </div>
              <div className="info-item">
                <Clock size={16} />
                <span>{settings?.generalHours || "Tous les jours : 06h00 – 22h00"}</span>
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
