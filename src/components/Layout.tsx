import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
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

  if (isAdminRoute) {
    return (
      <div className="admin-layout">
        <Outlet />
      </div>
    );
  }

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
        </>
      )}
    </>
  );
};

export default Layout;
