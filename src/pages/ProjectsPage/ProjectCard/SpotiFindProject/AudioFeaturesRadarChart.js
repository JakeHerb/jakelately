import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
} from 'recharts';
import './AudioFeaturesRadarChart.css'; // We'll create this CSS file next

function AudioFeaturesRadarChart({ features }) {
  const data = [
    { feature: 'Danceability', value: features.danceability * 100 },
    { feature: 'Energy', value: features.energy * 100 },
    { feature: 'Speechiness', value: features.speechiness * 100 },
    { feature: 'Acousticness', value: features.acousticness * 100 },
    { feature: 'Liveness', value: features.liveness * 100 },
    { feature: 'Valence', value: features.valence * 100 },
  ];

  return (
    <div className="audio-features-radar-chart">
      <h3>Audio Features Radar Chart</h3>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="feature" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar name="Features" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AudioFeaturesRadarChart;
