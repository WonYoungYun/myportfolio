import React from 'react';
import styled from 'styled-components';
import PROFILE from '../../assets/Profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 80px 0 ;
    
`;

const Title = styled.h2`
    font-size: 48px;
    font-weight: 600;
    color: #27ae60;
`;
const Content = styled.div`
    margin: 80px 0 ;
    text-align:center;
`;

const Profile = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

const ProfileText = styled.div`
    margin-left: 100px;
    text-align: left;
`;

const ProfileImg = styled.img`
    width: 180px;
    border:5px solid #3498db;
    border-radius:50%;
`;

const ProfileTitle = styled.h3`
    font-size: 24px;
    font-weight: 600;
`;

const ProfileSubtitle = styled.p`
    font-size: 18px;
    font-weight: 600;
    line-height:2;
`;

const ProfileDetail = styled.ul`
    margin-top: 10px;
    font-size: 15px;
    font-weight:700;
    
`;

const ProfileItem = styled.li`
    display:flex;
    &:not(:first-child){
        margin-top: 10px;
    }
`;

const ItemTitle = styled.h4`
    font-size: 18px;
    color: #333;
`;
const ItemIcon = styled.span`
    display:block;
    width: 60px;
    height:60px;
    line-height:55px;

`;
const Itemtxt = styled.div`
    color: #aaa;
    line-height:1.2;
`;

const ItemLink = styled.a`
    transition: color .2s ease-in-out;
    &:hover{
        color: #333;
    }
`;

const MyIntro = styled.div`
    margin-top: 50px;
    font-size:20px;
    padding: 0 30px;
    line-height: 1.75;
    
`;

export default () => (
    <Container id="About">
        <Title>About</Title>
        <Content>
            <Profile>
                <ProfileImg src={PROFILE} alt="프로필 사진"></ProfileImg>
                <ProfileText>
                    <ProfileTitle>윤원영</ProfileTitle>
                    <ProfileSubtitle>Front-End Developer</ProfileSubtitle>
                    <ProfileDetail>
                        <ProfileItem>
                            <ItemIcon>
                                <FontAwesomeIcon icon="birthday-cake" size="2x" />
                            </ItemIcon>
                            <Itemtxt>
                                <ItemTitle>Birthday : </ItemTitle>
                                January 3, 1995
                            </Itemtxt>
                        </ProfileItem>
                        <ProfileItem>
                            <ItemIcon>
                                <FontAwesomeIcon icon="phone" size="2x" />
                            </ItemIcon>
                            <Itemtxt>
                                <ItemTitle>Phone : </ItemTitle>
                                +82 010 3393 1837
                            </Itemtxt>
                        </ProfileItem>
                        <ProfileItem>
                            <ItemIcon>
                                <FontAwesomeIcon icon="envelope" size="2x" />
                            </ItemIcon>
                            <Itemtxt>
                                <ItemTitle>EMail : </ItemTitle>
                                <ItemLink href="mailto:wonyoung1837@gmail.com">wonyoung1837@gmail.com</ItemLink>
                            </Itemtxt>
                        </ProfileItem>
                        <ProfileItem>
                            <ItemIcon>
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </ItemIcon>
                            <Itemtxt>
                                <ItemTitle>Github : </ItemTitle>
                                <ItemLink href="https://github.com/WonYoungYun">
                                    https://github.com/WonYoungYun
                            </ItemLink>

                            </Itemtxt>
                        </ProfileItem>
                    </ProfileDetail>
                </ProfileText>
            </Profile>
            <MyIntro>
                <div>안녕하세요. 웹을 코딩을 통해 그리는 것에 재미를 느껴 프론트엔드 개발자의 길을 걸었습니다.<br />발전하는 기술의 흐름 속에서, 그것에 적응하고 더 좋은 개발자가 되고 싶어 달려가고 있습니다.<br />호기심 많은 노력가 입니다! 저에 대해 궁금하신 점이 있다면, 위의 연락처로 연락주세요!</div>
            </MyIntro>
        </Content>
    </Container>
);
