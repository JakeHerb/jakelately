import React, { useState } from 'react';
import './ProjectsPage.css'; 
import marsRoverPic from './marsRover.jpg';
import backdropThumbnail from './BackdropStory.jpg';
import astronautImage from './dunkinAstronaut.png';
import cornellBox from './cornellBox.png';

const projectData = [
  {
    id: "360Photos",
    title: 'Facebook: Spherical Photo Uploader',
    thumbnail: marsRoverPic,
    description: 'Building the 360 photo uploader for Facebook.com, the worlds most popular 360 photo rendering surface.',
    link: '/projects/360Photos'
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
        <a href={project.link} className="card-face card-back">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <span>Check it out</span>
        </a>
      </div>
    </div>
  );
}

export default ProjectsPage;
