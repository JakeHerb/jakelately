import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation, useScrollAnimationGroup } from '../../hooks/useScrollAnimation';
import { getLatestPosts, formatDate } from '../../content/posts';
import './LatestPosts.css';

function LatestPosts() {
  const { ref: headerRef, className: headerClass } = useScrollAnimation();
  const { containerRef, getItemProps } = useScrollAnimationGroup({ staggerDelay: 0.1 });
  const latestPosts = getLatestPosts(4);

  return (
    <section className="latest-section">
      {/* Background glow */}
      <div className="latest-glow"></div>

      <div className="latest-content">
        <header ref={headerRef} className={`latest-header ${headerClass}`}>
          <span className="latest-tagline">Fresh from the void</span>
          <h2 className="latest-title">Latest Updates</h2>
        </header>

        <div ref={containerRef} className="latest-grid">
          {latestPosts.map((post, index) => (
            <article
              key={post.id}
              className={`latest-card glass-card ${post.type}`}
              {...getItemProps(index)}
            >
              {post.type === 'post' ? (
                <Link to={`/blog/${post.id}`} className="latest-link">
                  <span className="latest-date">{formatDate(post.date)}</span>
                  <h3 className="latest-card-title">{post.title}</h3>
                  <p className="latest-excerpt">{post.excerpt}</p>
                  <span className="latest-read-more">
                    Read more <span className="arrow">→</span>
                  </span>
                </Link>
              ) : (
                <div className="latest-update">
                  <div className="update-indicator">
                    <span className="update-dot"></span>
                    <span className="update-label">Quick Update</span>
                  </div>
                  <span className="latest-date">{formatDate(post.date)}</span>
                  <h3 className="latest-card-title">{post.title}</h3>
                  <p className="latest-update-text">{post.content}</p>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="latest-footer">
          <Link to="/blog" className="view-all-btn">
            View All Posts <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LatestPosts;
