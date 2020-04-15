import styled from '@emotion/styled';
import PrimaryButton from './PrimaryButton';
import React from 'react';
import GlobalStyles from './GlobalStyles';

const Form = styled.div`
  width: 305px;
  height: 510px;
  border-radius: 30px 0px 0px 30px;
  background-image: linear-gradient(#011e62, #026adb);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 10px 30px #000000;
`;

const Heading = styled.p`
  font-family: Roboto;
  font-weight: 400;
  font-size: 25px;
  color: white;
`;

const InputWrapper = styled.div`
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;
`;

const Text = styled.p`
  font-family: Roboto;
  font-size: 13px;
  color: white;
`;

const Input = styled.input`
  width: 230px;
  height: 38px;
  border: 1px solid #011e62;
  font-size: 20px;
  padding-left: 8px;
  color: #011e62;
  border-radius: 13px;
`;

const CheckboxField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 130px;
  margin: 10px;
`;

const LetsGoButton = styled(PrimaryButton)`
  width: 116px;
  height: 35px;
  border-radius: 12px;
  border: none;
  margin: 20px;
`;

function SignInForm() {
  return (
    <>
      <GlobalStyles />
      <Form>
        <Heading>Welcome back!</Heading>
        <InputWrapper>
          <Text>Email:</Text>
          <Input type="email" />
        </InputWrapper>
        <InputWrapper>
          <Text>Password:</Text>
          <Input type="password" />
        </InputWrapper>
        <CheckboxField>
          <input type="checkbox" />
          <Text>Remain signed in</Text>
        </CheckboxField>
        <LetsGoButton>Lets go!</LetsGoButton>
      </Form>
    </>
  );
}

export default SignInForm;
