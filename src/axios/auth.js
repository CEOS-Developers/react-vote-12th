import axios from 'axios';
import qs from 'qs';

export const login = (email, password, setCookie) => {
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },

    data: qs.stringify({
      email: `${email}`,
      password: `${password}`,
    }),
    url: `http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/auth/login`,
  };
  axios(options)
    .then((res) => {
      alert('로그인을 축하드립니다');
      setCookie('token', JSON.stringify(res.data), { path: '/' });
    })
    .catch((err) => {
      console.log('login error!!', err);
    });
};

export const register = (email, password, name) => {
  //이거 data 형식 안되는 이유 확인
  // const data = { 'email': email, 'password': password, 'name': name };

  const options = {
    method: 'POST',
    url:
      'http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/auth/signup',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify({
      email: `${email}`,
      password: `${password}`,
      name: `${name}`,
    }),
  };
  axios(options)
    .then((res) => {
      alert('회원가입을 축하드립니다');
    })
    .catch((err) => {
      console.log('register error!!', err);
    });
};

export const votes=(cookies,id)=>{
  const options = {
    method: 'GET',
    headers: { Authorization: cookies.token },
   
    url:`http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/vote?id=${id}`
  };
  console.log("cookies",cookies);
  console.log("c token",cookies.token)
  axios(options)
    .then((res) => {
      alert('튜포성공');
    })
    .catch((err) => {
      alert('튜포실패 ');
      console.log('vote error!!', err);
    });
}