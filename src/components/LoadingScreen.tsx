import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <img src="/logo-harmonie.png" alt="Harmonie Signature Logo" className="loading-logo-img" />
        <div className="loading-line-container">
          <div className="loading-line"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
