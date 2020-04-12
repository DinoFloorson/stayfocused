import React from 'react';
import { action } from '@storybook/addon-actions';
import CategoryButton from '../components/CategoryButton';

export default {
  title: 'Button',
};

export const SwimButton = () => (
  <CategoryButton onClick={action('clicked')}>SWIM</CategoryButton>
);
export const BikeButton = () => (
  <CategoryButton onClick={action('clicked')}>BIKE</CategoryButton>
);
export const RunButton = () => (
  <CategoryButton onClick={action('clicked')}>RUN</CategoryButton>
);
export const StrengthButton = () => (
  <CategoryButton onClick={action('clicked')}>STR</CategoryButton>
);
export const StabilisationButton = () => (
  <CategoryButton onClick={action('clicked')}>STA</CategoryButton>
);
