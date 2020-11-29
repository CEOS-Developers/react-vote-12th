import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import VoteBox from "./components/VoteBox";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <Wrapper>
      <Route path={["/login", "/"]} exact component={LoginPage} />
      <Route path="/vote" exact component={VoteBox} />
      <Route path="/register" exact component={RegisterPage} />
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
