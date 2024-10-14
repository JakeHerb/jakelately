import React from 'react';
import AudioFeaturesTable from './AudioFeaturesTable';
import AudioFeaturesRadarChart from './AudioFeaturesRadarChart';
import LoudnessBarChart from './LoudnessBarChart';
import './TrackDetails.css'; // We'll create this CSS file next

function TrackDetails({ track, details, onBack }) {
  return (
    <div className="track-details">
      <button className="back-button" onClick={onBack}>Back to Results</button>
      <div className="track-header">
        <img
          src={track.album.images[1]?.url || 'placeholder.jpg'}
          alt={`${track.name} album art`}
          className="album-art-large"
        />
        <div className="track-meta">
          <h2>{track.name}</h2>
          <p>Artist(s): {track.artists.map((artist) => artist.name).join(', ')}</p>
          <p>Album: {track.album.name}</p>
        </div>
      </div>
      {/* Audio Features Table */}
      <AudioFeaturesTable features={details.features} />
      {/* Audio Features Radar Chart */}
      <AudioFeaturesRadarChart features={details.features} />
      {/* Loudness Bar Chart */}
      <LoudnessBarChart analysis={details.analysis} />
    </div>
  );
}

export default TrackDetails;
