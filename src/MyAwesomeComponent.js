import React from 'react';
import Box from './Box';
import Text from './Text';
import Button from './Button';

const MyAwesomeComponent = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <Box size="large">
      <Text size="large" color="#ffffff">Hello World!</Text>
      <Button color="#ff0000" onClick={handleClick}>Click me</Button>
    </Box>
  );
};

export default MyAwesomeComponent;
