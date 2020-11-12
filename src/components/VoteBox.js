import React, { useState, useEffect } from "react";
import axios from "axios";
export default function VoteBox() {
  const [voteDataList, setVoteDataList] = useState([]);

  useEffect(() => {
    const fetchVoteData = async () => {
      try {
        const response = await axios.get(
          "http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:2020/candidates"
        );
        setVoteDataList(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchVoteData();
  }, []);

  console.log(voteDataList);
  const newVoteDataList = voteDataList.map((data, index) => (
    <li key={data.id}>
      {index + 1}위: {data.name} [{data.voteCount}표] <button>투표</button>
    </li>
  ));

  return (
    <div>
      <ul>{newVoteDataList}</ul>
    </div>
  );
}
