import React from 'react';

const FeaturedContent = ({ content }) => (
  <div>
    {content.map((item, index) => (
      <div key={index}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <img src={item.imageLink} alt={item.title} />
        <a href={item.detailLink}>Learn More</a>
      </div>
    ))}
  </div>
);

export default FeaturedContent;