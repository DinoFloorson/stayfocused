import React from 'react';
import SignInInput from '../components/SignInInput';

export default {
  title: 'Input',
};

export const EmailInput = () => <SignInInput type="email" />;
export const PasswordInput = () => <SignInInput type="password" />;
