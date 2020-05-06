import PrimaryButton from './PrimaryButton';
import React from 'react';
import styled from '@emotion/styled';
import Plus from '../assets/plus.svg';
import PropTypes from 'prop-types';

const Button = styled(PrimaryButton)`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  border: none;
  margin: 15px;
  position: relative;
  & > img {
    position: absolute;
    top: 8px;
    left: 8px;
  }
`;

function AddButton({ onClick }) {
  return (
    <>
      <Button onClick={onClick}>
        <img src={Plus} alt="plus" />
      </Button>
    </>
  );
}
AddButton.propTypes = {
  onClick: PropTypes.func,
};
export default AddButton;
