import React from 'react';
import styled from 'styled-components';

export default function VoteCell(props) {
  return (
    <Wrapper>
      <Ranking>{props.index + 1}위:</Ranking>
      <Name>
        {props.children} [{props.voteCount}]
      </Name>
      <CompleteButton>투표하기</CompleteButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f3f3f3;

  border: solid 1px black;
  box-shadow: 0 4px 8px 0 rgba(69, 111, 128, 0.25);

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  font-weight: bold;
  font-size: 18px;
`;

const Ranking = styled.span`
  margin: 20px 15px;
`;

const Name = styled.div`
  margin: 20px 0px;
  position: absolute;
  left: 100px;
`;

const CompleteButton = styled.button`
  margin: 10px 30px;
  padding: 10px;

  background-color: blue;
  color: white;

  border: none;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(69, 111, 128, 0.25);
  border-radius: 25px;

  cursor: pointer;

  font-weight: bold;
`;
