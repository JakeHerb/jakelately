import React from 'react';

const QuickLinks = ({ links }) => (
  <div>
    {links.map((link, index) => (
      <a key={index} href={link.link}>{link.title}</a>
    ))}
  </div>
);

export default QuickLinks;