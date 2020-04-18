import React from 'react';
import styled from '@emotion/styled';
import GlobalStyles from './GlobalStyles';

const Task = styled.div`
  display: flex;
  flex-direction: row;
`;

export function TaskLine() {
  return (
    <>
      <GlobalStyles />
      <Task></Task>
    </>
  );
}
