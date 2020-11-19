import qs from 'querystring';
import axios from 'axios';

export default function postLogin(email, password, close, setCookie) {
  axios({
    method: 'POST',
    url: `http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/auth/login`,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify({
      email: `${email}`,
      password: `${password}`,
    }),
  })
    .then((response) => {
      close();
      setCookie('token', JSON.stringify(response.data));
      alert('로그인 완료!');
    })
    .catch((err) => {
      // Error 처리 하는 부분
      const statusCode = parseInt(`${err}`.split(' ').pop());

      switch (statusCode) {
        case 400:
          alert('전부 입력해주세요.');
          break;
        case 404:
          alert('이메일이 없습니다.');
          break;
        case 500:
          alert('server error');
          break;
        default:
          break;
      }
    });
}
