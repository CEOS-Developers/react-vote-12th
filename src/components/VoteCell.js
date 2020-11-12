import React from 'react';
import styled from 'styled-components';

export default function VoteCell(props) {
  return (
    <Wrapper>
      <Name>{props.children}</Name>
      <Number>{props.number}</Number>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f3f3f3;

  border: 1px black;
`;

const Name = styled.div`
  margin: 20px 15px;
`;

const Number = styled.div``;
