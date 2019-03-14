import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import About from './About';
import Skill from './Skill';
import Project from './Projects';


const Container = styled.section`

`;

export default () => (
    <Container>
        <Home />
        <About />
        <Skill />
        <Project />
    </Container>
);