import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './ProjectCard.css'; // Styling for the card

function ProjectCard({ title, thumbnail, description, id }) {
  console.log(thumbnail);
  return (
    // Use Link to wrap the entire card content
    <Link to={`/projects/${id}`} className="project-card-link" style={{ textDecoration: 'none' }}>
      <div className="project-card">
        <img src={thumbnail} alt={title} className="project-thumbnail" />
        <div className="project-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;