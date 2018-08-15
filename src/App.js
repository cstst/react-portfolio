import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, { injectGlobal } from 'styled-components'
import Header from "./Header"
import Landing from './Landing'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Contact from './Contact'
import BackgroundOne from './img/back.jpg'
import BackgroundTwo from './img/b4.jpg'

export default class App extends Component {
    
    state = {}

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll)
        const half = window.innerHeight / 2
        const about = ReactDOM.findDOMNode(this.about).offsetTop - half,
            services = ReactDOM.findDOMNode(this.services).offsetTop - half,
            portfolio = ReactDOM.findDOMNode(this.portfolio).offsetTop - half,
            contact = ReactDOM.findDOMNode(this.contact).offsetTop - half
        this.setState({
            positions: {
                about: about,
                services: services,
                portfolio: portfolio,
                contact: contact,
            },
            curPg: 'top',
            background: 'one'
        })
    }

    handleScroll = () => {
        const { curPg,
                background,
                positions: {
                    about, 
                    services, 
                    portfolio, 
                    contact 
                } } = this.state,
            curPos = window.scrollY,
            newBackground = curPos < ReactDOM.findDOMNode(this.about).offsetTop - 56 ? 'one' : 'two'
            console.log(newBackground)
        switch(true) {
            case (curPos < about && curPg !== 'top'):
                this.setState({ curPg: 'top' })
                break
            case (curPos > about && curPos < services && curPg !== 'about'):
                this.setState({ curPg: 'about' })
                break
            case (curPos > services && curPos < portfolio && curPg !== 'services'):
                this.setState({ curPg: 'services' })
                break
            case (curPos > portfolio && curPos < contact && curPg !== 'portfolio'):
                this.setState({ curPg: 'portfolio' })
                break
            case (curPos > contact && curPg !== 'contact'):
                this.setState({ curPg: 'contact' })
                break
            case (background !== newBackground):
                this.setState({ background: newBackground })
                break
        }   
    }
    render() {
        
        return(
            <Div background={this.state.background}> 
                <Header curPg={this.state.curPg} />
                <Landing />
                <About ref={x => this.about = x} />
                <Services ref={x => this.services = x} />
                <Portfolio ref={x => this.portfolio = x} />
                <Contact ref={x => this.contact = x} />
            </Div>
        )
    }
}

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300');

    * {   
        margin: 0;
        padding: 0;
    }
`

const Div = styled.div`
    &:before {
        content: "";
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: -9;
        opacity: ${props => props.background === 'one' ? '1' : '0'};
        background: linear-gradient(
            rgba(0, 0, 0, 0.6), 
            rgba(0, 0, 0, 0.6)
            ), url(${BackgroundOne}) no-repeat center center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
    &:after {
        content: "";
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: -10;
        background: linear-gradient(
            rgba(0, 0, 0, 0.6), 
            rgba(0, 0, 0, 0.6)
            ), url(${BackgroundTwo}) no-repeat center center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
`