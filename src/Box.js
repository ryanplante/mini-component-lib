import React from 'react';

const Box = ({ size = 'medium', backgroundColor = '#e0e0e0', children }) => {
  const sizes = {
    small: '100px',
    medium: '200px',
    large: '300px',
  };

  const sizeValue = sizes[size] || sizes.medium;

  return (
    <div style={{ backgroundColor, width: sizeValue, height: sizeValue }}>
      {children}
    </div>
  );
};

export default Box;
