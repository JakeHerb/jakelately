/**
 * Flamboyant Theme - Unapologetic
 * Bold gradients, dramatic flair, expressive pride. Loud and proud.
 */
import React, { useState } from 'react';
import './flamboyant.css';

// ===== Button =====
export function Button() {
  return (
    <div className="flamb-demo">
      <button className="flamb-button flamb-button--primary">
        <span className="flamb-button__shimmer" />
        <span className="flamb-button__text">SLAY</span>
      </button>
      <button className="flamb-button flamb-button--secondary">SERVE</button>
      <button className="flamb-button flamb-button--ghost">WERK</button>
      <button className="flamb-button flamb-button--rainbow">PRIDE</button>
    </div>
  );
}

// ===== Input =====
export function Input() {
  const [focused, setFocused] = useState(false);
  return (
    <div className="flamb-demo flamb-demo--column">
      <div className={`flamb-input-wrapper ${focused ? 'flamb-input-wrapper--focused' : ''}`}>
        <input
          type="text"
          className="flamb-input"
          placeholder="Spill the tea..."
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <span className="flamb-input__border" />
        <span className="flamb-input__sparkle flamb-input__sparkle--1" />
        <span className="flamb-input__sparkle flamb-input__sparkle--2" />
      </div>
    </div>
  );
}

// ===== TextArea =====
export function TextArea() {
  return (
    <div className="flamb-textarea-wrapper">
      <textarea className="flamb-textarea" placeholder="Express yourself..." rows={3} />
      <span className="flamb-textarea__border" />
    </div>
  );
}

// ===== Checkbox =====
export function Checkbox() {
  const [checked, setChecked] = useState(false);
  return (
    <label className="flamb-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <span className="flamb-checkbox__box">
        <span className="flamb-checkbox__heart">♥</span>
      </span>
      <span className="flamb-checkbox__text">Living my truth</span>
    </label>
  );
}

// ===== Radio =====
export function Radio() {
  const [selected, setSelected] = useState('a');
  return (
    <div className="flamb-demo flamb-demo--column">
      {['a', 'b'].map((opt) => (
        <label key={opt} className="flamb-radio">
          <input
            type="radio"
            name="flamb-radio"
            value={opt}
            checked={selected === opt}
            onChange={(e) => setSelected(e.target.value)}
          />
          <span className="flamb-radio__gem">
            <span className="flamb-radio__sparkle" />
          </span>
          <span className="flamb-radio__text">Iconic {opt.toUpperCase()}</span>
        </label>
      ))}
    </div>
  );
}

// ===== Toggle =====
export function Toggle() {
  const [on, setOn] = useState(false);
  return (
    <label className="flamb-toggle">
      <input type="checkbox" checked={on} onChange={(e) => setOn(e.target.checked)} />
      <span className="flamb-toggle__track">
        <span className="flamb-toggle__thumb" />
        <span className="flamb-toggle__glitter" />
      </span>
      <span className="flamb-toggle__label">{on ? 'Fierce' : 'Subtle'}</span>
    </label>
  );
}

// ===== Select =====
export function Select() {
  return (
    <div className="flamb-select-wrapper">
      <select className="flamb-select">
        <option value="">Choose your vibe</option>
        <option value="1">Glamorous</option>
        <option value="2">Dramatic</option>
        <option value="3">Legendary</option>
      </select>
      <span className="flamb-select__arrow">◆</span>
      <span className="flamb-select__border" />
    </div>
  );
}

// ===== Card =====
export function Card() {
  return (
    <div className="flamb-card">
      <span className="flamb-card__ribbon">ICONIC</span>
      <div className="flamb-card__shimmer" />
      <h4 className="flamb-card__title">Main Character Energy</h4>
      <p className="flamb-card__content">
        Unapologetically bold, dramatically beautiful. Every moment is a runway.
      </p>
      <div className="flamb-card__footer">
        <span className="flamb-card__tag">* Stunning</span>
        <span className="flamb-card__tag">Flawless</span>
      </div>
    </div>
  );
}

// ===== Badge =====
export function Badge() {
  return (
    <div className="flamb-demo">
      <span className="flamb-badge">Basic</span>
      <span className="flamb-badge flamb-badge--success">Serving</span>
      <span className="flamb-badge flamb-badge--legendary">Legendary</span>
      <span className="flamb-badge flamb-badge--rainbow">Pride</span>
    </div>
  );
}

// ===== Avatar =====
export function Avatar() {
  return (
    <div className="flamb-demo">
      <div className="flamb-avatar">
        <span className="flamb-avatar__text">JH</span>
        <span className="flamb-avatar__crown">♕</span>
        <span className="flamb-avatar__ring" />
      </div>
      <div className="flamb-avatar flamb-avatar--large">
        <span className="flamb-avatar__text">JH</span>
        <span className="flamb-avatar__crown">♕</span>
        <span className="flamb-avatar__ring" />
        <span className="flamb-avatar__sparkles" />
      </div>
    </div>
  );
}

// ===== Tooltip =====
export function Tooltip() {
  return (
    <span className="flamb-tooltip-trigger">
      The tea is hot
      <span className="flamb-tooltip">
        <span className="flamb-tooltip__content">And that's on period!</span>
      </span>
    </span>
  );
}

// ===== Modal =====
export function Modal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="flamb-button flamb-button--primary" onClick={() => setOpen(true)}>
        <span className="flamb-button__shimmer" />
        <span className="flamb-button__text">Unveil</span>
      </button>
      {open && (
        <div className="flamb-modal-backdrop" onClick={() => setOpen(false)}>
          <div className="flamb-modal" onClick={(e) => e.stopPropagation()}>
            <span className="flamb-modal__shimmer" />
            <button className="flamb-modal__close" onClick={() => setOpen(false)}>✕</button>
            <div className="flamb-modal__crown">♕</div>
            <h4 className="flamb-modal__title">Moment of Glory</h4>
            <p className="flamb-modal__content">You're about to do something absolutely iconic.</p>
            <div className="flamb-modal__actions">
              <button className="flamb-button flamb-button--ghost" onClick={() => setOpen(false)}>
                Pass
              </button>
              <button className="flamb-button flamb-button--rainbow" onClick={() => setOpen(false)}>
                SLAY
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ===== Tabs =====
export function Tabs() {
  const [active, setActive] = useState(0);
  const tabs = ['Look', 'Serve', 'Slay'];
  return (
    <div className="flamb-tabs">
      <div className="flamb-tabs__list">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`flamb-tabs__tab ${active === i ? 'flamb-tabs__tab--active' : ''}`}
            onClick={() => setActive(i)}
          >
            {tab}
          </button>
        ))}
        <span
          className="flamb-tabs__indicator"
          style={{ transform: `translateX(${active * 100}%)` }}
        />
      </div>
      <div className="flamb-tabs__content">
        Category is: {tabs[active]}!
      </div>
    </div>
  );
}

// ===== Accordion =====
export function Accordion() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`flamb-accordion ${open ? 'flamb-accordion--open' : ''}`}>
      <button className="flamb-accordion__header" onClick={() => setOpen(!open)}>
        <span className="flamb-accordion__title">Behind the curtain</span>
        <span className="flamb-accordion__icon">{open ? '−' : '+'}</span>
      </button>
      <div className="flamb-accordion__body">
        <div className="flamb-accordion__content">
          Every great reveal needs a dramatic pause. Here's the content you've been waiting for,
          darling. Worth the wait, wasn't it?
        </div>
      </div>
    </div>
  );
}

// ===== Progress =====
export function Progress() {
  return (
    <div className="flamb-demo flamb-demo--column">
      <div className="flamb-progress">
        <div className="flamb-progress__track">
          <div className="flamb-progress__bar" style={{ width: '70%' }}>
            <span className="flamb-progress__shimmer" />
          </div>
        </div>
        <span className="flamb-progress__label">70% to iconic status</span>
      </div>
    </div>
  );
}

// ===== Slider =====
export function Slider() {
  const [value, setValue] = useState(50);
  return (
    <div className="flamb-demo flamb-demo--column">
      <div className="flamb-slider-wrapper">
        <input
          type="range"
          className="flamb-slider"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <div className="flamb-slider__track">
          <div className="flamb-slider__fill" style={{ width: `${value}%` }} />
          <span className="flamb-slider__thumb" style={{ left: `${value}%` }}>
            <span className="flamb-slider__gem">◆</span>
          </span>
        </div>
      </div>
      <span className="flamb-slider__value">Drama level: {value}%</span>
    </div>
  );
}

// ===== Toast =====
export function Toast() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="flamb-button flamb-button--primary" onClick={() => setShow(true)}>
        <span className="flamb-button__shimmer" />
        <span className="flamb-button__text">Announce</span>
      </button>
      {show && (
        <div className="flamb-toast">
          <span className="flamb-toast__shimmer" />
          <span className="flamb-toast__icon">*</span>
          <span className="flamb-toast__message">And that's the tea, sis!</span>
          <button className="flamb-toast__close" onClick={() => setShow(false)}>✕</button>
        </div>
      )}
    </>
  );
}

// ===== Code Examples =====
export function getCode(componentId) {
  const codes = {
    button: `<button className="flamb-button flamb-button--primary">
  <span className="flamb-button__shimmer" />
  <span className="flamb-button__text">SLAY</span>
</button>`,
    input: `<div className="flamb-input-wrapper">
  <input className="flamb-input" placeholder="..." />
  <span className="flamb-input__border" />
  <span className="flamb-input__sparkle" />
</div>`,
    textarea: `<div className="flamb-textarea-wrapper">
  <textarea className="flamb-textarea" rows={3} />
  <span className="flamb-textarea__border" />
</div>`,
    checkbox: `<label className="flamb-checkbox">
  <input type="checkbox" />
  <span className="flamb-checkbox__box">
    <span className="flamb-checkbox__heart">♥</span>
  </span>
</label>`,
    radio: `<label className="flamb-radio">
  <input type="radio" />
  <span className="flamb-radio__gem">
    <span className="flamb-radio__sparkle" />
  </span>
</label>`,
    toggle: `<label className="flamb-toggle">
  <input type="checkbox" />
  <span className="flamb-toggle__track">
    <span className="flamb-toggle__thumb" />
  </span>
</label>`,
    select: `<div className="flamb-select-wrapper">
  <select className="flamb-select">
    <option>Choose your vibe</option>
  </select>
  <span className="flamb-select__border" />
</div>`,
    card: `<div className="flamb-card">
  <span className="flamb-card__ribbon">ICONIC</span>
  <h4 className="flamb-card__title">Title</h4>
  <p className="flamb-card__content">Content</p>
</div>`,
    badge: `<span className="flamb-badge">Basic</span>
<span className="flamb-badge--rainbow">Pride</span>`,
    avatar: `<div className="flamb-avatar">
  <span className="flamb-avatar__text">JH</span>
  <span className="flamb-avatar__crown">♕</span>
  <span className="flamb-avatar__ring" />
</div>`,
    tooltip: `<span className="flamb-tooltip-trigger">
  Hover me
  <span className="flamb-tooltip">The tea!</span>
</span>`,
    modal: `<div className="flamb-modal-backdrop">
  <div className="flamb-modal">
    <div className="flamb-modal__crown">♕</div>
    <h4>Title</h4>
  </div>
</div>`,
    tabs: `<div className="flamb-tabs">
  <button className="flamb-tabs__tab--active">Slay</button>
  <span className="flamb-tabs__indicator" />
</div>`,
    accordion: `<div className="flamb-accordion">
  <button className="flamb-accordion__header">
    <span>Behind the curtain</span>
    <span className="flamb-accordion__icon">+</span>
  </button>
</div>`,
    progress: `<div className="flamb-progress">
  <div className="flamb-progress__bar" style={{ width: '70%' }}>
    <span className="flamb-progress__shimmer" />
  </div>
</div>`,
    slider: `<div className="flamb-slider-wrapper">
  <input type="range" className="flamb-slider" />
  <span className="flamb-slider__gem">◆</span>
</div>`,
    toast: `<div className="flamb-toast">
  <span className="flamb-toast__shimmer" />
  <span className="flamb-toast__icon">*</span>
  <span>That's the tea!</span>
</div>`,
  };
  return codes[componentId] || `<${componentId} />`;
}
