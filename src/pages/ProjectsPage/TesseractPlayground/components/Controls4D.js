import React from 'react';
import { getPolytopeInfo } from '../utils/polytopes';
import './Controls4D.css';

/**
 * Controls4D - UI controls for the 4D visualization
 *
 * Provides:
 * - Shape selector (tesseract, 24-cell, etc.)
 * - 4D rotation sliders (XW, YW, ZW)
 * - Dimension scrubber (0D → 4D)
 * - Auto-rotate toggle
 * - Theme selector
 */
function Controls4D({
  selectedShape,
  onShapeChange,
  rotationAngles,
  onRotationChange,
  dimension,
  onDimensionChange,
  autoRotate,
  onAutoRotateToggle,
  theme,
  onThemeChange,
  showDimensionMode,
  onModeToggle
}) {
  const polytopeInfo = getPolytopeInfo();

  const handleSliderChange = (axis, value) => {
    onRotationChange({
      ...rotationAngles,
      [axis]: (parseFloat(value) / 100) * Math.PI * 2
    });
  };

  return (
    <div className="controls-4d">
      <div className="controls-4d__header">
        <span className="controls-4d__icon">{'◇'}</span>
        <h2 className="controls-4d__title">Dimensional Gateway</h2>
      </div>

      {/* Mode Toggle */}
      <div className="controls-4d__section">
        <div className="controls-4d__mode-toggle">
          <button
            className={`controls-4d__mode-btn ${!showDimensionMode ? 'active' : ''}`}
            onClick={() => onModeToggle(false)}
          >
            4D Shapes
          </button>
          <button
            className={`controls-4d__mode-btn ${showDimensionMode ? 'active' : ''}`}
            onClick={() => onModeToggle(true)}
          >
            Dimension Journey
          </button>
        </div>
      </div>

      {/* Shape Selector (only in 4D Shapes mode) */}
      {!showDimensionMode && (
        <div className="controls-4d__section">
          <label className="controls-4d__label">Shape</label>
          <div className="controls-4d__shapes">
            {polytopeInfo.map(poly => (
              <button
                key={poly.id}
                className={`controls-4d__shape-btn ${selectedShape === poly.id ? 'active' : ''}`}
                onClick={() => onShapeChange(poly.id)}
                title={poly.description}
              >
                <span className="controls-4d__shape-name">{poly.name}</span>
                <span className="controls-4d__shape-info">
                  {poly.vertexCount}v / {poly.edgeCount}e
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Dimension Scrubber (only in Dimension Journey mode) */}
      {showDimensionMode && (
        <div className="controls-4d__section">
          <label className="controls-4d__label">
            Dimension: <span className="controls-4d__value">{dimension.toFixed(1)}D</span>
          </label>
          <div className="controls-4d__dimension-buttons">
            {[0, 1, 2, 3, 4].map(d => (
              <button
                key={d}
                className={`controls-4d__dim-btn ${Math.floor(dimension) === d ? 'active' : ''}`}
                onClick={() => onDimensionChange(d)}
              >
                {d}D
              </button>
            ))}
          </div>
          <input
            type="range"
            min="0"
            max="400"
            value={dimension * 100}
            onChange={(e) => onDimensionChange(parseFloat(e.target.value) / 100)}
            className="controls-4d__slider controls-4d__slider--dimension"
          />
        </div>
      )}

      {/* 4D Rotation Sliders */}
      <div className="controls-4d__section">
        <label className="controls-4d__label">4D Rotation</label>

        <div className="controls-4d__slider-group">
          <span className="controls-4d__slider-label">XW</span>
          <input
            type="range"
            min="0"
            max="100"
            value={(rotationAngles.xw / (Math.PI * 2)) * 100}
            onChange={(e) => handleSliderChange('xw', e.target.value)}
            className="controls-4d__slider"
            disabled={autoRotate}
          />
        </div>

        <div className="controls-4d__slider-group">
          <span className="controls-4d__slider-label">YW</span>
          <input
            type="range"
            min="0"
            max="100"
            value={(rotationAngles.yw / (Math.PI * 2)) * 100}
            onChange={(e) => handleSliderChange('yw', e.target.value)}
            className="controls-4d__slider"
            disabled={autoRotate}
          />
        </div>

        <div className="controls-4d__slider-group">
          <span className="controls-4d__slider-label">ZW</span>
          <input
            type="range"
            min="0"
            max="100"
            value={(rotationAngles.zw / (Math.PI * 2)) * 100}
            onChange={(e) => handleSliderChange('zw', e.target.value)}
            className="controls-4d__slider"
            disabled={autoRotate}
          />
        </div>
      </div>

      {/* Auto Rotate Toggle */}
      <div className="controls-4d__section">
        <button
          className={`controls-4d__toggle ${autoRotate ? 'active' : ''}`}
          onClick={onAutoRotateToggle}
        >
          <span className="controls-4d__toggle-icon">{autoRotate ? '◉' : '○'}</span>
          Auto Rotate
        </button>
      </div>

      {/* Theme Selector */}
      <div className="controls-4d__section">
        <label className="controls-4d__label">Theme</label>
        <div className="controls-4d__themes">
          <button
            className={`controls-4d__theme-btn controls-4d__theme-btn--golden ${theme === 'golden' ? 'active' : ''}`}
            onClick={() => onThemeChange('golden')}
            title="Golden"
          />
          <button
            className={`controls-4d__theme-btn controls-4d__theme-btn--teal ${theme === 'teal' ? 'active' : ''}`}
            onClick={() => onThemeChange('teal')}
            title="Teal"
          />
          <button
            className={`controls-4d__theme-btn controls-4d__theme-btn--cosmic ${theme === 'cosmic' ? 'active' : ''}`}
            onClick={() => onThemeChange('cosmic')}
            title="Cosmic"
          />
          <button
            className={`controls-4d__theme-btn controls-4d__theme-btn--fire ${theme === 'fire' ? 'active' : ''}`}
            onClick={() => onThemeChange('fire')}
            title="Fire"
          />
        </div>
      </div>

      {/* Info */}
      <div className="controls-4d__info">
        <p className="controls-4d__info-main">
          <strong>What am I seeing?</strong> A {showDimensionMode ? 'dimensional journey' : '4D shape'}{' '}
          projected into 3D space.
        </p>
        <p className="controls-4d__info-detail">
          Just as a 3D object casts a 2D shadow, these 4D objects cast 3D "shadows" that we can rotate and explore.
        </p>
        <p className="controls-4d__info-hint">
          Drag to orbit • Scroll to zoom
        </p>
      </div>
    </div>
  );
}

export default Controls4D;
