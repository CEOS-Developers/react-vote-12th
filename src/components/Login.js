import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { url } from './url';

const qs = require('querystring');

const Login = () => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleOnLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${url}/auth/login`,
        qs.stringify({
          email: email,
          password: password,
        }),
        {
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
        }
      );
      if (data) {
        axios.defaults.headers.common['Authorization'] = data;
      }
      alert('로그인에 성공했습니다.');
      return history.push('/');
    } catch (e) {
      console.error(e);
      alert('로그인 중 오류가 났습니다!!');
    }
  };

  return (
    <Wrapper>
      <SignupForm onSubmit={handleOnLogin}>
        <InputContainer>
          <InputLabel>이메일</InputLabel>
          <InputFrame value={email} onChange={onChangeEmail}></InputFrame>
        </InputContainer>
        <InputContainer>
          <InputLabel>비밀번호</InputLabel>
          <InputFrame
            type="password"
            value={password}
            onChange={onChangePassword}
          ></InputFrame>
        </InputContainer>
        <ButtonContainer>
          <SignupButton>로그인</SignupButton>
        </ButtonContainer>
      </SignupForm>
    </Wrapper>
  );
};

export default Login;
const Wrapper = styled.div`
  display: flex;
  margin: 20px;
  justify-content: center;
  align-items: center;
`;

const SignupForm = styled.form``;

const InputFrame = styled.input`
  padding: 5px;
  width: 200px;
  height: 25px;
  border: 1px solid black;
  border-radius: 10px;
`;

const SignupButton = styled.button`
  display: flex;
  width: 70px;
  height: 32px;
  padding: 2px;
  border: 1px solid black;
  border-radius: 10px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`;
const InputLabel = styled.div`
  width: 100px;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
