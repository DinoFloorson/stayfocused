import styled from '@emotion/styled';
import React from 'react';
import MethodButton from './MethodButton';
import CategoryButton from './CategoryButton';
import colors from '../utils/colors';

const Card = styled.div`
  width: 343px;
  height: 570px;
  border-radius: 10px 10px 10px 10px;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  border: 3px solid ${colors.cardBorder};
  color: ${colors.primaryColor};
  display: grid;
  grid-template-rows: 10% 8% 8% 8% auto 10%;
  grid-template-columns: 15% 15% auto 20% 15% 7%;
  align-items: center;
  background-color: ${colors.secondaryColor};
`;

const Heading = styled.input`
  width: 240px;
  height: 38px;
  font-size: 1.2rem;
  border: 1px solid ${colors.primaryColor};
  padding-left: 8px;
  margin-left: 15px;
`;

const SubHeading = styled.h2`
  font-size: 1.1rem;
  font-weight: 400;
  grid-column: 1/3;
  align-items: center;
  padding-left: 15px;
`;

const CategoryWrapper = styled.div`
  grid-column: 3/6;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Date = styled.input`
  width: 130px;
  height: 25px;
  grid-column: 3/6;
  border: 1px solid ${colors.primaryColor};
  ::-webkit-datetime-edit-fields-wrapper {
    border-color: ${colors.primaryColor};
  }
  ::-webkit-datetime-edit {
    padding: 1em;
  }
  ::-webkit-inner-spin-button {
    display: none;
  }
  ::-webkit-calendar-picker-indicator {
    background: ${colors.primaryColor};
    color: ${colors.secondaryColor};
  }
`;

const StartTime = styled.input`
  width: 80px;
  height: 25px;
  border: 1px solid ${colors.primaryColor};
  grid-column: 3/4;
  grid-row: 4/5;
  ::-webkit-datetime-edit {
    padding: 1em;
  }
  ::-webkit-inner-spin-button {
    display: none;
  }
`;

const EndTime = styled.input`
  width: 80px;
  height: 25px;
  border: 1px solid ${colors.primaryColor};
  grid-column: 3/6;
  grid-row: 4/5;
  justify-self: end;
  ::-webkit-datetime-edit {
    padding: 1em;
  }
  ::-webkit-inner-spin-button {
    display: none;
  }
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

const TimeElement = styled.p`
  grid-column: 4/5;
  grid-row: 4/5;
`;

function AddNewTaskCard() {
  return (
    <>
      <Card>
        <Heading type="text" />
        <SubHeading>Category:</SubHeading>
        <CategoryWrapper>
          <CategoryButton>SWIM</CategoryButton>
          <CategoryButton>BIKE</CategoryButton>
          <CategoryButton>RUN</CategoryButton>
          <CategoryButton>STR</CategoryButton>
          <CategoryButton>STA</CategoryButton>
        </CategoryWrapper>

        <SubHeading>Date:</SubHeading>
        <Date type="date" />
        <SubHeading>Time:</SubHeading>
        <StartTime type="time" />
        <TimeElement>to</TimeElement>
        <EndTime type="time" />
        <SaveButton>Save</SaveButton>
        <DiscardButton>Discard</DiscardButton>
      </Card>
    </>
  );
}

export default AddNewTaskCard;
