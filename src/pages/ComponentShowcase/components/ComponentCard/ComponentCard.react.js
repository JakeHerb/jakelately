import React, { useState } from 'react';
import CodeBlock from '../CodeBlock/CodeBlock.react';
import './ComponentCard.css';

// Import themed components
import * as BoringComponents from '../../themes/boring';
import * as UtilitarianComponents from '../../themes/utilitarian';
import * as BrutalistComponents from '../../themes/brutalist';
import * as CyberComponents from '../../themes/cyber';
import * as OrganicComponents from '../../themes/organic';
import * as WhimsicalComponents from '../../themes/whimsical';
import * as FlamboyantComponents from '../../themes/flamboyant';

const themeComponents = {
  boring: BoringComponents,
  utilitarian: UtilitarianComponents,
  brutalist: BrutalistComponents,
  cyber: CyberComponents,
  organic: OrganicComponents,
  whimsical: WhimsicalComponents,
  flamboyant: FlamboyantComponents,
};

function ComponentCard({ component, theme }) {
  const [showCode, setShowCode] = useState(false);

  // Get the component for this theme
  const ThemedComponents = themeComponents[theme];
  const ComponentPreview = ThemedComponents?.[component.name];

  return (
    <article className="component-card">
      <header className="component-card__header">
        <div className="component-card__info">
          <h3 className="component-card__name">{component.name}</h3>
          <span className="component-card__category">{component.category}</span>
        </div>
        <button
          className={`component-card__toggle ${showCode ? 'component-card__toggle--active' : ''}`}
          onClick={() => setShowCode(!showCode)}
          aria-label={showCode ? 'Hide code' : 'Show code'}
        >
          {'</>'}
        </button>
      </header>

      <p className="component-card__description">{component.description}</p>

      <div className={`component-card__preview component-card__preview--${theme}`}>
        {ComponentPreview ? (
          <ComponentPreview />
        ) : (
          <div className="component-card__placeholder">
            Component coming soon
          </div>
        )}
      </div>

      {showCode && (
        <div className="component-card__code">
          <CodeBlock
            code={ThemedComponents?.getCode?.(component.id) || `<${component.name} />`}
            language="jsx"
          />
        </div>
      )}
    </article>
  );
}

export default ComponentCard;
