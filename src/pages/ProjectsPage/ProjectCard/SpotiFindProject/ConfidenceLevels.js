import React from 'react';
import './ConfidenceLevels.css';

function ConfidenceLevels({ trackAnalysis }) {
  return (
    <div className="confidence-levels">
      <h3>Confidence Levels</h3>
      <table>
        <tbody>
          <tr>
            <td>Tempo Confidence</td>
            <td>{trackAnalysis.tempo_confidence}</td>
          </tr>
          <tr>
            <td>Key Confidence</td>
            <td>{trackAnalysis.key_confidence}</td>
          </tr>
          <tr>
            <td>Mode Confidence</td>
            <td>{trackAnalysis.mode_confidence}</td>
          </tr>
          <tr>
            <td>Time Signature Confidence</td>
            <td>{trackAnalysis.time_signature_confidence}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ConfidenceLevels;
