import React from 'react';
import styled from 'styled-components';

import VotePage from './pages/VotePage';

export default function App() {
  return (
    <Wrapper>
      <VotePage />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  max-width: 36rem;
  height: fit-content;
  min-height: 100vh;
  margin: 0px auto;
  position: relative;
  z-index: 100;
`;
