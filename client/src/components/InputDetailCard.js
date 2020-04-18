import styled from '@emotion/styled';
import React from 'react';
import GlobalStyles from './GlobalStyles';
import MethodButton from './MethodButton';
// import CategoryButton from './CategoryButton';

const Card = styled.div`
  width: 343px;
  height: 570px;
  border-radius: 10px 10px 10px 10px;
  border: 3px solid #b9b9b9;
  color: white;
  display: grid;
  grid-template-rows: 10% 8% 8% 8% auto 10%;
  grid-template-columns: 15% 15% auto 15% 15%;
  align-items: center;
`;

const Heading = styled.input`
  width: 240px;
  height: 38px;
  border: 1px solid #011e62;
  font-size: 20px;
  padding-left: 8px;
  color: #011e62;
  margin-left: 15px;
`;

const SubHeading = styled.h2`
  font-size: 1.125rem;
  color: #011e62;
  font-weight: 400;
  grid-column: 1/3;
  align-items: center;
  padding-left: 15px;
`;

const CategoryWrapper = styled.div`
  grid-column: 3/6;
`;

const Date = styled.input`
  color: #011e62;
  grid-column: 3/6;
  width: 130px;
`;

const StartTime = styled.input`
  color: #011e62;
  grid-column: 3/4;
  width: 80px;
`;

const EndTime = styled.input`
  color: #011e62;
  grid-column: 4/6;
  grid-row: 4/5;
  width: 80px;
`;

const SaveButton = styled(MethodButton)`
  grid-column: 2/4;
  grid-row: 6/7;
`;

const DiscardButton = styled(MethodButton)`
  grid-column: 3/5;
  grid-row: 6/7;
  justify-self: end;
`;

function DetailCard() {
  return (
    <>
      <GlobalStyles />
      <Card>
        <Heading type="text" />
        <SubHeading>Category:</SubHeading>
        <CategoryWrapper></CategoryWrapper>
        <SubHeading>Date:</SubHeading>
        <Date type="date" />
        <SubHeading>Time:</SubHeading>
        <StartTime type="time" />
        <p>to</p>
        <EndTime type="time" />
        <SaveButton>Save</SaveButton>
        <DiscardButton>Discard</DiscardButton>
      </Card>
    </>
  );
}

export default DetailCard;
