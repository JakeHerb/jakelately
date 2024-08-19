import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './ProjectCard.css'; // Styling for the card

function ProjectCard({ title, thumbnail, description, id, size, isFlipped, onClick }) {
  return (
    <div className={`project-card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="card-inner">
        {/* Front Side */}
        <div className="card-front card-face">
          <img src={thumbnail} alt={title} className="project-thumbnail" />
          <div className="project-info">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>

        {/* Back Side */}
        <Link to={`/projects/${id}`} className="card-back card-face">
          <div className="project-info">
            <h3>{title}</h3>
            <p>{description}</p>
            <span>Check it Out!</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
