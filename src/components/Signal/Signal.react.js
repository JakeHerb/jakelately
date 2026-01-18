import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Signal.css';

function Signal() {
  const { ref, className } = useScrollAnimation({ threshold: 0.2 });

  const signals = [
    { prefix: 'location', value: 'San Francisco, CA' },
    { prefix: 'role', value: 'Senior AI Engineer @ Meta' },
    { prefix: 'focus', value: 'Generative AI, Creative Tools, Infrastructure' },
    { prefix: 'building', value: 'AI experiences that scale to millions' },
    { prefix: 'status', value: 'Open to interesting conversations', highlight: true },
  ];

  return (
    <section className="signal-section">
      <div className="signal-container">
        <header className="signal-header">
          <span className="signal-prompt">{'>'} current_status</span>
        </header>

        <div ref={ref} className={`signal-terminal ${className}`}>
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="terminal-dot terminal-dot--red"></span>
              <span className="terminal-dot terminal-dot--yellow"></span>
              <span className="terminal-dot terminal-dot--green"></span>
            </div>
            <span className="terminal-title">signal.sh</span>
          </div>

          <div className="terminal-body">
            {signals.map((signal, index) => (
              <div
                key={signal.prefix}
                className="signal-line"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="signal-prefix">{signal.prefix}:</span>
                <span className={`signal-value ${signal.highlight ? 'signal-value--highlight' : ''}`}>
                  {signal.value}
                </span>
              </div>
            ))}
            <div className="signal-cursor">
              <span className="cursor-prompt">{'>'}</span>
              <span className="cursor-blink"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signal;
