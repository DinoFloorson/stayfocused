import styled from '@emotion/styled';
import React from 'react';
import Bin from '../assets/bin.svg';
import Pen from '../assets/pen.svg';
import MethodButton from './MethodButton';
import colors from '../utils/colors';
import PropTypes from 'prop-types';

const Card = styled.div`
  width: 343px;
  height: 570px;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border-radius: 10px 10px 10px 10px;
  border: 3px solid ${colors.cardBorder};
  color: ${colors.primaryColor};
  display: grid;
  grid-template-rows: 10% 8% 8% 8% auto 10%;
  grid-template-columns: 30% auto 10% 10%;
  align-items: center;
  background-color: ${colors.secondaryColor};
`;

const Heading = styled.h1`
  font-size: 1.25rem;
  grid-column: 1/3;
  text-align: left;
  padding-left: 15px;
`;

const SubHeading = styled.h2`
  font-size: 1.1rem;
  font-weight: 400;
  grid-column: 1/2;
  align-items: center;
  padding-left: 15px;
`;

const CategoryLabel = styled.p`
  width: 35px;
  font-size: 0.6rem;
  background-color: ${colors.primaryColor};
  color: ${colors.secondaryColor};
  padding: 2px;
  border: 2px solid ${colors.primaryColor};
  border-radius: 3px;
  text-align: center;
`;
const CategoryWrapper = styled.div`
  grid-column: 2/5;
`;

const Date = styled.p`
  color: ${colors.primaryColor};
`;

const Time = styled.p`
  color: ${colors.primaryColor};
`;

const CloseButton = styled(MethodButton)`
  grid-row: 6/7;
  grid-column: 1/5;
  justify-self: center;
`;

const Button = styled.button`
  border: none;
  margin: 0px;
  padding: 0px;
  background: none;
  outline: none;
`;

function DetailCard({ toggleModal, task }) {
  return (
    <>
      <Card>
        <Heading>{task.heading}</Heading>
        <Button>
          <img src={Pen} alt="pen" />
        </Button>
        <Button>
          <img src={Bin} alt="bin" />
        </Button>
        <SubHeading>Category:</SubHeading>
        <CategoryWrapper>
          <CategoryLabel>{task.category}</CategoryLabel>
        </CategoryWrapper>
        <SubHeading>Date:</SubHeading>
        <Date>{task.date}</Date>
        <SubHeading>Time:</SubHeading>
        <Time>
          {task.startTime}-{task.endTime}
        </Time>
        <CloseButton onClick={toggleModal}>Close</CloseButton>
      </Card>
    </>
  );
}

DetailCard.propTypes = {
  toggleModal: PropTypes.func,
  task: PropTypes.object,
};

export default DetailCard;
