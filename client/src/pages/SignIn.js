import React from 'react';
import styled from '@emotion/styled';
import Background from '../assets/backgroundSignIn.png';
import Logo from '../assets/logo.svg';
import Lettering from '../assets/lettering.svg';

const Main = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${Background});
  background-size: 100%;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 15%;
  margin: 5px 0px 0px 0px;
`;
function Home() {
  return (
    <>
      <Main>
        <Header>
          <img src={Logo} />
          <img src={Lettering} />
        </Header>
      </Main>
    </>
  );
}
export default Home;
