
import React from 'react';
import './ScrollToTopButton.css'; 

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <button className="scroll-to-top" onClick={handleScrollToTop} aria-label="Scroll to top">
      &#8593; 
    </button>
  );
};

export default ScrollToTopButton;
