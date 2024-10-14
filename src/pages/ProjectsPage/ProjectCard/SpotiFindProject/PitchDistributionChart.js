import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PolarAngleAxis, Radar, RadarChart, PolarGrid,
} from 'recharts';
import './PitchDistributionChart.css';

function PitchDistributionChart({ segments }) {
  // Initialize an array to hold the sum of pitches for each pitch class
  const pitchSums = Array(12).fill(0);

  // Sum up the pitches across all segments
  segments.forEach(segment => {
    segment.pitches.forEach((pitchValue, index) => {
      pitchSums[index] += pitchValue;
    });
  });

  // Calculate the average pitch values
  const numSegments = segments.length;
  const averagePitches = pitchSums.map(sum => sum / numSegments);

  // Prepare data for the chart
  const pitchLabels = ['C', 'C♯/D♭', 'D', 'D♯/E♭', 'E', 'F', 'F♯/G♭', 'G', 'G♯/A♭', 'A', 'A♯/B♭', 'B'];
  const data = pitchLabels.map((label, index) => ({
    pitch: label,
    value: averagePitches[index] * 100, // Convert to percentage
  }));

  return (
    <div className="pitch-distribution-chart">
      <h3>Pitch Distribution</h3>
      <div className="chart-container">
        <div className="chart-item">
          <h4>Radar Chart</h4>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="pitch" />
              <Radar name="Pitch" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-item">
          <h4>Bar Chart</h4>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <XAxis dataKey="pitch" />
              <YAxis domain={[0, Math.max(...data.map(item => item.value))]} />
              <Tooltip />
              <Bar dataKey="value" fill="#1db954" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default PitchDistributionChart;
