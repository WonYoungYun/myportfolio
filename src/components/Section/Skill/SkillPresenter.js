import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
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
    color: #3498db;
`;

const Content = styled.div`
    margin: 80px 0;
    display:flex;
    align-items:center;
    justify-content:center;
`;
const SkillList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 360px);
  grid-gap: 20px;
`;

const CardImg = styled.img`
    width: 80px;
    height:80px;
    border:1px solid black;
    filter: grayscale();
    transition: filter .1s ease-in-out;

`;

const SkillCard = styled.li`
    width: 360px;
    height: 240px;
    padding-top:20px;
    border: 1px solid black;
    background-color: #f1f4f8;
    transition: box-shadow .2s linear;
    text-align:center;
    &:hover{
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);

    }
    &:hover ${CardTitle}{
        filter:none;
    }
`;


const CardTitle = styled.h4``;
const CardStar = styled.span`
    display:block;
    margin-top:5px;
`;

const Cardtxt = styled.p`
    margin-top:10px;
`;

export default ({ data }) => (
    <Container id="Skill">
        <ContentWrap>
            <Title>Skill</Title>
            <Content>
                <SkillList>
                    {data.map(e => (
                        <SkillCard key={e.skill}>
                            <CardImg alt={e.skill} />
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