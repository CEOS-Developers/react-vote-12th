import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function VoteCell(props) {
  const { index, person, vote } = props;
  const { id, name, voteCount } = person;

  const voteToCandidate = () => {
    // GET , VOTE
    axios({
      method: 'get',
      url: `http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:2020/vote?id=${id}`,
      responseType: 'stream',
    })
      .then((response) => {
        const { status } = response;
        console.log(status);
        switch (status) {
          case 200:
            alert(`${name}에게 투표 완료`);
            vote();
            break;
          case 400:
            alert('권한 없음');
            break;
          case 500:
            alert('서버 오류');
            break;
          default:
            break;
        }
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  };

  return (
    <Wrapper>
      <Ranking>{index + 1}위:</Ranking>
      <Name>
        {name} [{voteCount}]
      </Name>
      <CompleteButton onClick={voteToCandidate}>투표하기</CompleteButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f3f3f3;

  border: solid 1px black;
  box-shadow: 0 4px 8px 0 rgba(69, 111, 128, 0.25);

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  font-weight: bold;
  font-size: 18px;
`;

const Ranking = styled.span`
  margin: 20px 15px;
`;

const Name = styled.div`
  margin: 20px 0px;
  position: absolute;
  left: 100px;
`;

const CompleteButton = styled.button`
  margin: 10px 30px;
  padding: 10px;

  background-color: blue;
  color: white;

  border: none;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(69, 111, 128, 0.25);
  border-radius: 25px;

  cursor: pointer;

  font-weight: bold;
`;
