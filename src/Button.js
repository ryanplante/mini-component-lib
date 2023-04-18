import React from 'react';

const Button = ({ color = '#cccccc', onClick, children }) => (
  <button style={{ backgroundColor: color }} onClick={onClick}>
    {children}
  </button>
);

export default Button;
