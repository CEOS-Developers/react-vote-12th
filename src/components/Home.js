import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Wrapper>
      Home <br></br>
      <SignsLink to="/signup">
          회원가입
      </SignsLink>
      <SignsLink to="/signin">
          로그인
      </SignsLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 30px;
  color: pink;
  margin-bottom: 20px;
`;

const SignsLink = styled(Link)`
  font-size: 100px;
`;

export default Home;