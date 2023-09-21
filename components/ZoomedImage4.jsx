import React, { useState } from 'react';

import Albert4 from "../assets/albert/albert4.png";

const ZoomedImage4 = ({ imageSrc }) => {
  const [zoom, setZoom] = useState(false);

  const handleMouseMove = (e) => {
    const image = e.target;
    const { left, top, width, height } = image.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    image.style.transformOrigin = `${x * 100}% ${y * 100}%`;
    setZoom(true);
  };

  const handleMouseLeave = () => {
    setZoom(false);
  };

  return (
    <div
      className={`zoom-image-container ${zoom ? 'zoomed' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={Albert4}
        alt="Your Image"
        className="zoom-image"
      />
    </div>
  );
};

export default ZoomedImage4;
