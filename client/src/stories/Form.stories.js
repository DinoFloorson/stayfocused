import Form from '../components/Form';
import React from 'react';
import { SignInFields } from './SignInWrapper.stories';
import { LetsGoButton } from './SignInButton.stories';
import { SignInCheckbox } from './Checkbox.stories';

export default {
  title: 'LoginPage',
};

export const SignInForm = () => (
  <Form>
    <SignInFields></SignInFields>
    <SignInCheckbox></SignInCheckbox>
    <LetsGoButton />
  </Form>
);
