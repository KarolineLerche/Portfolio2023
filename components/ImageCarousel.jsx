import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.css'; // Import the CSS file for styling

// Import your images
import menukort1 from '../assets/tanken/menukort1.png';
import menukort2 from '../assets/tanken/menukort2.png';
import menukort3 from '../assets/tanken/menukort3.png';
import menukort4 from '../assets/tanken/menukort4.png';
import menukort5 from '../assets/tanken/menukort5.png';

const ImageCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        className="carousel"
      >
        <div>
          <img src={menukort1} alt="Image 1" />
        </div>
        <div>
          <img src={menukort2} alt="Image 2" />
        </div>
        <div>
          <img src={menukort3} alt="Image 3" />
        </div>
        <div>
          <img src={menukort4} alt="Image 4" />
        </div>
        <div>
          <img src={menukort5} alt="Image 5" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;