import React from 'react';
import { useScrollAnimation, useScrollAnimationGroup } from '../../hooks/useScrollAnimation';
import './UsesPage.css';

function UsesPage() {
  const { ref: headerRef, className: headerClass } = useScrollAnimation();

  const categories = [
    {
      title: 'Development',
      icon: '</>',
      items: [
        {
          name: 'VS Code',
          description: 'Primary code editor with a carefully curated extension setup',
          details: 'Theme: One Dark Pro | Font: JetBrains Mono'
        },
        {
          name: 'iTerm2 + Oh My Zsh',
          description: 'Terminal with Powerlevel10k theme for that clean aesthetic',
          details: 'Shell: zsh | Theme: Powerlevel10k'
        },
        {
          name: 'GitHub Copilot',
          description: 'AI pair programming that actually helps',
          details: 'Integrated into VS Code'
        },
        {
          name: 'Cursor',
          description: 'AI-first code editor for rapid prototyping',
          details: 'When VS Code needs a break'
        }
      ]
    },
    {
      title: 'AI & ML',
      icon: '{}',
      items: [
        {
          name: 'PyTorch',
          description: 'Primary framework for deep learning experiments',
          details: 'For training and inference'
        },
        {
          name: 'Claude',
          description: 'My go-to AI assistant for complex reasoning tasks',
          details: 'Opus for deep work, Sonnet for speed'
        },
        {
          name: 'Jupyter Lab',
          description: 'Interactive notebooks for data exploration',
          details: 'With custom extensions'
        },
        {
          name: 'Weights & Biases',
          description: 'Experiment tracking and model management',
          details: 'Essential for ML workflows'
        }
      ]
    },
    {
      title: 'Design & Creative',
      icon: '##',
      items: [
        {
          name: 'Figma',
          description: 'UI/UX design and prototyping',
          details: 'For all design work'
        },
        {
          name: 'Midjourney',
          description: 'AI image generation for concepts and inspiration',
          details: 'V6 is incredible'
        },
        {
          name: 'Udio / Suno',
          description: 'AI music generation for prototyping ideas',
          details: 'Before proper production'
        }
      ]
    },
    {
      title: 'Hardware',
      icon: '>>',
      items: [
        {
          name: 'MacBook Pro M3 Max',
          description: '16" with 48GB RAM for local ML work',
          details: 'Main development machine'
        },
        {
          name: 'LG UltraFine 5K',
          description: 'Crisp display for design and code',
          details: '27" Retina'
        },
        {
          name: 'Sony WH-1000XM5',
          description: 'Noise canceling for deep focus',
          details: 'Essential for office work'
        },
        {
          name: 'Keychron Q1',
          description: 'Mechanical keyboard with Gateron Brown switches',
          details: 'Tactile but not too loud'
        }
      ]
    },
    {
      title: 'Productivity',
      icon: '::',
      items: [
        {
          name: 'Obsidian',
          description: 'Personal knowledge management with local-first markdown',
          details: 'Second brain'
        },
        {
          name: 'Linear',
          description: 'Project management that doesn\'t suck',
          details: 'For side projects'
        },
        {
          name: 'Arc Browser',
          description: 'Reimagined browsing experience',
          details: 'Spaces are game-changing'
        },
        {
          name: 'Raycast',
          description: 'Spotlight replacement with superpowers',
          details: 'Clipboard history, snippets, and more'
        }
      ]
    }
  ];

  return (
    <div className="uses-page">
      {/* Background effects */}
      <div className="star-field"></div>
      <div className="glow-orb glow-orb--top-right"></div>
      <div className="glow-orb glow-orb--bottom-left glow-orb--small"></div>

      <div className="uses-content">
        <header ref={headerRef} className={`uses-header ${headerClass}`}>
          <span className="uses-tagline">The toolkit</span>
          <h1 className="uses-title">Uses</h1>
          <p className="uses-subtitle">
            A comprehensive list of the tools, apps, and hardware that power my daily workflow.
            <br />
            Updated regularly as I discover new favorites.
          </p>
        </header>

        <div className="uses-categories">
          {categories.map((category, catIndex) => (
            <CategorySection key={category.title} category={category} index={catIndex} />
          ))}
        </div>

        <footer className="uses-footer">
          <div className="footer-line"></div>
          <p className="footer-note">
            Have a tool recommendation? <a href="/contact" className="uses-link">Let me know</a>.
          </p>
        </footer>
      </div>
    </div>
  );
}

function CategorySection({ category, index }) {
  const { ref, className } = useScrollAnimation({ threshold: 0.1 });
  const { containerRef, getItemProps } = useScrollAnimationGroup({ staggerDelay: 0.08 });

  return (
    <section ref={ref} className={`category-section ${className}`}>
      <header className="category-header">
        <span className="category-icon">{category.icon}</span>
        <h2 className="category-title">{category.title}</h2>
      </header>

      <div ref={containerRef} className="category-items">
        {category.items.map((item, itemIndex) => (
          <article
            key={item.name}
            className="uses-item glass-card"
            {...getItemProps(itemIndex)}
          >
            <h3 className="item-name">{item.name}</h3>
            <p className="item-description">{item.description}</p>
            <span className="item-details">{item.details}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default UsesPage;
