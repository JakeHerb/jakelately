import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ project, style }) {
  const isExternal = project.type === 'external';

  const CardWrapper = isExternal ? 'a' : Link;
  const cardProps = isExternal
    ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
    : { to: project.link };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'live-demo':
        return '>_';
      case 'case-study':
        return '[]';
      case 'external':
        return '->';
      case 'activation':
        return '*';
      default:
        return '::';
    }
  };

  return (
    <CardWrapper className="project-card" style={style} {...cardProps}>
      <div className={`project-card__image ${!project.thumbnail ? 'project-card__image--placeholder' : ''}`}>
        {project.thumbnail ? (
          <img src={project.thumbnail} alt={project.title} loading="lazy" />
        ) : (
          <div className="project-card__image-placeholder">
            <span className="project-card__placeholder-icon">{project.type === 'activation' ? '*' : '[]'}</span>
          </div>
        )}
        <div className="project-card__overlay"></div>
        <span className="project-card__type-badge">
          {getTypeIcon(project.type)}
        </span>
      </div>

      <div className="project-card__content">
        <div className="project-card__tags">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>

        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__tagline">{project.tagline}</p>

        <div className="project-card__footer">
          {project.year && (
            <span className="project-card__year">{project.year}</span>
          )}
          <span className="project-card__link">
            View Project
            <span className="project-card__arrow">{'>'}</span>
          </span>
        </div>
      </div>
    </CardWrapper>
  );
}

export default ProjectCard;
