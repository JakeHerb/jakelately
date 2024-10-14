import React from 'react';
import './AnalysisMeta.css';

function AnalysisMeta({ meta }) {
  return (
    <div className="analysis-meta">
      <h3>Analysis Meta Data</h3>
      <table>
        <tbody>
          <tr>
            <td>Analyzer Version</td>
            <td>{meta.analyzer_version}</td>
          </tr>
          <tr>
            <td>Platform</td>
            <td>{meta.platform}</td>
          </tr>
          <tr>
            <td>Detailed Status</td>
            <td>{meta.detailed_status}</td>
          </tr>
          <tr>
            <td>Timestamp</td>
            <td>{new Date(meta.timestamp * 1000).toLocaleString()}</td>
          </tr>
          <tr>
            <td>Analysis Time</td>
            <td>{meta.analysis_time}s</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AnalysisMeta;
