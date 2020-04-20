import styled from '@emotion/styled';
import ArrowLeft from '../assets/arrowleft.svg';
import ArrowRight from '../assets/arrowright.svg';
import React from 'react';
import colors from '../utils/colors';

const Bar = styled.div`
  width: 375px;
  height: 50px;
  background-color: ${colors.primaryBackground};
  color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const DirectionButton = styled.button`
  background-color: ${colors.primaryBackground};
  border: none;
  outline: none;
  height: 20px;
  margin-left: 5px;
  margin-right: 5px;
`;

const DayText = styled.p`
  font-size: 15px;
  color: white;
`;

const DayButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20px;
  border: none;
  background-color: ${colors.primaryBackground};
  outline: none;
  &:active {
    background-color: ${colors.buttonClick};
    border-radius: 13px;
  }
`;

function Calendar() {
  return (
    <>
      <Bar>
        <DirectionButton>
          <img src={ArrowLeft} />
        </DirectionButton>
        <DayButton>
          <DayText>Mon</DayText>
        </DayButton>
        <DayButton>
          <DayText>Tue</DayText>
        </DayButton>
        <DayButton>
          <DayText>Wed</DayText>
        </DayButton>
        <DayButton>
          <DayText>Thur</DayText>
        </DayButton>
        <DayButton>
          <DayText>Fri</DayText>
        </DayButton>
        <DayButton>
          <DayText>Sat</DayText>
        </DayButton>
        <DayButton>
          <DayText>Sun</DayText>
        </DayButton>
        <DirectionButton>
          <img src={ArrowRight} />
        </DirectionButton>
      </Bar>
    </>
  );
}
export default Calendar;
