# 5주차 미션: react-vote(with auth)

## 미션 스크린샷

- **초기화면**

  <img src="https://user-images.githubusercontent.com/56102421/99676330-b0e54b00-2abb-11eb-9365-d22e205b2fad.png" width="90%"/>

- **로그인 화면**

  <img src="https://user-images.githubusercontent.com/56102421/99676344-b6429580-2abb-11eb-8d75-aad0fcbec139.png" width="90%" />

- **회원가입화면**

  <img src="https://user-images.githubusercontent.com/56102421/99678980-c314b880-2abe-11eb-9179-ec70e83b7570.png" width="90%" />

- **로그인 한 후 화면**

  <img src="https://user-images.githubusercontent.com/56102421/99676680-26e9b200-2abc-11eb-82c6-e8a07b1e566d.png" width="90%" />

- **구동영상**

  <img src="https://user-images.githubusercontent.com/56102421/99677805-78467100-2abd-11eb-89a0-1dadcd1dd531.gif" width="90%" />

  

## Key Questions

1. 웹에서 사용되는 인증 방법인 Cookie, Session, JWT 인증 방식은 각각 무엇인가요?

   - 세션은 클라이언트가 로그인을 하면 서버에서 세션ID를 클라이언트마다 부여하고 서버쪽에서 세션 저장소에 저장하고 관리한다. 클라이언트는 세션ID를 받아 쿠키에 저장하고, `request` 를 보낼 때마다 쿠키(세션 ID)를 보낸다.
   - 쿠키는 클라이언트가 로그인을 하면 서버쪽에서 모든 사용자 인증 정보를 담은 쿠키를 생성 후 클라이언트에 전달하고 클라이언트에서 저장하고 관리한다. 
   - JWT는 클라이언트가 로그인을 하면 서버쪽에서 사용자 인증 정보를 암호화킨 토큰이라는 것을 발행하여 클라이언트에 전달하고, 클라이언트는 토큰을 쿠키(앱에선 자체 DB)에 저장한다. 다음 `request` 를 보낼 때 헤더값에 토큰 값을 담아 보낸다.

2. JWT를 이용하여 사용자를 인증하는 원리는 무엇인가요?

   - JWT란?
     - JWT는 `Header` + `Payload` + `Verify Signature` 로 이루어져 있다. 
     - Header엔 암호화하는 알고리즘, 타입, 인증시간 등 JWT에 대한 옵션이 들어간다.
     - Payload엔 사용자 정보가 들어간다.
     - Verify Signature는 Secretl key와 header의 alg에 정의된 알고리즘으로 암호화하여 생성된다. 
     - 이 세가지가 `.` 구분자를 이용하여 합쳐지면 JWT가 완성이 된다.
     - 이렇게 완성된 JWT는 헤더의 alg, kid속성과 secret key를 이용해 검증할 수 있다. 
     - [JWT](https://jwt.io) 에서 디버깅이 가능하다.
   - 인증절차
     - 클라이언트에서 로그인
     - 서버쪽에서 받은 아이디 비번을 통해 토큰 발행
     - 클라이언트로 발행한 토큰을 보내준다.
     - 클라이언트는 토큰을 저장하고, 인증이 필요한 모든 요청 API 헤더에 토큰을 넣어 보낸다.
   - 이야기 해보고 싶은 것.
     - Refresh Token(재발행 토큰) 도 같이 발행할 경우 작동되는 원리
       - Refresh Token은 DB에 저장해서 관리하나?
       - 토큰이 만료되었다면 저장해놓은 Refresh Token을 꺼내와서 자동으로 새로운 Token을 발행해주는 것인가?

3. JWT Token은 어디에 저장하는 것이 가장 안전하고, 그 이유는 무엇일까요?

   - 미션을 하면서 처음엔 `localStorage`에 저장했었지만 너무 뻔히 보이고, SPA가 아닌 어플리케이션 같은 경우엔 옮겨줘야 하는 불편함이 있을 거 같아 쿠키에 저장하였다.

4. CORS 정책과 CORS 문제는 무엇인가요?

   - Cross-Origin Resource Sharing 정책이다. 직독직해를 하면 '교차 출처 리소스 공유' 정책인데 서로 다른 서버에 `request` 를 할 때 **보안상의 이류로 교차 출처 HTTP 요청을 제한**하는 것이다.

   - 한 번 겪어본 적이 있는데 **react**는 http://localhost:3000, **nodejs**는 http://localhost:5000 으로 실행할 때, **서로 다른 origin을 가지기에** **react -> nodejs**로 CORS 정책에 의해 올바른 요청이 가지 못한다.

   - 해결방법

     - `http-proxy-middleware` 사용

       - 코드에 추가

       ```javascript
       const { createProxyMiddleware } = require('http-proxy-middleware');
       
       module.exports = function(app) {
         app.use(
           '/api',
           createProxyMiddleware({
             target: 'http://localhost:5000',
             changeOrigin: true,
           })
         );
       };
       ```

       - axios 요청 시 `/posts ` 추가

     - package.json에 proxy추가

       - create-react-app 로 제작된 프로젝트에서 가능한 방법

       - package.json에 proxy 추가

         ```json
         {
           proxy: 'http://localhost:5000'
         }
         ```

     - Express 서버 쪽에서 cors모듈 설치 후 app.js파일에 `app.use(cors())` 코드 추가