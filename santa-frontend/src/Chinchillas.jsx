import React, { useState } from 'react';
import './chinchillas.css'; // Component-specific styles

const Chinchillas = () => {
  const [isHappy, setIsHappy] = useState(false);

  const handleImageClick = () => {
    setIsHappy((prevState) => !prevState);
  };

  return (
    <div className="container">
      <h1 className="title">Santa's running low on stamina, FAST, Click the Chinchilla!!!</h1>
      <img
        src={isHappy ? '/chinchillas-front.jpg' : '/chinchillas-back.jpg'}
        alt={isHappy ? 'Happy Chinchilla' : 'Back Chinchilla'}
        className={`chinchilla-image ${isHappy ? 'happy' : 'back'}`}
        onClick={handleImageClick}
      />
    </div>
  );
};

export default Chinchillas;