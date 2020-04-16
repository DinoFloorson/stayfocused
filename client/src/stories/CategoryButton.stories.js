import React from 'react';
import { action } from '@storybook/addon-actions';
import CategoryButton from '../components/CategoryButton';

export default {
  title: 'Button',
};

export const SwimButton = () => (
  <CategoryButton onClick={action('clicked')}>SWIM</CategoryButton>
);
