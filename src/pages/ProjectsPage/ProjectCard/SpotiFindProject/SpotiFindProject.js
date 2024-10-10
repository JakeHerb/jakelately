import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SpotiFindProject.css';

// Import awsconfig safely
let awsconfig;
try {
  awsconfig = require('../../../../aws-exports.js'); // Adjust if necessary
} catch (e) {
  console.error('aws-exports.js not found. Please ensure Amplify backend is properly set up.', e);
}

function SpotiFindProject() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [trackDetails, setTrackDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const API_BASE_URL = awsconfig?.aws_cloud_logic_custom?.[0]?.endpoint || '';

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (!searchQuery) {
      setErrorMessage('Please enter a search query.');
      return;
    }
    setIsLoading(true);
    try {
      console.log(`Making request to: ${API_BASE_URL}/search?q=${encodeURIComponent(searchQuery)}`);
      const response = await axios.get(`${API_BASE_URL}/search`, {
        params: { q: searchQuery },
      });
      console.log('Search response:', response.data);
      setResults(response.data.tracks.items);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setErrorMessage('An error occurred while fetching search results.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchTrackDetails = async () => {
      if (selectedTrack) {
        setIsLoading(true);
        setErrorMessage('');
        try {
          const [analysisResponse, featuresResponse] = await Promise.all([
            axios.get(`${API_BASE_URL}/audio-analysis/${selectedTrack.id}`),
            axios.get(`${API_BASE_URL}/audio-features/${selectedTrack.id}`),
          ]);
          setTrackDetails({
            analysis: analysisResponse.data,
            features: featuresResponse.data,
          });
        } catch (error) {
          console.error('Error fetching track details:', error);
          setErrorMessage('An error occurred while fetching track details.');
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchTrackDetails();
  }, [selectedTrack, API_BASE_URL]);

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
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>
        {isLoading && <p>Loading...</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="results-container">
          {results.length > 0 ? (
            <ul className="results-list">
              {results.map((track) => (
                <li key={track.id} onClick={() => setSelectedTrack(track)}>
                  {track.name} by {track.artists.map((artist) => artist.name).join(', ')}
                </li>
              ))}
            </ul>
          ) : (
            <p>No results to display yet.</p>
          )}
        </div>
        {trackDetails && (
          <div className="track-details">
            <h2>{selectedTrack.name}</h2>
            <p>Artist(s): {selectedTrack.artists.map((artist) => artist.name).join(', ')}</p>
            <p>Album: {selectedTrack.album.name}</p>
            {/* Display audio features */}
            <h3>Audio Features</h3>
            <ul>
              <li>Danceability: {trackDetails.features.danceability}</li>
              <li>Energy: {trackDetails.features.energy}</li>
              <li>Key: {trackDetails.features.key}</li>
              <li>Tempo: {trackDetails.features.tempo}</li>
              {/* Add more features as desired */}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SpotiFindProject;
