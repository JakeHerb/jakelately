import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { themes, components } from '../../data/componentShowcase';
import ThemeTabs from './components/ThemeTabs/ThemeTabs.react';
import ComponentCard from './components/ComponentCard/ComponentCard.react';
import './ComponentShowcase.css';

function ComponentShowcase() {
  const [activeTheme, setActiveTheme] = useState('boring');

  const currentTheme = themes.find(t => t.id === activeTheme);

  return (
    <div className={`component-showcase showcase-${activeTheme}`}>
      {/* Background - themed via CSS */}
      <div className="component-showcase__bg" />

      <div className="component-showcase__content">
        {/* Back button */}
        <Link to="/projects" className="component-showcase__back">
          <span className="component-showcase__back-icon">{'<'}</span>
          Back to Projects
        </Link>

        {/* Header */}
        <header className="component-showcase__header">
          <span className="component-showcase__label">{'>'} ui_library</span>
          <h1 className="component-showcase__title">Component Showcase</h1>
          <p className="component-showcase__subtitle">
            Three themed component libraries. From semantic primitives to avant-garde expression.
          </p>
        </header>

        {/* Theme Tabs */}
        <ThemeTabs
          themes={themes}
          activeTheme={activeTheme}
          onThemeChange={setActiveTheme}
        />

        {/* Theme Description */}
        <div className="component-showcase__theme-info">
          <p className="component-showcase__theme-desc">{currentTheme?.description}</p>
        </div>

        {/* Component Grid */}
        <div className="component-showcase__grid">
          {components.map((component) => (
            <ComponentCard
              key={component.id}
              component={component}
              theme={activeTheme}
            />
          ))}
        </div>

        {/* Footer info */}
        <div className="component-showcase__footer">
          <p>
            <strong>{components.length}</strong> components across <strong>7</strong> themes.
            Toggle code to see usage examples.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ComponentShowcase;
