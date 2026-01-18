// Centralized project data
// Add new projects by adding objects to this array

// Import thumbnails
import marsRover from '../pages/ProjectsPage/marsRover.jpg';

export const projects = [
  {
    id: 'component-showcase',
    title: 'Component Showcase',
    tagline: 'Three themed UI component libraries',
    description: 'A showcase of 17 UI components across three design themes: semantic primitives, utilitarian minimalism, and avant-garde expression.',
    thumbnail: null,
    category: 'web',
    tags: ['React', 'UI/UX', 'Components'],
    featured: true,
    type: 'live-demo',
    link: '/projects/component-showcase',
    year: '2024',
  },
  {
    id: '3d-design',
    title: 'Dimensional Gateway',
    tagline: '4D geometry visualization experience',
    description: 'An immersive journey through higher-dimensional geometry. Explore tesseracts, 24-cells, and other 4D polytopes projected into 3D space. Watch reality unfold from a point to a hypercube.',
    thumbnail: marsRover,
    category: '3d',
    tags: ['ThreeJS', 'Creative', 'WebGL', '4D Math'],
    featured: true,
    type: 'live-demo',
    link: '/projects/3D',
    year: '2024',
  },
  {
    id: 'f1-trackside',
    title: 'F1 Trackside AI Experience',
    tagline: 'Real-time AI at the Las Vegas Grand Prix',
    description: 'Solo engineer on an AI activation bringing real-time Meta AI experiences to Formula 1 fans trackside at the Las Vegas Grand Prix.',
    thumbnail: null,
    category: 'ai',
    tags: ['AI/ML', 'Activation', 'Live Event'],
    featured: true,
    type: 'activation',
    link: '/projects/f1-trackside',
    year: '2024',
    role: 'Solo Engineer',
    event: 'Las Vegas Grand Prix 2024',
  },
  {
    id: 'ufc-barbershop',
    title: 'Meta AI Barbershop',
    tagline: 'Interactive AI experience at UFC Championships',
    description: 'An immersive Meta AI experience at the UFC Championships, bringing AI-powered interactions to fight fans in a unique barbershop setting.',
    thumbnail: null,
    category: 'ai',
    tags: ['AI/ML', 'Activation', 'Live Event'],
    featured: false,
    type: 'activation',
    link: '/projects/ufc-barbershop',
    year: '2024',
    role: 'Engineer',
    event: 'UFC Championships 2024',
  },
];

// Helper functions
export const getProjectById = (id) => projects.find(p => p.id === id);
export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (category) =>
  category === 'all' ? projects : projects.filter(p => p.category === category);

// Available categories for filtering
export const categories = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI/ML' },
  { id: 'web', label: 'Web' },
  { id: '3d', label: '3D' },
  { id: 'activation', label: 'Activations' },
];

// Get activation projects specifically
export const getActivationProjects = () => projects.filter(p => p.type === 'activation');
