import React from 'react';
import { EmailInput, PasswordInput } from '../stories/SignInput.stories';
import SignInText from '../components/SignInText';
import SignInWrapper from '../components/SignInWrapper';

export default {
  title: 'Input',
};

export const SignInFields = () => (
  <>
    <SignInWrapper>
      <SignInText>Email:</SignInText>
      <EmailInput />
      <SignInText>Password:</SignInText>

      <PasswordInput />
    </SignInWrapper>
  </>
);
