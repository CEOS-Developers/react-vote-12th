import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import qs from "qs";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Nav } from "./styles/element";
import { useCookies } from "react-cookie";
export default function LoginPage({ handleRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const [cookies, setCookie] = useCookies(["token"]);

  //이거 효율적으로 짤 수 있는 방법이 없을까..?
  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const inputData = {
      email,
      password,
    };
    const dataToSend = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify(inputData),
      url:
        "http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/auth/login",
    };

    await axios(dataToSend).then((res) => {
      //   if (res.status === 201) {
      alert("로그인 성공!");
      setCookie("token", res, { path: "/" });
      history.push("/vote");
      //   } else {
      //     //실패하면 그냥 에러가 뜬다... ㅠㅠ
      //     alert("로그인 실패!");
      //     console.log(res);
      //     setEmail("");
      //     setPassword("");
      //   }
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
        <Nav>
          <Button onClick={handleLogin}>로그인</Button>
          <Button>
            <Link to="/register">
              새로운 <br />
              계정생성
            </Link>
          </Button>
        </Nav>
      </Form>
    </div>
  );
}
