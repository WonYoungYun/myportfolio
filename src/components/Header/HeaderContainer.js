import React, { Component } from 'react';
import HeaderPresenter from './HeaderPresenter'


class HeaderContainer extends Component {
    state = {
        pos: 0,
        home: {
            top: 0,
            bottom: 0,
        },
        about: {
            top: 0,
            bottom: 0,
        },
        skill: {
            top: 0,
            bottom: 0,
        }
    }


    checkPos = () => {
        let bodyPos = document.documentElement.scrollTop
        this.setState({
            pos: bodyPos
        })
    }

    calcElement() {
        const Home = document.getElementById('Home');
        const About = document.getElementById('About');
        const Skill = document.getElementById('Skill');
        this.setState({
            home: { top: Home.offsetTop, bottom: Home.offsetTop + Home.offsetHeight - 80 },
            about: { top: About.offsetTop - 80, bottom: About.offsetTop + About.offsetHeight - 80 },
            skill: { top: Skill.offsetTop - 80, bottom: Skill.offsetTop + Skill.offsetHeight - 80 }
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.checkPos)
        this.calcElement();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkPos)
    }

    render() {
        const { pos, home, about, skill } = this.state;
        return <HeaderPresenter pos={pos} home={home} about={about} skill={skill} />
    }
}

export default HeaderContainer;


