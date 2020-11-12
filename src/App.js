import React from "react";
import VoteBox from "./components/VoteBox";
function App() {
  /*
candidates
data: Array(10)
0: {id: 1, name: "정시원", voteCount: 38}
1: {id: 2, name: "고은", voteCount: 14}
2: {id: 3, name: "유현우", voteCount: 3}
3: {id: 4, name: "김진오", voteCount: 3}
4: {id: 5, name: "문상빈", voteCount: 6}
5: {id: 6, name: "문상진", voteCount: 5}
6: {id: 7, name: "서유빈", voteCount: 41}
7: {id: 8, name: "이재용", voteCount: 6}
8: {id: 9, name: "장창훈", voteCount: 8}
9: {id: 10, name: "황유나", voteCount: 4}
*/

  return (
    <div>
      {" "}
      12기 프론트엔드 개발팀장 투표 ^.^
      <VoteBox />
    </div>
  );
}

export default App;
