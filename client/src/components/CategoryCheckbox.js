import styled from '@emotion/styled';

const CategoryCheckbox = styled.input`
  appearance: none;
  outline: none;
  width: 32px;
  height: 12px;
  background-color: #011e62;
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding: 2px;
  transition: background-color 0.2s ease-in-out;
  position: relative;
  &::after {
    content: '';
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 20px;
    position: absolute;
    transform: scale(0.95);
    left: 0.3;
    transition: left 0.2s ease-in-out;
  }
  &:checked::after {
    left: 25px;
  }
`;

export default CategoryCheckbox;
