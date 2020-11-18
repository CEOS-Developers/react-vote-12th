import React from 'react';
import styled from 'styled-components';
import { Link, Switch, Route } from 'react-router-dom';
import VoteHeader from '../VoteHeader';
import CandidateBox from '../CandidateBox';
import MenuBar from '../MenuBar';
import Signup from '../Signup';
import Login from '../Login';

const VotePage = () => {
  return (
    <>
      <MenuBar />
      <Switch>
        <Route exact path="/">
          <VoteContainer>
            <VoteHeader />
            <CandidateBox />
          </VoteContainer>
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
};

export default VotePage;

const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  height: 100%;
  border: 1px solid black;
`;
