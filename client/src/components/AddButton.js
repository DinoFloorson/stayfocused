import PrimaryButton from './PrimaryButton';
import React from 'react';
import GlobalStyles from './GlobalStyles';
import styled from '@emotion/styled';

const Button = styled(PrimaryButton)`
  font-size: 40px;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  border: none;
  text-align: center;
  line-height: 0px;
`;

function AddButton() {
  return (
    <>
      <GlobalStyles />
      <Button>+</Button>
    </>
  );
}
export default AddButton;
