import React, { useState, useEffect, useRef } from 'react';
import { Clock, Phone, Sparkles, CalendarCheck } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import './Spa.css';

const spaImages = [
  'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=1200&auto=format&fit=crop'
];

const Spa = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [formState, setFormState] = useState({
    soin: 'Massage Thaï',
    date: '',
    heure: '10:00',
    nom: '',
    telephone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.05 }
    );

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const items = document.querySelectorAll('.spa-gallery .gallery-item');
      items.forEach(item => observer.observe(item));
    }, 100);

    return () => {
      clearTimeout(timer);
      const items = document.querySelectorAll('.spa-gallery .gallery-item');
      items.forEach(item => observer.unobserve(item));
    };
  }, []);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate email sending
    console.log("Simulating email send to Spa...");
    
    // Generate WhatsApp link
    const text = `Demande de RDV Spa — Harmonie Signature%0ASoin : ${formState.soin}%0ADate : ${formState.date} à ${formState.heure}%0ANom : ${formState.nom}%0ATel : ${formState.telephone}%0ADemande : ${formState.message}`;
    window.open(`https://wa.me/22892921889?text=${text}`, '_blank');
    
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    
    // Reset form
    setFormState({ soin: 'Massage Thaï', date: '', heure: '10:00', nom: '', telephone: '', message: '' });
  };

  return (
    <div className="spa-page">
      <section className="dept-hero spa-hero">
        <div className="dept-hero-bg" style={{ backgroundImage: `url(${spaImages[0]})` }}></div>
        <div className="dept-hero-overlay"></div>
        <div className="dept-hero-content">
          <h1 className="spa-title">Spa & Wellness</h1>
          <p className="spa-subtitle">Massage Thaï · Jacuzzi · Soins Corps</p>
        </div>
      </section>

      <section className="spa-services">
        <div className="spa-cards">
          <div className="spa-card">
            <Sparkles size={28} color="#C8A84B" />
            <h3>Massage Thaï</h3>
            <p>Une thérapie ancestrale pour libérer les tensions musculaires et rééquilibrer l'énergie du corps.</p>
            <div className="spa-price">À partir de 20 000 FCFA</div>
          </div>
          <div className="spa-card">
            <Sparkles size={28} color="#C8A84B" />
            <h3>Soins du Corps</h3>
            <p>Gommages, enveloppements et rituels purifiants avec des produits naturels et luxueux.</p>
            <div className="spa-price">À partir de 15 000 FCFA</div>
          </div>
          <div className="spa-card">
            <Sparkles size={28} color="#C8A84B" />
            <h3>Bain Jacuzzi</h3>
            <p>Un moment de relaxation absolue dans nos bains à remous privatisables.</p>
            <div className="spa-price">10 000 FCFA / séance</div>
          </div>
        </div>
      </section>

      <section className="spa-gallery" ref={galleryRef}>
        <div className="gallery-masonry">
          {spaImages.map((src, idx) => (
            <div key={idx} className="gallery-item" onClick={() => openLightbox(idx)}>
              <img src={src} alt={`Spa ${idx + 1}`} />
              <div className="gallery-overlay"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="spa-booking-section">
        <div className="spa-booking-container">
          <div className="spa-contact-info">
            <h3>Informations</h3>
            <div className="contact-line"><Clock size={18} /><span>Lun – Sam : 09h00 – 21h00</span></div>
            <div className="contact-line"><Phone size={18} /><span>(+228) 92 92 18 89</span></div>
          </div>

          <div className="spa-booking-form-wrapper">
            <h2 className="spa-booking-title">Prendre rendez-vous</h2>
            <form onSubmit={handleFormSubmit} className="spa-booking-form">
              <div className="form-group">
                <select value={formState.soin} onChange={e => setFormState({...formState, soin: e.target.value})} required>
                  <option value="Massage Thaï">Massage Thaï</option>
                  <option value="Soins du Corps">Soins du Corps</option>
                  <option value="Bain Jacuzzi">Bain Jacuzzi</option>
                  <option value="Forfait Complet">Forfait Complet</option>
                </select>
              </div>
              <div className="form-group row">
                <input type="date" value={formState.date} onChange={e => setFormState({...formState, date: e.target.value})} min={new Date().toISOString().split('T')[0]} required />
                <select value={formState.heure} onChange={e => setFormState({...formState, heure: e.target.value})} required>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                </select>
              </div>
              <div className="form-group">
                <input type="text" placeholder="Prénom & Nom" value={formState.nom} onChange={e => setFormState({...formState, nom: e.target.value})} required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Téléphone WhatsApp" value={formState.telephone} onChange={e => setFormState({...formState, telephone: e.target.value})} required />
              </div>
              <div className="form-group">
                <textarea rows={3} placeholder="Message optionnel" value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})}></textarea>
              </div>
              
              <button type="submit" className="spa-submit-btn">
                Confirmer ma réservation <CalendarCheck size={18} />
              </button>

              {isSubmitted && (
                <div className="form-success-msg">
                  Votre demande a été envoyée. Notre équipe vous confirme sous 2h.
                </div>
              )}
              <p className="form-note">Notre équipe confirme par WhatsApp sous 2h.</p>
            </form>
          </div>
        </div>
      </section>

      <Lightbox 
        images={spaImages}
        currentIndex={currentImage}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImage}
        backgroundColor="rgba(24, 32, 48, 0.98)"
      />
    </div>
  );
};

export default Spa;
