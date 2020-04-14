import React from 'react';
import { action } from '@storybook/addon-actions';
import MethodButton from '../components/MethodButton';

export default {
  title: 'Button',
};

export const DiscardButton = () => (
  <MethodButton onClick={action('clicked')}>Discard</MethodButton>
);

export const SaveButton = () => (
  <MethodButton onClick={action('clicked')}>Save</MethodButton>
);

export const CloseButton = () => (
  <MethodButton onClick={action('clicked')}>Close</MethodButton>
);
