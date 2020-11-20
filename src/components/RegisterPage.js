import React, { useState } from "react";
import axios from "axios";
import qs from "qs";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "./styles/element";
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
    const inputData = {
      email,
      password,
      name,
    };
    const dataToSend = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify(inputData),
      url:
        "http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/auth/signup",
    };

    await axios(dataToSend).then((res) => {
      if (res.status === 201) {
        alert("회원가입 성공!");
        console.log(res);
        history.push("/login");
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
