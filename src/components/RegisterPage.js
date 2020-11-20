import React, { useState } from "react";
// import { browserHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import qs from "qs";
import { useHistory } from "react-router-dom";
export default function RegisterPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const history = useHistory();

  //서버에 리퀘스트를 날림.

  //이거 효율적으로 짤 수 있는 방법이 없을까..?
  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const handleNameInput = (event) => {
    setName(event.target.value);
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const loginData = {
      email,
      password,
      name,
    };
    const loginOption = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify(loginData),
      url:
        "http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/auth/signup",
    };

    await axios(loginOption).then((res) => {
      if (res.status === 201) {
        alert("회원가입 성공!");
        console.log(res);
        history.push("/vote");
      } else {
        //실패하면 그냥 에러가 뜬다... ㅠㅠ
        alert("회원가입 실패!");
        setEmail("");
        setPassword("");
        setName("");
      }
    });
  };

  return (
    <div>
      <Form>
        <Input placeholder="이메일" onChange={handleEmailInput} type="email" />
        <Input
          placeholder="패스워드"
          onChange={handlePasswordInput}
          type="password"
        />
        <Input placeholder="이름" onChange={handleNameInput} />
        <Button onClick={handleRegister}>회원가입</Button>
      </Form>
    </div>
  );
}

const Form = styled.form`
  width: 200px;
  height: 300px;

  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 180px;
  height: 50px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
  }
  margin: 20px;
`;
const Button = styled.button`
  width: 70px;
  height: 50px;
  border-radius: 10px;
  background-color: pink;
  margin-left: 20px;
  border: none;
  &:focus {
    outline: none;
  }
`;
