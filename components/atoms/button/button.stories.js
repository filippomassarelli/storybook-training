import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './button';

const buttonClicked = e => {
  e.preventDefault();
  alert("Clicked");
};

export const BasicButton = () => <Button>Basic button</Button>;

export const FunctionButton = () => (
  <Button onClick={buttonClicked}>Function button</Button>
);

export const LinkedButton = () => <Button href="/route">Linked button</Button>;



export default {
  title: 'Button',
  component: Button,
};