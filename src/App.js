import React from 'react';
import styled from 'styled-components';
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

import VoteScreen from './components/VoteScreen'
import SignupScreen from './components/SignupScreen'
function App() {
  return (
    <Wrapper>
      {' '}
      <Router>
      <Route component={VoteScreen} exact path="/"/>
      <Route component={SignupScreen} path="/signup"/>

      </Router>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
 
  height: 100vh;
  & * {
    font-family: sans-serif;
  }
`;