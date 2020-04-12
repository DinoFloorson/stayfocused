import Form from '../components/Form';
import React from 'react';
import { SignInFields } from './SignInWrapper.stories';

export default {
  title: 'LoginPage',
};

export const SignInForm = () => (
  <Form>
    <SignInFields></SignInFields>
  </Form>
);
