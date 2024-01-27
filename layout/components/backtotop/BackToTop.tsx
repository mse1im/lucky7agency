import React, { useState, useEffect } from 'react';
import "./BackToTop.scss";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    isVisible && (
      <button onClick={scrollToTop} className="back-to-top">
        <i className="ri-arrow-up-s-line"></i>
      </button>
    )
  );
};

export default BackToTop;