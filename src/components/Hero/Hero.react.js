import React from 'react';
import './Hero.css';

function Hero() {

    const heroStyle = {
        height: '70dvh',
    }
    const lineStyle = {
        backgroundColor: '#f4ddb5', // Set the color of the line
      };
  return (
    <div className="hero" style={heroStyle}>
      <h1 className="hero-title">Jake <span className="turqiose">Lately</span></h1>
      <div className="horizontal-line" style={lineStyle}></div> {/* Horizontal line */}
        <div>
            <p className="hero-subtitle">How can <span className="yellow">Jake</span> help <span className="turqiose">you</span>?&nbsp;</p>
        </div>
      {/* Add more content or a call-to-action button if needed */}
    </div>
  );
}

export default Hero;