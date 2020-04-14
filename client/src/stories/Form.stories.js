import Form from '../components/Form';
import React from 'react';
import { SignInFields } from './SignInWrapper.stories';
import { LetsGoButton } from './SignInButton.stories';
import { SignInCheckbox } from './Checkbox.stories';
import SignInHeading from '../components/SignInHeading';

export default {
  title: 'LoginPage',
};

export const SignInForm = () => (
  <Form>
    <SignInHeading>Welcome back!</SignInHeading>
    <SignInFields></SignInFields>
    <SignInCheckbox></SignInCheckbox>
    <LetsGoButton />
  </Form>
);
