import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './ProjectCard.css'; // Styling for the card


function ProjectCard({ title, thumbnail, description, id, size }) {
  const image = <img src={thumbnail} alt={title} className="project-thumbnail" />;
  // Assign additional class based on the size prop
  const cardClass = `project-card ${size || ''}`;

  return (
    <div className={cardClass}>
      <Link to={`/projects/${id}`} className="project-card-link" style={{ textDecoration: 'none' }}>
        {image}
        <div className="project-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;