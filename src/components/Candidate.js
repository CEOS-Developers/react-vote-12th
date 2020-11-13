import React from 'react';
import styled from 'styled-components';
import { url } from './url';
import axios from 'axios';

const Candidate = ({ candidateName, voteCount, id, getCandidates }) => {
  const getVote = async (id) => {
    try {
      const vote = await axios.get(`${url}/vote`, {
        params: {
          id: id,
        },
      });
      getCandidates();
    } catch (e) {
      console.error(e);
    }
  };

  const onClick = () => {
    getVote(id);
  };
  return (
    <Wrapper>
      <CandidateName>{candidateName}</CandidateName>
      <VoteCount>{voteCount}</VoteCount>
      <VoteButton onClick={onClick}>투표</VoteButton>
    </Wrapper>
  );
};

export default Candidate;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  font-size: 22px;
  font-weight: 600;
`;
const CandidateName = styled.div`
  width: 150px;
`;
const VoteCount = styled.div`
  display: flex;
  flex: 0 0 50px;
  justify-content: flex-end;
`;

const VoteButton = styled.div`
  height: 30px;
  width: 50px;
  padding-top: 5px;
  margin-left: 20px;
  border: 1px solid black;
  font-size: 20px;
  border-radius: 10px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    background-color: blue;
    color: white;
  }
`;
