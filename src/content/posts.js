// Blog posts data
// Posts are sorted by date (newest first)
// type: 'post' for full articles, 'update' for quick updates

export const posts = [
  {
    id: 'hello-world',
    type: 'post',
    title: 'Hello World',
    excerpt: 'Welcome to my corner of the internet. Here\'s what to expect from this blog.',
    date: '2026-01-17',
    readTime: '3 min read',
    tags: ['Meta', 'Site'],
    content: `
## Welcome

This is where I'll share thoughts on engineering, AI, creative coding, and whatever else I find interesting.

## What to Expect

**Posts** are longer-form pieces - technical deep dives, project retrospectives, and essays on topics I care about.

**Updates** are quick notes - shipped something, learned something, changed something.

## The Format

Each post has:
- A title and excerpt for the listing page
- Tags for categorization
- An estimated read time
- The full content in markdown

More to come. Stay tuned.
    `
  },
  {
    id: 'site-launch',
    type: 'update',
    title: 'Site is live',
    date: '2026-01-17',
    content: 'Finally shipped the new personal site. Built with React, styled from scratch. More projects and posts coming soon.'
  },
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
