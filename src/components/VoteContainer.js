import React from 'react';
import styled from 'styled-components';
import VoteHeader from './VoteHeader';
import CandidateBox from './CandidateBox';

const VoteContainer = () => {
  return (
    <Wrapper>
      <VoteHeader />
      <CandidateBox />
    </Wrapper>
  );
};

export default VoteContainer;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  height: 100%;
  border: 1px solid black;
`;
