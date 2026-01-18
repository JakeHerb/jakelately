// Blog posts data
// Posts are sorted by date (newest first)
// type: 'post' for full articles, 'update' for quick updates

export const posts = [
  {
    id: 'building-instagram-genai',
    type: 'post',
    title: 'Building Instagram\'s First GenAI Features',
    excerpt: 'A look behind the scenes at how we\'re bringing generative AI to billions of Instagram users.',
    date: '2026-01-15',
    readTime: '8 min read',
    tags: ['AI', 'Meta', 'Engineering'],
    content: `
## The Challenge

When you're building AI features for Instagram, you're not just building for power users or early adopters. You're building for everyone - from teenagers sharing stories to small business owners promoting their products.

This creates unique constraints that shape every decision we make.

## Scale Changes Everything

At Meta's scale, even a 0.1% error rate means millions of users having a bad experience. Every model we deploy needs to be:

- **Fast**: Sub-second response times or users bounce
- **Consistent**: Same quality across billions of requests
- **Safe**: Content moderation at scale is non-trivial

## What We Learned

The biggest lesson? Ship early and iterate. Our first internal prototypes were rough, but they taught us more about user needs than months of planning ever could.

More to come as we continue shipping...
    `
  },
  {
    id: 'why-i-left-college',
    type: 'post',
    title: 'Why I Left College for Facebook',
    excerpt: 'The story of dropping out with a full-time offer and what I learned about taking calculated risks.',
    date: '2025-12-01',
    readTime: '6 min read',
    tags: ['Career', 'Personal'],
    content: `
## The Offer

It was junior year when I got the internship offer that would change everything. Facebook (pre-Meta rebrand) wanted me on their Computational Photography team.

## The Decision

Dropping out isn't something I recommend lightly. But when you have:
- A full-time offer in hand
- An incredible team to learn from
- The chance to work on problems at massive scale

...the calculus starts to shift.

## What I'd Tell My Younger Self

Take the leap, but have a safety net. I negotiated a leave of absence option (never used it). I saved aggressively in case things went wrong. I kept learning voraciously.

The risk was calculated. And it paid off.
    `
  },
  {
    id: 'update-2026-01',
    type: 'update',
    title: 'New year, new site',
    date: '2026-01-10',
    content: 'Finally rebuilt my personal site from scratch. Space theme felt right. More updates coming soon.'
  },
  {
    id: 'update-2025-12',
    type: 'update',
    title: 'Wrapped up an insane year at Meta',
    date: '2025-12-20',
    content: 'Shipped more features this year than the previous two combined. The AI revolution is real and I\'m grateful to be part of it.'
  },
  {
    id: 'three-js-creative-coding',
    type: 'post',
    title: 'Creative Coding with Three.js',
    excerpt: 'How I built an interactive 3D experience for my portfolio and what I learned along the way.',
    date: '2025-11-15',
    readTime: '5 min read',
    tags: ['Three.js', 'Creative', 'Tutorial'],
    content: `
## Why Three.js?

WebGL is powerful but verbose. Three.js abstracts away the boilerplate while still giving you control when you need it.

## The Setup

Getting started is surprisingly simple:

\`\`\`javascript
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
\`\`\`

## Key Learnings

1. **Performance matters**: Mobile GPUs are limited. Test early and often.
2. **Lighting is everything**: Good lighting can make simple geometry look incredible.
3. **Animate everything**: Subtle movement brings scenes to life.

Check out my Three.js project page for the full experience!
    `
  }
];

// Helper functions
export function getPostById(id) {
  return posts.find(post => post.id === id);
}

export function getLatestPosts(count = 4) {
  return posts.slice(0, count);
}

export function getPostsByType(type) {
  return posts.filter(post => post.type === type);
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
