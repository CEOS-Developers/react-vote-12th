import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { url } from './url';

const qs = require('querystring');

const Signup = () => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeUser = (e) => {
    setUser(e.target.value);
  };

  const handleOnSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${url}/auth/signup`,
        qs.stringify({
          email: email,
          password: password,
          name: user,
        }),
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
          },
        }
      );
      alert('회원가입이 완료되었습니다.');
      return history.push('/login');
    } catch (e) {
      console.error(e);
      alert('회원가입 중 오류가 났습니다!!');
    }
  };

  return (
    <Wrapper>
      <SignupForm onSubmit={handleOnSignup}>
        <InputContainer>
          <InputLabel>이메일</InputLabel>
          <InputFrame
            type="email"
            value={email}
            onChange={onChangeEmail}
          ></InputFrame>
        </InputContainer>
        <InputContainer>
          <InputLabel>비밀번호</InputLabel>
          <InputFrame
            type="password"
            value={password}
            onChange={onChangePassword}
          ></InputFrame>
        </InputContainer>
        <InputContainer>
          <InputLabel>이름</InputLabel>
          <InputFrame value={user} onChange={onChangeUser}></InputFrame>
        </InputContainer>
        <ButtonContainer>
          <SignupButton>회원가입</SignupButton>
        </ButtonContainer>
      </SignupForm>
    </Wrapper>
  );
};

export default Signup;
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
