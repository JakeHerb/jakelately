import React from 'react';
import Card from '../Card/Card.react';
import PixelButton from '../PixelButton/PixelButton.react';
import './ProjectPage.css';

function ProjectPage() {
  return (
    <div className="projects-container">
    <Card title="AI-Driven Music Composition">
      <p>
        Explore the intersection of artificial intelligence and music production. 
        This project involves developing an AI model that composes music, utilizing 
        deep learning to understand and create complex musical pieces. The fusion of 
        technology and art exemplifies Jake's unique ability to blend his software engineering 
        skills with his musical talent.
      </p>
      <PixelButton text="Learn More" onClick={() => console.log("Clicked Learn More on Project 1")} />
    </Card>
    <Card title="Quantum Computing Exploration">
      <p>
        Delve into the realm of quantum computing and its potential impacts on future 
        technology. This project is an exploratory journey into understanding quantum 
        mechanics and applying its principles to solve complex computational problems. 
        It's a testament to Jake's curiosity and ability to grasp and discuss high-level 
        intellectual subjects.
      </p>
      <PixelButton text="Learn More" onClick={() => console.log("Clicked Learn More on Project 2")} />
    </Card>
    <Card title="Social Media Algorithm Analysis">
      <p>
        A deep dive into the algorithms powering today's social media giants. This 
        project aims to analyze and understand the mechanics behind viral content, 
        leveraging Jake's expertise in AI and his experience at Meta. It's a blend of 
        technical acumen and a keen understanding of digital trends and user behavior.
      </p>
      <PixelButton text="Learn More" onClick={() => console.log("Clicked Learn More on Project 3")} />
    </Card>
    {/* Add more cards as needed */}
  </div>
  );
}

export default ProjectPage;