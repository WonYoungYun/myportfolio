import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import About from './About';
import Skill from './Skill';


const Container = styled.div`

`;

export default () => (
    <Container>
        <Home />
        <About />
        <Skill />
    </Container>
);