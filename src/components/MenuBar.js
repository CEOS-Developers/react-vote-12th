import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (
    <MenuSet>
      <SignupButton>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          투표하기
        </Link>
      </SignupButton>
      <SignupButton>
        <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
          로그인
        </Link>
      </SignupButton>
      <SignupButton>
        <Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>
          회원가입
        </Link>
      </SignupButton>
    </MenuSet>
  );
};

export default MenuBar;

const MenuSet = styled.div`
  border-bottom: 1px solid gray;
`;

const SignupButton = styled.button`
  margin-left: 10px;
  width: 100px;
  height: 100px;
`;
