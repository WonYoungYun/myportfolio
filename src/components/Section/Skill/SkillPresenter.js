import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.article`
    background-color: #ecf0f1;
`;

const ContentWrap = styled.div`
    width: 1200px;
    padding: 80px 0;
    margin: 0 auto;
`;

const Title = styled.h2`
    font-size: 48px;
    font-weight: 600;
    color: #27ae60;
`;

const Content = styled.div`
    margin: 80px 0;
    display:flex;
    align-items:center;
    justify-content:center;
`;
const SkillList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 320px);
  grid-gap: 20px;
`;


const SkillCard = styled.li`
    position:relative;
    width: 320px;
    height: 220px;
    padding-top:20px;
    background-color: #fff;
    border-radius:3px;
    transition: box-shadow .2s linear;
    text-align:center;
    overflow:hidden;
    &:hover{
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);

    }
    &:before{
        position:absolute;
        top:0;
        left:-32%;
        width:30%;
        border:1px solid #3498db;
        content:"";
        transition: left .4s ease-in;

    }
    &:after{
        position:absolute;
        bottom:0;
        right:-32%;
        width:30%;
        border:1px solid #3498db;
        content:"";
        transition: right .4s ease-in;
    }
    &:hover:before{
        left:0%;
    }
    &:hover:after{
        right:0%;
    }

`;
const CardImg = styled.img`
    width: 80px;
    height:80px;
`;

const CardTitle = styled.h4`
    margin-top:5px;
    font-size:18px;
    font-weight:600;
`;
const CardStar = styled.span`
    display:block;
    margin-top:5px;
    
    
`;

const Cardtxt = styled.p`
    margin-top:10px;
    padding: 0 25px;
    font-size:12px;
    line-height:1.5;
`;

export default ({ data }) => (
    <Container id="Skill">
        <ContentWrap>
            <Title>Skill</Title>
            <Content>
                <SkillList>
                    {data.map(e => (
                        <SkillCard key={e.skill}>
                            <CardImg src={e.img} alt={e.skill} />
                            <CardTitle>{e.skill}</CardTitle>
                            <CardStar>{Array(e.lv).fill(1).map((e, idx) => <FontAwesomeIcon icon="star" color="#f1c40f" key={idx} />)}</CardStar>
                            <Cardtxt>{e.txt}</Cardtxt>
                        </SkillCard>)
                    )}
                </SkillList>
            </Content>
        </ContentWrap>
    </Container>
);