import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

function CandidateList() {
    const [candidates, setCandidates] = useState(null);
    async function getCandidates() {
        var data = await axios.get(
            'http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:2020/candidates'
        );
        setCandidates(data.data);
        console.log('받아옴');
    }
    function Vote(candidate) {
        async function UpdateVoteCount() {
            await axios.get(
                `http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:2020/vote?id=${candidate.id}` 
            )
            .then (function(response){
                alert(candidate.name + '님에게 투표 완료!');
            })
            .catch (function(error) {
                alert('투표 실패');
            });
        }
        UpdateVoteCount();
    }
    useEffect(() => {
        getCandidates();
    }, [candidates]);
    if(!candidates){
        return null;
    }
    candidates.sort(function(c1,c2){
        return c2.voteCount - c1.voteCount;
    });
    return(
        <Wrapper>
            <Title>CEOS 프론트엔드 13기 개발팀장 투표 창입니다.</Title>
            <ListWrapper>
                {candidates.map((candidate, index) => {
                    return(
                        <EachCandidate>
                            <CandidateRank>{index+1}위 </CandidateRank>
                            <CandidateName>{candidate.name}</CandidateName>
                            <CandidateVoteCount>[{candidate.voteCount}] 표</CandidateVoteCount>
                            <VoteButton onClick={function(){Vote(candidate)}}>투표</VoteButton>
                        </EachCandidate>
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
const EachCandidate = styled.div`
    position: relative;
    display: flex;
    font-size: 20px;
    margin: 4px;
`;
const CandidateRank = styled.div`
    color: grey;
`;
const CandidateName = styled.div`
    position: absolute;
    left: 70px;
`;
const CandidateVoteCount = styled.div`
    position: absolute; 
    right: 70px;
`;
const VoteButton = styled.button`
    font-family: 'Do Hyeon', sans-serif;
    font-size: 17px;
    position: absolute; 
    right: 0;
    border: 1px solid skyblue;
    color: skyblue;
    background-color: white;
    border-radius: 5px;
    &:hover{
        color: white;
        background-color: skyblue;
    }
`;