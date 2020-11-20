import React, { useState } from 'react';
import axios from 'axios';
import qs from 'querystring';
import styled from 'styled-components';
const signupURL = 'http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/auth/signup'
function SignUpPage({setIsSignUpFinished}){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleSignUpButtonClick = () => {
        axios({
            method: 'post', url: signupURL,
            data: qs.stringify({
                name: name,
                email: email,
                password: password
            }),
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        })
        .then (() => {
            alert('회원가입 성공');
            setIsSignUpFinished('true');
            
        })
        .catch((err) => {
            alert('회원가입 실패');
        });
    }
    return(
        <Wrapper>
            <Title>회원가입</Title>
            <EachField>
                이름
                <InputField value={name} onChange={handleNameChange} placeholder="이름을 입력하세요"/>
            </EachField>
            <EachField>
                이메일
                <InputField value={email} onChange={handleEmailChange} placeholder="이메일을 입력하세요"/>
            </EachField>
            <EachField>
                비밀번호
                <InputField type="password" value={password} onChange={handlePasswordChange} placeholder="비밀번호를 입력하세요"/>
            </EachField>
            <SignUpButton onClick={handleSignUpButtonClick}>회원가입</SignUpButton>
        </Wrapper>
    )
}
export default SignUpPage;
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
const SignUpButton = styled.button`
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