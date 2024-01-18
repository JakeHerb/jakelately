import React from 'react';
import './Hero.css';
import leftSpaceImage from './LeftSpace.png';
import rightSpaceImage from './rightSpace.png';
import heroLines from './heroLines.svg';
import astronautImage from './spaceman.png';

function Hero() {

    const heroStyle = {
        height: '70dvh',
    }
    const lineStyle = {
        backgroundColor: '#f4ddb5', // Set the color of the line
      };
  return (
    <div className="hero" style={heroStyle}>
      <img src={leftSpaceImage} alt="Left Space" className="background-image left" />
      <img src={rightSpaceImage} alt="Right Space" className="background-image right" />
      <img src={heroLines} alt="Hero Lines" className="hero-lines" />
      <img src={astronautImage} alt="Floating Astronaut" className="floating-astronaut"/>
      <h1 className="hero-title">
        <span className="jake">JAKE</span> 
        <span className="lately turqiose">LATELY</span>      
      </h1>
      <div className="horizontal-line" style={lineStyle}></div> {/* Horizontal line */}
        <div>
            <p className="hero-subtitle">How can <span className="yellow">Jake</span> help <span className="turqiose">you</span>?&nbsp;</p>
        </div>
      {/* Add more content or a call-to-action button if needed */}
    </div>
  );
}

export default Hero;