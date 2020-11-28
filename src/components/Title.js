import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Title() {
  return (
    // 새로고침 해야만 /로 넘어가지는 이유는 ?
    <TitleText to="/">    
      대망의 CEOS 프론트엔드 13기 개발팀장 투표
    </TitleText>
  );
};

const TitleText = styled(Link)`
  font-size: 30px;
  color: pink;
  margin-top: 50px;
  margin-bottom: 20px;
  text-decoration: none;
`;

export default Title;