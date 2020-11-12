import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

function Title() {
  return (
    <Wrapper>
      대망의 CEOS 프론트엔드 13기 개발팀장 투표
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 30px;
  color: pink;
  margin-bottom: 20px;
`;

export default Title;