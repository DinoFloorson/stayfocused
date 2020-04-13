import React from 'react';
import CalenderForm from '../components/CalenderForm';
import CalenderButton from '../components/CalenderButton';
import ArrowLeft from '../assets/arrowleft.svg';
import ArrowRight from '../assets/arrowright.svg';
import DayButton from '../components/DayButton';
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
      <DayButton>
        <DayText>Mon</DayText>
      </DayButton>

      <CalenderButton>
        <img src={ArrowRight} />
      </CalenderButton>
    </CalenderForm>
  </>
);
