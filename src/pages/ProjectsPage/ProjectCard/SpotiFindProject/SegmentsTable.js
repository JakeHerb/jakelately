import React, { useState } from 'react';
import './SegmentsTable.css';

function SegmentsTable({ segments }) {
  const [showAll, setShowAll] = useState(false);
  const displayedSegments = showAll ? segments : segments.slice(0, 10);

  return (
    <div className="segments-table">
      <h3>Segments</h3>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Start (s)</th>
            <th>Duration (s)</th>
            <th>Loudness (dB)</th>
          </tr>
        </thead>
        <tbody>
          {displayedSegments.map((segment, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{segment.start.toFixed(2)}</td>
              <td>{segment.duration.toFixed(2)}</td>
              <td>{segment.loudness_max.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Show Less' : 'Show All'}
      </button>
    </div>
  );
}

export default SegmentsTable;
