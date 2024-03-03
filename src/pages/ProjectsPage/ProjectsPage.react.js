import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard.react'; // Adjust path as needed
import './ProjectsPage.css'; // Styling for the Projects page
import marsRoverPic from './marsRover.jpg';
import backdropThumbnail from './BackdropStory.jpg';

const projectData = [
  {
    id: 1,
    title: 'Facebook: Spherical Photo Uploader',
    thumbnail: marsRoverPic,
    description: 'Building the 360 photo uploader for Facebook.com, the worlds most popular 360 photo rendering surface.',
    size: 'wide' 
  },
  {
    id: 2,
    title: 'Instagram: Backdrop',
    thumbnail: backdropThumbnail,
    description: "Building Instagram's first image editing feature that uses Generative A.I.",
    size: 'tall'
  }
];

function ProjectsPage() {

  return (
    <>
    <div className="projects-title">
      <h1>PROJECTS</h1>
    </div>
    <div className="projects-wrapper">
      <div className="projects-container">
        {projectData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
    </>
  );
}

export default ProjectsPage;