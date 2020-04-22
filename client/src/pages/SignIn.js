import React from 'react';
import styled from '@emotion/styled';
import SignInBackground from '../assets/backgroundSignIn.png';
import Logo from '../assets/logo.svg';
import Lettering from '../assets/lettering.svg';
import SignInForm from '../components/SignInForm';

const Main = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${SignInBackground});
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 20%;
  align-self: center;
`;

const SignIn = styled(SignInForm)`
  height: 70%;
  margin: 0px;
`;
function Home() {
  return (
    <>
      <Main>
        <Header>
          <img src={Logo} alt="Logo" />
          <img src={Lettering} alt="Lettering" />
        </Header>
        <SignIn />
      </Main>
    </>
  );
}
export default Home;
