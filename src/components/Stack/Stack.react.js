import React from 'react';
import { useScrollAnimation, useScrollAnimationGroup } from '../../hooks/useScrollAnimation';
import './Stack.css';

function Stack() {
  const { ref: headerRef, className: headerClass } = useScrollAnimation({ threshold: 0.3 });
  const { containerRef, getItemProps } = useScrollAnimationGroup({ staggerDelay: 0.1 });

  const capabilities = [
    {
      icon: '{}',
      title: 'AI/ML',
      description: 'Deep learning, generative models, multimodal systems',
    },
    {
      icon: '<>',
      title: 'Creative Tools',
      description: 'Platforms that empower designers and creators',
    },
    {
      icon: '::',
      title: 'Infrastructure',
      description: 'Scalable systems serving millions of requests',
    },
    {
      icon: '>_',
      title: 'Full Stack',
      description: 'React, Python, APIs, and everything in between',
    },
    {
      icon: '[]',
      title: 'Prototyping',
      description: 'Rapid iteration from concept to demo',
    },
    {
      icon: '**',
      title: 'Education',
      description: 'Mentoring teams and scaling knowledge',
    },
  ];

  return (
    <section className="stack-section">
      <div className="stack-container">
        <header ref={headerRef} className={`stack-header ${headerClass}`}>
          <span className="stack-label">{'>'} capabilities</span>
          <h2 className="stack-title">What I Build</h2>
        </header>

        <div ref={containerRef} className="stack-grid">
          {capabilities.map((cap, index) => (
            <article
              key={cap.title}
              className="stack-tile glass-card"
              {...getItemProps(index)}
            >
              <span className="stack-icon">{cap.icon}</span>
              <h3 className="stack-tile-title">{cap.title}</h3>
              <p className="stack-tile-desc">{cap.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stack;
