import React from "react";
import VoteBox from "./components/VoteBox";
import styled from "styled-components";

function App() {
  return (
    <>
      <Wrapper>
        <h1 style={{ color: "red" }}> 13기 프론트엔드 개발팀장은 누구!?</h1>
        <VoteBox />
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
