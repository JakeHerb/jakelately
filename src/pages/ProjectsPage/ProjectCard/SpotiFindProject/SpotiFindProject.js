import React, { useState } from 'react';
import axios from 'axios';
import './SpotiFindProject.css';
import TrackList from './TrackList';
import TrackDetails from './TrackDetails';

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

  const handleBackToResults = () => {
    setSelectedTrack(null);
    setTrackDetails(null);
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
          <TrackDetails
            track={selectedTrack}
            details={trackDetails}
            onBack={handleBackToResults}
          />
        )}
      </div>
    </div>
  );
}

export default SpotiFindProject;
