import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard.react'; // Adjust path as needed
import './ProjectsPage.css'; // Styling for the Projects page
import marsRoverPic from './marsRover.jpg';
import backdropThumbnail from './BackdropStory.jpg';
import projectBackground from './ProjectsBackground.png';
import astronautImage from './dunkinAstronaut.png';

const projectData = [
  {
    id: "360Photos",
    title: 'Facebook: Spherical Photo Uploader',
    thumbnail: marsRoverPic,
    description: 'Building the 360 photo uploader for Facebook.com, the worlds most popular 360 photo rendering surface.',
    size: 'wide' 
  },
  {
    id: "Backdrop",
    title: 'Instagram: Backdrop',
    thumbnail: backdropThumbnail,
    description: "Building Instagram's first image editing feature that uses Generative A.I.",
    size: 'tall'
  }
];

function ProjectsPage() {

  return (
    <div className="projectsBackground" style={{ backgroundImage: `url(${projectBackground})` }}>
      <div className="projects-title">
        <h1>PROJECTS</h1>
      </div>
      <img src={astronautImage} alt="Floating Astronaut" className="dunking-astronaut"/>
      <div className="projects-wrapper">
        <div className="projects-container">
          {projectData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;