import React from 'react';

const HeroImage = () => {
  return (
    <img
      style={{
        objectFit: 'cover',
        maxHeight: '400px',
        width: '100%',
      }}
      src='assets/images/heroImage.jpeg'
      alt='quarry'
    />
  );
};

export default HeroImage;
