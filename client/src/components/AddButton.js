import PrimaryButton from './PrimaryButton';
import React from 'react';
import styled from '@emotion/styled';
import Plus from '../assets/plus.svg';

const Button = styled(PrimaryButton)`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  border: none;
  position: relative;
  & > img {
    position: absolute;
    top: 8px;
    left: 8px;
  }
`;

function AddButton() {
  return (
    <>
      <Button>
        <img src={Plus} alt="plus" />
      </Button>
    </>
  );
}
export default AddButton;
