import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { signUpAPI } from '../api';

function SignUp({ history }) {
  const { handleSubmit, register, errors } = useForm();
  const [ alreadyExist, setAlreadyExist ] = useState(false);

  const onSubmit = async values => {
    const { success, message } = await signUpAPI(values);
    console.log(success, message);
    if (success) {
      history.push('/signIn');
    } else if (message === 'Email already exists.') {
      setAlreadyExist(true);  // message 체크 후 코드 변경해야 함.
    }
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>회원가입</legend>
          {alreadyExist && '이미 존재하는 아이디입니다.'}
          <div className="column">
            <label htmlFor="email">이메일</label>
            <input
              type="text"
              id="email"
              name="email"
              ref={register({
                required: '필수 입력사항 입니다.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: '유효하지 않는 이메일 형식입니다.',
                },
                maxLength: {
                  value: 20,
                  message: '글이 넘침',
                },
              })}
              placeholder="이메일을 입력해주세요"
            />
            <p className="notice">{errors.email && errors.email.message}</p>
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
          <div className="column">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              name="name"
              ref={register({
                required: '필수 입력사항 입니다.',
              })}
              placeholder="이름을 입력해주세요"
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

export default SignUp;