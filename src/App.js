import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Title from './Title';
import Candidate from './Candidate';

function App() {
  const [candidates, setCandidates] = useState([]);
  const [candidatesSorted, setCandidatesSorted] = useState([]);
  const [rerenderTrigger, setRerenderTrigger] = useState(true);
  let candidatesTemp = [];
  let sortedComponents = [];

  useEffect(() => {
    const getCandidate = async () => {
      const response = await axios.get(
        'http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:2020/candidates'
      );
      candidatesTemp = response.data;
      console.log('response : ', response);
      // setCandidates(response);
      // setCandidates([...candidates, {
      //   name: response,
      //   cid: cid,
      //   voteCount: 0
      // }]);
    }
    

    // for (let i=0; i<10; i++) {
    // }
    async function sortVotes() {
      // setCandidatesSorted(candidates);
      sortedComponents = candidatesTemp
        .sort((a, b) => {return b.voteCount - a.voteCount})
        // .map((cand, i) => { return <Candidate name={cand.name} 
        // voteCount={cand.voteCount} rank={i} />})
    }
    async function getAndSort() {
      await getCandidate();
      await sortVotes();
      console.log('sortedComponents : ', sortedComponents);
      setCandidates(sortedComponents);
    }
    getAndSort();
    
    // console.log('candidates : ', candidates);
  }, [rerenderTrigger]);

  async function vote(cid) {
    await axios.get(
      `http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:2020/vote?id=${cid}`
    );
    // rerenderTrigger = true ? setRerenderTrigger(false) : setRerenderTrigger(true);
    await setRerenderTrigger(rerenderTrigger ? false : true);
    console.log('@@@@@@@    Voted');
  }

  return (
    <Wrapper>
      <Title />
      <ul style={{listStyle: 'none'}}>
        <li>
          {candidates.map((cand, i) => { return ( <Candidate name={cand.name} 
          voteCount={cand.voteCount} cid={cand.id} rank={i} vote={vote} />)})}
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


export default App;
