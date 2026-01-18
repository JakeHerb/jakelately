import React from 'react';
import './ProjectFilters.css';

function ProjectFilters({ categories, activeCategory, onFilterChange }) {
  return (
    <div className="project-filters">
      <span className="project-filters__label">{'>'} filter</span>
      <div className="project-filters__buttons">
        {categories.map(category => (
          <button
            key={category.id}
            className={`project-filters__button ${
              activeCategory === category.id ? 'project-filters__button--active' : ''
            }`}
            onClick={() => onFilterChange(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProjectFilters;
