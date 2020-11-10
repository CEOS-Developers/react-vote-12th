import React from 'react';
import styled from 'styled-components';

import VoteScreen from './components/VoteScreen'

function App() {
  return (
    <Wrapper>
      {' '}
      <VoteScreen></VoteScreen>
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