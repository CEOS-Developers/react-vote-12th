import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

function Candidate({ name, voteCount, cid, rank, vote }) {
  function clickTest() {
    vote(cid, name);
  }

  return (
    <Wrapper>
      <span>{rank+1}위:</span>
      <CandidateAndVote>
        {name}[{voteCount}표]
        <VoteButton type='button' onClick={clickTest}>투표</VoteButton>
      </CandidateAndVote>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CandidateAndVote = styled.div`
  width: 30%;
  text-align: right;
`;

const VoteButton = styled.button`
`;

export default Candidate;