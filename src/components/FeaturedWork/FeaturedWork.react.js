import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation, useScrollAnimationGroup } from '../../hooks/useScrollAnimation';
import './FeaturedWork.css';

// Import thumbnails
import componentShowcaseThumbnail from '../../pages/ProjectsPage/componentShowcase.svg';
import marsRover from '../../pages/ProjectsPage/marsRover.jpg';

function FeaturedWork() {
  const { ref: headerRef, className: headerClass } = useScrollAnimation({ threshold: 0.3 });
  const { containerRef, getItemProps } = useScrollAnimationGroup({ staggerDelay: 0.15 });

  const featuredProjects = [
    {
      id: 'component-showcase',
      title: 'Component Showcase',
      description: '7 themed UI component libraries with 17 components each',
      thumbnail: componentShowcaseThumbnail,
      link: '/projects/component-showcase',
      tags: ['React', 'UI/UX'],
    },
    {
      id: '3d-design',
      title: 'Dimensional Gateway',
      description: '4D geometry visualization in the browser',
      thumbnail: marsRover,
      link: '/projects/3D',
      tags: ['ThreeJS', 'WebGL'],
    },
    {
      id: 'f1-trackside',
      title: 'F1 Trackside AI',
      description: 'Real-time AI at the Las Vegas Grand Prix',
      thumbnail: null,
      link: '/projects/f1-trackside',
      tags: ['AI/ML', 'Live Event'],
    },
  ];

  return (
    <section className="featured-section">
      <div className="featured-container">
        <header ref={headerRef} className={`featured-header ${headerClass}`}>
          <span className="featured-label">{'>'} selected_work</span>
          <h2 className="featured-title">Featured Projects</h2>
        </header>

        <div ref={containerRef} className="featured-grid">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={project.link}
              className="featured-card glass-card"
              {...getItemProps(index)}
            >
              <div className="featured-card-image">
                {project.thumbnail ? (
                  <img src={project.thumbnail} alt={project.title} />
                ) : (
                  <div className="featured-card-placeholder">
                    <span>{project.tags[0]}</span>
                  </div>
                )}
                <div className="featured-card-overlay"></div>
              </div>
              <div className="featured-card-content">
                <div className="featured-card-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="featured-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="featured-card-title">{project.title}</h3>
                <p className="featured-card-desc">{project.description}</p>
                <span className="featured-card-link">
                  View Project <span className="arrow">{'>'}</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="featured-footer">
          <Link to="/projects" className="featured-all-link">
            <span className="link-icon">{'~'}</span>
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;
