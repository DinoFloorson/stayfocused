import React from 'react';
import styled from '@emotion/styled';
import Dot from '../assets/dot.svg';
import CategoryButton from './CategoryButton';
import colors from '../utils/colors';

const Task = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 15px 5px 20px;
`;

const Time = styled.p`
  font-size: 0.9rem;
  width: 40%;
  margin-left: 10px;
  color: ${colors.primaryColor};
`;

const Container = styled.button`
  width: 60%;
  font-size: 15px;
  outline: none;
  border: 3px solid ${colors.cardBorder};
  background-color: ${colors.secondaryColor};
  border-radius: 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const TaskHeading = styled.h2`
  font-size: 0.9rem;
  font-weight: 400;
  margin: 2px 0px 2px 0px;
`;

function TaskLine() {
  return (
    <>
      <Task>
        <img src={Dot} alt="dot" />
        <Time>08:00 - 09:00</Time>
        <Container>
          <TaskHeading>Technic/GA1</TaskHeading>
          <CategoryButton>SWIM</CategoryButton>
        </Container>
      </Task>
    </>
  );
}
export default TaskLine;
