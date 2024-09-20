import React, { useState } from 'react';
import './ProjectsPage.css'; 
import marsRoverPic from './marsRover.jpg';
import backdropThumbnail from './BackdropStory.jpg';
import astronautImage from './dunkinAstronaut.png';
import cornellBox from './cornellBox.png';
import MinimalistBackground from './MinimalistBackground.react';
const projectData = [
  {
    id: "Spotify",
    title: 'SpotiFind',
    thumbnail: cornellBox,
    description: "Web App to request and display information about music from the Spotify Developer API.",
    link: '/projects/SpotiFind'
  },
  {
    id: "Backdrop",
    title: 'Instagram: Backdrop',
    thumbnail: backdropThumbnail,
    description: "Building Instagram's first image editing feature that uses Generative A.I.",
    link: '/projects/Backdrop'
  },
  {
    id: "ThreeJS",
    title: 'Learning ThreeJS',
    thumbnail: astronautImage,
    description: "Interactive history of learning 3D development with the graphics library ThreeJS.",
    link: '/projects/ThreeJS'
  },
  {
    id: "3D",
    title: '3D Design',
    thumbnail: cornellBox,
    description: "This is just where I play around with 3D Web Design.",
    link: '/projects/3D'
  }
];

function ProjectsPage() {
  const [flippedCard, setFlippedCard] = useState(null); // Track the flipped card

  const handleFlip = (cardId) => {
    setFlippedCard(prevCard => (prevCard === cardId ? null : cardId)); // Flip only one card at a time
  };

  return (
    <div className="projects-page">
      {/* The new minimalist background */}
      <MinimalistBackground /> 

      <div className="projects-title">
        <h1>PROJECTS</h1>
      </div>

      <div className="projects-container">
        {projectData.map((project) => (
          <FlippableCard 
            key={project.id} 
            project={project} 
            isFlipped={flippedCard === project.id} 
            onFlip={() => handleFlip(project.id)} 
          />
        ))}
      </div>
    </div>
  );
}

function FlippableCard({ project, isFlipped, onFlip }) {
  return (
    <div
      className={`project-card ${isFlipped ? 'flipped' : ''}`}
      onClick={onFlip} // Flip the card only on click
    >
      <div className="card-inner">
        {/* Front of the card */}
        <div className="card-face card-front">
          <img src={project.thumbnail} alt={project.title} className="project-thumbnail" />
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>

        {/* Back of the card */}
        <div className="card-face card-back">
          <h3>{project.title}</h3>
          <div className="divider"></div>
          <p>{project.description}</p>
          <a href={project.link}>Check it out</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
