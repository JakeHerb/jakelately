/**
 * Boring Theme - Primitives
 * Unstyled, semantic HTML-first components
 */
import React, { useState } from 'react';
import './boring.css';

// ===== Button =====
export function Button() {
  return (
    <div className="boring-demo">
      <button className="boring-button boring-button--primary">Primary</button>
      <button className="boring-button boring-button--secondary">Secondary</button>
      <button className="boring-button boring-button--ghost">Ghost</button>
      <button className="boring-button boring-button--destructive">Delete</button>
    </div>
  );
}

// ===== Input =====
export function Input() {
  return (
    <div className="boring-demo boring-demo--column">
      <input type="text" className="boring-input" placeholder="Default input" />
      <input type="text" className="boring-input boring-input--error" placeholder="Error state" />
    </div>
  );
}

// ===== TextArea =====
export function TextArea() {
  return (
    <textarea className="boring-textarea" placeholder="Enter your message..." rows={3} />
  );
}

// ===== Checkbox =====
export function Checkbox() {
  const [checked, setChecked] = useState(false);
  return (
    <label className="boring-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <span>Accept terms and conditions</span>
    </label>
  );
}

// ===== Radio =====
export function Radio() {
  const [selected, setSelected] = useState('option1');
  return (
    <div className="boring-demo boring-demo--column">
      <label className="boring-radio">
        <input
          type="radio"
          name="boring-radio"
          value="option1"
          checked={selected === 'option1'}
          onChange={(e) => setSelected(e.target.value)}
        />
        <span>Option One</span>
      </label>
      <label className="boring-radio">
        <input
          type="radio"
          name="boring-radio"
          value="option2"
          checked={selected === 'option2'}
          onChange={(e) => setSelected(e.target.value)}
        />
        <span>Option Two</span>
      </label>
    </div>
  );
}

// ===== Toggle =====
export function Toggle() {
  const [on, setOn] = useState(false);
  return (
    <label className="boring-toggle">
      <input type="checkbox" checked={on} onChange={(e) => setOn(e.target.checked)} />
      <span>{on ? 'On' : 'Off'}</span>
    </label>
  );
}

// ===== Select =====
export function Select() {
  return (
    <select className="boring-select">
      <option value="">Select an option</option>
      <option value="1">Option One</option>
      <option value="2">Option Two</option>
      <option value="3">Option Three</option>
    </select>
  );
}

// ===== Card =====
export function Card() {
  return (
    <div className="boring-card">
      <h4 className="boring-card__title">Card Title</h4>
      <p className="boring-card__content">This is a simple card with basic content.</p>
    </div>
  );
}

// ===== Badge =====
export function Badge() {
  return (
    <div className="boring-demo">
      <span className="boring-badge">Default</span>
      <span className="boring-badge boring-badge--success">Success</span>
      <span className="boring-badge boring-badge--warning">Warning</span>
    </div>
  );
}

// ===== Avatar =====
export function Avatar() {
  return (
    <div className="boring-demo">
      <div className="boring-avatar">JH</div>
      <div className="boring-avatar boring-avatar--large">JH</div>
    </div>
  );
}

// ===== Tooltip =====
export function Tooltip() {
  return (
    <span className="boring-tooltip" title="This is a native tooltip">
      Hover for tooltip
    </span>
  );
}

// ===== Modal =====
export function Modal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="boring-button" onClick={() => setOpen(true)}>Open Modal</button>
      {open && (
        <div className="boring-modal-backdrop" onClick={() => setOpen(false)}>
          <div className="boring-modal" onClick={(e) => e.stopPropagation()}>
            <h4>Modal Title</h4>
            <p>This is modal content.</p>
            <button className="boring-button" onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

// ===== Tabs =====
export function Tabs() {
  const [active, setActive] = useState(0);
  const tabs = ['Tab One', 'Tab Two', 'Tab Three'];
  return (
    <div className="boring-tabs">
      <div className="boring-tabs__list">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`boring-tabs__tab ${active === i ? 'boring-tabs__tab--active' : ''}`}
            onClick={() => setActive(i)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="boring-tabs__content">Content for {tabs[active]}</div>
    </div>
  );
}

// ===== Accordion =====
export function Accordion() {
  const [open, setOpen] = useState(false);
  return (
    <details className="boring-accordion" open={open} onToggle={() => setOpen(!open)}>
      <summary className="boring-accordion__header">Click to expand</summary>
      <div className="boring-accordion__content">
        This is the accordion content. It can contain any HTML.
      </div>
    </details>
  );
}

// ===== Progress =====
export function Progress() {
  return (
    <div className="boring-demo boring-demo--column">
      <progress className="boring-progress" value={70} max={100} />
      <span className="boring-progress-label">70%</span>
    </div>
  );
}

// ===== Slider =====
export function Slider() {
  const [value, setValue] = useState(50);
  return (
    <div className="boring-demo boring-demo--column">
      <input
        type="range"
        className="boring-slider"
        min={0}
        max={100}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <span className="boring-slider-value">{value}</span>
    </div>
  );
}

// ===== Toast =====
export function Toast() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="boring-button" onClick={() => setShow(true)}>Show Toast</button>
      {show && (
        <div className="boring-toast">
          This is a notification
          <button className="boring-toast__close" onClick={() => setShow(false)}>x</button>
        </div>
      )}
    </>
  );
}

// ===== Code Examples =====
export function getCode(componentId) {
  const codes = {
    button: `<button className="boring-button boring-button--primary">
  Click me
</button>`,
    input: `<input
  type="text"
  className="boring-input"
  placeholder="Enter text..."
/>`,
    textarea: `<textarea
  className="boring-textarea"
  placeholder="Enter message..."
  rows={3}
/>`,
    checkbox: `<label className="boring-checkbox">
  <input type="checkbox" />
  <span>Accept terms</span>
</label>`,
    radio: `<label className="boring-radio">
  <input type="radio" name="group" value="1" />
  <span>Option One</span>
</label>`,
    toggle: `<label className="boring-toggle">
  <input type="checkbox" />
  <span>Toggle</span>
</label>`,
    select: `<select className="boring-select">
  <option value="">Select...</option>
  <option value="1">Option One</option>
</select>`,
    card: `<div className="boring-card">
  <h4>Card Title</h4>
  <p>Card content here.</p>
</div>`,
    badge: `<span className="boring-badge">Default</span>
<span className="boring-badge--success">Success</span>`,
    avatar: `<div className="boring-avatar">JH</div>`,
    tooltip: `<span title="Tooltip text">Hover me</span>`,
    modal: `<dialog className="boring-modal">
  <h4>Modal Title</h4>
  <p>Content</p>
</dialog>`,
    tabs: `<div className="boring-tabs">
  <button className="boring-tabs__tab--active">Tab 1</button>
  <button>Tab 2</button>
</div>`,
    accordion: `<details className="boring-accordion">
  <summary>Click to expand</summary>
  <div>Hidden content</div>
</details>`,
    progress: `<progress value={70} max={100} />`,
    slider: `<input type="range" min={0} max={100} />`,
    toast: `<div className="boring-toast">
  Notification message
</div>`,
  };
  return codes[componentId] || `<${componentId} />`;
}
