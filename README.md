## 5주차 미션 : react-vote with auth

- 1. 웹에서 사용되는 인증 방법인 **Cookie, Session, JWT** 인증 방식은 각각 무엇인가요?
     HTTP 프로토콜의 특징
     (1) connectionless
     클라이언트와 서버가 요청과 응답을 한 번 주고받으면 연결이 끊김.
     서버는 클라이언트가 보낸 req에 맞게 res를 보내고 연결을 끊는다.
     (2) stateless
     통신이 끝나면 상태 정보를 유지하지 않는다.
     e.g 로그인 이후 다른 페이지로 넘어가면 다시 로그인을 해야 함.

     **Cookie**
     클라이언트에 저장.
     key-value로 저장.
     _동작방식_
     req -> 서버에서 쿠키 생성 후 클라이언트에 전달 (보통 클라이언트의 브라우저에 저장) -> 클라이언트가 요청을 보낼 때 쿠키 전송 -> 쿠키를 이용해 유저 인증 진행.

     _단점_ : (1) http request가 탈취당하면 cookie가 탈취당해 사용자 정보 유출 우려.
     (2) 쿠키를 http header에 추가하기 때문에 traffic 증가.

     **Session**
     cookie와 달리 서버 DB에 정보를 저장, 클라이언트는 HTTP session id를 쿠키로 저장.
     _동작방식_
     req -> 서버에서 session id 확인, 없으면 set-cookie로 새로 발행한 session-id 전송 -> 이후 http header에 session id를 포함시켜 req -> 서버는 session id로 클라이언트 상태 정보 유지.

     _단점_ : 서버 확장 어려움. 즉, 서버가 여러 개일 경우 서버끼리 같은 세션 공유 -> 세션 전용 db 유지 overhead 발생

     **JWT**
     Json Web Token의 약자.
     인증에 필요한 정보를 암호화한 토큰.

     _동작방식_
     req -> 서버에서 secret key를 이용해 토큰 발급 -> 클라이언트는 쿠키나 로컬스토리지 등에 저장, 요청시 토큰을 함께 전송. -> 서버는 토큰을 복호화하여 검증 -> 검증 완료시 res 전송.

     _장점_ : 사용자 쪽에서 토큰을 지니고 있으므로, 서버에서 사용자 정보를 기억하기 위해 사용하는 리소스가 적다. 서버가 여러 개로 늘어나도 서버끼리 사용자의 로그인 상태를 공유할 필요 없음.

- 2. JWT를 이용하여 사용자를 인증하는 원리는 무엇인가요?
     위 동작방식에 서술.

- 3. JWT Token은 어디에 저장하는 것이 가장 안전하고, 그 이유는 무엇일까요?
     local storage에 저장 : XSS(cross-site scripting)에 취약.

  cookie에 저장 : HttpOnly option을 줄 경우, js를 통한 쿠키에 접근 불가 -> XSS 공격 방어 가능.

- 4. CORS 정책과 CORS 문제는 무엇인가요?
     SOP 정책(same origin policy) : 웹 브라우저 보안을 위해 프로토콜, 호스트, 포트가 동일한 서버로만 ajax 요청을 주고 받을 수 있도록 한 정책.

  CORS 문제 : client는 port number를 3000으로, server는 8080 port로 실행한 후 client->server로 req를 보내면 발생.
  why? 같은 domain으로 요청을 보낸 것이 아니기 때문.

  이를 해결하기 위해 등장 : CORS 정책.
  CORS (Cross-Origin Resrc Sharing) : 추가 http 헤더를 사용해, 출처가 다른 domain에서의 요청이라도 서버에서 접근을 허용해줌.

  방법 (1) 서버 단 해결
  node.js express 미들웨어 CORS

  (2) 클라이언트 단 해결
  proxy 설정
