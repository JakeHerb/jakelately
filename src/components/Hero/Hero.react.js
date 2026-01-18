import React from 'react';
import './Hero.css';
import astronautImage from './spaceman.png';

function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="hero">
      {/* Animated star field background */}
      <div className="star-field"></div>

      {/* Ambient glow effects */}
      <div className="hero-glow hero-glow--primary"></div>
      <div className="hero-glow hero-glow--secondary"></div>

      {/* Floating astronaut */}
      <img src={astronautImage} alt="" className="floating-astronaut" />

      {/* Main content */}
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-name">
            <span className="hero-name--jake">Jake</span>
            <span className="hero-name--lately">Lately</span>
          </span>
        </h1>

        <div className="hero-tagline-wrapper">
          <p className="hero-tagline">
            GenAI Engineer at Meta. Seattle, WA.
          </p>
        </div>

        <div className="hero-links">
          <a href="/projects" className="hero-link">
            <span className="hero-link-icon">{'>'}</span>
            View Work
          </a>
          <a href="/contact" className="hero-link hero-link--alt">
            <span className="hero-link-icon">{'~'}</span>
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button className="scroll-indicator" onClick={scrollToContent} aria-label="Scroll down">
        <span className="scroll-indicator-text">scroll</span>
        <span className="scroll-indicator-arrow"></span>
      </button>
    </div>
  );
}

export default Hero;
