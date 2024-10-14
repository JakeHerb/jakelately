import React from 'react';
import './SectionsTimeline.css';

function SectionsTimeline({ sections }) {
  const totalDuration = sections.reduce((sum, section) => sum + section.duration, 0);

  return (
    <div className="sections-timeline">
      <h3>Track Sections</h3>
      <div className="timeline">
        {sections.map((section, index) => {
          const widthPercentage = (section.duration / totalDuration) * 100;
          return (
            <div
              key={index}
              className="section"
              style={{ width: `${widthPercentage}%` }}
              title={`Section ${index + 1}: Start ${section.start.toFixed(2)}s, Duration ${section.duration.toFixed(2)}s`}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SectionsTimeline;
