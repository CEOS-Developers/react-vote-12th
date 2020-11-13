import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Candidate from './Candidate';
import axios from 'axios';
import { url } from './url';

const CandidateBox = () => {
  const [voteCandidate, setVoteCandidate] = useState('');
  const getCandidates = async () => {
    try {
      const Candidates = await axios.get(`${url}/candidates`);
      setVoteCandidate(Candidates.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getCandidates();
  }, []);

  return (
    <Wrapper>
      {voteCandidate &&
        voteCandidate
          .sort((a, b) => {
            return b.voteCount - a.voteCount;
          })
          .map((c, index) => {
            return (
              <Candidate
                key={index}
                id={c.id}
                candidateName={c.name}
                voteCount={c.voteCount}
                getCandidates={getCandidates}
              />
            );
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
