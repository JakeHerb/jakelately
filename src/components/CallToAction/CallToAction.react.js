import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './CallToAction.css';

function CallToAction() {
  const { ref, className } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className="cta-section">
      <div className="cta-glow"></div>

      <div ref={ref} className={`cta-container ${className}`}>
        <span className="cta-label">{'>'} init_connection</span>
        <h2 className="cta-title">Let's Build Something</h2>
        <p className="cta-text">
          Got an interesting project? Want to chat about AI, creative tools, or the future of tech?
        </p>
        <Link to="/contact" className="cta-button">
          <span className="cta-button-icon">{'~'}</span>
          Send a Signal
        </Link>
      </div>
    </section>
  );
}

export default CallToAction;
