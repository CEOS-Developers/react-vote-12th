import qs from 'querystring';
import axios from 'axios';

export default function postSignup(email, password, name, setIsSignUp) {
  axios({
    method: 'POST',
    url: `http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/auth/signup`,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify({
      email: `${email}`,
      password: `${password}`,
      name: `${name}`,
    }),
  })
    .then((response) => {
      const { status } = response;
      switch (status) {
        case 201:
          setIsSignUp(false);
          alert('회원가입 성공');
          break;
        default:
          break;
      }
    })
    .catch((err) => {
      // Error 처리 하는 부분
      const statusCode = parseInt(`${err}`.split(' ').pop());

      switch (statusCode) {
        case 400:
          alert('전부 입력해주세요.');
          break;
        case 409:
          alert('중복된 이메일입니다.');
          break;
        case 500:
          alert('server error');
          break;
        default:
          break;
      }
    });
}
