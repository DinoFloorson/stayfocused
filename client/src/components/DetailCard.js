import styled from '@emotion/styled';
import React from 'react';
import Bin from '../assets/bin.svg';
import Pen from '../assets/pen.svg';
import MethodButton from './MethodButton';
import colors from '../utils/colors';

const Card = styled.div`
  width: 343px;
  height: 570px;
  border-radius: 10px 10px 10px 10px;
  border: 3px solid ${colors.cardBorder};
  color: ${colors.primaryColor};
  display: grid;
  grid-template-rows: 10% 8% 8% 8% auto 10%;
  grid-template-columns: 30% auto 10% 10%;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 1.25rem;
  grid-column: 1/3;
  text-align: left;
  padding-left: 15px;
`;

const SubHeading = styled.h2`
  font-size: 1.1rem;
  font-weight: 400;
  grid-column: 1/2;
  align-items: center;
  padding-left: 15px;
`;

const CategoryLabel = styled.p`
  width: 35px;
  font-size: 0.6rem;
  background-color: ${colors.primaryColor};
  color: ${colors.secondaryColor};
  padding: 2px;
  border: 2px solid ${colors.primaryColor};
  border-radius: 3px;
  text-align: center;
`;
const CategoryWrapper = styled.div`
  grid-column: 2/5;
`;

const Date = styled.p`
  color: ${colors.primaryColor};
`;

const Time = styled.p`
  color: ${colors.primaryColor};
`;

const CloseButton = styled(MethodButton)`
  grid-row: 6/7;
  grid-column: 1/5;
  justify-self: center;
`;

function DetailCard() {
  return (
    <>
      <Card>
        <Heading>Technic/GA1</Heading>
        <img src={Pen} alt="pen" />
        <img src={Bin} alt="bin" />
        <SubHeading>Category:</SubHeading>
        <CategoryWrapper>
          <CategoryLabel>SWIM</CategoryLabel>
        </CategoryWrapper>
        <SubHeading>Date:</SubHeading>
        <Date>06.11.2020</Date>
        <SubHeading>Time:</SubHeading>
        <Time> 08:00 to 09:00</Time>
        <CloseButton>Close</CloseButton>
      </Card>
    </>
  );
}

export default DetailCard;
