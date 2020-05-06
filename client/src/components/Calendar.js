import styled from '@emotion/styled';
import ArrowLeft from '../assets/arrowleft.svg';
import ArrowRight from '../assets/arrowright.svg';
import React, { useState } from 'react';
import colors from '../utils/colors';

const Bar = styled.div`
  height: 50px;
  width: 100%;
  background-color: ${colors.primaryColor};
  color: ${colors.secondaryColor};
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  & > * {
    flex-basis: 11.1%;
  }
`;

const DirectionButton = styled.button`
  background-color: ${colors.primaryColor};
  border: none;
  outline: none;
  height: 20px;
  margin: 2px;
  &:active {
    background-color: ${colors.buttonClick};
  }
`;

const DayText = styled.p`
  font-size: 0.9rem;
  color: ${colors.secondaryColor};
  margin: 0px;
`;

const DayButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: none;
  padding: 2px;
  outline: none;
  background-color: ${(props) =>
    props.active ? colors.buttonClick : colors.primaryColor};
  border-radius: ${(props) => (props.active ? '13px' : null)};

  &:active {
    background-color: ${colors.buttonClick};
    border-radius: 13px;
  }
`;

const Date = styled.div`
  font-size: 0.65rem;
  margin: 0px;

  color: ${colors.secondaryColor};
  font-weight: 200;
`;

function Calendar() {
  const [activeDay, setActiveDay] = useState(1);
  const days = [
    { id: 1, day: 'Mon', date: '27.04' },
    { id: 2, day: 'Tue', date: '28.04' },
    { id: 3, day: 'Wen', date: '29.04' },
    { id: 4, day: 'Thur', date: '30.04' },
    { id: 5, day: 'Fri', date: '01.05' },
    { id: 6, day: 'Sat', date: '02.05' },
    { id: 7, day: 'Sun', date: '03.05' },
  ];

  function onHandleClick(day) {
    setActiveDay(day);
  }
  return (
    <>
      <Bar>
        <DirectionButton>
          <img src={ArrowLeft} alt="Arrow left" />
        </DirectionButton>

        {days.map((day) => (
          <DayButton
            key={day.id}
            onClick={() => onHandleClick(day.id)}
            active={activeDay === day.id}
          >
            <DayText>{day.day}</DayText>
            <Date>{day.date}</Date>
          </DayButton>
        ))}

        <DirectionButton>
          <img src={ArrowRight} alt="Arrow right" />
        </DirectionButton>
      </Bar>
    </>
  );
}
export default Calendar;
