import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import VotePage from './components/pages/VotePage';

function App() {
  return (
    <Wrapper>
      <Router>
        <VotePage />
      </Router>
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div``;
