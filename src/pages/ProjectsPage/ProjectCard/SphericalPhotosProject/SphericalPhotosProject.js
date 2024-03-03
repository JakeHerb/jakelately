import React from 'react';
import { useParams } from 'react-router-dom';
import { Pannellum } from "pannellum-react";
import marsPhoto from '../../marsRover.jpg';
import './SphericalPhotosProject.css';

function SphericalPhotosProject() {
  let { projectId } = useParams();

  // Here you would fetch the project data based on the projectId
  // For now, let's just display the projectId
  return (
    <div className="wrapper">
      <div className="spherical-info">
        <h1>Spherical Photos on Facebook.com</h1>
        <p>I made it.</p>
        <div className="viewer-container">
          <Pannellum
            image={marsPhoto}
            height="450"
            width="900"
            autoLoad
            showZoomCtrl={false}
            onLoad={() => {
              console.log("panorama loaded");
            }}
          >
          </Pannellum>
        </div>
      </div>
    </div>
  );
}

export default SphericalPhotosProject;