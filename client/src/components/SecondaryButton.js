import styled from '@emotion/styled';
import colors from '../utils/colors';

const SecondaryButton = styled.button`
  font-size: 0.6rem;
  background-color: ${(props) =>
    props.active ? colors.primaryColor : colors.secondaryColor};
  color: ${(props) =>
    props.active ? colors.secondaryColor : colors.primaryColor};
  border: 2px solid ${colors.primaryColor};
  text-align: center;
  padding: 0px;
  border-radius: 3px;
  &:active {
    background-color: ${colors.primaryColor};
    color: ${colors.secondaryColor};
  }
`;

export default SecondaryButton;
