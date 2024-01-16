import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-title">Jake Lately</h1>
        <div>
            <p className="hero-subtitle">Software Engineer | Future Enthusiast | Music Creator</p>
        </div>
      {/* Add more content or a call-to-action button if needed */}
    </div>
  );
}

export default Hero;