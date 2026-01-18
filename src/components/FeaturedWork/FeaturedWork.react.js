import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation, useScrollAnimationGroup } from '../../hooks/useScrollAnimation';
import './FeaturedWork.css';

// Import thumbnails
import backdropThumbnail from '../../pages/ProjectsPage/BackdropStory.jpg';
import cornellBox from '../../pages/ProjectsPage/cornellBox.png';
import astronautImage from '../../pages/ProjectsPage/dunkinAstronaut.png';

function FeaturedWork() {
  const { ref: headerRef, className: headerClass } = useScrollAnimation({ threshold: 0.3 });
  const { containerRef, getItemProps } = useScrollAnimationGroup({ staggerDelay: 0.15 });

  const featuredProjects = [
    {
      id: 'Backdrop',
      title: 'Instagram: Backdrop',
      description: 'First generative AI image editing feature',
      thumbnail: backdropThumbnail,
      link: '/projects/Backdrop',
      tags: ['AI/ML', 'Product'],
    },
    {
      id: 'ThreeJS',
      title: 'Learning ThreeJS',
      description: 'Interactive 3D graphics experiments',
      thumbnail: astronautImage,
      link: '/projects/ThreeJS',
      tags: ['3D', 'WebGL'],
    },
    {
      id: 'SpotiFind',
      title: 'SpotiFind',
      description: 'Spotify API visualization tool',
      thumbnail: cornellBox,
      link: '/projects/SpotiFind',
      tags: ['React', 'API'],
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
                <img src={project.thumbnail} alt={project.title} />
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
