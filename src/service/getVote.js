import axios from 'axios';

export default async function getVote(id, name, setIsModalOpen) {
  axios({
    method: 'get',
    url: `http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/vote?id=${id}`,
    headers: {
      Authorization: JSON.parse(localStorage.getItem('token')),
    },
  })
    .then(() => {
      alert(`${name}에게 투표 완료`);
    })
    .catch((err) => {
      // Error 처리 하는 부분
      const statusCode = parseInt(`${err}`.split(' ').pop());

      switch (statusCode) {
        case 401:
          setIsModalOpen(true);
          alert('로그인해주세요');
          break;
        case 500:
          alert('server error');
          break;
        default:
          break;
      }
    });
}
