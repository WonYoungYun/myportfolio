import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    padding: 0 100px;

    justify-content:space-between;
    height: 60px;
    background-color: transparent;
    /* background-color : rgba(55,55,55, .8) */
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
    width:80px;
    height:100%;
    border-bottom: 3px solid transparent;
    transition: border-bottom .2s ease-in;
    &:hover{
        border-bottom:3px solid #3498db;
    }
    &:not(:last-child){
        margin-right: 20px;
    }

`;

const Link = styled.a`
    display:flex;
    height:100%;
    align-items:center;
    justify-content:center;


`;
export default () => (
    <Header>
        <Logo>
            <a href="/">logo</a>
        </Logo>

        <Button>모바일용 버튼</Button>

        <NavList>
            <Item>
                <Link href="#Home">Home</Link>
            </Item>
            <Item>
                <Link href="#About">About</Link>
            </Item>
            <Item>
                <Link href="#Skills">Skills</Link>
            </Item>
            <Item>
                <Link href="#Project">Project</Link>
            </Item>
            <Item>
                <Link href="#Contact">Contact</Link>
            </Item>
        </NavList>
    </Header>
)
