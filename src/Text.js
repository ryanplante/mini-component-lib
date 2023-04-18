import React from 'react';

const Text = ({ size = 'medium', color = '#000000', children }) => {
  const sizes = {
    small: '0.8rem',
    medium: '1rem',
    large: '1.2rem',
  };

  const sizeValue = sizes[size] || sizes.medium;

  return (
    <span style={{ fontSize: sizeValue, color }}>{children}</span>
  );
};

export default Text;
