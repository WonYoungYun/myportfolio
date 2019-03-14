import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    position:fixed;
    width:100%;
    padding: 0 100px;
    background-color: ${props => props.current ? "#fff" : "transparent"};
    transition: all .1s linear;
    box-shadow: ${props => props.current ? "0px 1px 5px 2px rgba(200,200,200, 0.8)" : "none"};
    z-index:9999;

`;

const HeaderWrap = styled.nav`
    display: flex;
    justify-content:space-between;
    height: 60px;
    
`;
const Button = styled.button`
    all:unset;
    display: none;
`;
const Logo = styled.h1`
    padding-top: 15px;
    font-size: 24px;
    height: 100%;

`;

const NavList = styled.ul`
    display:flex;
    font-size: 18px;
    font-weight:600;
    text-align:center;
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
    /* &:not(:last-child){
        margin-right: 20px;
    } */

`;

const Link = styled.a`
    display:flex;
    height:100%;
    align-items:center;
    justify-content:center;
`;


export default ({ pos, home, about, skill }) => (

    <Header current={pos > 0}>
        <HeaderWrap>
            <Logo>
                <span style={{ color: "#27ae60" }}>Won</span>Young
            </Logo>

            <Button>모바일용 버튼</Button>

            <NavList>
                <Item current={pos >= home.top && pos <= home.bottom}>
                    <Link href="#Home">Home</Link>
                </Item>
                <Item current={pos >= about.top && pos <= about.bottom}>
                    <Link href="#About">About</Link>
                </Item>
                <Item current={pos >= skill.top && pos <= skill.bottom}>
                    <Link href="#Skill">Skill</Link>
                </Item>
                <Item>
                    <Link href="#Project">Project</Link>
                </Item>
            </NavList>
        </HeaderWrap>
    </Header>
)

