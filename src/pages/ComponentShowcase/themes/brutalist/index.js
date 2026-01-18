/**
 * Brutalist Theme - Raw Power
 * Broken grids, harsh edges, unconventional layouts. Unapologetically bold.
 */
import React, { useState } from 'react';
import './brutalist.css';

// ===== Button =====
export function Button() {
  return (
    <div className="brut-demo">
      <button className="brut-button brut-button--primary">
        <span className="brut-button__shadow" />
        <span className="brut-button__text">SUBMIT</span>
      </button>
      <button className="brut-button brut-button--secondary">CANCEL</button>
      <button className="brut-button brut-button--ghost">SKIP</button>
      <button className="brut-button brut-button--destructive">DELETE</button>
    </div>
  );
}

// ===== Input =====
export function Input() {
  return (
    <div className="brut-demo brut-demo--column">
      <div className="brut-input-wrapper">
        <label className="brut-input-label">EMAIL</label>
        <input type="text" className="brut-input" placeholder="_" />
        <span className="brut-input__offset" />
      </div>
    </div>
  );
}

// ===== TextArea =====
export function TextArea() {
  return (
    <div className="brut-textarea-wrapper">
      <label className="brut-textarea-label">MESSAGE</label>
      <textarea className="brut-textarea" placeholder="_" rows={3} />
      <span className="brut-textarea__offset" />
    </div>
  );
}

// ===== Checkbox =====
export function Checkbox() {
  const [checked, setChecked] = useState(false);
  return (
    <label className="brut-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <span className="brut-checkbox__box">
        <span className="brut-checkbox__x">×</span>
      </span>
      <span className="brut-checkbox__text">I AGREE TO THE TERMS</span>
    </label>
  );
}

// ===== Radio =====
export function Radio() {
  const [selected, setSelected] = useState('a');
  return (
    <div className="brut-demo brut-demo--column">
      {['a', 'b'].map((opt) => (
        <label key={opt} className="brut-radio">
          <input
            type="radio"
            name="brut-radio"
            value={opt}
            checked={selected === opt}
            onChange={(e) => setSelected(e.target.value)}
          />
          <span className="brut-radio__box">
            <span className="brut-radio__fill" />
          </span>
          <span className="brut-radio__text">OPTION {opt.toUpperCase()}</span>
        </label>
      ))}
    </div>
  );
}

// ===== Toggle =====
export function Toggle() {
  const [on, setOn] = useState(false);
  return (
    <label className="brut-toggle">
      <input type="checkbox" checked={on} onChange={(e) => setOn(e.target.checked)} />
      <span className="brut-toggle__track">
        <span className="brut-toggle__thumb" />
      </span>
      <span className="brut-toggle__label">{on ? 'ON' : 'OFF'}</span>
    </label>
  );
}

// ===== Select =====
export function Select() {
  return (
    <div className="brut-select-wrapper">
      <label className="brut-select-label">CHOOSE</label>
      <select className="brut-select">
        <option value="">SELECT ONE</option>
        <option value="1">OPTION 1</option>
        <option value="2">OPTION 2</option>
        <option value="3">OPTION 3</option>
      </select>
      <span className="brut-select__arrow">▼</span>
      <span className="brut-select__offset" />
    </div>
  );
}

// ===== Card =====
export function Card() {
  return (
    <div className="brut-card">
      <span className="brut-card__offset" />
      <div className="brut-card__number">01</div>
      <h4 className="brut-card__title">RAW CONTENT</h4>
      <p className="brut-card__content">
        Brutalism embraces the raw, unfinished aesthetic. Form follows function with aggressive honesty.
      </p>
      <div className="brut-card__footer">
        <span className="brut-card__tag">DESIGN</span>
        <span className="brut-card__tag">2024</span>
      </div>
    </div>
  );
}

// ===== Badge =====
export function Badge() {
  return (
    <div className="brut-demo">
      <span className="brut-badge">DEFAULT</span>
      <span className="brut-badge brut-badge--success">SUCCESS</span>
      <span className="brut-badge brut-badge--warning">WARNING</span>
      <span className="brut-badge brut-badge--danger">DANGER</span>
    </div>
  );
}

// ===== Avatar =====
export function Avatar() {
  return (
    <div className="brut-demo">
      <div className="brut-avatar">
        <span className="brut-avatar__offset" />
        <span className="brut-avatar__text">JH</span>
      </div>
      <div className="brut-avatar brut-avatar--large">
        <span className="brut-avatar__offset" />
        <span className="brut-avatar__text">JH</span>
      </div>
    </div>
  );
}

// ===== Tooltip =====
export function Tooltip() {
  return (
    <span className="brut-tooltip-trigger">
      [HOVER]
      <span className="brut-tooltip">
        <span className="brut-tooltip__offset" />
        <span className="brut-tooltip__content">INFORMATION REVEALED</span>
      </span>
    </span>
  );
}

// ===== Modal =====
export function Modal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="brut-button brut-button--primary" onClick={() => setOpen(true)}>
        <span className="brut-button__shadow" />
        <span className="brut-button__text">OPEN</span>
      </button>
      {open && (
        <div className="brut-modal-backdrop" onClick={() => setOpen(false)}>
          <div className="brut-modal" onClick={(e) => e.stopPropagation()}>
            <span className="brut-modal__offset" />
            <button className="brut-modal__close" onClick={() => setOpen(false)}>×</button>
            <h4 className="brut-modal__title">CONFIRM ACTION</h4>
            <p className="brut-modal__content">Are you absolutely certain you want to proceed?</p>
            <div className="brut-modal__actions">
              <button className="brut-button brut-button--ghost" onClick={() => setOpen(false)}>
                NO
              </button>
              <button className="brut-button brut-button--primary" onClick={() => setOpen(false)}>
                <span className="brut-button__shadow" />
                <span className="brut-button__text">YES</span>
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
  const tabs = ['ONE', 'TWO', 'THREE'];
  return (
    <div className="brut-tabs">
      <div className="brut-tabs__list">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`brut-tabs__tab ${active === i ? 'brut-tabs__tab--active' : ''}`}
            onClick={() => setActive(i)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="brut-tabs__content">
        <span className="brut-tabs__number">{String(active + 1).padStart(2, '0')}</span>
        CONTENT FOR TAB {tabs[active]}
      </div>
    </div>
  );
}

// ===== Accordion =====
export function Accordion() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`brut-accordion ${open ? 'brut-accordion--open' : ''}`}>
      <button className="brut-accordion__header" onClick={() => setOpen(!open)}>
        <span className="brut-accordion__title">EXPAND FOR MORE</span>
        <span className="brut-accordion__icon">{open ? '−' : '+'}</span>
      </button>
      <div className="brut-accordion__body">
        <div className="brut-accordion__content">
          Hidden content revealed. Brutalism values honesty in materials and construction.
          What you see is what you get.
        </div>
      </div>
    </div>
  );
}

// ===== Progress =====
export function Progress() {
  return (
    <div className="brut-demo brut-demo--column">
      <div className="brut-progress">
        <div className="brut-progress__bar" style={{ width: '70%' }} />
        <span className="brut-progress__text">70%</span>
      </div>
    </div>
  );
}

// ===== Slider =====
export function Slider() {
  const [value, setValue] = useState(50);
  return (
    <div className="brut-demo brut-demo--column">
      <div className="brut-slider-wrapper">
        <input
          type="range"
          className="brut-slider"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <div className="brut-slider__track">
          <div className="brut-slider__fill" style={{ width: `${value}%` }} />
        </div>
      </div>
      <span className="brut-slider__value">{value}</span>
    </div>
  );
}

// ===== Toast =====
export function Toast() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="brut-button brut-button--primary" onClick={() => setShow(true)}>
        <span className="brut-button__shadow" />
        <span className="brut-button__text">NOTIFY</span>
      </button>
      {show && (
        <div className="brut-toast">
          <span className="brut-toast__offset" />
          <span className="brut-toast__message">ACTION COMPLETED</span>
          <button className="brut-toast__close" onClick={() => setShow(false)}>×</button>
        </div>
      )}
    </>
  );
}

// ===== Code Examples =====
export function getCode(componentId) {
  const codes = {
    button: `<button className="brut-button brut-button--primary">
  <span className="brut-button__shadow" />
  <span className="brut-button__text">SUBMIT</span>
</button>`,
    input: `<div className="brut-input-wrapper">
  <label className="brut-input-label">EMAIL</label>
  <input className="brut-input" placeholder="_" />
  <span className="brut-input__offset" />
</div>`,
    textarea: `<div className="brut-textarea-wrapper">
  <label className="brut-textarea-label">MESSAGE</label>
  <textarea className="brut-textarea" rows={3} />
  <span className="brut-textarea__offset" />
</div>`,
    checkbox: `<label className="brut-checkbox">
  <input type="checkbox" />
  <span className="brut-checkbox__box">
    <span className="brut-checkbox__x">×</span>
  </span>
  <span>I AGREE</span>
</label>`,
    radio: `<label className="brut-radio">
  <input type="radio" name="group" />
  <span className="brut-radio__box">
    <span className="brut-radio__fill" />
  </span>
  <span>OPTION A</span>
</label>`,
    toggle: `<label className="brut-toggle">
  <input type="checkbox" />
  <span className="brut-toggle__track">
    <span className="brut-toggle__thumb" />
  </span>
</label>`,
    select: `<div className="brut-select-wrapper">
  <select className="brut-select">
    <option>SELECT ONE</option>
  </select>
  <span className="brut-select__offset" />
</div>`,
    card: `<div className="brut-card">
  <span className="brut-card__offset" />
  <div className="brut-card__number">01</div>
  <h4 className="brut-card__title">TITLE</h4>
  <p className="brut-card__content">Content</p>
</div>`,
    badge: `<span className="brut-badge">DEFAULT</span>
<span className="brut-badge brut-badge--danger">DANGER</span>`,
    avatar: `<div className="brut-avatar">
  <span className="brut-avatar__offset" />
  <span className="brut-avatar__text">JH</span>
</div>`,
    tooltip: `<span className="brut-tooltip-trigger">
  [HOVER]
  <span className="brut-tooltip">INFO</span>
</span>`,
    modal: `<div className="brut-modal-backdrop">
  <div className="brut-modal">
    <span className="brut-modal__offset" />
    <h4>CONFIRM</h4>
    <p>Content</p>
  </div>
</div>`,
    tabs: `<div className="brut-tabs">
  <div className="brut-tabs__list">
    <button className="brut-tabs__tab--active">ONE</button>
  </div>
  <div className="brut-tabs__content">CONTENT</div>
</div>`,
    accordion: `<div className="brut-accordion">
  <button className="brut-accordion__header">
    <span>EXPAND</span>
    <span className="brut-accordion__icon">+</span>
  </button>
</div>`,
    progress: `<div className="brut-progress">
  <div className="brut-progress__bar" style={{ width: '70%' }} />
  <span className="brut-progress__text">70%</span>
</div>`,
    slider: `<div className="brut-slider-wrapper">
  <input type="range" className="brut-slider" />
  <div className="brut-slider__track">
    <div className="brut-slider__fill" />
  </div>
</div>`,
    toast: `<div className="brut-toast">
  <span className="brut-toast__offset" />
  <span className="brut-toast__message">MESSAGE</span>
</div>`,
  };
  return codes[componentId] || `<${componentId} />`;
}
