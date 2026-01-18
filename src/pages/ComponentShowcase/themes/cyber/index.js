/**
 * Cyber Theme - Neon Future
 * Glowing neons, holographic effects, glass morphism. Digital dreams.
 */
import React, { useState } from 'react';
import './cyber.css';

// ===== Button =====
export function Button() {
  return (
    <div className="cyber-demo">
      <button className="cyber-button cyber-button--primary" data-text="EXECUTE">
        <span className="cyber-button__text">EXECUTE</span>
        <span className="cyber-button__glitch" aria-hidden="true">EXECUTE</span>
        <span className="cyber-button__glow" />
      </button>
      <button className="cyber-button cyber-button--ghost">
        <span className="cyber-button__text">CANCEL</span>
      </button>
      <button className="cyber-button cyber-button--destructive">
        <span className="cyber-button__text">DESTROY</span>
      </button>
    </div>
  );
}

// ===== Input =====
export function Input() {
  const [focused, setFocused] = useState(false);
  return (
    <div className="cyber-demo cyber-demo--column">
      <div className={`cyber-input-wrapper ${focused ? 'cyber-input-wrapper--focused' : ''}`}>
        <span className="cyber-input__corner cyber-input__corner--tl" />
        <span className="cyber-input__corner cyber-input__corner--tr" />
        <span className="cyber-input__corner cyber-input__corner--bl" />
        <span className="cyber-input__corner cyber-input__corner--br" />
        <input
          type="text"
          className="cyber-input"
          placeholder="ENTER_DATA_"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <span className="cyber-input__scanline" />
      </div>
    </div>
  );
}

// ===== TextArea =====
export function TextArea() {
  return (
    <div className="cyber-textarea-wrapper">
      <textarea className="cyber-textarea" placeholder="TRANSMIT_MESSAGE_" rows={3} />
      <span className="cyber-textarea__border" />
    </div>
  );
}

// ===== Checkbox =====
export function Checkbox() {
  const [checked, setChecked] = useState(false);
  return (
    <label className="cyber-checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <span className="cyber-checkbox__box">
        <span className="cyber-checkbox__fill" />
        <span className="cyber-checkbox__icon">X</span>
      </span>
      <span className="cyber-checkbox__text">ACCEPT_PROTOCOL</span>
    </label>
  );
}

// ===== Radio =====
export function Radio() {
  const [selected, setSelected] = useState('a');
  return (
    <div className="cyber-demo cyber-demo--column">
      {['a', 'b'].map((opt) => (
        <label key={opt} className="cyber-radio">
          <input
            type="radio"
            name="cyber-radio"
            value={opt}
            checked={selected === opt}
            onChange={(e) => setSelected(e.target.value)}
          />
          <span className="cyber-radio__ring">
            <span className="cyber-radio__core" />
            <span className="cyber-radio__orbit" />
          </span>
          <span className="cyber-radio__text">OPTION_{opt.toUpperCase()}</span>
        </label>
      ))}
    </div>
  );
}

// ===== Toggle =====
export function Toggle() {
  const [on, setOn] = useState(false);
  return (
    <label className="cyber-toggle">
      <input type="checkbox" checked={on} onChange={(e) => setOn(e.target.checked)} />
      <span className="cyber-toggle__track">
        <span className="cyber-toggle__liquid" />
        <span className="cyber-toggle__bubble" />
      </span>
      <span className="cyber-toggle__label">{on ? 'ONLINE' : 'OFFLINE'}</span>
    </label>
  );
}

// ===== Select =====
export function Select() {
  return (
    <div className="cyber-select-wrapper">
      <select className="cyber-select">
        <option value="">SELECT_TARGET</option>
        <option value="1">ALPHA_01</option>
        <option value="2">BETA_02</option>
        <option value="3">GAMMA_03</option>
      </select>
      <span className="cyber-select__arrow">{'//'}</span>
      <span className="cyber-select__glow" />
    </div>
  );
}

// ===== Card =====
export function Card() {
  return (
    <div className="cyber-card">
      <div className="cyber-card__glitch-line" />
      <div className="cyber-card__header">
        <span className="cyber-card__id">#0x4F2A</span>
        <span className="cyber-card__status">ACTIVE</span>
      </div>
      <h4 className="cyber-card__title">NEURAL_INTERFACE</h4>
      <p className="cyber-card__content">Quantum-entangled data container with holographic projection capabilities.</p>
      <div className="cyber-card__footer">
        <span className="cyber-card__stat">PWR: 98%</span>
        <span className="cyber-card__stat">SYNC: OK</span>
      </div>
    </div>
  );
}

// ===== Badge =====
export function Badge() {
  return (
    <div className="cyber-demo">
      <span className="cyber-badge">DEFAULT</span>
      <span className="cyber-badge cyber-badge--success">VERIFIED</span>
      <span className="cyber-badge cyber-badge--warning">CAUTION</span>
      <span className="cyber-badge cyber-badge--holographic">PREMIUM</span>
    </div>
  );
}

// ===== Avatar =====
export function Avatar() {
  return (
    <div className="cyber-demo">
      <div className="cyber-avatar">
        <span className="cyber-avatar__glitch">JH</span>
        <span className="cyber-avatar__ring" />
        <span className="cyber-avatar__ring cyber-avatar__ring--delay" />
      </div>
      <div className="cyber-avatar cyber-avatar--large">
        <span className="cyber-avatar__glitch">JH</span>
        <span className="cyber-avatar__hexagon" />
      </div>
    </div>
  );
}

// ===== Tooltip =====
export function Tooltip() {
  return (
    <span className="cyber-tooltip-trigger">
      [HOVER_FOR_INFO]
      <span className="cyber-tooltip">
        <span className="cyber-tooltip__arrow" />
        <span className="cyber-tooltip__content">
          {'>'} CLASSIFIED_DATA_REVEALED
        </span>
      </span>
    </span>
  );
}

// ===== Modal =====
export function Modal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="cyber-button cyber-button--primary" onClick={() => setOpen(true)}>
        <span className="cyber-button__text">INITIATE</span>
      </button>
      {open && (
        <div className="cyber-modal-backdrop" onClick={() => setOpen(false)}>
          <div className="cyber-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cyber-modal__scanlines" />
            <div className="cyber-modal__header">
              <span className="cyber-modal__id">SYS://CONFIRM</span>
              <button className="cyber-modal__close" onClick={() => setOpen(false)}>[X]</button>
            </div>
            <h4 className="cyber-modal__title">AUTHORIZATION_REQUIRED</h4>
            <p className="cyber-modal__content">Proceed with neural handshake protocol?</p>
            <div className="cyber-modal__actions">
              <button className="cyber-button cyber-button--ghost" onClick={() => setOpen(false)}>
                <span className="cyber-button__text">ABORT</span>
              </button>
              <button className="cyber-button cyber-button--primary" onClick={() => setOpen(false)}>
                <span className="cyber-button__text">CONFIRM</span>
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
  const tabs = ['SYS', 'NET', 'USR'];
  return (
    <div className="cyber-tabs">
      <div className="cyber-tabs__list">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`cyber-tabs__tab ${active === i ? 'cyber-tabs__tab--active' : ''}`}
            onClick={() => setActive(i)}
          >
            <span className="cyber-tabs__number">{String(i + 1).padStart(2, '0')}</span>
            <span className="cyber-tabs__name">{tab}</span>
          </button>
        ))}
      </div>
      <div className="cyber-tabs__content">
        <span className="cyber-tabs__prefix">{'>'}</span> {tabs[active]}_INTERFACE_LOADED
      </div>
    </div>
  );
}

// ===== Accordion =====
export function Accordion() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`cyber-accordion ${open ? 'cyber-accordion--open' : ''}`}>
      <button className="cyber-accordion__header" onClick={() => setOpen(!open)}>
        <span className="cyber-accordion__marker">{open ? '[-]' : '[+]'}</span>
        <span className="cyber-accordion__title">EXPAND_DATA_CLUSTER</span>
      </button>
      <div className="cyber-accordion__body">
        <div className="cyber-accordion__content">
          <span className="cyber-accordion__line">{'>'} Compressed data stream</span>
          <span className="cyber-accordion__line">{'>'} 2.4TB encrypted payload</span>
          <span className="cyber-accordion__line">{'>'} Quantum signature: VALID</span>
        </div>
      </div>
    </div>
  );
}

// ===== Progress =====
export function Progress() {
  return (
    <div className="cyber-demo cyber-demo--column">
      <div className="cyber-progress">
        <div className="cyber-progress__track">
          <div className="cyber-progress__bar" style={{ width: '70%' }}>
            <span className="cyber-progress__glow" />
          </div>
          <div className="cyber-progress__segments">
            {[...Array(10)].map((_, i) => <span key={i} className="cyber-progress__segment" />)}
          </div>
        </div>
        <span className="cyber-progress__value">70%</span>
      </div>
    </div>
  );
}

// ===== Slider =====
export function Slider() {
  const [value, setValue] = useState(50);
  return (
    <div className="cyber-demo cyber-demo--column">
      <div className="cyber-slider-wrapper">
        <input
          type="range"
          className="cyber-slider"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <div className="cyber-slider__track">
          <div className="cyber-slider__fill" style={{ width: `${value}%` }} />
        </div>
      </div>
      <span className="cyber-slider__value">{String(value).padStart(3, '0')}</span>
    </div>
  );
}

// ===== Toast =====
export function Toast() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="cyber-button cyber-button--primary" onClick={() => setShow(true)}>
        <span className="cyber-button__text">TRIGGER</span>
      </button>
      {show && (
        <div className="cyber-toast">
          <span className="cyber-toast__icon">{'[!]'}</span>
          <span className="cyber-toast__message">TRANSMISSION_COMPLETE</span>
          <button className="cyber-toast__close" onClick={() => setShow(false)}>[X]</button>
          <span className="cyber-toast__progress" />
        </div>
      )}
    </>
  );
}

// ===== Code Examples =====
export function getCode(componentId) {
  const codes = {
    button: `<button className="cyber-button cyber-button--primary" data-text="EXECUTE">
  <span className="cyber-button__text">EXECUTE</span>
  <span className="cyber-button__glitch">EXECUTE</span>
  <span className="cyber-button__glow" />
</button>`,
    input: `<div className="cyber-input-wrapper">
  <span className="cyber-input__corner--tl" />
  <span className="cyber-input__corner--tr" />
  <input className="cyber-input" placeholder="ENTER_DATA_" />
  <span className="cyber-input__scanline" />
</div>`,
    textarea: `<div className="cyber-textarea-wrapper">
  <textarea className="cyber-textarea" placeholder="TRANSMIT_" />
  <span className="cyber-textarea__border" />
</div>`,
    checkbox: `<label className="cyber-checkbox">
  <input type="checkbox" />
  <span className="cyber-checkbox__box">
    <span className="cyber-checkbox__fill" />
    <span className="cyber-checkbox__icon">X</span>
  </span>
  <span>ACCEPT_PROTOCOL</span>
</label>`,
    radio: `<label className="cyber-radio">
  <input type="radio" />
  <span className="cyber-radio__ring">
    <span className="cyber-radio__core" />
    <span className="cyber-radio__orbit" />
  </span>
  <span>OPTION_A</span>
</label>`,
    toggle: `<label className="cyber-toggle">
  <input type="checkbox" />
  <span className="cyber-toggle__track">
    <span className="cyber-toggle__liquid" />
  </span>
</label>`,
    select: `<div className="cyber-select-wrapper">
  <select className="cyber-select">
    <option>SELECT_TARGET</option>
  </select>
  <span className="cyber-select__glow" />
</div>`,
    card: `<div className="cyber-card">
  <div className="cyber-card__glitch-line" />
  <h4 className="cyber-card__title">NEURAL_INTERFACE</h4>
  <p>Content here</p>
</div>`,
    badge: `<span className="cyber-badge">DEFAULT</span>
<span className="cyber-badge--holographic">PREMIUM</span>`,
    avatar: `<div className="cyber-avatar">
  <span className="cyber-avatar__glitch">JH</span>
  <span className="cyber-avatar__ring" />
</div>`,
    tooltip: `<span className="cyber-tooltip-trigger">
  [HOVER]
  <span className="cyber-tooltip">INFO</span>
</span>`,
    modal: `<div className="cyber-modal-backdrop">
  <div className="cyber-modal">
    <div className="cyber-modal__scanlines" />
    <h4>AUTHORIZATION_REQUIRED</h4>
  </div>
</div>`,
    tabs: `<div className="cyber-tabs">
  <button className="cyber-tabs__tab--active">
    <span className="cyber-tabs__number">01</span>
    <span className="cyber-tabs__name">SYS</span>
  </button>
</div>`,
    accordion: `<div className="cyber-accordion">
  <button className="cyber-accordion__header">
    <span className="cyber-accordion__marker">[+]</span>
    <span>EXPAND_DATA</span>
  </button>
</div>`,
    progress: `<div className="cyber-progress">
  <div className="cyber-progress__bar" style={{ width: '70%' }}>
    <span className="cyber-progress__glow" />
  </div>
</div>`,
    slider: `<div className="cyber-slider-wrapper">
  <input type="range" className="cyber-slider" />
  <div className="cyber-slider__fill" />
</div>`,
    toast: `<div className="cyber-toast">
  <span className="cyber-toast__icon">[!]</span>
  <span>TRANSMISSION_COMPLETE</span>
</div>`,
  };
  return codes[componentId] || `<${componentId} />`;
}
