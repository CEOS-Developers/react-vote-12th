import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import VoteBox from "./components/VoteBox";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <Wrapper>
      <h1 style={{ color: "red" }}> 13기 프론트엔드 개발팀장은 누구!?</h1>
      <Route path="/login" exact component={LoginPage} />
      <Route path="/vote" exact component={VoteBox} />
      <Route path={["/", "/register"]} exact component={RegisterPage} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
