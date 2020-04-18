import styled from '@emotion/styled';
import React from 'react';
import GlobalStyles from './GlobalStyles';
import Bin from '../assets/bin.svg';
import Pen from '../assets/pen.svg';
import MethodButton from './MethodButton';

const Card = styled.div`
  width: 343px;
  height: 570px;
  border-radius: 10px 10px 10px 10px;
  border: 3px solid #b9b9b9;
  color: white;
  display: grid;
  grid-template-rows: 10% 8% 8% 8% auto 10%;
  grid-template-columns: 30% auto 10% 10%;
  align-items: center;
`;

const Heading = styled.h1`
  text-align: left;
  font-size: 1.25rem;
  font-weight: 400;
  color: #011e62;
  grid-column: 1/3;
  padding-left: 15px;
`;

const SubHeading = styled.h2`
  font-size: 1.125rem;
  color: #011e62;
  font-weight: 400;
  grid-column: 1/2;
  align-items: center;
  padding-left: 15px;
`;

const CategoryLabel = styled.p`
  background-color: #011e62;
  color: white;
  font-size: 0.625rem;
  width: 30px;
  padding: 2px;
  font-family: Roboto;
  border: 2px solid #011e62;
  border-radius: 3px;
  text-align: center;
`;
const CategoryWrapper = styled.div`
  grid-column: 2/5;
`;

const Date = styled.p`
  color: #011e62;
`;

const Time = styled.p`
  color: #011e62;
`;

const CloseButton = styled(MethodButton)`
  grid-row: 6/7;
  grid-column: 1/5;
  justify-self: center;
`;

function DetailCard() {
  return (
    <>
      <GlobalStyles />
      <Card>
        <Heading>Technic/GA1</Heading>
        <img src={Pen} />
        <img src={Bin} />
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