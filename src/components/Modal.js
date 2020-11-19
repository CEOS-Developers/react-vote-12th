import React, { useState } from 'react';
import styled from 'styled-components';
import qs from 'querystring';
import axios from 'axios';

export default function Modal({ isOpen }) {
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
        localStorage.setItem('token', JSON.stringify(response.data));
      })
      .catch((err) => {
        // Error 처리 하는 부분
        console.log(`err: ${err}`);
      });
  };

  return (
    <>
      {isOpen && (
        <Wrapper>
          <ModalPage>
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
          </ModalPage>
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.16);
`;

const ModalPage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;

  padding: 50px;

  border-radius: 20px;
  transform: translate(-50%, -50%);

  width: 300px;
  height: 200px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const TextField = styled.input`
  padding: 10px 16px;
  margin: 5px;

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
  padding: 0 6px;
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
  padding: 0 6px;
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
