import React, { useState } from 'react';
import './CodeBlock.css';

function CodeBlock({ code, language = 'jsx' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="code-block">
      <div className="code-block__header">
        <span className="code-block__language">{language}</span>
        <button className="code-block__copy" onClick={handleCopy}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="code-block__pre">
        <code className="code-block__code">{code}</code>
      </pre>
    </div>
  );
}

export default CodeBlock;
