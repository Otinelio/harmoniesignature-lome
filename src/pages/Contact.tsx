import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { getSettings } from '../utils/storage';
import './Contact.css';

const Contact = () => {
  const settings = getSettings();
  const [formState, setFormState] = useState({ nom: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate email send
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormState({ nom: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1 className="contact-title">Contactez-nous</h1>
        <p className="contact-subtitle">UNE QUESTION ? UNE RÉSERVATION ? NOUS SOMMES LÀ.</p>
      </section>

      <section className="contact-content">
        <div className="contact-grid">
          
          <div className="contact-info-panel">
            <h2>Coordonnées</h2>
            
            <div className="info-block">
              <MapPin size={24} className="info-icon" />
              <div>
                <h3>Adresse</h3>
                <p>{settings.address}</p>
              </div>
            </div>
            
            <div className="info-block">
              <Phone size={24} className="info-icon" />
              <div>
                <h3>Téléphone / WhatsApp</h3>
                <p>{settings.mainWhatsApp}</p>
              </div>
            </div>
            
            <div className="info-block">
              <Clock size={24} className="info-icon" />
              <div>
                <h3>Horaires d'ouverture</h3>
                <p>{settings.generalHours}</p>
                <p style={{ opacity: 0.6, fontSize: '13px', marginTop: '4px' }}>Bowling : {settings.bowlingHours}</p>
              </div>
            </div>

            <div className="social-links-contact">
              <a href="#" className="social-link"><FaInstagram size={24} /></a>
              <a href="#" className="social-link"><FaFacebook size={24} /></a>
            </div>
          </div>

          <div className="contact-form-panel">
            <h2>Écrivez-nous</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Votre nom complet" 
                  value={formState.nom}
                  onChange={e => setFormState({...formState, nom: e.target.value})}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  value={formState.email}
                  onChange={e => setFormState({...formState, email: e.target.value})}
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  rows={5} 
                  placeholder="Votre message" 
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Envoyer le message
              </button>
              
              {isSubmitted && (
                <div className="form-success">
                  Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.
                </div>
              )}
            </form>
          </div>

        </div>
      </section>
      
      <section className="contact-map">
        {/* Placeholder for map */}
        <div style={{ width: '100%', height: '100%', backgroundColor: '#182030', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ opacity: 0.3, fontFamily: 'var(--font-display)', fontSize: '24px' }}>Carte Interactive (Google Maps Embed)</span>
        </div>
      </section>
    </div>
  );
};

export default Contact;
