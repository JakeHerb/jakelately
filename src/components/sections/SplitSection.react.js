import React from 'react';
import '../css/SplitSection.css'; // Make sure to create a corresponding CSS file

const SplitSection = ({ leftContent, rightContent }) => {
  return (
    <div className="split-section">
      <div className="left-content">
        {leftContent}
      </div>
      <div className="right-content">
        {rightContent}
      </div>
    </div>
  );
};

export default SplitSection;