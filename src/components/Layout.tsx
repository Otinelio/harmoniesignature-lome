import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';
import LoadingScreen from './LoadingScreen';
import WhatsAppCTA from './WhatsAppCTA';
import './Layout.css';

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin-hs-2025');

  useEffect(() => {
    // Simulate initial loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (isAdminRoute) {
    return (
      <div className="admin-layout">
        <Outlet />
      </div>
    );
  }

  const showBackButton = !isAdminRoute && location.pathname !== '/';

  return (
    <>
      {loading && <LoadingScreen />}
      {!loading && (
        <>
          <Navigation />
          <div className="page-wrapper fade-in-up">
            <main>
              <Outlet />
            </main>
            <Footer />
          </div>
          <WhatsAppCTA />
          {showBackButton && (
            <Link to="/" className="back-floating-btn" aria-label="Retour à l'accueil">
              <ArrowLeft size={22} color="white" />
              <span className="back-label">Retour</span>
            </Link>
          )}
        </>
      )}
    </>
  );
};

export default Layout;
