import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';
import './LoudnessBarChart.css'; // We'll create this CSS file next

function LoudnessBarChart({ analysis }) {
  const data = analysis.segments.map(segment => ({
    time: parseFloat(segment.start.toFixed(2)),
    loudness: segment.loudness_max,
  })).slice(0, 100); // Limit to first 100 segments for performance

  return (
    <div className="loudness-bar-chart">
      <h3>Loudness Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="time" label={{ value: 'Time (s)', position: 'insideBottom', offset: -5 }} />
          <YAxis label={{ value: 'Loudness (dB)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Bar dataKey="loudness" fill="#1db954" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LoudnessBarChart;
