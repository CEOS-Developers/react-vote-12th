import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const CandidateStatus = ({ candidate, order }) => {
  const { id, name, voteCount } = candidate;
  const [vote, setVote] = useState(null);

  const onClickVote = () => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:2020/vote?id=${id}`
        );
      } catch (e) {
        console.log(e);
        alert(name + '님에게 투표실패ㅠㅠ');
      }
      alert(name + '님에게 투표성공!');
    };
    fetchData();
  };

  const orderMark = () => {
    let mark = '';
    if (order === 1) {
      order = `🏅`;
    } else if (order === 2) {
      order = `🥈`;
    } else if (order === 3) {
      order = `🥉`;
    } else {
      order = order + '.';
    }
  };

  orderMark();
  return (
    <EachCandidate>
      <Text>{order} </Text>
      <Text>{name}</Text>
      <Voted>{voteCount} 표</Voted>
      <VoteButton onClick={() => onClickVote()}>투표</VoteButton>
    </EachCandidate>
  );
};

const Wrapper = styled.div`
  height: 100vh;

  & * {
    font-family: sans-serif;
  }
`;

const Voted = styled.h3`
  grid-column: 4 / span 1;
`;
const Text = styled.h3`
  padding-left: 20px;
`;
const VoteButton = styled.button`
  background-color: #4caf50;
  grid-column: 10 / span 1;
  border-radius:30px;
  border: none;
  color: white;
  margin:10px 0px 10px 0px;
  padding: 10px 10px 10px 10px;
  text-align: center;
  font-family: Nanum Gothic;
  &:hover{
    font-weight:bold;
}
&:active{
    background-color: #3e8e41;

    transform: translateY(4px);
}
}
`;

const EachCandidate = styled.div`
  display: grid;

  grid-template-columns: repeat(12, 1fr);
  padding: 0px 10px 0px 10px;
  width: 100%;
  height: 100px & * {
    font-family: sans-serif;
  }
`;

export default CandidateStatus;
