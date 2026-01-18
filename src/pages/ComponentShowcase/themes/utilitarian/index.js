/**
 * Utilitarian Theme - Minimal Function
 * Minimalist, functional, sleek with precise micro-interactions
 */
import React, { useState } from 'react';
import './utilitarian.css';

// ===== Button =====
export function Button() {
  return (
    <div className="util-demo">
      <button className="util-button util-button--primary">
        <span className="util-button__text">Primary</span>
        <span className="util-button__shine" />
      </button>
      <button className="util-button util-button--secondary">Secondary</button>
      <button className="util-button util-button--ghost">Ghost</button>
      <button className="util-button util-button--destructive">Delete</button>
    </div>
  );
}

// ===== Input =====
export function Input() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  return (
    <div className="util-demo util-demo--column">
      <div className={`util-input-wrapper ${focused || value ? 'util-input-wrapper--active' : ''}`}>
        <input
          type="text"
          className="util-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <label className="util-input-label">Email address</label>
        <span className="util-input-line" />
      </div>
    </div>
  );
}

// ===== TextArea =====
export function TextArea() {
  return (
    <div className="util-textarea-wrapper">
      <textarea className="util-textarea" placeholder=" " rows={3} />
      <label className="util-textarea-label">Your message</label>
    </div>
  );
}

// ===== Checkbox =====
export function Checkbox() {
  const [checked, setChecked] = useState(false);
  return (
    <label className="util-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <span className="util-checkbox__box">
        <svg className="util-checkbox__check" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <span className="util-checkbox__text">Accept terms</span>
    </label>
  );
}

// ===== Radio =====
export function Radio() {
  const [selected, setSelected] = useState('option1');
  return (
    <div className="util-demo util-demo--column">
      {['option1', 'option2'].map((opt, i) => (
        <label key={opt} className="util-radio">
          <input
            type="radio"
            name="util-radio"
            value={opt}
            checked={selected === opt}
            onChange={(e) => setSelected(e.target.value)}
          />
          <span className="util-radio__circle">
            <span className="util-radio__dot" />
          </span>
          <span className="util-radio__text">Option {i + 1}</span>
        </label>
      ))}
    </div>
  );
}

// ===== Toggle =====
export function Toggle() {
  const [on, setOn] = useState(false);
  return (
    <label className="util-toggle">
      <input type="checkbox" checked={on} onChange={(e) => setOn(e.target.checked)} />
      <span className="util-toggle__track">
        <span className="util-toggle__thumb" />
      </span>
      <span className="util-toggle__text">{on ? 'On' : 'Off'}</span>
    </label>
  );
}

// ===== Select =====
export function Select() {
  return (
    <div className="util-select-wrapper">
      <select className="util-select">
        <option value="">Select option</option>
        <option value="1">Option One</option>
        <option value="2">Option Two</option>
      </select>
      <span className="util-select-arrow">{'>'}</span>
    </div>
  );
}

// ===== Card =====
export function Card() {
  return (
    <div className="util-card">
      <div className="util-card__header">
        <h4 className="util-card__title">Card Title</h4>
        <span className="util-card__badge">New</span>
      </div>
      <p className="util-card__content">Clean, functional content container with subtle depth.</p>
    </div>
  );
}

// ===== Badge =====
export function Badge() {
  return (
    <div className="util-demo">
      <span className="util-badge">Default</span>
      <span className="util-badge util-badge--success">Success</span>
      <span className="util-badge util-badge--warning">Warning</span>
      <span className="util-badge util-badge--pulse">Live</span>
    </div>
  );
}

// ===== Avatar =====
export function Avatar() {
  return (
    <div className="util-demo">
      <div className="util-avatar">
        <span className="util-avatar__initials">JH</span>
        <span className="util-avatar__status util-avatar__status--online" />
      </div>
      <div className="util-avatar util-avatar--large">
        <span className="util-avatar__initials">JH</span>
      </div>
    </div>
  );
}

// ===== Tooltip =====
export function Tooltip() {
  return (
    <span className="util-tooltip-trigger">
      Hover me
      <span className="util-tooltip">Helpful information appears here</span>
    </span>
  );
}

// ===== Modal =====
export function Modal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="util-button util-button--primary" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      {open && (
        <div className="util-modal-backdrop" onClick={() => setOpen(false)}>
          <div className="util-modal" onClick={(e) => e.stopPropagation()}>
            <h4 className="util-modal__title">Confirm Action</h4>
            <p className="util-modal__content">Are you sure you want to proceed?</p>
            <div className="util-modal__actions">
              <button className="util-button util-button--ghost" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button className="util-button util-button--primary" onClick={() => setOpen(false)}>
                Confirm
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
  const tabs = ['Overview', 'Details', 'Settings'];
  return (
    <div className="util-tabs">
      <div className="util-tabs__list">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`util-tabs__tab ${active === i ? 'util-tabs__tab--active' : ''}`}
            onClick={() => setActive(i)}
          >
            {tab}
          </button>
        ))}
        <span
          className="util-tabs__indicator"
          style={{ transform: `translateX(${active * 100}%)` }}
        />
      </div>
      <div className="util-tabs__content">{tabs[active]} content</div>
    </div>
  );
}

// ===== Accordion =====
export function Accordion() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`util-accordion ${open ? 'util-accordion--open' : ''}`}>
      <button className="util-accordion__header" onClick={() => setOpen(!open)}>
        <span>Frequently Asked Question</span>
        <span className="util-accordion__icon">{open ? '-' : '+'}</span>
      </button>
      <div className="util-accordion__body">
        <div className="util-accordion__content">
          This is the answer to the frequently asked question. It slides smoothly into view.
        </div>
      </div>
    </div>
  );
}

// ===== Progress =====
export function Progress() {
  return (
    <div className="util-demo util-demo--column">
      <div className="util-progress">
        <div className="util-progress__bar" style={{ width: '70%' }} />
      </div>
      <span className="util-progress__label">70% complete</span>
    </div>
  );
}

// ===== Slider =====
export function Slider() {
  const [value, setValue] = useState(50);
  return (
    <div className="util-demo util-demo--column">
      <input
        type="range"
        className="util-slider"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <span className="util-slider__value">{value}</span>
    </div>
  );
}

// ===== Toast =====
export function Toast() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="util-button util-button--primary" onClick={() => setShow(true)}>
        Show Toast
      </button>
      {show && (
        <div className="util-toast">
          <span className="util-toast__icon">{'>'}</span>
          <span className="util-toast__message">Changes saved successfully</span>
          <button className="util-toast__close" onClick={() => setShow(false)}>x</button>
        </div>
      )}
    </>
  );
}

// ===== Code Examples =====
export function getCode(componentId) {
  const codes = {
    button: `<button className="util-button util-button--primary">
  <span className="util-button__text">Click me</span>
  <span className="util-button__shine" />
</button>`,
    input: `<div className="util-input-wrapper">
  <input type="text" className="util-input" />
  <label className="util-input-label">Email</label>
  <span className="util-input-line" />
</div>`,
    textarea: `<div className="util-textarea-wrapper">
  <textarea className="util-textarea" />
  <label className="util-textarea-label">Message</label>
</div>`,
    checkbox: `<label className="util-checkbox">
  <input type="checkbox" />
  <span className="util-checkbox__box">
    <svg className="util-checkbox__check" viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </span>
  <span>Label</span>
</label>`,
    radio: `<label className="util-radio">
  <input type="radio" name="group" />
  <span className="util-radio__circle">
    <span className="util-radio__dot" />
  </span>
  <span>Option</span>
</label>`,
    toggle: `<label className="util-toggle">
  <input type="checkbox" />
  <span className="util-toggle__track">
    <span className="util-toggle__thumb" />
  </span>
</label>`,
    select: `<div className="util-select-wrapper">
  <select className="util-select">
    <option>Option</option>
  </select>
  <span className="util-select-arrow">{'>'}</span>
</div>`,
    card: `<div className="util-card">
  <h4 className="util-card__title">Title</h4>
  <p className="util-card__content">Content</p>
</div>`,
    badge: `<span className="util-badge">Default</span>
<span className="util-badge util-badge--success">Success</span>`,
    avatar: `<div className="util-avatar">
  <span className="util-avatar__initials">JH</span>
  <span className="util-avatar__status--online" />
</div>`,
    tooltip: `<span className="util-tooltip-trigger">
  Hover me
  <span className="util-tooltip">Tooltip text</span>
</span>`,
    modal: `<div className="util-modal-backdrop">
  <div className="util-modal">
    <h4>Title</h4>
    <p>Content</p>
  </div>
</div>`,
    tabs: `<div className="util-tabs">
  <div className="util-tabs__list">
    <button className="util-tabs__tab--active">Tab</button>
    <span className="util-tabs__indicator" />
  </div>
</div>`,
    accordion: `<div className="util-accordion">
  <button className="util-accordion__header">
    Question
    <span className="util-accordion__icon">+</span>
  </button>
  <div className="util-accordion__body">Answer</div>
</div>`,
    progress: `<div className="util-progress">
  <div className="util-progress__bar" style={{ width: '70%' }} />
</div>`,
    slider: `<input type="range" className="util-slider" />`,
    toast: `<div className="util-toast">
  <span className="util-toast__icon">{'>'}</span>
  <span className="util-toast__message">Message</span>
</div>`,
  };
  return codes[componentId] || `<${componentId} />`;
}
