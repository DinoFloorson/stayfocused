import styled from '@emotion/styled';
import ArrowLeft from '../assets/arrowleft.svg';
import ArrowRight from '../assets/arrowright.svg';
import React from 'react';
import colors from '../utils/colors';

const Bar = styled.div`
  height: 50px;
  background-color: ${colors.primaryColor};
  color: ${colors.secondaryColor};
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const DirectionButton = styled.button`
  background-color: ${colors.primaryColor};
  border: none;
  outline: none;
  height: 20px;
  margin: 0px 5px 0px 5px;
`;

const DayText = styled.p`
  font-size: 0.937rem;
  color: ${colors.secondaryColor};
  margin: 0px;
  padding: 3px;
`;

const DayButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  border: none;
  background-color: ${colors.primaryColor};
  outline: none;
  &:active {
    background-color: ${colors.buttonClick};
    border-radius: 13px;
  }
`;

const Date = styled.div`
  font-size: 0.625rem;
  margin: 0px;
  padding: 3px;
  color: ${colors.secondaryColor};
  font-weight: 200;
`;

function Calendar() {
  return (
    <>
      <Bar>
        <DirectionButton>
          <img src={ArrowLeft} alt="Arrow left" />
        </DirectionButton>
        <DayButton>
          <DayText>Mon</DayText>
          <Date>06.04.</Date>
        </DayButton>
        <DayButton>
          <DayText>Tue</DayText>
          <Date>06.04.</Date>
        </DayButton>
        <DayButton>
          <DayText>Wed</DayText>
          <Date>07.04.</Date>
        </DayButton>
        <DayButton>
          <DayText>Thur</DayText>
          <Date>08.04.</Date>
        </DayButton>
        <DayButton>
          <DayText>Fri</DayText>
          <Date>09.04.</Date>
        </DayButton>
        <DayButton>
          <DayText>Sat</DayText>
          <Date>10.04.</Date>
        </DayButton>
        <DayButton>
          <DayText>Sun</DayText>
          <Date>11.04.</Date>
        </DayButton>
        <DirectionButton>
          <img src={ArrowRight} alt="Arrow right" />
        </DirectionButton>
      </Bar>
    </>
  );
}
export default Calendar;
