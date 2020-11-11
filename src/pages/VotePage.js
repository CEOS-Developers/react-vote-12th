import React, { useState } from 'react';
import styled from 'styled-components';

import VoteCell from '../components/VoteCell';

export default function VotePage() {
  const [candidates, setCandidates] = useState(['정시원', '고은', '유현우', '짱구', '맹구', '철수', '퉁퉁이']);

  const candidatesList = () => {
    return candidates.map((person) => {
      return <VoteCell>{person}</VoteCell>;
    });
  };
  return (
    <Wrapper>
      <Title>Q. 13기 프론트엔드 팀장은 누구?</Title>
      <SubTitle>CEOS 프론트엔드 13기 개발팀장 투표 창입니다.</SubTitle>
      <VoteBox>{candidatesList}</VoteBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f2f2f2;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0;

  margin: 20px 10px;
`;

const SubTitle = styled.h5`
  margin: 0;
  padding: 0;

  margin: 0 10px;
`;

const VoteBox = styled.div`
  margin: 0;
  padding: 0;

  background-color: red;
`;
