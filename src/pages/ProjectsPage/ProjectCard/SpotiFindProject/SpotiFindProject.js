import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SpotiFindProject.css';

// Reusable component for search results
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

// Component to display track details
function TrackDetails({ track, details }) {
  return (
    <div className="track-details">
      <h2>{track.name}</h2>
      <p>Artist(s): {track.artists.map((artist) => artist.name).join(', ')}</p>
      <p>Album: {track.album.name}</p>
      {/* Display audio features */}
      <h3>Audio Features</h3>
      <ul className="features-list">
        <li>
          <strong>Danceability:</strong> {details.features.danceability}
        </li>
        <li>
          <strong>Energy:</strong> {details.features.energy}
        </li>
        <li>
          <strong>Key:</strong> {details.features.key}
        </li>
        <li>
          <strong>Tempo:</strong> {details.features.tempo}
        </li>
        {/* Add more features as desired */}
      </ul>
      {/* You can also display audio analysis or visualize it */}
    </div>
  );
}

function SpotiFindProject() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [trackDetails, setTrackDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const API_BASE_URL = 'https://hpim4w4bxk.execute-api.us-west-2.amazonaws.com/main';

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSelectedTrack(null);
    setTrackDetails(null);
    if (!searchQuery) {
      setErrorMessage('Please enter a search query.');
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/search`, {
        params: { q: searchQuery },
      });
      if (response.data?.tracks?.items) {
        setResults(response.data.tracks.items);
      } else {
        setResults([]);
        setErrorMessage('No results found.');
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      setErrorMessage('An error occurred while fetching search results.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectTrack = async (track) => {
    setSelectedTrack(track);
    setIsLoading(true);
    setErrorMessage('');
    try {
      const response = await axios.get(`${API_BASE_URL}/track`, {
        params: { id: track.id },
      });
      setTrackDetails(response.data);
    } catch (error) {
      console.error('Error fetching track details:', error);
      setErrorMessage('An error occurred while fetching track details.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="spotifind-wrapper">
      <div className="spotifind-info">
        <h1>SpotiFind</h1>
        <p>Search for a song and discover its details!</p>
        <div className="search-container">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Enter song name or artist..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </form>
        </div>
        {isLoading && <p>Loading...</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {!selectedTrack && !errorMessage && (
          <TrackList tracks={results} onSelectTrack={handleSelectTrack} />
        )}
        {selectedTrack && trackDetails && (
          <TrackDetails track={selectedTrack} details={trackDetails} />
        )}
      </div>
    </div>
  );
}

export default SpotiFindProject;
