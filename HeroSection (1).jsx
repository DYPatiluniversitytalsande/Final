import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <header className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        <span className="luxury-tag">EXPERIENCE LUXURY TRAVEL</span>
        <br />
        <h1>Explore the World<br />Like Never Before</h1>
        <p>
          Curated journeys to the world's most extraordinary destinations. Let us transform
          your travel dreams into unforgettable memories.
        </p>
        <div className="hero-buttons">
          <button className="start-btn">Start Planning</button>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
