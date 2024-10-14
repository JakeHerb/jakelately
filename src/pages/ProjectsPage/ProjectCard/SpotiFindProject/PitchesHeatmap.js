import React from 'react';
import HeatMap from 'react-heatmap-grid';
import './PitchesHeatmap.css';

function PitchesHeatmap({ segments }) {
  // Prepare data
  const xLabels = segments.slice(0, 50).map((segment, index) => (index + 1).toString());
  const yLabels = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];
  const data = [];

  for (let i = 0; i < 12; i++) {
    data[i] = segments.slice(0, 50).map(segment => segment.pitches[i]);
  }

  return (
    <div className="pitches-heatmap">
      <h3>Pitches Heatmap</h3>
      <div className="heatmap-container">
        <HeatMap
          xLabels={xLabels}
          yLabels={yLabels}
          data={data}
          xLabelWidth={30}
          yLabelWidth={60}
          cellStyle={(background, value, min, max, data, x, y) => ({
            background: `rgb(255, ${255 - (value * 255)}, ${255 - (value * 255)})`,
            fontSize: '11px',
          })}
          cellRender={value => value && value.toFixed(2)}
        />
      </div>
    </div>
  );
}

export default PitchesHeatmap;
