import React from 'react';
import contentData from '../contents.json';
import PlaygroundButtonCard from './PlayroundButtonCard.react';
import './css/Playground.css';

const Playground = () => {
  const { playgroundPage } = contentData;

  return (
    <div className="playground">
      <PlaygroundButtonCard />
      {/* ... other sections ... */}
    </div>
  );
};

export default Playground;