import React from 'react';
import styled from 'styled-components';

const Candidate = ({ voteCandidate }) => {
  return <Wrapper>{voteCandidate}</Wrapper>;
};

export default Candidate;

const Wrapper = styled.div`
  margin: 20px;
  font-size: 20px;
  font-weight: 500;
`;
