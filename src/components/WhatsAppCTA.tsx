import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HelpCircle, X, ChevronDown, MessageCircle } from 'lucide-react';
import { getDepartments, getSettings } from '../utils/storage';
import './WhatsAppCTA.css';

const faqs = [
  {
    question: 'Quels sont les horaires d’ouverture ?',
    answer: 'Le complexe est ouvert du lundi au samedi de 07h00 à 23h00. Le Bowling Le Logo est ouvert du mardi au dimanche de 16h00 à 00h00.',
  },
  {
    question: 'Peut-on réserver en ligne ?',
    answer: 'Oui, vous pouvez réserver votre séance au Lotus Spa, votre formule au Platinum Fitness ou vos tables au Tropicana directement depuis notre site ou via notre WhatsApp.',
  },
  {
    question: 'Y a-t-il un parking disponible ?',
    answer: 'Oui, un parking sécurisé et surveillé 24h/24 est disponible gratuitement pour tous nos visiteurs à la Résidence du Bénin.',
  },
  {
    question: 'Comment nous contacter rapidement ?',
    answer: 'Vous pouvez nous joindre directement via WhatsApp au (+228) 92 92 18 89 pour toutes vos questions ou réservations.',
  },
];

const WhatsAppCTA = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const isHome = location.pathname === '/';

  const getWhatsAppLink = () => {
    const settings = getSettings();
    const departments = getDepartments();
    const currentPath = location.pathname.replace('/', '').toLowerCase();

    let targetPhone = settings.mainWhatsApp || '22892921889';
    let targetName = 'Harmonie Signature';

    if (currentPath === 'restauration') {
      targetPhone = settings.mainWhatsApp || '22892921889';
      targetName = 'Tropicana';
    } else if (currentPath === 'bowling') {
      targetPhone = departments.find(d => d.id.toLowerCase() === currentPath)?.phone || settings.mainWhatsApp || '22892921889';
      targetName = 'Bowling';
    } else {
      const matchedDept = departments.find(d => d.id.toLowerCase() === currentPath);
      if (matchedDept && matchedDept.phone) {
        targetPhone = matchedDept.phone;
        targetName = matchedDept.name;
      }
    }

    const cleanDigits = targetPhone.replace(/\D/g, '');
    const cleanPhone = cleanDigits.length === 8 ? '228' + cleanDigits : cleanDigits;

    return `https://wa.me/${cleanPhone}?text=Bonjour%20${encodeURIComponent(targetName)}%2C%20je%20souhaite%20obtenir%20des%20informations.`;
  };


  if (!isHome) {
    return (
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-cta"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Nous contacter"
      >
        <div className={`whatsapp-label ${isHovered ? 'visible' : ''}`}>
          Nous contacter
        </div>
        <div className="whatsapp-icon-bg whatsapp-mode">
          <MessageCircle size={22} color="white" />
        </div>
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        className="whatsapp-cta"
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="FAQ"
      >
        <div className={`whatsapp-label ${isHovered ? 'visible' : ''}`}>
          FAQ
        </div>
        <div className="whatsapp-icon-bg faq-mode">
          <HelpCircle size={22} color="white" />
        </div>
      </button>

      <div className={`faq-sheet-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)} />
      
      <aside className={`faq-sheet ${isOpen ? 'open' : ''}`} aria-label="FAQ du site">
        <div className="faq-sheet-header">
          <div>
            <p className="faq-sheet-eyebrow">Aide</p>
            <h3 className="faq-sheet-title">Questions fréquentes</h3>
          </div>
          <button type="button" className="faq-sheet-close" onClick={() => setIsOpen(false)} aria-label="Fermer la FAQ">
            <X size={18} />
          </button>
        </div>

        <div className="faq-sheet-content">
          {faqs.map((item, index) => {
            const isItemOpen = openFaq === index;
            return (
              <article className={`faq-sheet-item ${isItemOpen ? 'open' : ''}`} key={item.question}>
                <button
                  type="button"
                  className="faq-sheet-question"
                  onClick={() => setOpenFaq(isItemOpen ? null : index)}
                  aria-expanded={isItemOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown 
                    size={16} 
                    className={`faq-chevron ${isItemOpen ? 'rotate' : ''}`} 
                  />
                </button>
                <div className={`faq-answer-wrapper ${isItemOpen ? 'open' : ''}`}>
                  <p className="faq-sheet-answer">{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="faq-sheet-footer">
          <p>Besoin d'autre chose ?</p>
          <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="faq-whatsapp-btn">
            <MessageCircle size={16} /> Contacter sur WhatsApp
          </a>
        </div>
      </aside>
    </>
  );
};

export default WhatsAppCTA;
