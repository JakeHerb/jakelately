import React from 'react';
import './AudioFeaturesTable.css'; // We'll create this CSS file next

function AudioFeaturesTable({ features }) {
  return (
    <div className="audio-features-table">
      <h3>Audio Features</h3>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Danceability</td>
            <td>{features.danceability}</td>
          </tr>
          <tr>
            <td>Energy</td>
            <td>{features.energy}</td>
          </tr>
          <tr>
            <td>Key</td>
            <td>{features.key}</td>
          </tr>
          <tr>
            <td>Loudness</td>
            <td>{features.loudness} dB</td>
          </tr>
          <tr>
            <td>Mode</td>
            <td>{features.mode === 1 ? 'Major' : 'Minor'}</td>
          </tr>
          <tr>
            <td>Speechiness</td>
            <td>{features.speechiness}</td>
          </tr>
          <tr>
            <td>Acousticness</td>
            <td>{features.acousticness}</td>
          </tr>
          <tr>
            <td>Instrumentalness</td>
            <td>{features.instrumentalness}</td>
          </tr>
          <tr>
            <td>Liveness</td>
            <td>{features.liveness}</td>
          </tr>
          <tr>
            <td>Valence</td>
            <td>{features.valence}</td>
          </tr>
          <tr>
            <td>Tempo</td>
            <td>{features.tempo} BPM</td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>{(features.duration_ms / 1000).toFixed(0)} sec</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AudioFeaturesTable;
