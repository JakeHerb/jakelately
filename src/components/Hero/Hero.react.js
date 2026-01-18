import React, { useState, useCallback, useEffect } from 'react';
import './Hero.css';
import astronautImage from './spaceman.png';
import rightSpaceImage from './rightSpace.png';
import heroLines from './heroLines.svg';

function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 2;
    const y = (clientY / window.innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  }, []);

  // Generate random floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 4 + 2,
          duration: Math.random() * 10 + 8,
          delay: Math.random() * 5,
          color: ['golden', 'teal', 'coral'][Math.floor(Math.random() * 3)],
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  const parallaxStyle = (intensity) => ({
    transform: `translate(${mousePos.x * intensity * 50}px, ${mousePos.y * intensity * 50}px)`,
  });

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="hero" onMouseMove={handleMouseMove}>
      {/* Animated star field with multiple layers */}
      <div className="star-field">
        <div className="stars stars--small"></div>
        <div className="stars stars--medium"></div>
        <div className="stars stars--large"></div>
        <div className="shooting-star shooting-star--1"></div>
        <div className="shooting-star shooting-star--2"></div>
        <div className="shooting-star shooting-star--3"></div>
      </div>

      {/* Random floating particles */}
      <div className="particle-field">
        {particles.map((p) => (
          <div
            key={p.id}
            className={`particle particle--${p.color}`}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Geometric floating elements */}
      <div className="hero-geometrics">
        <div className="geo-ring geo-ring--1"></div>
        <div className="geo-ring geo-ring--2"></div>
        <div className="geo-ring geo-ring--3"></div>
        <div className="geo-ring geo-ring--4"></div>
        <div className="geo-circle geo-circle--1"></div>
        <div className="geo-circle geo-circle--2"></div>
        <div className="geo-circle geo-circle--3"></div>
        <div className="geo-orb geo-orb--1"></div>
        <div className="geo-orb geo-orb--2"></div>
      </div>

      {/* Accent lines - LEFT side now */}
      <img
        src={heroLines}
        alt=""
        className="hero-lines hero-lines--left"
        style={parallaxStyle(0.03)}
      />
      {/* Accent lines - RIGHT side */}
      <img
        src={heroLines}
        alt=""
        className="hero-lines hero-lines--right"
        style={parallaxStyle(0.02)}
      />

      {/* Pulse rings - sporadic */}
      <div className="pulse-ring pulse-ring--1"></div>
      <div className="pulse-ring pulse-ring--2"></div>
      <div className="pulse-ring pulse-ring--3"></div>

      {/* Enhanced glow effects with parallax */}
      <div
        className="hero-glow hero-glow--primary"
        style={parallaxStyle(0.04)}
      ></div>
      <div
        className="hero-glow hero-glow--secondary"
        style={parallaxStyle(0.03)}
      ></div>
      <div
        className="hero-glow hero-glow--accent"
        style={parallaxStyle(0.02)}
      ></div>
      <div className="hero-glow hero-glow--left"></div>

      {/* Floating space elements */}
      <img
        src={astronautImage}
        alt=""
        className="floating-astronaut"
        style={parallaxStyle(0.06)}
      />
      <img
        src={rightSpaceImage}
        alt=""
        className="floating-space-right"
        style={parallaxStyle(-0.05)}
      />

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
            <span className="tagline-text">GenAI Engineer at Meta. Seattle, WA.</span>
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
