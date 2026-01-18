import React from 'react';
import { useScrollAnimation, useScrollAnimationGroup } from '../../hooks/useScrollAnimation';
import './GoodAtStuff.css';
import circlePic from './circle.png';
import selfieImage from './aboutJake.jpg';

function GoodAtStuff() {
  const { ref: imageRef, className: imageClass } = useScrollAnimation({ threshold: 0.2 });
  const { ref: titleRef, className: titleClass } = useScrollAnimation({ threshold: 0.3 });
  const { containerRef, getItemProps } = useScrollAnimationGroup({ staggerDelay: 0.15 });

  return (
    <section className="section-container">
      {/* Background decoration */}
      <img src={circlePic} alt="" className="circle-image" />
      <div className="section-glow"></div>

      {/* Image with animation */}
      <div ref={imageRef} className={`image-wrapper ${imageClass}`}>
        <img src={selfieImage} alt="Jake Herbert" className="selfie" />
        <div className="image-frame"></div>
      </div>

      {/* Text content */}
      <div className="text-area">
        <header ref={titleRef} className={`title-text ${titleClass}`}>
          <div className="name">
            <span className="jake-about">Jake </span>
            <span className="lately-about">Lately</span>
          </div>
          <h1 className="about-subtitle">Building the Future of AI</h1>
        </header>

        <div ref={containerRef} className="info-sections">
          <article className="info-card" {...getItemProps(0)}>
            <div className="card-accent"></div>
            <h2 className="card-title">
              <span className="card-icon">{'/*'}</span>
              GenAI Engineer at Meta
            </h2>
            <p className="card-text">
              Senior Generative AI Research Engineer and founding engineer for{' '}
              <span className="highlight-gold">MSL Pathfinding</span> - the team that
              runs ahead of the company to explore what's possible with next-gen AI.
              Building internal platforms and tools that help teams across Meta
              create with <span className="highlight-teal">generative AI</span>.
            </p>
          </article>

          <article className="info-card" {...getItemProps(1)}>
            <div className="card-accent"></div>
            <h2 className="card-title">
              <span className="card-icon">&gt;</span>
              Impact at Scale
            </h2>
            <p className="card-text">
              Technical enabler for flagship AI activations across UFC, F1,
              and high-profile brand campaigns. Bridges the gap between
              research and production, turning experimental prototypes into{' '}
              <span className="highlight-teal">experiences that reach millions</span>.
              Runs internal knowledge sharing programs to help engineers build with AI.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default GoodAtStuff;
