import React from 'react';
import styled from '@emotion/styled';
import TaskLine from '../components/TaskLine';
import { useQuery } from 'react-query';
import { getAllTasks } from '../api/tasks';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
`;

function TasksOverview() {
  const { status, data: tasks, error } = useQuery('allTasks', getAllTasks);
  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>;
  }

  return (
    <Container>
      {tasks.map((task) => (
        <TaskLine
          heading={task.heading}
          category={task.category}
          startTime={task.startTime}
          endTime={task.endTime}
          key={task.id}
        />
      ))}
    </Container>
  );
}
export default TasksOverview;
