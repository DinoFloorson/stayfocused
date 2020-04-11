import React from 'react';
import { action } from '@storybook/addon-actions';
import SecondaryButton from '../components/SecondaryButton';

export default {
  title: 'Button',
};

export const DiscardButton = () => (
  <SecondaryButton onClick={action('clicked')}>Discard</SecondaryButton>
);

export const SaveButton = () => (
  <SecondaryButton onClick={action('clicked')}>Save</SecondaryButton>
);

export const CloseButton = () => (
  <SecondaryButton onClick={action('clicked')}>Close</SecondaryButton>
);
