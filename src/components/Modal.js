import React, { useState } from 'react';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';

import postLogin from '../service/postLogin';
import postSignUp from '../service/postSignup';

export default function Modal({ isOpen, close }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSignup, setIsSignUp] = useState(false);
  const [cookies, setCookie] = useCookies(['token']);

  const handleEmailChanged = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChanged = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChanged = (event) => {
    setName(event.target.value);
  };

  /**
   * user@test.com
   * secret
   */
  const handleGoToSignupButton = () => {
    isSignup ? setIsSignUp(false) : setIsSignUp(true);
  };

  const handleClickCheckButton = () => {
    isSignup ? postSignUp(email, password, name, setIsSignUp) : postLogin(email, password, close, setCookie);
  };

  return (
    <>
      {isOpen && (
        <>
          <Wrapper
            onClick={() => {
              setIsSignUp(false);
              close();
            }}
          />
          <>
            <ModalPage>
              <TextField value={email} onChange={handleEmailChanged} placeholder="이메일를 입력해주세요." />
              <TextField
                type="password"
                value={password}
                onChange={handlePasswordChanged}
                placeholder="비밀번호를 입력해주세요."
              />
              {isSignup && <TextField value={name} onChange={handleNameChanged} placeholder="이름을 입력해주세요." />}
              <HStack>
                <GoToSignupButton onClick={handleGoToSignupButton}>
                  {isSignup ? '뒤로가기' : '계정 만들기'}
                </GoToSignupButton>
                <CheckButton onClick={handleClickCheckButton}>{isSignup ? '회원가입' : '로그인'}</CheckButton>
              </HStack>
            </ModalPage>
          </>
        </>
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
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const GoToSignupButton = styled.button`
  margin: 5px;
  padding: 8px 16px;

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

const CheckButton = styled.button`
  margin: 5px;
  padding: 8px 16px;

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
