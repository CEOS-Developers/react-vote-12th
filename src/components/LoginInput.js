import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
//import {login,shit} from '../axios/auth'
import { useCookies } from 'react-cookie';
import qs from 'qs';

const LoginInput=({history})=> {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie,removeCookie] = useCookies(['token']);
  const [isLogin,setIsLogin]=useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const login=()=>{
    const options = {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' ,
      //'Access-Control-Allow-Credentials':true
    },
    credentials: 'same-origin',
      data: qs.stringify({
        email: `${email}`,
        password: `${password}`,
      
      }),
      url:`http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/auth/login`,
     
    };
    axios(options)
      .then((res) => {
        alert('로그인을 축하드립니다');
        //console.log("json",JSON.stringify(res.data));
  
        //set('token',JSON.stringify(res.data),{path:'/'});
        //return JSON.stringify(res.data);
        setCookie('token',JSON.stringify(res.data),{path:'/'});
          
      })
      .catch((err) => {
        console.log('login error!!', err);
      });
  }
  
  const onClickLoginButton=(e)=>{
    e.preventDefault();
    if(isLogin){//true, 로그아웃버튼클릭
      //removeCookie('token');
      setIsLogin(false);
      setEmail("");
      setPassword("")
    }else{
      console.log('로그인 요청',cookies)
     login();
      
      setIsLogin(true);
  
      console.log("in login",cookies);
    }
 
   

  }


  return (
    <Wrapper>
      <h2>{isLogin?'':'If you don\'t have account, please SignUP'}</h2>
      <LoginLine>
          <IDInput
            type='text'
            placeholder='email'
            name="email"
            value={email}
            onChange={onChangeEmail}
          ></IDInput>
          <PasswordInput
            type='password'
            name="password"
            placeholder='PASSWORD'
            value={password}
            onChange={onChangePassword}
          ></PasswordInput>
        <LoginButton onClick={onClickLoginButton}>{isLogin?'logout':'login'}</LoginButton>
        <StyledLink to='/signup'>
          <SignUpButton>SIGNUP</SignUpButton>
        </StyledLink>
      </LoginLine>
    </Wrapper>
  );
}

export default withRouter(LoginInput);
const Wrapper = styled.div`
  height: 10vh;
  margin-left: 30px;
  & * {
    font-family: 'Jua', sans-serif;
  }
`;
const LoginLine = styled.div`
  display: flex;
`;
const IDInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 5px;
`;

const PasswordInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-left: 15px;
  padding: 5px;
`;

const LoginButton = styled.button`
  margin-left: 15px;
  width:50px;
`;

const SignUpButton = styled.button`
  margin-left: 10px;
  padding-top:5px;
  padding-bottom:5px;
 
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


/**뻘짓 아까워서**/
/*
  const dispatch = useDispatch();
  const { form,auth,authError,user } = useSelector(({ auth,user }) => ({
    form: auth.login,
    auth:auth.auth,
    authError:auth.authError,
    user:user.user
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const {id,password}=form;
    dispatch(login({id,password}));
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if(authError){
      console.log('eror');
      console.log(authError)
      return;
    }
    if(auth){
      console.log('로그인 성공');
      console.log(auth);
      dispatch(check());
    }
  }, [auth,authError,dispatch]);

  useEffect(()=>{
    if(user){
      console.log(user);
      history.push('/');}
    },[history,user]);
    */
