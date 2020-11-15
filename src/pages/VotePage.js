import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import VoteCell from '../components/VoteCell';

export default function VotePage() {
  const [candidates, setCandidates] = useState([]);

  async function getCandidates() {
    // GET, Candidates
    const response = await axios({
      method: 'get',
      url: 'http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:2020/candidates',
    });

    const { status, data } = response;

    switch (status) {
      case 200:
        // 투표순위대로 정렬
        data.sort((a, b) => b.voteCount - a.voteCount);
        setCandidates(data);
        break;
      case 400:
        alert('권한 없음');
        break;
      case 500:
        alert('서버 오류');
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    getCandidates();
  });

  const candidatesList = candidates.map((person, index) => {
    return <VoteCell {...{ key: index, rank: index, ...{ person } }} />;
  });

  return (
    <Wrapper>
      <Title>
        <RedColor>Q. 13기 프론트엔드 팀장</RedColor>은 누구?
      </Title>
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

  padding: 20px 10px;

  font-size: 20px;
`;

const RedColor = styled.span`
  color: red;
  font-weight: bold;
  font-size: 22px;
`;
const SubTitle = styled.h5`
  padding: 0;

  margin: 0 10px;
`;

const VoteBox = styled.div`
  margin: 30px 0;
  padding: 0;

  background-color: #f2f2f2;
  border: solid 1px black;
  box-shadow: 0 4px 8px 0 rgba(69, 111, 128, 0.25);
`;
