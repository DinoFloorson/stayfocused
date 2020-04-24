import React from 'react';
import HomeBackground from '../assets/homeBackground.svg';
import smallLogo from '../assets/smallLogo.svg';
import styled from '@emotion/styled';
import colors from '../utils/colors';
import Calendar from '../components/Calendar';
import TaskLine from '../components/TaskLine';
import AddButton from '../components/AddButton';

const Main = styled.div`
  width: 100%;
  height: 100%;
  background: url(${HomeBackground}) no-repeat;
  background-size: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 12%;
`;

const Heading = styled.h1`
  font-size: 1.75rem;
  font-weight: 400;
  color: ${colors.primaryColor};
`;

const Task = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 10%;
`;

function Home() {
  return (
    <>
      <Main>
        <Header>
          <Heading>Have a nice day!</Heading>
          <img src={smallLogo} alt="small Logo" />
        </Header>
        <Calendar />
        <Task>
          <TaskLine />
          <TaskLine />
          <TaskLine />
        </Task>
        <Footer>
          <AddButton></AddButton>
        </Footer>
      </Main>
    </>
  );
}
export default Home;
