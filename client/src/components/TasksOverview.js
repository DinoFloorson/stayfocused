import React from 'react';
import styled from '@emotion/styled';
import TaskLine from '../components/TaskLine';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
`;
function TasksOverview() {
  return (
    <Container>
      <TaskLine heading={''} category={''} startTime={''} endTime={''} />
    </Container>
  );
}
export default TasksOverview;
