import styled from '@emotion/styled';
import React, { useState } from 'react';
import Bin from '../assets/bin.svg';
import Pen from '../assets/pen.svg';
import MethodButton from './MethodButton';
import colors from '../utils/colors';
import PropTypes from 'prop-types';
import CategoryButton from './CategoryButton';

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

const EditCard = styled.div`
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
  grid-template-columns: 15% 15% auto 20% 15% 7%;
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

const EditHeading = styled.input`
  width: 240px;
  height: 38px;
  font-size: 1.2rem;
  border: 1px solid ${colors.primaryColor};
  padding-left: 8px;
  margin-left: 15px;
`;

const EditSubHeading = styled.h2`
  font-size: 1.1rem;
  font-weight: 400;
  grid-column: 1/3;
  align-items: center;
  padding-left: 15px;
`;

const EditCategoryWrapper = styled.div`
  grid-column: 3/6;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const EditDate = styled.input`
  width: 130px;
  height: 25px;
  grid-column: 3/6;
  border: 1px solid ${colors.primaryColor};
  ::-webkit-datetime-edit-fields-wrapper {
    border-color: ${colors.primaryColor};
  }
  ::-webkit-datetime-edit {
    padding: 1em;
  }
  ::-webkit-inner-spin-button {
    display: none;
  }
  ::-webkit-calendar-picker-indicator {
    background: ${colors.primaryColor};
    color: ${colors.secondaryColor};
  }
`;

const EditStartTime = styled.input`
  width: 80px;
  height: 25px;
  border: 1px solid ${colors.primaryColor};
  grid-column: 3/4;
  grid-row: 4/5;
  ::-webkit-datetime-edit {
    padding: 1em;
  }
  ::-webkit-inner-spin-button {
    display: none;
  }
`;

const EditEndTime = styled.input`
  width: 80px;
  height: 25px;
  border: 1px solid ${colors.primaryColor};
  grid-column: 3/6;
  grid-row: 4/5;
  justify-self: end;
  ::-webkit-datetime-edit {
    padding: 1em;
  }
  ::-webkit-inner-spin-button {
    display: none;
  }
`;

const SaveButton = styled(MethodButton)`
  grid-column: 2/4;
  grid-row: 6/7;
`;

const DiscardButton = styled(MethodButton)`
  grid-column: 3/5;
  grid-row: 6/7;
  justify-self: end;
`;

const EditTimeElement = styled.p`
  grid-column: 4/5;
  grid-row: 4/5;
`;

function DetailCard({ toggleModal, task }) {
  const [edit, setEdit] = useState(false);
  console.log(typeof task.date);
  if (edit) {
    return (
      <EditCard>
        <EditHeading type="text" value={task.heading} />
        <EditSubHeading>Category:</EditSubHeading>
        <EditCategoryWrapper>
          <CategoryButton>SWIM</CategoryButton>
          <CategoryButton>BIKE</CategoryButton>
          <CategoryButton>RUN</CategoryButton>
          <CategoryButton>STR</CategoryButton>
          <CategoryButton>STA</CategoryButton>
        </EditCategoryWrapper>

        <EditSubHeading>Date:</EditSubHeading>
        <EditDate type="date" value={task.date} />
        <EditSubHeading>Time:</EditSubHeading>
        <EditStartTime type="time" value={task.startTime} />
        <EditTimeElement>to</EditTimeElement>
        <EditEndTime type="time" value={task.endTime} />
        <SaveButton>Save</SaveButton>
        <DiscardButton>Discard</DiscardButton>
      </EditCard>
    );
  }
  return (
    <>
      <Card>
        <Heading>{task.heading}</Heading>
        <Button onClick={() => setEdit(true)}>
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
          {task.startTime} - {task.endTime}
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
