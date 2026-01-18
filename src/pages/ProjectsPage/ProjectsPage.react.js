import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation, useScrollAnimationGroup } from '../../hooks/useScrollAnimation';
import { categories, getFeaturedProjects, getProjectsByCategory } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard/ProjectCard.react';
import ProjectFilters from '../../components/ProjectFilters/ProjectFilters.react';
import FeaturedProject from '../../components/FeaturedProject/FeaturedProject.react';
import MinimalistBackground from './MinimalistBackground.react';
import './ProjectsPage.css';

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { ref: headerRef, className: headerClass } = useScrollAnimation({ threshold: 0.2 });
  const { containerRef, getItemProps } = useScrollAnimationGroup({ staggerDelay: 0.1 });

  // Get featured project (first one marked as featured)
  const featuredProject = getFeaturedProjects()[0];

  // Filter projects based on active category, excluding featured
  const filteredProjects = useMemo(() => {
    const categoryProjects = getProjectsByCategory(activeCategory);
    // Exclude featured project from the grid if showing all
    if (featuredProject && activeCategory === 'all') {
      return categoryProjects.filter(p => p.id !== featuredProject.id);
    }
    return categoryProjects;
  }, [activeCategory, featuredProject]);

  return (
    <div className="projects-page">
      {/* 3D Background */}
      <MinimalistBackground />

      {/* Star field overlay */}
      <div className="star-field"></div>

      <div className="projects-content">
        {/* Header */}
        <header ref={headerRef} className={`projects-header ${headerClass}`}>
          <span className="projects-label">{'>'} selected_work</span>
          <h1 className="projects-title">Projects</h1>
          <p className="projects-subtitle">
            Things I've built that I'm proud of. From AI tools to creative experiments.
          </p>
        </header>

        {/* Filters */}
        <div className="projects-filters-wrapper">
          <ProjectFilters
            categories={categories}
            activeCategory={activeCategory}
            onFilterChange={setActiveCategory}
          />
        </div>

        {/* Featured Project - only show when viewing all */}
        {activeCategory === 'all' && featuredProject && (
          <FeaturedProject project={featuredProject} />
        )}

        {/* Project Grid */}
        <div ref={containerRef} className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              {...getItemProps(index)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="projects-empty">
            <span className="projects-empty-icon">::</span>
            <p>No projects in this category yet.</p>
          </div>
        )}

        {/* CTA Section */}
        <footer className="projects-cta">
          <div className="projects-cta-line"></div>
          <p className="projects-cta-text">Have a project idea?</p>
          <Link to="/contact" className="projects-cta-button">
            <span className="projects-cta-icon">{'~'}</span>
            Let's Talk
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default ProjectsPage;
