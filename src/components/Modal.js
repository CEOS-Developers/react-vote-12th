import React, { useState } from 'react';
import styled from 'styled-components';
import qs from 'querystring';
import axios from 'axios';

export default function Modal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChanged = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChanged = (event) => {
    setPassword(event.target.value);
  };

  /**
   * user@test.com
   * secret
   */

  const handleClickLoginButton = () => {
    axios({
      method: 'POST',
      url: `http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/auth/login`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify({
        email: `${email}`,
        password: `${password}`,
      }),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        // Error 처리 하는 부분
        console.log(`err: ${err}`);
      });
  };

  return (
    <Wrapper>
      <TextField value={email} onChange={handleEmailChanged} placeholder="아이디를 입력해주세요." />
      <TextField
        type="password"
        value={password}
        onChange={handlePasswordChanged}
        placeholder="비밀번호를 입력해주세요."
      />
      <HStack>
        <GoToSignupButton>계정 만들기</GoToSignupButton>
        <LoginButton onClick={handleClickLoginButton}>로그인</LoginButton>
      </HStack>
    </Wrapper>
  );
}

const Wrapper = styled.h1`
  padding: 200px 0;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const TextField = styled.input`
  padding: 10px 16px;
  margin: 5px;
  width: 50%;

  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  background-color: #ededed;

  font-size: 15px;
  outline: none;
`;

const HStack = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const GoToSignupButton = styled.button`
  margin: 5px;
  width: 30%;
  height: 40px;

  background-color: black;
  color: white;

  border: none;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(69, 111, 128, 0.25);
  border-radius: 10px;

  cursor: pointer;

  font-weight: bold;
  font-size: 14px;
`;

const LoginButton = styled.button`
  margin: 5px;
  width: 30%;
  height: 40px;

  background-color: black;
  color: white;

  border: none;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(69, 111, 128, 0.25);
  border-radius: 10px;

  cursor: pointer;

  font-weight: bold;
  font-size: 12px;

  background-color: black;
  color: white;

  border: none;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(69, 111, 128, 0.25);
  border-radius: 10px;

  cursor: pointer;

  font-weight: bold;
  font-size: 14px;
`;
