import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CandidateCard from './CandidateCard';
import { useCookies } from 'react-cookie';
import LoginPage from './LoginPage';
const dataURL = 'http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:8080/candidates';
function CandidateList() {
    const [candidates, setCandidates] = useState(null);
    const [isLogIn, setIsLogIn] = useState(false);
    const [isLogInPage, setIsLogInPage] = useState(false);
    const [cookies, removeCookie] = useCookies(['token']);
    async function getCandidates() {
        const { data } = await axios.get(dataURL);
        setCandidates(data);
    }
    const handleLogInOutButtonClick = () => {
        if(isLogIn) {
            removeCookie('token');
            setIsLogIn(false);
            setIsLogInPage(false);
        }
        else {
            setIsLogInPage(true);
        }
    }
    const handleShowResultButtonClick = () => {
        setIsLogInPage(false);
    }
    useEffect(() => {
        getCandidates();
        cookies.token === 'undefined' ? setIsLogIn(false) : setIsLogIn(true);
    }, [candidates]);
    return(
        <Wrapper>
            <Title>CEOS 프론트엔드 13기 개발팀장 투표</Title>
            <Description>투표를 위해선 로그인을 하셔야 합니다</Description>
            <ButtonsWrapper>
                <ShowResultButton onClick={handleShowResultButtonClick}>결과보기</ShowResultButton>
                <LogInOutButton onClick={handleLogInOutButtonClick}>
                    {isLogIn ? '로그아웃' : '로그인'}
                </LogInOutButton>
                <SignUpButton>회원가입</SignUpButton>
            </ButtonsWrapper>
            <>
            { isLogInPage && !isLogIn ? (
                <ShowingPage>
                    <LoginPage/>
                </ShowingPage>
            ) : (
                <ShowingPage>
                    {
                    candidates &&
                    candidates
                    .sort((c1,c2) => c2.voteCount - c1.voteCount)
                    .map((candidate, index) => {
                        return(
                            <CandidateCard {...{candidate, index}}/>
                        );
                    })}
                </ShowingPage>
            )}
            </>
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
    margin: 0;
`;
const Description = styled.h3`
    font-weight: normal;
    margin: 0;
`;
const ButtonsWrapper = styled.div`
    position: relative;
    padding: 20px;
    width: 300px;
    margin-bottom: 10px;
`;
const menuButton = styled.button`
    font-family: 'Do Hyeon', sans-serif;
    font-size: 17px;
    position: absolute;
    color: grey;
    border: 1px solid grey;
    background-color: white;
    border-radius: 5px;
    &:hover{
        border: 1px solid white;
        color: white;
        background-color: grey;
    }
    &:focus{
        outline: none;
    }
`;
const ShowResultButton = styled(menuButton)`
    left: 0;
`;
const LogInOutButton = styled(menuButton)`
    right: 80px;
`;
const SignUpButton = styled(menuButton)`
    right: 0;
`;
const ShowingPage = styled.div`
    border: 1px solid;
    padding: 20px;
    width: 300px;
    height: 200px;
`;