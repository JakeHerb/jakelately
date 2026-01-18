import React from 'react';
import './ThemeTabs.css';

function ThemeTabs({ themes, activeTheme, onThemeChange }) {
  return (
    <div className="theme-tabs">
      <span className="theme-tabs__label">{'>'} theme</span>
      <div className="theme-tabs__buttons">
        {themes.map(theme => (
          <button
            key={theme.id}
            className={`theme-tabs__button ${
              activeTheme === theme.id ? 'theme-tabs__button--active' : ''
            }`}
            onClick={() => onThemeChange(theme.id)}
          >
            <span className="theme-tabs__icon">{theme.icon}</span>
            <div className="theme-tabs__text">
              <span className="theme-tabs__name">{theme.name}</span>
              <span className="theme-tabs__subtitle">{theme.subtitle}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ThemeTabs;
