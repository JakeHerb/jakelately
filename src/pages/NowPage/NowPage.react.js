import React from 'react';
import { useScrollAnimation, useScrollAnimationGroup } from '../../hooks/useScrollAnimation';
import './NowPage.css';

function NowPage() {
  const { ref: headerRef, className: headerClass } = useScrollAnimation();
  const { containerRef, getItemProps } = useScrollAnimationGroup({ staggerDelay: 0.1 });

  // Last updated timestamp
  const lastUpdated = 'January 2026';

  const sections = [
    {
      icon: '>>',
      title: 'At Work',
      content: `Founding engineer for MSL Pathfinding at Meta. Architected the pipeline connecting internal AI models to external experiences - enabling 6,500+ Meta AI demos at 20+ major events. Leading architecture on ImagineFlow, our internal GenAI creative platform.`
    },
    {
      icon: '[]',
      title: 'Building',
      content: `This very website you're looking at. Also working on ImagineFlow extensions, new model integrations, and the Llama Dev API powering internal media model requests. Prototyping features that might ship to billions of users.`
    },
    {
      icon: '{}',
      title: 'Learning',
      content: `Deep diving into multimodal AI models and their applications in creative workflows. Exploring LoRA capabilities and how to push media generation models further. Three.js on the side because 3D on the web is genuinely fun.`
    },
    {
      icon: '##',
      title: 'Running',
      content: `GenAI Office Hours supporting 400+ projects. ImagineFlow Active Contributors group helping engineers ramp up on the platform. Multiple internal groups bridging technical and creative teams across the company.`
    },
    {
      icon: '<>',
      title: 'Shipping',
      content: `AI experiences for UFC, F1, LlamaCon, and luxury fashion campaigns. AI Mural experiences and MemeGen prototypes making their way toward product. The infrastructure behind thousands of AI-generated images and videos at live events.`
    },
    {
      icon: '::',
      title: 'Thinking About',
      content: `How to be more impactful with less time. Delegation, orchestration, and leveraging AI to multiply output. Also: giving a talk at Connect someday. That's the northstar.`
    }
  ];

  return (
    <div className="now-page">
      {/* Background effects */}
      <div className="star-field"></div>
      <div className="glow-orb glow-orb--top-right"></div>

      <div className="now-content">
        <header ref={headerRef} className={`now-header ${headerClass}`}>
          <span className="now-tagline">What's happening</span>
          <h1 className="now-title">Now</h1>
          <p className="now-subtitle">
            A snapshot of what I'm currently working on, learning, and thinking about.
            <br />
            Inspired by <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="now-link">the /now page movement</a>.
          </p>
          <span className="now-updated">Last updated: {lastUpdated}</span>
        </header>

        <div ref={containerRef} className="now-sections">
          {sections.map((section, index) => (
            <article
              key={section.title}
              className="now-card glass-card"
              {...getItemProps(index)}
            >
              <div className="card-header">
                <span className="card-icon">{section.icon}</span>
                <h2 className="card-title">{section.title}</h2>
              </div>
              <p className="card-content">{section.content}</p>
            </article>
          ))}
        </div>

        <footer className="now-footer">
          <div className="footer-line"></div>
          <p className="footer-note">
            Want to know more? <a href="/contact" className="now-link">Send a signal</a>.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default NowPage;
