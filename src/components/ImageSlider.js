import React, { useRef } from 'react';
import Slider from 'react-slick';
import './imageSlider.css'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true, // Infinite sliding enabled
    speed: 400, // Transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Autoplay enabled
    autoplaySpeed: 3000, // Duration for which each slide is displayed
  };

  const images = [
    { src: '/images/image4.png', alt: 'image4.png' },
    { src: '/images/image2.jpg', alt: 'image2.jpg' },
    { src: '/images/image3.jpg', alt: 'image3.jpg' },
    { src: '/images/image1.jpg', alt: 'image1.jpg' },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
