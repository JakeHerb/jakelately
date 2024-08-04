import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard/ProjectCard.react'; // Adjust path as needed
import './ProjectsPage.css'; // Styling for the Projects page
import marsRoverPic from './marsRover.jpg';
import backdropThumbnail from './BackdropStory.jpg';
import projectBackground from './ProjectsBackground.png';
import astronautImage from './dunkinAstronaut.png';
import cornellBox from './cornellBox.png';

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
  },
  {
    id: "ThreeJS",
    title: 'Learning ThreeJS',
    thumbnail: astronautImage,
    description: "Interactive history of learning 3D development with the graphics library ThreeJS",
    size: 'wide'
  },
  {
    id: "3D",
    title: '3D Design',
    thumbnail: cornellBox,
    description: "This is just where I play around with 3D Web Design",
    size: 'tall'
  }
];

function ProjectsPage() {

  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpinToggle = () => {
    setIsSpinning(true);

    // Set a timeout to reset isSpinning back to false after 2 seconds
    const timeoutId = setTimeout(() => {
      setIsSpinning(false);
    }, 2000); // 2000 milliseconds = 2 seconds

    // Cleanup timeout when component unmounts or before re-running the effect
    return () => clearTimeout(timeoutId);
  };

  // useEffect to handle cleanup
  useEffect(() => {
    let timeoutId;
    if (isSpinning) {
      timeoutId = setTimeout(() => {
        setIsSpinning(false);
      }, 5000);
    }

    return () => clearTimeout(timeoutId);
  }, [isSpinning]);

  return (
    <div className="projectsBackground" style={{ backgroundImage: `url(${projectBackground})` }}>
      <div className="projects-title">
        <h1>PROJECTS</h1>
      </div>
      <div className={`animated-background ${isSpinning ? 'spin-animation' : 'float-animation'}`} onClick={handleSpinToggle}>
        <img src={astronautImage} alt="Floating Astronaut" className="dunking-astronaut"/>
      </div>
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