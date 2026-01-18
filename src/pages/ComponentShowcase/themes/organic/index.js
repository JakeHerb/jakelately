/**
 * Organic Theme - Living Forms
 * Fluid animations, morphing shapes, natural motion. Alive and breathing.
 */
import React, { useState } from 'react';
import './organic.css';

// ===== Button =====
export function Button() {
  return (
    <div className="org-demo">
      <button className="org-button org-button--primary">
        <span className="org-button__blob" />
        <span className="org-button__text">Submit</span>
      </button>
      <button className="org-button org-button--secondary">Cancel</button>
      <button className="org-button org-button--ghost">Skip</button>
      <button className="org-button org-button--destructive">Remove</button>
    </div>
  );
}

// ===== Input =====
export function Input() {
  const [focused, setFocused] = useState(false);
  return (
    <div className="org-demo org-demo--column">
      <div className={`org-input-wrapper ${focused ? 'org-input-wrapper--focused' : ''}`}>
        <input
          type="text"
          className="org-input"
          placeholder="Type something..."
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <span className="org-input__border" />
        <span className="org-input__glow" />
      </div>
    </div>
  );
}

// ===== TextArea =====
export function TextArea() {
  const [focused, setFocused] = useState(false);
  return (
    <div className={`org-textarea-wrapper ${focused ? 'org-textarea-wrapper--focused' : ''}`}>
      <textarea
        className="org-textarea"
        placeholder="Share your thoughts..."
        rows={3}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <span className="org-textarea__border" />
    </div>
  );
}

// ===== Checkbox =====
export function Checkbox() {
  const [checked, setChecked] = useState(false);
  return (
    <label className="org-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <span className="org-checkbox__blob">
        <span className="org-checkbox__check">
          <svg viewBox="0 0 24 24">
            <path d="M5 12l5 5L19 7" />
          </svg>
        </span>
      </span>
      <span className="org-checkbox__text">Accept terms</span>
    </label>
  );
}

// ===== Radio =====
export function Radio() {
  const [selected, setSelected] = useState('a');
  return (
    <div className="org-demo org-demo--column">
      {['a', 'b'].map((opt) => (
        <label key={opt} className="org-radio">
          <input
            type="radio"
            name="org-radio"
            value={opt}
            checked={selected === opt}
            onChange={(e) => setSelected(e.target.value)}
          />
          <span className="org-radio__blob">
            <span className="org-radio__core" />
          </span>
          <span className="org-radio__text">Option {opt.toUpperCase()}</span>
        </label>
      ))}
    </div>
  );
}

// ===== Toggle =====
export function Toggle() {
  const [on, setOn] = useState(false);
  return (
    <label className="org-toggle">
      <input type="checkbox" checked={on} onChange={(e) => setOn(e.target.checked)} />
      <span className="org-toggle__track">
        <span className="org-toggle__thumb">
          <span className="org-toggle__ripple" />
        </span>
      </span>
      <span className="org-toggle__label">{on ? 'Active' : 'Inactive'}</span>
    </label>
  );
}

// ===== Select =====
export function Select() {
  return (
    <div className="org-select-wrapper">
      <select className="org-select">
        <option value="">Choose one...</option>
        <option value="1">First option</option>
        <option value="2">Second option</option>
        <option value="3">Third option</option>
      </select>
      <span className="org-select__arrow">
        <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
      </span>
      <span className="org-select__border" />
    </div>
  );
}

// ===== Card =====
export function Card() {
  return (
    <div className="org-card">
      <div className="org-card__blob" />
      <div className="org-card__content">
        <h4 className="org-card__title">Natural Growth</h4>
        <p className="org-card__text">
          Like living organisms, these components breathe and respond to interaction with fluid, natural motion.
        </p>
        <div className="org-card__footer">
          <span className="org-card__tag">Nature</span>
          <span className="org-card__tag">Motion</span>
        </div>
      </div>
    </div>
  );
}

// ===== Badge =====
export function Badge() {
  return (
    <div className="org-demo">
      <span className="org-badge">Default</span>
      <span className="org-badge org-badge--success">Growing</span>
      <span className="org-badge org-badge--warning">Wilting</span>
      <span className="org-badge org-badge--pulse">Alive</span>
    </div>
  );
}

// ===== Avatar =====
export function Avatar() {
  return (
    <div className="org-demo">
      <div className="org-avatar">
        <span className="org-avatar__blob" />
        <span className="org-avatar__text">JH</span>
      </div>
      <div className="org-avatar org-avatar--large">
        <span className="org-avatar__blob" />
        <span className="org-avatar__text">JH</span>
      </div>
    </div>
  );
}

// ===== Tooltip =====
export function Tooltip() {
  return (
    <span className="org-tooltip-trigger">
      Hover over me
      <span className="org-tooltip">
        <span className="org-tooltip__content">Information flows naturally</span>
      </span>
    </span>
  );
}

// ===== Modal =====
export function Modal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="org-button org-button--primary" onClick={() => setOpen(true)}>
        <span className="org-button__blob" />
        <span className="org-button__text">Open</span>
      </button>
      {open && (
        <div className="org-modal-backdrop" onClick={() => setOpen(false)}>
          <div className="org-modal" onClick={(e) => e.stopPropagation()}>
            <div className="org-modal__blob" />
            <button className="org-modal__close" onClick={() => setOpen(false)}>
              <svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
            <h4 className="org-modal__title">Confirm Action</h4>
            <p className="org-modal__content">Would you like to proceed with this natural flow?</p>
            <div className="org-modal__actions">
              <button className="org-button org-button--ghost" onClick={() => setOpen(false)}>
                Not now
              </button>
              <button className="org-button org-button--primary" onClick={() => setOpen(false)}>
                <span className="org-button__blob" />
                <span className="org-button__text">Continue</span>
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
  const tabs = ['Growth', 'Flow', 'Bloom'];
  return (
    <div className="org-tabs">
      <div className="org-tabs__list">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`org-tabs__tab ${active === i ? 'org-tabs__tab--active' : ''}`}
            onClick={() => setActive(i)}
          >
            {tab}
          </button>
        ))}
        <span
          className="org-tabs__indicator"
          style={{ transform: `translateX(${active * 100}%)` }}
        />
      </div>
      <div className="org-tabs__content">
        The {tabs[active].toLowerCase()} of natural elements
      </div>
    </div>
  );
}

// ===== Accordion =====
export function Accordion() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`org-accordion ${open ? 'org-accordion--open' : ''}`}>
      <button className="org-accordion__header" onClick={() => setOpen(!open)}>
        <span className="org-accordion__title">Unfold to reveal</span>
        <span className="org-accordion__icon">
          <svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
        </span>
      </button>
      <div className="org-accordion__body">
        <div className="org-accordion__content">
          Like a flower opening to the sun, content reveals itself naturally and gracefully.
        </div>
      </div>
    </div>
  );
}

// ===== Progress =====
export function Progress() {
  return (
    <div className="org-demo org-demo--column">
      <div className="org-progress">
        <div className="org-progress__track">
          <div className="org-progress__bar" style={{ width: '70%' }}>
            <span className="org-progress__glow" />
          </div>
        </div>
        <span className="org-progress__label">70% grown</span>
      </div>
    </div>
  );
}

// ===== Slider =====
export function Slider() {
  const [value, setValue] = useState(50);
  return (
    <div className="org-demo org-demo--column">
      <div className="org-slider-wrapper">
        <input
          type="range"
          className="org-slider"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <div className="org-slider__track">
          <div className="org-slider__fill" style={{ width: `${value}%` }}>
            <span className="org-slider__thumb" />
          </div>
        </div>
      </div>
      <span className="org-slider__value">{value}%</span>
    </div>
  );
}

// ===== Toast =====
export function Toast() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="org-button org-button--primary" onClick={() => setShow(true)}>
        <span className="org-button__blob" />
        <span className="org-button__text">Notify</span>
      </button>
      {show && (
        <div className="org-toast">
          <span className="org-toast__blob" />
          <span className="org-toast__icon">
            <svg viewBox="0 0 24 24"><path d="M5 12l5 5L19 7" /></svg>
          </span>
          <span className="org-toast__message">Action completed naturally</span>
          <button className="org-toast__close" onClick={() => setShow(false)}>
            <svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>
      )}
    </>
  );
}

// ===== Code Examples =====
export function getCode(componentId) {
  const codes = {
    button: `<button className="org-button org-button--primary">
  <span className="org-button__blob" />
  <span className="org-button__text">Submit</span>
</button>`,
    input: `<div className="org-input-wrapper">
  <input className="org-input" placeholder="Type..." />
  <span className="org-input__border" />
  <span className="org-input__glow" />
</div>`,
    textarea: `<div className="org-textarea-wrapper">
  <textarea className="org-textarea" rows={3} />
  <span className="org-textarea__border" />
</div>`,
    checkbox: `<label className="org-checkbox">
  <input type="checkbox" />
  <span className="org-checkbox__blob">
    <span className="org-checkbox__check">✓</span>
  </span>
  <span>Label</span>
</label>`,
    radio: `<label className="org-radio">
  <input type="radio" />
  <span className="org-radio__blob">
    <span className="org-radio__core" />
  </span>
  <span>Option</span>
</label>`,
    toggle: `<label className="org-toggle">
  <input type="checkbox" />
  <span className="org-toggle__track">
    <span className="org-toggle__thumb" />
  </span>
</label>`,
    select: `<div className="org-select-wrapper">
  <select className="org-select">
    <option>Choose...</option>
  </select>
  <span className="org-select__border" />
</div>`,
    card: `<div className="org-card">
  <div className="org-card__blob" />
  <div className="org-card__content">
    <h4>Title</h4>
    <p>Content</p>
  </div>
</div>`,
    badge: `<span className="org-badge">Default</span>
<span className="org-badge org-badge--pulse">Alive</span>`,
    avatar: `<div className="org-avatar">
  <span className="org-avatar__blob" />
  <span className="org-avatar__text">JH</span>
</div>`,
    tooltip: `<span className="org-tooltip-trigger">
  Hover me
  <span className="org-tooltip">Info</span>
</span>`,
    modal: `<div className="org-modal-backdrop">
  <div className="org-modal">
    <div className="org-modal__blob" />
    <h4>Title</h4>
    <p>Content</p>
  </div>
</div>`,
    tabs: `<div className="org-tabs">
  <div className="org-tabs__list">
    <button className="org-tabs__tab--active">Tab</button>
    <span className="org-tabs__indicator" />
  </div>
</div>`,
    accordion: `<div className="org-accordion">
  <button className="org-accordion__header">
    <span>Title</span>
    <span className="org-accordion__icon">▼</span>
  </button>
</div>`,
    progress: `<div className="org-progress">
  <div className="org-progress__bar" style={{ width: '70%' }}>
    <span className="org-progress__glow" />
  </div>
</div>`,
    slider: `<div className="org-slider-wrapper">
  <input type="range" className="org-slider" />
  <div className="org-slider__track">
    <div className="org-slider__fill" />
  </div>
</div>`,
    toast: `<div className="org-toast">
  <span className="org-toast__blob" />
  <span className="org-toast__message">Message</span>
</div>`,
  };
  return codes[componentId] || `<${componentId} />`;
}
