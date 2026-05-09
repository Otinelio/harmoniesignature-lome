import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppCTA.css';

const WhatsAppCTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a 
      href="https://wa.me/22892921889" 
      target="_blank" 
      rel="noreferrer"
      className="whatsapp-cta"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`whatsapp-label ${isHovered ? 'visible' : ''}`}>
        Nous contacter
      </div>
      <div className="whatsapp-icon-bg">
        <MessageCircle size={22} color="white" />
      </div>
    </a>
  );
};

export default WhatsAppCTA;
