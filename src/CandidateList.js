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
            {candidates.map((candidate, index) => {
                return(
                    <EachCandidate>
                        <CandidateRank>{index+1}위: </CandidateRank>
                        <CandidateName>{candidate.name}</CandidateName>
                        <CandidateVoteCount>[{candidate.voteCount}]표</CandidateVoteCount>
                        <VoteButton onClick={function(){Vote(candidate)}}>투표</VoteButton>
                    </EachCandidate>
                );
            })}
        </Wrapper>
    );
}
export default CandidateList;
const Wrapper = styled.div``;
const Title = styled.h1``;
const EachCandidate = styled.div`
    display: flex;
`;
const CandidateRank = styled.div``;
const CandidateName = styled.div``;
const CandidateVoteCount = styled.div``;
const VoteButton = styled.button``;