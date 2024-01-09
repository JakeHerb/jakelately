import React from 'react';

const SplineViewerComponent = ({ url, size }) => {
  const style = {
    width: size.width,
    height: size.height
  };

  return (
    <div className="splineViewerContainer" style={style}>
      <spline-viewer url={url} events-target="global"></spline-viewer>
    </div>
  );
};

export default SplineViewerComponent;