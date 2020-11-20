import React from "react";
import axios from "axios";
import qs from "qs";
export default function RegisterPage() {
  const loginData = {
    email: "sangbeen123123@naver.com",
    password: "1234",
    name: "sangbeeeeen",
  };
  const loginOption = {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: qs.stringify(loginData),
    url:
      "http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/auth/signup",
  };

  //서버에 리퀘스트를 날림.

  const handleRegister = async () => {
    await axios(loginOption).then((response) => {
      console.log("signup result", response);
    });
  };
  handleRegister();
  return <div>회원가입 페이지</div>;
}
