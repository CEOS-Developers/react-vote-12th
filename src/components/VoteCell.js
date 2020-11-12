import React from 'react';
import styled from 'styled-components';

export default function VoteCell({ children, voteCount, index }) {
  return (
    <Wrapper>
      <Ranking>{index + 1}위:</Ranking>
      <Name>
        {children} [{voteCount}]
      </Name>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f3f3f3;

  border: solid 1px black;
  box-shadow: 0 4px 8px 0 rgba(69, 111, 128, 0.25);

  display: flex;
  flex-direction: row;

  font-weight: bold;
  font-size: 18px;
`;

const Ranking = styled.span`
  margin: 20px 15px;
`;

const Name = styled.div`
  margin: 20px 15px;
`;

const Number = styled.span`
  margin: 20px 15px;
`;
