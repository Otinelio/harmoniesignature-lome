import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTiktok } from 'react-icons/fa6';
import { MapPin, Phone, Clock, Sparkles } from 'lucide-react';
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
              </a>
              <a href={settings?.facebookUrl || "https://www.instagram.com/harmoniesignature"} target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
            </div>
            <div className="footer-badge">
              <Sparkles size={14} />
              <span>Un univers complet pour vos sorties et vos séances</span>
            </div>
          </div>

          {/* Col 2 — Infos */}
          <div className="footer-col animate-col-2">
            <p className="footer-heading">Nous trouver</p>
            <div className="footer-info">
              <div className="info-item">
                <MapPin size={18} />
                <span>{settings?.address || "Rue 243 Tot Ancien BSL, Résidence du Bénin, Lomé, Togo"}</span>
              </div>
              <div className="info-item">
                <Phone size={18} />
                <a href={`tel:${settings?.mainWhatsApp?.replace(/\D/g, '') || "+22892921889"}`}>
                  {settings?.mainWhatsApp || "(+228) 92 92 18 89"}
                </a>
              </div>
              <div className="info-item">
                <Clock size={18} />
                <span>{settings?.generalHours || "Harmonie Signature : Lundi – Dimanche : 06h00 – 22h00"}</span>
              </div>
              <div className="info-item">
                <Clock size={18} />
                <span>Week-end & jours fériés : fermeture à 20h</span>
              </div>
              <div className="info-item">
                <Clock size={18} />
                <span>{settings?.bowlingHours || "Bowling Le Logo : Mardi – Dimanche : 16h00 – 00h00 · fermé le lundi"}</span>
              </div>
            </div>
            <a className="footer-cta" href={`tel:${settings?.mainWhatsApp?.replace(/\D/g, '') || "+22892921889"}`}>Réserver un moment</a>
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
