import styled from '@emotion/styled';
import React from 'react';
import GlobalStyles from './GlobalStyles';

const Card = styled.div`
  width: 343px;
  height: 570px;
  border-radius: 10px 10px 10px 10px;
  border: 3px solid #b9b9b9;
  color: white;
  display: flex;
  flex: column wrap;
`;

const Heading = styled.h1`
  text-align: left;
  font-size: 1.25rem;
  font-weight: 400;
  color: #011e62;
  padding: 15px 0px 10px 15px;
  margin: 0px;
  flex-basis: 100%;
  height: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0px 10px 15px;
  flex: 0 0 20%;
`;

const SubHeading = styled.h2`
  font-size: 1.125rem;
  color: #011e62;
  font-weight: 400;
  margin: 0px;
  flex-basis: 20%;
`;

const CategoryLabel = styled.div`
  background-color: #011e62;
  color: white;
  font-size: 10px;
  padding: 5px 1px 2px 1px;
  font-family: Roboto;
  border: 2px solid #011e62;
  padding: 0px;
  border-radius: 3px;
  text-align: center;
`;

function DetailCard() {
  return (
    <>
      <GlobalStyles />
      <Card>
        <Heading>Technic/GA1</Heading>
        <Wrapper>
          <SubHeading>Category:</SubHeading>
          <CategoryLabel>SWIM</CategoryLabel>
        </Wrapper>
        <Wrapper>
          <SubHeading>Date:</SubHeading>
        </Wrapper>
        <Wrapper>
          <SubHeading>Time:</SubHeading>
        </Wrapper>
      </Card>
    </>
  );
}

export default DetailCard;
