import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container nav-container-centered">
        <Link to="/" className="nav-logo">
          <img src="/logo-harmonie.png" alt="Harmonie Signature Logo" className="nav-logo-img" />
        </Link>
      </div>
    </header>
  );
};

export default Navigation;

