import React from 'react';
import './PixelButton.css';

function PixelButton({ text, onClick }) {
  return (
    <button className="pixel-button" onClick={onClick}>
      {text}
    </button>
  );
}

export default PixelButton;