import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import CandidateStatus from './CandidateStatus.js';
import LoginInput from './LoginInput';
import { useCookies } from 'react-cookie';

export default function VoteScreen() {
  const [candidates, setCandidates] = useState(null);
  const [cookies, removeCookie] = useCookies(['token']);

  useEffect(() => {
    const getCandidateList = async () => {
      try {
        const response = await axios.get(
          'http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/candidates'
        );
        setCandidates(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getCandidateList();
  
  }, [candidates]);

  if (!candidates) {
    return null;
  }

  candidates.sort((a, b) => b.voteCount - a.voteCount);

  return (
    <Wrapper>
      <Intro>CEOS 프론트앤드 13기 개발팀장을 뽑자 🎉</Intro>
      <LoginInput></LoginInput>
      {candidates.map((candidate, index,cookies) => {
        return (
          <CandidateStatus
            key={candidate.id}
            candidate={candidate}
            order={index + 1}
            cookies={cookies}
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
