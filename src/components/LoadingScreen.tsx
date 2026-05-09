import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <h1 className="loading-title">HARMONIE SIGNATURE</h1>
        <div className="loading-line-container">
          <div className="loading-line"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
