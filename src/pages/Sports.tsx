import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import './Sports.css';

// MODIFIEZ CES IMAGES CI-DESSOUS POUR CHANGER LE CAROUSEL
const tennisImages = [
  'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1530915365347-2a62886f48a1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1572560372864-1507bb0a22c5?q=80&w=1200&auto=format&fit=crop'
];

// MODIFIEZ CES IMAGES CI-DESSOUS POUR CHANGER LE CAROUSEL
const basketImages = [
  'https://images.unsplash.com/photo-1505666287802-931dc83948e9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?q=80&w=1200&auto=format&fit=crop'
];

const Sports = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [activeGallery, setActiveGallery] = useState<string[]>([]);

  const openLightbox = (images: string[], index: number) => {
    setActiveGallery(images);
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  return (
    <div className="sports-page">
      <section className="dept-hero">
        <div className="dept-hero-bg" style={{ backgroundImage: `url(${tennisImages[0]})` }}></div>
        <div className="dept-hero-overlay"></div>
        <div className="dept-hero-content">
          <h1 className="dept-title">Sports Extérieurs</h1>
        </div>
      </section>

      {/* TENNIS SECTION */}
      <section className="dept-presentation" id="tennis">
        <div className="presentation-container">
          <div className="presentation-text" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '40px', fontStyle: 'normal' }}>Tennis</h2>
            <p>Terrains en dur éclairés pour une pratique loisir ou intensive, même en soirée. L'espace idéal pour perfectionner votre service sous le climat tropical.</p>
          </div>
        </div>
      </section>

      <section className="dept-gallery" style={{ paddingTop: 0 }}>
        <div className="sports-carousel-container">
          <div className="sports-carousel-track">
            {/* Dupliquer le tableau pour le défilement infini */}
            {[...tennisImages, ...tennisImages].map((src, idx) => (
              <div key={idx} className="sports-carousel-item" onClick={() => openLightbox(tennisImages, idx % tennisImages.length)}>
                <img src={src} alt={`Tennis ${idx}`} />
                <div className="gallery-overlay"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="contact-card" style={{ maxWidth: '600px', margin: '40px auto 0' }}>
          <div className="tarif-line" style={{ borderBottom: 'none', paddingBottom: 0 }}><span>Tarif horaire</span><span className="price">10 000 FCFA</span></div>
          <div className="contact-line" style={{ marginTop: '16px' }}><Phone size={18} /><span>(+228) 92 92 18 89</span></div>
        </div>
      </section>

      {/* GRAPHIC SEPARATOR */}
      <div style={{ padding: '80px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '1px', backgroundColor: 'rgba(200,168,75,0.3)', zIndex: 1 }}></div>
        <div style={{ position: 'relative', zIndex: 2, display: 'inline-block', backgroundColor: 'var(--color-bg-primary)', padding: '0 32px' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '100px', color: 'rgba(200,168,75,0.1)', fontStyle: 'italic', lineHeight: 1 }}>&</span>
        </div>
      </div>

      {/* BASKETBALL SECTION */}
      <section className="dept-presentation" id="basket" style={{ paddingTop: 0 }}>
        <div className="presentation-container">
          <div className="presentation-text" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '40px', fontStyle: 'normal' }}>Basketball</h2>
            <p>Un terrain professionnel extérieur pour des matchs 5x5 ou 3x3 intenses. Projecteurs LED pour des soirées de jeu mémorables.</p>
          </div>
        </div>
      </section>

      <section className="dept-gallery" style={{ paddingTop: 0, paddingBottom: '100px' }}>
        <div className="sports-carousel-container">
          <div className="sports-carousel-track">
            {/* Dupliquer le tableau pour le défilement infini */}
            {[...basketImages, ...basketImages].map((src, idx) => (
              <div key={idx} className="sports-carousel-item" onClick={() => openLightbox(basketImages, idx % basketImages.length)}>
                <img src={src} alt={`Basket ${idx}`} />
                <div className="gallery-overlay"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="contact-card" style={{ maxWidth: '600px', margin: '40px auto 0' }}>
          <div className="tarif-line" style={{ borderBottom: 'none', paddingBottom: 0 }}><span>Tarif horaire</span><span className="price">5 000 FCFA</span></div>
          <div className="contact-line" style={{ marginTop: '16px' }}><Phone size={18} /><span>(+228) 92 92 18 89</span></div>
        </div>
      </section>

      <Lightbox 
        images={activeGallery}
        currentIndex={currentImage}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImage}
      />
    </div>
  );
};

export default Sports;
