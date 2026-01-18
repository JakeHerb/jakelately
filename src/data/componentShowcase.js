/**
 * Component Showcase Data
 * Theme and component metadata for the UI library showcase
 */

export const themes = [
  {
    id: 'boring',
    name: 'Boring',
    subtitle: 'Primitives',
    description: 'Unstyled, semantic HTML-first components. A clean base for customization.',
    icon: '[]',
  },
  {
    id: 'utilitarian',
    name: 'Utilitarian',
    subtitle: 'Minimal Function',
    description: 'Minimalist, functional, sleek. Precise micro-interactions.',
    icon: '—',
  },
  {
    id: 'brutalist',
    name: 'Brutalist',
    subtitle: 'Raw Power',
    description: 'Broken grids, harsh edges, unconventional layouts. Unapologetically bold.',
    icon: '▌',
  },
  {
    id: 'cyber',
    name: 'Cyber',
    subtitle: 'Neon Future',
    description: 'Glowing neons, holographic effects, glass morphism. Digital dreams.',
    icon: '◈',
  },
  {
    id: 'organic',
    name: 'Organic',
    subtitle: 'Living Forms',
    description: 'Fluid animations, morphing shapes, natural motion. Alive and breathing.',
    icon: '◠',
  },
  {
    id: 'whimsical',
    name: 'Whimsical',
    subtitle: 'Playful Joy',
    description: 'Surprise interactions, bouncy animations, delightful details. Pure fun.',
    icon: '✦',
  },
  {
    id: 'flamboyant',
    name: 'Flamboyant',
    subtitle: 'Unapologetic',
    description: 'Bold gradients, dramatic flair, expressive pride. Loud and proud.',
    icon: '◇',
  },
];

export const components = [
  {
    id: 'button',
    name: 'Button',
    description: 'Interactive button with multiple variants',
    category: 'form',
  },
  {
    id: 'input',
    name: 'Input',
    description: 'Text input with validation states',
    category: 'form',
  },
  {
    id: 'textarea',
    name: 'TextArea',
    description: 'Multi-line text input',
    category: 'form',
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    description: 'Single selection toggle',
    category: 'form',
  },
  {
    id: 'radio',
    name: 'Radio',
    description: 'Grouped single selection',
    category: 'form',
  },
  {
    id: 'toggle',
    name: 'Toggle',
    description: 'On/off switch',
    category: 'form',
  },
  {
    id: 'select',
    name: 'Select',
    description: 'Dropdown selection',
    category: 'form',
  },
  {
    id: 'card',
    name: 'Card',
    description: 'Content container',
    category: 'layout',
  },
  {
    id: 'badge',
    name: 'Badge',
    description: 'Status/label indicator',
    category: 'display',
  },
  {
    id: 'avatar',
    name: 'Avatar',
    description: 'User image with fallback',
    category: 'display',
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    description: 'Hover information',
    category: 'overlay',
  },
  {
    id: 'modal',
    name: 'Modal',
    description: 'Dialog overlay',
    category: 'overlay',
  },
  {
    id: 'tabs',
    name: 'Tabs',
    description: 'Tabbed navigation',
    category: 'navigation',
  },
  {
    id: 'accordion',
    name: 'Accordion',
    description: 'Collapsible sections',
    category: 'layout',
  },
  {
    id: 'progress',
    name: 'Progress',
    description: 'Progress indicator',
    category: 'feedback',
  },
  {
    id: 'slider',
    name: 'Slider',
    description: 'Range input',
    category: 'form',
  },
  {
    id: 'toast',
    name: 'Toast',
    description: 'Notification messages',
    category: 'feedback',
  },
];

export const getThemeById = (id) => themes.find(t => t.id === id);
export const getComponentById = (id) => components.find(c => c.id === id);
export const getComponentsByCategory = (category) => components.filter(c => c.category === category);
