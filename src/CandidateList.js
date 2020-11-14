import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CandidateCard from './CandidateCard';

function CandidateList() {
    const [candidates, setCandidates] = useState(null);
    async function getCandidates() {
        const { data } = await axios.get(
            'http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:2020/candidates'
        );
        setCandidates(data);
    }
    useEffect(() => {
        getCandidates();
    }, [candidates]);
    return(
        <Wrapper>
            <Title>CEOS 프론트엔드 13기 개발팀장 투표 창입니다.</Title>
            <ListWrapper>
                {
                candidates &&
                candidates
                .sort((c1,c2) => c2.voteCount - c1.voteCount)
                .map((candidate, index) => {
                    return(
                        <CandidateCard candidate = {candidate} index = {index}/>
                    );
                })}
            </ListWrapper>
        </Wrapper>
    );
}
export default CandidateList;
const Wrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
    font-family: 'Do Hyeon', sans-serif;
    position: absolute;
    top:0;right:0;bottom:0;left:0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    font-weight: normal;
    margin-bottom: 50px;
`;
const ListWrapper = styled.div`
    border: 1px solid;
    padding: 20px;
    width: 50%;
    max-width: 400px;
`;