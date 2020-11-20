import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
export default function VoteBox() {
  const [voteDataList, setVoteDataList] = useState([]);

  useEffect(() => {
    const fetchVoteData = async () => {
      try {
        const { data } = await axios.get(
          "http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/candidates"
        );
        data.sort((a, b) => b.voteCount - a.voteCount);
        setVoteDataList(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchVoteData();
  }, []);

  const handleVoteCount = async (id, name) => {
    await axios
      .get(
        `http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/vote?id=${id}`
      )
      .then((response) => {
        console.log(response);
        alert(`${name}님께 투표 완료!`);
      })
      .catch((error) => {
        console.log(error);
        alert("투표 실패!");
      });

    const nextVoteDataList = voteDataList.map((data, index) => {
      if (data.id !== id) return data;
      return {
        ...data,
        voteCount: data.voteCount + 1,
      };
    });

    nextVoteDataList.sort((a, b) => b.voteCount - a.voteCount);

    setVoteDataList(nextVoteDataList);
  };

  const newVoteDataList = voteDataList.map((data, index) => {
    const { id, voteCount, name } = data;
    return (
      <VoteDataWrapper key={id}>
        <VoteDataList>
          {index + 1}위: {name} [{voteCount}표]{" "}
        </VoteDataList>
        <VoteButton onClick={() => handleVoteCount(id, name)}>투표</VoteButton>
      </VoteDataWrapper>
    );
  });

  return (
    <div>
      <h1 style={{ color: "red" }}> 13기 프론트엔드 개발팀장은 누구!?</h1>
      <ul>{newVoteDataList}</ul>
    </div>
  );
}

const VoteDataList = styled.li`
  list-style: none;
  display: flex;
`;

const VoteButton = styled.button`
  color: white;
  background-color: blue;
  border-radius: 7px;
  display: flex;
  margin-left: 30px;
`;
const VoteDataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
