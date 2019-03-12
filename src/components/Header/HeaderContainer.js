import React, { Component } from 'react';
import HeaderPresenter from './HeaderPresenter'


class HeaderContainer extends Component {
    state = {
        pos: 0,
        home: {
            top: 0,
            bottom: 0,
        },
    }


    checkPos = () => {
        let bodyPos = document.documentElement.scrollTop
        this.setState({
            pos: bodyPos
        })
    }

    calcElement() {
        const Home = document.getElementById('Home')
        this.setState({
            home: { top: Home.offsetTop, bottom: Home.offsetTop + Home.offsetHeight }
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
        const { pos, home } = this.state;
        return <HeaderPresenter pos={pos} home={home} />
    }
}

export default HeaderContainer;


