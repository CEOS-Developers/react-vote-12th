import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
export default function VoteBox() {
  const [voteDataList, setVoteDataList] = useState([]);

  const sortVoteDataList = (dataList) => {
    const returnDataList = dataList
      .concat()
      .sort((a, b) => (a.voteCount > b.voteCount ? -1 : 1));
    return returnDataList;
  };

  useEffect(() => {
    const fetchVoteData = async () => {
      try {
        const response = await axios.get(
          "http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:2020/candidates"
        );
        const initialVoteDataList = sortVoteDataList(response.data);
        setVoteDataList(initialVoteDataList);
      } catch (e) {
        console.log(e);
      }
    };
    fetchVoteData();
  }, []);

  const sendVoteResult = async (id, name) => {
    try {
      const response = await axios.get(
        `http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:2020/vote?id=${id}`
      );
      //아 get으로도 보내는건가..? post를 안써도 되는거야?
      if (response) {
        alert(`${name}님께 투표 완료!`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleVoteButton = (id, name) => {
    sendVoteResult(id, name);
    const nextVoteDataList = voteDataList.map((data, index) => {
      if (data.id !== id) return data;
      return {
        ...data,
        voteCount: data.voteCount + 1,
      };
    });

    const sortedVoteDataList = sortVoteDataList(nextVoteDataList);

    setVoteDataList(sortedVoteDataList);
  };

  const newVoteDataList = voteDataList.map((data, index) => (
    <VoteDataWrapper>
      <VoteDataList key={data.id}>
        {index + 1}위: {data.name} [{data.voteCount}표]{" "}
      </VoteDataList>
      <VoteButton onClick={() => handleVoteButton(data.id, data.name)}>
        투표
      </VoteButton>
    </VoteDataWrapper>
  ));

  return (
    <div>
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
