import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { signInAPI } from '../api';
import Cookies from 'js-cookie';

function SignIn({ history }) {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = async ({ email, password }) => {
    const { success, token } = await signInAPI({ email, password });
    if (success) {
      Cookies.set('session', token.split(' ')[1]);
      history.push('/user');
    }
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>로그인</legend>
          <div className="column">
            <label htmlFor="email">이메일</label>
            <input
              type="text"
              id="email"
              name="email"
              ref={register({
                required: '필수 입력사항 입니다.',
              })}
              placeholder="이메일을 입력해주세요"
            />
            <p className="notice">{errors.email && '오류: 필수 입력사항입니다.'}</p>
          </div>
          <div className="column">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              ref={register({
                required: '필수 입력사항 입니다.',
              })}
              placeholder="비밀번호를 입력해주세요"
            />
          </div>
        </fieldset>
        <button type="submit" className="submit-btn">
          확인
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 30px;
  color: pink;
  margin-bottom: 20px;
`;

export default SignIn;