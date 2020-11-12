import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

function Candidate({ name, voteCount, cid, rank, vote }) {
  function clickTest() {
    console.log('clickTest!!!');
    vote(cid);
  }

  return (
    <Wrapper>
      {rank+1}위:{name} [{voteCount}표]
      <VoteButton type='button' onClick={clickTest}>투표</VoteButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
`;

const VoteButton = styled.button`

`;

export default Candidate;