import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 100%;
    height: 100px;
    background-color:#1E1E1E;
`;

const Copyright = styled.p`
    font-size:18px;
    color: #999;
`;

export default () => (
    <Footer>
        <Copyright>© 2019 Copyright <span style={{ color: "#ddd" }}>WonYoung_Yun</span></Copyright>
    </Footer >

)