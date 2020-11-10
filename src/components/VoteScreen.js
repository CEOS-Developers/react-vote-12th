import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import CandidateStatus from './CandidateStatus.js';

export default function VoteScreen() {
  const [candidates, setCandidates] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:2020/candidates'
        );
        setCandidates(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [candidates]);

  if (!candidates) {
    return null;
  }

  candidates.sort((a, b) => b.voteCount - a.voteCount);

  return (
    <Wrapper>
      <Intro>CEOS 프론트앤드 13기 개발팀장을 뽑자 🎉</Intro>
      {candidates.map((candidate, index) => {
        return (
          <CandidateStatus
            key={candidate.id}
            candidate={candidate}
            order={index + 1}
          ></CandidateStatus>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  & * {
    font-family: 'Jua', sans-serif;
  }
`;

const Intro = styled.h2`
  color: pink;
`;
const CandidateOrder = styled.h2``;
