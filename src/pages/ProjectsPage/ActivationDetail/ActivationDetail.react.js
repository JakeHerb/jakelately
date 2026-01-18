import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../../../data/projects';
import './ActivationDetail.css';

/**
 * ActivationDetail - Detail page for activation projects
 *
 * Displays:
 * - Hero section with event info
 * - Role and partner badges
 * - Story/description section
 * - Photo gallery (placeholder)
 * - Key highlights
 */
function ActivationDetail() {
  const { projectId } = useParams();
  const project = getProjectById(projectId);

  // If project not found or not an activation type
  if (!project || project.type !== 'activation') {
    return (
      <div className="activation-detail activation-detail--not-found">
        <div className="activation-detail__container">
          <h1>Project Not Found</h1>
          <p>This activation project doesn't exist.</p>
          <Link to="/projects" className="activation-detail__back-link">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="activation-detail">
      {/* Hero Section */}
      <section className="activation-detail__hero">
        <div className="activation-detail__hero-overlay" />
        <div className="activation-detail__hero-content">
          <div className="activation-detail__event-badge">
            {project.event}
          </div>
          <h1 className="activation-detail__title">{project.title}</h1>
          <p className="activation-detail__tagline">{project.tagline}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="activation-detail__container">
        {/* Meta Info */}
        <div className="activation-detail__meta">
          <div className="activation-detail__meta-item">
            <span className="activation-detail__meta-label">Role</span>
            <span className="activation-detail__meta-value">{project.role}</span>
          </div>
          <div className="activation-detail__meta-item">
            <span className="activation-detail__meta-label">Year</span>
            <span className="activation-detail__meta-value">{project.year}</span>
          </div>
        </div>

        {/* Partners */}
        {project.partners && project.partners.length > 0 && (
          <div className="activation-detail__partners">
            <h3 className="activation-detail__section-title">Partners</h3>
            <div className="activation-detail__partner-list">
              {project.partners.map((partner, index) => (
                <span key={index} className="activation-detail__partner-badge">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        <div className="activation-detail__story">
          <h3 className="activation-detail__section-title">The Story</h3>
          <p className="activation-detail__description">{project.description}</p>

          {/* Placeholder content */}
          <div className="activation-detail__placeholder">
            <div className="activation-detail__placeholder-icon">{'[ ]'}</div>
            <p>Full case study coming soon.</p>
            <p>Check back for photos, detailed contributions, and behind-the-scenes insights.</p>
          </div>
        </div>

        {/* Gallery Placeholder */}
        <div className="activation-detail__gallery">
          <h3 className="activation-detail__section-title">Gallery</h3>
          <div className="activation-detail__gallery-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="activation-detail__gallery-placeholder">
                <span>Photo {i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="activation-detail__tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="activation-detail__tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Back Link */}
        <Link to="/projects" className="activation-detail__back-link">
          <span className="activation-detail__back-icon">{'<'}</span>
          Back to Projects
        </Link>
      </div>
    </div>
  );
}

export default ActivationDetail;
