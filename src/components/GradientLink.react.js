import React, { useState } from 'react';

const GradientLink = ({ 
  href, 
  text, 
  fontSize = '2.5em'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Instagram-like gradient colors
  const gradientColors = ['purple', 'pink', 'orange', 'yellow'];

  const borderGradient = `linear-gradient(to left, ${gradientColors.join(', ')})`;
  const textGradient = `linear-gradient(to right, ${gradientColors.join(', ')})`;

  const baseStyle = {
    fontSize: fontSize,
    textDecoration: 'none',
    border: 0,
    borderRadius: '.1em',
    borderBottom: '4px solid',
    borderImage: borderGradient,
    borderImageSlice: 1,
    transition: 'all 0.2s ease-in-out',
    padding: '.25em .5em',
    background: textGradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline-block',
  };

  const hoverStyle = {
    transform: isHovered ? 'scale(1.3) rotate(360deg) skewX(20deg)' : 'scale(1) rotate(0deg) skewX(0deg)',
    animation: isHovered ? 'crazyAnimation 1s infinite linear' : 'none',
  };

  return (
    <a 
      href={href} 
      style={{ ...baseStyle, ...hoverStyle }} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </a>
  );
};

export default GradientLink;