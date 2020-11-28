import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <Wrapper>
      로그인부터 해주세요 !!!
      <Signs>
        <SignsLink to="/signup">
          회원가입
        </SignsLink>
        <SignsLink to="/signin">
          로그인
        </SignsLink>
      </Signs>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 30px;
  color: red;
  margin-top: 70px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Signs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
`;

const SignsLink = styled(Link)`
  font-size: 30px;
`;

export default Home;