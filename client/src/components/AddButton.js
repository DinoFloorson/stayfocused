import PrimaryButton from './PrimaryButton';
import React from 'react';
import styled from '@emotion/styled';

const Button = styled(PrimaryButton)`
  font-size: 2.5rem;
  padding: 20px 10px 20px 10px;
  border-radius: 20px;
  border: none;
  text-align: center;
  line-height: 0px;
`;

function AddButton() {
  return (
    <>
      <Button>+</Button>
    </>
  );
}
export default AddButton;
