import React from 'react';
import contentData from '../contents.json';
import './css/PlaygroundButtonCard.css'; // Create a separate CSS file for this component

const PlaygroundButtonCard = () => {
  const { buttonsCard } = contentData.playgroundPage;

  return (
    <div className="playground-section">
      <h2>{buttonsCard.title}</h2>
      <p>{buttonsCard.description}</p>

      {/* Button Row 1 */}
      <div className="button-row">
        <div className="button-description">Default Button</div>
        <div className="button-container">
          <button className="button-example">Default</button>
        </div>
      </div>

      {/* Button Row 2 */}
      <div className="button-row">
        <div className="button-description">Animated Button 1</div>
        <div className="button-container">
          <button className="animated-button">Animated 1</button>
        </div>
      </div>

      {/* Button Row 3 */}
      <div className="button-row">
        <div className="button-description">Animated Button 2</div>
        <div className="button-container">
          <button className="animated-button" style={{ backgroundColor: '#191970' }}>Animated 2</button>
        </div>
      </div>

      {/* Add more button rows as needed */}
    </div>
  );
};

export default PlaygroundButtonCard;