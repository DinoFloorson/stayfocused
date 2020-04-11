import React from 'react';
import { action } from '@storybook/addon-actions';
import PrimaryButton from '../components/PrimaryButton';

export default {
  title: 'Button',
};

export const LetsGoButton = () => (
  <PrimaryButton onClick={action('clicked')}>Lets go!</PrimaryButton>
);
