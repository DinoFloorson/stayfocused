import React from 'react';
import { action } from '@storybook/addon-actions';
import SignInButton from '../components/SignInButton';

export default {
  title: 'Button',
};

export const LetsGoButton = () => (
  <SignInButton onClick={action('clicked')}>Lets go!</SignInButton>
);
