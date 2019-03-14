import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = styled.header`
    position:fixed;
    width:100%;
    padding: 0 100px;
    background-color: ${props => props.current ? "#fff" : "transparent"};
    transition: all .1s linear;
    box-shadow: ${props => props.current ? "0px 1px 5px 2px rgba(200,200,200, 0.8)" : "none"};
    z-index:2;

    @media (max-width: 994px){
        padding: 0;
        background-color: rgb(20,20,20);
        color: #fff;
        box-shadow: 0px 1px 5px 2px rgba(200,200,200, .8);
    }
`;

const HeaderWrap = styled.nav`
    display: flex;
    position:relative;
    justify-content:space-between;
    height: 60px;
    
`;
const Button = styled.button`
    border:none;
    background:none;
    color:#fff;
    display: none;
    outline:none;
    margin-right: 30px;
    cursor:pointer;
    text-align:center;
    @media (max-width: 994px){
        display:block;
        
    }
`;
const Logo = styled.h1`
    padding-top: 15px;
    font-size: 24px;
    height: 100%;
    @media (max-width: 994px){
        margin-left: 30px;
    }
`;

const NavList = styled.ul`
    display:flex;
    font-size: 18px;
    font-weight:600;
    text-align:center;
    @media (max-width: 994px){
        display:block;
        position:absolute;
        width:100%;
        top:100%;
        right: ${props => props.current ? "0" : "-100%"};;
        transition: right .3s ease-in;
        line-height:3;
        
    }
`;

const Item = styled.li`
    width:90px;
    height:100%;
    border-bottom: 3px solid ${props => props.current ? "#27ae60" : "transparent"};
    transition: border-bottom .2s ease-in;
    &:hover{
        color: #aaa;
    }
    margin-right: 20px;
    @media (max-width: 994px){
        display:block;
        width: 100%;
        border-bottom: none;
        background-color: rgba(20,20,20, .5);
        text-align:center;
    }

`;

const Link = styled.a`
    display:flex;
    height:100%;
    align-items:center;
    justify-content:center;
`;


export default ({ pos, home, about, skill, project, toggleBtn, isClickList }) => (

    <Header current={pos > 0}>
        <HeaderWrap>
            <Logo>
                <span style={{ color: "#27ae60" }}>Won</span>Young
            </Logo>

            <Button onClick={toggleBtn}>{isClickList ? <FontAwesomeIcon icon="times" size="2x" /> : <FontAwesomeIcon icon="bars" size="2x" />} </Button>
            <NavList current={isClickList}>
                <Item current={pos >= home.top && pos <= home.bottom}>
                    <Link href="#Home">Home</Link>
                </Item>
                <Item current={pos >= about.top && pos <= about.bottom}>
                    <Link href="#About">About</Link>
                </Item>
                <Item current={pos >= skill.top && pos <= skill.bottom}>
                    <Link href="#Skill">Skill</Link>
                </Item>
                <Item current={pos >= project.top && pos <= project.bottom}>
                    <Link href="#Project">Project</Link>
                </Item>
            </NavList>
        </HeaderWrap>
    </Header>
)

