import React, { useState } from 'react';
import Albert1 from "../assets/albert/albert1.png";



const ZoomedImage = () => {
  const [zoom, setZoom] = useState(false);

  const handleMouseMove = (e) => {
    const image = document.querySelector('.zoom-image');
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
        src={Albert1}
        alt="Your Image"
        className="zoom-image"
      />
    </div>

    
  );
};

export default ZoomedImage;


