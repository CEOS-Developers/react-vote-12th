import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import qs from 'querystring';
import styled from 'styled-components';
const loginURL = 'http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/auth/login'
function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [shouldRememberEmail, setShouldRememberEmail] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['rememberEmail']);
    useEffect(() => {
        if(cookies.rememberEmail){
            setEmail(cookies.rememberEmail);
            setShouldRememberEmail(true);
        }
    }, []);
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleEmailRememberButtonClick = (e) => {
        setShouldRememberEmail(e.target.check);
        if(e.target.check){
            setCookie('rememberEmail', email, {maxAge: 2000});
        }
        else{
            removeCookie('rememberEmail');
        }
    }
    const handleLoginButtonClick = () => {
        axios({
            method: 'post', url: loginURL,
            data: qs.stringify({
                email: email,
                password: password
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        })
        .then ((response) => {
            setCookie('token', JSON.stringify(response.data));
        })
        .catch (() => {
            alert('로그인 실패');
        })
    }
    return(
        <Wrapper>
            <Title>로그인</Title>
            <EachField>
                이메일
                <InputField value={email} onChange={handleEmailChange} placeholder="이메일을 입력하세요"/>
            </EachField>
            <EachField>
                비밀번호
                <InputField type="password" value={password} onChange={handlePasswordChange} placeholder="비밀번호를 입력하세요"/>
            </EachField>
            <IsEmailRememberCheckBox>
                <input type="checkbox" onChange={handleEmailRememberButtonClick} checked={isEmailRemember}/>
                이메일 저장하기
            </IsEmailRememberCheckBox>
            <LoginButton onClick={handleLoginButtonClick}>로그인</LoginButton>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
    font-family: 'Do Hyeon', sans-serif;
    font-size: 20px;
    position: relative;
    width: 300px;
    height: 200px;
    padding-top: 10px;
`;
const Title = styled.h3`
    font-weight: normal;
    margin: 0 0 20px 0;
`;
const EachField = styled.div`
   position: relative;
   margin: 5px 0 5px 0;
`;
const InputField = styled.input`
    position: absolute; 
    right: 0;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 6px;
    height: 9px;
    &::placeholder {
        font-family: 'Do Hyeon', sans-serif;
        font-size: 17px;
    }
    &:focus{
        outline: none;
    }
`;
const IsEmailRememberCheckBox = styled.div`
    position: absolute; 
    right: 0;
`;
const LoginButton = styled.button`
    font-family: 'Do Hyeon', sans-serif;
    font-size: 17px;
    position: absolute;
    right: 0;
    bottom: 10px;
    border: 1px solid skyblue;
    color: skyblue;
    background-color: white;
    border-radius: 5px;
    &:hover{
        color: white;
        background-color: skyblue;
    }
    &:focus{
        outline: none;
    }
`;
export default LoginPage;