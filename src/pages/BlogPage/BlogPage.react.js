import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation, useScrollAnimationGroup } from '../../hooks/useScrollAnimation';
import { posts, formatDate } from '../../content/posts';
import './BlogPage.css';

function BlogPage() {
  const [filter, setFilter] = useState('all'); // 'all', 'post', 'update'
  const { ref: headerRef, className: headerClass } = useScrollAnimation();

  const filteredPosts = filter === 'all'
    ? posts
    : posts.filter(post => post.type === filter);

  return (
    <div className="blog-page">
      {/* Background effects */}
      <div className="star-field"></div>
      <div className="glow-orb glow-orb--top-right"></div>

      <div className="blog-content">
        <header ref={headerRef} className={`blog-header ${headerClass}`}>
          <span className="blog-tagline">Thoughts & updates</span>
          <h1 className="blog-title">Blog</h1>
          <p className="blog-subtitle">
            Long-form thoughts on AI, engineering, and building things.
            <br />
            Plus quick updates on what I'm shipping.
          </p>
        </header>

        {/* Filter tabs */}
        <div className="blog-filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === 'post' ? 'active' : ''}`}
            onClick={() => setFilter('post')}
          >
            Articles
          </button>
          <button
            className={`filter-btn ${filter === 'update' ? 'active' : ''}`}
            onClick={() => setFilter('update')}
          >
            Updates
          </button>
        </div>

        {/* Posts list */}
        <PostsList posts={filteredPosts} />

        <footer className="blog-footer">
          <div className="footer-line"></div>
          <p className="footer-note">
            Want to discuss something? <a href="/contact" className="blog-link">Send a signal</a>.
          </p>
        </footer>
      </div>
    </div>
  );
}

function PostsList({ posts }) {
  const { containerRef, getItemProps } = useScrollAnimationGroup({ staggerDelay: 0.1 });

  return (
    <div ref={containerRef} className="posts-list">
      {posts.map((post, index) => (
        <article
          key={post.id}
          className={`post-card glass-card ${post.type}`}
          {...getItemProps(index)}
        >
          {post.type === 'post' ? (
            <PostCard post={post} />
          ) : (
            <UpdateCard post={post} />
          )}
        </article>
      ))}
    </div>
  );
}

function PostCard({ post }) {
  return (
    <Link to={`/blog/${post.id}`} className="post-link">
      <div className="post-meta">
        <span className="post-date">{formatDate(post.date)}</span>
        <span className="post-read-time">{post.readTime}</span>
      </div>
      <h2 className="post-title">{post.title}</h2>
      <p className="post-excerpt">{post.excerpt}</p>
      <div className="post-tags">
        {post.tags.map(tag => (
          <span key={tag} className="post-tag">{tag}</span>
        ))}
      </div>
      <span className="post-read-more">
        Read more <span className="arrow">→</span>
      </span>
    </Link>
  );
}

function UpdateCard({ post }) {
  return (
    <div className="update-content">
      <div className="update-indicator">
        <span className="update-dot"></span>
        <span className="update-label">Quick Update</span>
      </div>
      <span className="update-date">{formatDate(post.date)}</span>
      <h3 className="update-title">{post.title}</h3>
      <p className="update-text">{post.content}</p>
    </div>
  );
}

export default BlogPage;
