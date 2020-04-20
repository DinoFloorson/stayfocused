import React from 'react';
import styled from '@emotion/styled';
import Dot from '../assets/dot.svg';
import CategoryButton from './CategoryButton';
import colors from '../utils/colors';

const Task = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 15px 5px 10px;
`;

const Time = styled.p`
  font-size: 0.95rem;
`;

const Container = styled.div`
  width: 188px;
  height: 30px;
  font-size: 15px;
  border: 3px solid ${colors.cardBorder};
  border-radius: 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const TaskHeading = styled.h2`
  font-size: 0.95rem;
  font-weight: 400;
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
