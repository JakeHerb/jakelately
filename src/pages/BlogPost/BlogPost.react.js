import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { getPostById, formatDate } from '../../content/posts';
import './BlogPost.css';

function BlogPost() {
  const { postId } = useParams();
  const post = getPostById(postId);
  const { ref: contentRef, className: contentClass } = useScrollAnimation({ threshold: 0.1 });

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // For updates, redirect to blog page
  if (post.type === 'update') {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="blog-post-page">
      {/* Background effects */}
      <div className="star-field"></div>
      <div className="glow-orb glow-orb--top-right"></div>

      <article className="post-container">
        <header className="post-header">
          <Link to="/blog" className="back-link">
            <span className="back-arrow">←</span>
            Back to Blog
          </Link>

          <div className="post-meta">
            <span className="post-date">{formatDate(post.date)}</span>
            <span className="meta-separator">•</span>
            <span className="post-read-time">{post.readTime}</span>
          </div>

          <h1 className="post-title">{post.title}</h1>

          {post.tags && (
            <div className="post-tags">
              {post.tags.map(tag => (
                <span key={tag} className="post-tag">{tag}</span>
              ))}
            </div>
          )}
        </header>

        <div ref={contentRef} className={`post-content glass-card ${contentClass}`}>
          <div className="prose" dangerouslySetInnerHTML={{ __html: formatContent(post.content) }} />
        </div>

        <footer className="post-footer">
          <div className="footer-divider"></div>
          <p className="footer-thanks">Thanks for reading!</p>
          <div className="footer-actions">
            <Link to="/blog" className="footer-btn">
              ← More Posts
            </Link>
            <Link to="/contact" className="footer-btn primary">
              Get in Touch →
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}

// Simple markdown-like content formatter
function formatContent(content) {
  if (!content) return '';

  return content
    // Headers
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Code blocks
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>')
    // Lists
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    // Paragraphs
    .split('\n\n')
    .map(p => {
      if (p.startsWith('<h') || p.startsWith('<ul') || p.startsWith('<pre')) {
        return p;
      }
      return `<p>${p.replace(/\n/g, '<br>')}</p>`;
    })
    .join('\n');
}

export default BlogPost;
