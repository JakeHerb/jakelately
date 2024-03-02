import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard.react'; // Adjust path as needed
import './ProjectsPage.css'; // Styling for the Projects page
import marsRoverPic from '../../media/marsRover.jpeg';


const projectData = [
  {
    id: 1,
    title: 'Spherical Photo Uploader',
    thumbnail: marsRoverPic, // Placeholder image
    description: 'Building the 360 photo uploader for Facebook.com, the worlds most popular 360 photo rendering surface.'
  },
  {
    id: 2,
    title: 'Project B',
    thumbnail: 'https://via.placeholder.com/300x200', // Placeholder image
    description: 'Project B is an innovative solution to problem ABC. It features cutting-edge technology.'
  }
];

function ProjectsPage() {
  return (
    <div className="projects-container">
      {projectData.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}

export default ProjectsPage;