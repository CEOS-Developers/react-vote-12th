import axios from 'axios';

export default async function getCandidates(setCandidates) {
  // GET, Candidates
  const response = await axios({
    method: 'get',
    url: 'http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/candidates',
  });

  const { status, data } = response;

  switch (status) {
    case 200:
      // 투표순위대로 정렬
      data.sort((a, b) => b.voteCount - a.voteCount);
      setCandidates(data);
      break;
    case 400:
      alert('권한 없음');
      break;
    case 500:
      alert('서버 오류');
      break;
    default:
      break;
  }
}
