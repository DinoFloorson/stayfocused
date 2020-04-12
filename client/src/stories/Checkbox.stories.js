import React from 'react';
import { action } from '@storybook/addon-actions';
import CheckboxField from '../components/CheckboxField';
import SignInText from '../components/SignInText';

export default {
  title: 'Input',
};

export const SignInCheckbox = () => (
  <CheckboxField>
    <input type="checkbox" onClick={action('clicked')} />
    <SignInText>Remain signed in </SignInText>
  </CheckboxField>
);
