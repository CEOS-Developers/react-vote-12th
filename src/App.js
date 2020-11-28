import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import User from './components/User';

import Title from './Title';
import Candidate from './Candidate';

function App() {
  const [candidates, setCandidates] = useState([]);
  const [rerenderTrigger, setRerenderTrigger] = useState(true);
  let candidatesData = [];
  let sortedCandidates = [];

  useEffect(() => {
    const getCandidate = async () => {
      try {
        const response = await axios.get(
          'http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/candidates'
        );
        candidatesData = response.data;
      } catch (e) {
        console.log('Candidates error : ', e);
      }
    }
    
    async function sortVotes() {
      sortedCandidates = candidatesData
        .sort((a, b) => {return b.voteCount - a.voteCount})
    }

    async function getAndSort() {
      await getCandidate();
      await sortVotes();
      setCandidates(sortedCandidates);
    }
    getAndSort();
  }, [rerenderTrigger]);

  async function vote(cid, name) {
    try {
      await axios.get(
        `http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/vote?id=${cid}`
      );
      await alert(`${name}님에게 투표 완료 !!!`);
      await setRerenderTrigger(rerenderTrigger ? false : true);
    } catch (error) {
      alert('투표를 실패하셨어요...');
      console.log('Vote error : ', error);
    }
  }

  return (
    <Wrapper>
      <Title />
      <Router>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/user" component={User} />
          <Route path="/" component={Home} />

          <ul style={{listStyle: 'none', width: '100%'}}>
            <li style={{width: '100%'}}>
              {candidates.map((cand, i) => { return ( <Candidate name={cand.name} 
              voteCount={cand.voteCount} cid={cand.id} rank={i} vote={vote} />)})}
            </li>
          </ul>
        </Switch>
      </Router>
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
