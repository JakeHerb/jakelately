import React from 'react';
import { useParams } from 'react-router-dom';
import './ThreeDProject.css';


function ThreeDProject() {
  let { projectId } = useParams();

  // Here you would fetch the project data based on the projectId
  // For now, let's just display the projectId
  return (
    <div className="wrapper">
      <div className="spherical-info">
        <h1>Cool 3D Stuff</h1>
        <p>watch it wiggle and whatnot</p>
        <div className="viewer-container">
            <spline-viewer url="https://prod.spline.design/hiHObJ702hTXAetY/scene.splinecode"></spline-viewer>
        </div>
      </div>
    </div>
  );
}

export default ThreeDProject;