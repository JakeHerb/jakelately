/**
 * Whimsical Theme - Playful Joy
 * Surprise interactions, bouncy animations, delightful details. Pure fun.
 */
import React, { useState } from 'react';
import './whimsical.css';

// ===== Button =====
export function Button() {
  return (
    <div className="whim-demo">
      <button className="whim-button whim-button--primary">
        <span className="whim-button__text">Boop!</span>
        <span className="whim-button__sparkle">*</span>
      </button>
      <button className="whim-button whim-button--secondary">Maybe</button>
      <button className="whim-button whim-button--ghost">Nah</button>
      <button className="whim-button whim-button--destructive">Yeet!</button>
    </div>
  );
}

// ===== Input =====
export function Input() {
  const [focused, setFocused] = useState(false);
  return (
    <div className="whim-demo whim-demo--column">
      <div className={`whim-input-wrapper ${focused ? 'whim-input-wrapper--focused' : ''}`}>
        <span className="whim-input__icon">~</span>
        <input
          type="text"
          className="whim-input"
          placeholder="What's on your mind?"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <span className="whim-input__wiggle" />
      </div>
    </div>
  );
}

// ===== TextArea =====
export function TextArea() {
  return (
    <div className="whim-textarea-wrapper">
      <span className="whim-textarea__icon">&gt;</span>
      <textarea className="whim-textarea" placeholder="Tell me a story..." rows={3} />
      <span className="whim-textarea__corner">/</span>
    </div>
  );
}

// ===== Checkbox =====
export function Checkbox() {
  const [checked, setChecked] = useState(false);
  return (
    <label className="whim-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <span className="whim-checkbox__box">
        <span className="whim-checkbox__check">*</span>
      </span>
      <span className="whim-checkbox__text">I promise to have fun!</span>
    </label>
  );
}

// ===== Radio =====
export function Radio() {
  const [selected, setSelected] = useState('a');
  return (
    <div className="whim-demo whim-demo--column">
      {['a', 'b'].map((opt) => (
        <label key={opt} className="whim-radio">
          <input
            type="radio"
            name="whim-radio"
            value={opt}
            checked={selected === opt}
            onChange={(e) => setSelected(e.target.value)}
          />
          <span className="whim-radio__bubble">
            <span className="whim-radio__dot" />
          </span>
          <span className="whim-radio__text">Choice {opt.toUpperCase()}</span>
        </label>
      ))}
    </div>
  );
}

// ===== Toggle =====
export function Toggle() {
  const [on, setOn] = useState(false);
  return (
    <label className="whim-toggle">
      <input type="checkbox" checked={on} onChange={(e) => setOn(e.target.checked)} />
      <span className="whim-toggle__track">
        <span className="whim-toggle__thumb">
          <span className="whim-toggle__icon">{on ? 'o' : '-'}</span>
        </span>
      </span>
      <span className="whim-toggle__label">{on ? 'Yay!' : 'Zzz'}</span>
    </label>
  );
}

// ===== Select =====
export function Select() {
  return (
    <div className="whim-select-wrapper">
      <span className="whim-select__icon">*</span>
      <select className="whim-select">
        <option value="">Pick your favorite!</option>
        <option value="1">Pizza</option>
        <option value="2">Tacos</option>
        <option value="3">Ice Cream</option>
      </select>
      <span className="whim-select__arrow">v</span>
    </div>
  );
}

// ===== Card =====
export function Card() {
  return (
    <div className="whim-card">
      <div className="whim-card__badge">FUN</div>
      <h4 className="whim-card__title">Welcome to Fun Town!</h4>
      <p className="whim-card__content">
        Where every interaction is a tiny celebration and buttons just want to be booped.
      </p>
      <div className="whim-card__footer">
        <span className="whim-card__tag">* Magical</span>
        <span className="whim-card__tag">+ Fun</span>
      </div>
    </div>
  );
}

// ===== Badge =====
export function Badge() {
  return (
    <div className="whim-demo">
      <span className="whim-badge">Regular</span>
      <span className="whim-badge whim-badge--success">Yay!</span>
      <span className="whim-badge whim-badge--warning">Uh oh</span>
      <span className="whim-badge whim-badge--special">VIP</span>
    </div>
  );
}

// ===== Avatar =====
export function Avatar() {
  return (
    <div className="whim-demo">
      <div className="whim-avatar">
        <span className="whim-avatar__text">JH</span>
        <span className="whim-avatar__ring" />
      </div>
      <div className="whim-avatar whim-avatar--large">
        <span className="whim-avatar__text">JH</span>
        <span className="whim-avatar__ring" />
        <span className="whim-avatar__sparkle">*</span>
      </div>
    </div>
  );
}

// ===== Tooltip =====
export function Tooltip() {
  return (
    <span className="whim-tooltip-trigger">
      Pssst... hover me!
      <span className="whim-tooltip">
        <span className="whim-tooltip__content">* Surprise! You found a secret!</span>
      </span>
    </span>
  );
}

// ===== Modal =====
export function Modal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="whim-button whim-button--primary" onClick={() => setOpen(true)}>
        <span className="whim-button__text">Open Surprise!</span>
        <span className="whim-button__sparkle">*</span>
      </button>
      {open && (
        <div className="whim-modal-backdrop" onClick={() => setOpen(false)}>
          <div className="whim-modal" onClick={(e) => e.stopPropagation()}>
            <button className="whim-modal__close" onClick={() => setOpen(false)}>x</button>
            <div className="whim-modal__icon">!</div>
            <h4 className="whim-modal__title">Woohoo!</h4>
            <p className="whim-modal__content">You opened a modal! Isn't that exciting?</p>
            <div className="whim-modal__actions">
              <button className="whim-button whim-button--ghost" onClick={() => setOpen(false)}>
                Meh
              </button>
              <button className="whim-button whim-button--primary" onClick={() => setOpen(false)}>
                <span className="whim-button__text">So fun!</span>
                <span className="whim-button__sparkle">*</span>
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
  const tabs = ['Fun', 'More Fun', 'Most Fun'];
  return (
    <div className="whim-tabs">
      <div className="whim-tabs__list">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`whim-tabs__tab ${active === i ? 'whim-tabs__tab--active' : ''}`}
            onClick={() => setActive(i)}
          >
            <span className="whim-tabs__name">{tab}</span>
          </button>
        ))}
      </div>
      <div className="whim-tabs__content">
        This is the {tabs[active].toLowerCase()} content!
      </div>
    </div>
  );
}

// ===== Accordion =====
export function Accordion() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`whim-accordion ${open ? 'whim-accordion--open' : ''}`}>
      <button className="whim-accordion__header" onClick={() => setOpen(!open)}>
        <span className="whim-accordion__title">What's inside?</span>
        <span className="whim-accordion__icon">{open ? '-' : '+'}</span>
      </button>
      <div className="whim-accordion__body">
        <div className="whim-accordion__content">
          Ta-da! You found the hidden content! It was hiding in here all along, waiting for someone curious like you to discover it!
        </div>
      </div>
    </div>
  );
}

// ===== Progress =====
export function Progress() {
  return (
    <div className="whim-demo whim-demo--column">
      <div className="whim-progress">
        <div className="whim-progress__track">
          <div className="whim-progress__bar" style={{ width: '70%' }}>
            <span className="whim-progress__dot" />
          </div>
        </div>
        <span className="whim-progress__label">Almost there! 70%</span>
      </div>
    </div>
  );
}

// ===== Slider =====
export function Slider() {
  const [value, setValue] = useState(50);
  return (
    <div className="whim-demo whim-demo--column">
      <div className="whim-slider-wrapper">
        <input
          type="range"
          className="whim-slider"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <div className="whim-slider__track">
          <div className="whim-slider__fill" style={{ width: `${value}%` }} />
          <span className="whim-slider__thumb" style={{ left: `${value}%` }} />
        </div>
      </div>
      <span className="whim-slider__value">Happiness: {value}%</span>
    </div>
  );
}

// ===== Toast =====
export function Toast() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="whim-button whim-button--primary" onClick={() => setShow(true)}>
        <span className="whim-button__text">Pop a Toast!</span>
        <span className="whim-button__sparkle">*</span>
      </button>
      {show && (
        <div className="whim-toast">
          <span className="whim-toast__icon">!</span>
          <span className="whim-toast__message">Toast popped successfully!</span>
          <button className="whim-toast__close" onClick={() => setShow(false)}>x</button>
        </div>
      )}
    </>
  );
}

// ===== Code Examples =====
export function getCode(componentId) {
  const codes = {
    button: `<button className="whim-button whim-button--primary">
  <span className="whim-button__text">Boop!</span>
  <span className="whim-button__sparkle">*</span>
</button>`,
    input: `<div className="whim-input-wrapper">
  <span className="whim-input__icon">~</span>
  <input className="whim-input" placeholder="..." />
</div>`,
    textarea: `<div className="whim-textarea-wrapper">
  <span className="whim-textarea__icon">></span>
  <textarea className="whim-textarea" rows={3} />
</div>`,
    checkbox: `<label className="whim-checkbox">
  <input type="checkbox" />
  <span className="whim-checkbox__box">
    <span className="whim-checkbox__check">*</span>
  </span>
</label>`,
    radio: `<label className="whim-radio">
  <input type="radio" />
  <span className="whim-radio__bubble">
    <span className="whim-radio__dot" />
  </span>
</label>`,
    toggle: `<label className="whim-toggle">
  <input type="checkbox" />
  <span className="whim-toggle__track">
    <span className="whim-toggle__thumb" />
  </span>
</label>`,
    select: `<div className="whim-select-wrapper">
  <span className="whim-select__icon">*</span>
  <select className="whim-select">
    <option>Pizza</option>
  </select>
</div>`,
    card: `<div className="whim-card">
  <div className="whim-card__badge">FUN</div>
  <h4 className="whim-card__title">Title!</h4>
  <p className="whim-card__content">Content</p>
</div>`,
    badge: `<span className="whim-badge">Regular</span>
<span className="whim-badge--special">VIP</span>`,
    avatar: `<div className="whim-avatar">
  <span className="whim-avatar__text">JH</span>
  <span className="whim-avatar__ring" />
</div>`,
    tooltip: `<span className="whim-tooltip-trigger">
  Hover me!
  <span className="whim-tooltip">* Surprise!</span>
</span>`,
    modal: `<div className="whim-modal-backdrop">
  <div className="whim-modal">
    <div className="whim-modal__icon">!</div>
    <h4>Woohoo!</h4>
  </div>
</div>`,
    tabs: `<div className="whim-tabs">
  <button className="whim-tabs__tab--active">Fun</button>
</div>`,
    accordion: `<div className="whim-accordion">
  <button className="whim-accordion__header">
    <span>What's inside?</span>
    <span className="whim-accordion__icon">+</span>
  </button>
</div>`,
    progress: `<div className="whim-progress">
  <div className="whim-progress__bar" style={{ width: '70%' }}>
    <span className="whim-progress__dot" />
  </div>
</div>`,
    slider: `<div className="whim-slider-wrapper">
  <input type="range" className="whim-slider" />
  <span className="whim-slider__thumb" />
</div>`,
    toast: `<div className="whim-toast">
  <span className="whim-toast__icon">!</span>
  <span>Toast popped!</span>
</div>`,
  };
  return codes[componentId] || `<${componentId} />`;
}
