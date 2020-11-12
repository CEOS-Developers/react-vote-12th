import React from 'react';
import styled from 'styled-components';
import Candidate from './Candidate';
import { CANDIDATE_DUMMY } from './candidatedummy';

const CandidateBox = () => {
  return (
    <Wrapper>
      {CANDIDATE_DUMMY.map((c, index) => {
        return <Candidate key={index} voteCandidate={c} />;
      })}
    </Wrapper>
  );
};

export default CandidateBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`;
