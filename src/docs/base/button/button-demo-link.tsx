import React from 'react';
import Button from '@lxjx/fr/lib/button';
import '@lxjx/fr/lib/button/style';

const ButtonDemoColor = () => {
  return (
    <div>
      <Button link>link</Button>
      <Button color="red" link>link</Button>
      <Button color="green" link disabled>link</Button>
      <Button color="blue" link href="/">link↗</Button>
      <Button color="yellow" link>link</Button>
    </div>
  );
};

export default ButtonDemoColor;
