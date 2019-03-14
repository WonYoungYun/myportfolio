import React from 'react';
import styled from 'styled-components';


const Container = styled.article`
    background-color: rgba(112, 161, 255, .1);
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
    padding: 80px 0;
`;

const CardImg = styled.img`
    height:100%;
    transition: transform .3s linear;
`;

const Card = styled.div`
    display:flex;
    margin: 0 auto;
    width: 930px;
    height:300px;
    border-left: 8px solid #2ecc71;
    border-right: 8px solid #2ecc71;
    border-radius:5px;
    transition: box-shadow .2s ease-in-out;
    overflow: hidden;
    &:not(:last-child){
        margin-bottom: 30px;
    }
    &:hover{
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    }
    &:hover ${CardImg}{
        transform:scale(1.1)
    }
`;

const CardContent = styled.div`
    flex: 1;
    padding: 60px 0 0 10px;
    background-color:#fff;
    z-index:1;
    line-height:2;

`;

const CardTitle = styled.h3`
    font-size: 24px;
    font-weight:600;
`;

const ContentTxt = styled.p`
    font-size: 18px;
    color: #aaa;
`;
const ContentPort = styled.a`
    font-size: 16px;
    font-weight:600;
    transition: color .2s linear;
    color:#a9a9a9;
    &:hover{
        color:#333;
    }
    &:before{
        content: "URL: ";
        color: #333;
    }
    &:after{
        display:block;
        content:""
    }
`;
const ContentUrl = styled.a`
    font-size: 16px;
    font-weight:600;
    transition: color .2s linear;
    color:#a9a9a9;
    &:hover{
        color:#333;
    }
    &:before{
        content: "Github: ";
        color: #333;
    }
`;

export default ({ data }) => (
    <Container id="Project">
        <ContentWrap>
            <Title>Project</Title>
            <Content>
                {data.map(e =>
                    <Card key={e.id}>
                        <CardImg src={e.img} alt={e.id} />
                        <CardContent>
                            <CardTitle>{e.id}</CardTitle>
                            <ContentTxt>{e.txt}</ContentTxt>
                            {e.url && (<ContentPort href={e.url}>{e.url}</ContentPort>)}
                            <ContentUrl href={e.git}>{e.git}</ContentUrl>
                        </CardContent>
                    </Card>
                )}
            </Content>
        </ContentWrap>
    </Container>
);  