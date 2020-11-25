import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {register} from '../axios/auth'
import {withRouter} from 'react-router-dom';


const SignupScreen=({history})=> {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordsCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);


  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangePasswordCheck = (e) => {
    setPasswordError(e.target.value !== password);
    setPasswordsCheck(e.target.value);
  };

  const onClickRegisterButton=(e)=>{
    e.preventDefault();
    register(email,password,name);
    history.push('/');
  }

  return (
    <Wrapper>
      <h3>회원가입</h3>
      <IDInput
        type='text'
        name="name"
        placeholder='name'
        value={name}
        onChange={onChangeName}
      ></IDInput>
      <PasswordInput
        type='password'
        name="password"
        placeholder='PASSWORD'
        value={password}
        onChange={onChangePassword}
      ></PasswordInput>
      <PasswordVerifyingInput
        type='password'
        name="passwordCheck"
        placeholder='VERIFY PWD'
        value={passwordCheck}
        onChange={onChangePasswordCheck}  
      ></PasswordVerifyingInput>
      {passwordError && <h5>비번이 일치해야함</h5>}
      <EmailInput
        type='text'
        name="email"
        placeholder='Email'
        value={email}
        onChange={onChangeEmail}
      ></EmailInput>
      <SignUpButton onClick={onClickRegisterButton}>회원가입</SignUpButton>
    </Wrapper>
  );
}
export default withRouter(SignupScreen);

const Wrapper = styled.div`
  height: 100vh;
  & * {
    font-family: 'Jua', sans-serif;
  }
`;

const IDInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 5px;
  margin-right: 70%;
  width: 180px;
  margin-top: 15px;
`;

const PasswordInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-right: 70%;
  padding: 5px;
  width: 180px;
  margin-top: 15px;
`;

const PasswordVerifyingInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-right: 70%;
  padding: 5px;
  width: 180px;
  margin-top: 15px;
`;

const EmailInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-right: 70%;
  margin-top: 15px;
  padding: 5px;
  width: 180px;
`;

const SignUpButton = styled.button`
  height: 30px;
  margin-top: 10px;
  margin-right: 80%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;


//뻘짓 아까워서//



  /*

    const onSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
  };

  const dispatch = useDispatch();
  const { form,auth,authError,user } = useSelector(({ auth,user}) => ({
    form: auth.register,
    auth:auth.auth,
    authError:auth.authError,
    user:user.user
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      })
    );
  };


  const onSubmit = (e) => {
    e.preventDefault();
    const {id,password,passwordCheck}=form;
    if (form.password !== form.passwordCheck) {
      return setPasswordError(true);
    }
    dispatch(register({email,password,id}))
    //onClick();
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  useEffect(() => {
    if(authError){
      console.log('eror');
      console.log(authError)
      return;
    }
    if(auth){
      console.log('회원가입 성공');
      console.log(auth);
      dispatch(check());
    }
  }, [auth,authError]);

  useEffect(()=>{
    if(user){
      console.log('check api success');
      console.log(user);
      history.pushState('/');
    }
  },[user]);

  */