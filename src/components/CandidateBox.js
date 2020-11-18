import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Candidate from './Candidate';
import { url } from './url';

const CandidateBox = () => {
  const [candidateList, setCandidateList] = useState('');
  const getCandidates = async () => {
    try {
      const { data } = await axios.get(`${url}/candidates`);
      setCandidateList(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCandidates();
  }, []);

  return (
    <Wrapper>
      {candidateList &&
        candidateList
          .sort((a, b) => {
            return b.voteCount - a.voteCount;
          })
          .map((candidate, index) => {
            return (
              <Candidate
                key={index}
                id={candidate.id}
                candidateName={candidate.name}
                voteCount={candidate.voteCount}
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
