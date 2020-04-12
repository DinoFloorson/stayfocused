import React from 'react';
import CalenderForm from '../components/CalenderForm';
import CalenderButton from '../components/CalenderButton';
import ArrowLeft from '../assets/arrowleft.svg';
import ArrowRight from '../assets/arrowright.svg';
import DayArea from '../components/DayArea';
import DayText from '../components/DayText';

export default {
  title: 'Calender',
};

export const Calender = () => (
  <>
    <CalenderForm>
      <CalenderButton>
        <img src={ArrowLeft} />
      </CalenderButton>
      <DayArea>
        <DayText>Mon</DayText>
      </DayArea>
      <DayArea>
        <DayText>Tue</DayText>
      </DayArea>
      <DayArea>
        <DayText>Wed</DayText>
      </DayArea>
      <DayArea>
        <DayText>Thur</DayText>
      </DayArea>
      <DayArea>
        <DayText>Fri</DayText>
      </DayArea>
      <DayArea>
        <DayText>Sat</DayText>
      </DayArea>
      <DayArea>
        <DayText>Son</DayText>
      </DayArea>

      <CalenderButton>
        <img src={ArrowRight} />
      </CalenderButton>
    </CalenderForm>
  </>
);
