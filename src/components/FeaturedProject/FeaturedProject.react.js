import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './FeaturedProject.css';

function FeaturedProject({ project }) {
  const { ref, className } = useScrollAnimation({ threshold: 0.2 });

  if (!project) return null;

  return (
    <section ref={ref} className={`featured-project ${className}`}>
      <div className="featured-project__container">
        <div className="featured-project__image">
          <img src={project.thumbnail} alt={project.title} />
          <div className="featured-project__image-overlay"></div>
        </div>

        <div className="featured-project__content">
          <div className="featured-project__header">
            <span className="featured-project__badge">Featured</span>
            <span className="featured-project__year">{project.year}</span>
          </div>

          <h2 className="featured-project__title">{project.title}</h2>
          <p className="featured-project__tagline">{project.tagline}</p>
          <p className="featured-project__description">{project.description}</p>

          <div className="featured-project__tags">
            {project.tags.map(tag => (
              <span key={tag} className="featured-project__tag">{tag}</span>
            ))}
          </div>

          <Link to={project.link} className="featured-project__cta">
            <span className="featured-project__cta-icon">{'>'}</span>
            View Case Study
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
