import React from 'react';
import './TrackList.css'; // We'll create this CSS file next

function TrackList({ tracks, onSelectTrack }) {
  return (
    <div className="results-container">
      {tracks.length > 0 ? (
        <ul className="results-list">
          {tracks.map((track) => (
            <li key={track.id} className="track-item">
              <img
                src={track.album.images[2]?.url || 'placeholder.jpg'}
                alt={`${track.name} album art`}
                className="album-art"
              />
              <div className="track-info">
                <h3>{track.name}</h3>
                <p>{track.artists.map((artist) => artist.name).join(', ')}</p>
                <button onClick={() => onSelectTrack(track)}>Select</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results to display yet.</p>
      )}
    </div>
  );
}

export default TrackList;
