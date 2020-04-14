import React from 'react';
import { action } from '@storybook/addon-actions';
import MethodButton from '../components/MethodButton';

export default {
  title: 'Button',
};

export const DiscardButton = () => (
  <MethodButton onClick={action('clicked')}>Discard</MethodButton>
);
