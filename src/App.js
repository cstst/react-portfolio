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

export default class App extends Component {

    state = {
        curPg: 'top',
        scrollPos: 0,
        hideNav: true,
        clearNav: true,
        positions: {
            about: null,
            services: null,
            portfolio: null,
            contact: null,
        },
    }

    componentDidMount = () => {
        window.scrollTo(0, 0)
        window.addEventListener('scroll', this.handleScroll)
        const offset = window.innerHeight * .75
        const about = ReactDOM.findDOMNode(this.about).offsetTop - offset,
            services = ReactDOM.findDOMNode(this.services).offsetTop - offset,
            portfolio = ReactDOM.findDOMNode(this.portfolio).offsetTop - offset,
            contact = ReactDOM.findDOMNode(this.contact).offsetTop - offset
        this.setState({
            curPg: 'top',
            positions: {
                about: about,
                services: services,
                portfolio: portfolio,
                contact: contact,
            },
        })
    }

    handleScroll = () => {

        const currentScrollPos = window.pageYOffset,
            clearNav = (ReactDOM.findDOMNode(this.about).offsetTop + 150) > currentScrollPos,
            hideNav = !(currentScrollPos > ReactDOM.findDOMNode(this.about).offsetTop -56 && 
                        currentScrollPos < ReactDOM.findDOMNode(this.about).offsetTop + 100)
        if (this.state.scrollPos > currentScrollPos) {
            this.setState({ 
                scrollPos: currentScrollPos,
                hideNav: false,
                clearNav: clearNav
            })
        } else {
            this.setState({ 
                scrollPos: currentScrollPos,
                hideNav: hideNav,
                clearNav: clearNav
            })
        }

        const { curPg,
                positions: {
                    about, 
                    services, 
                    portfolio, 
                    contact 
                } 
            } = this.state,
            curPos = window.scrollY
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
        }   
    }
    render() {
        
        return(
            <Wrapper> 
                <Header hidden={this.state.hideNav} clear={this.state.clearNav} curPg={this.state.curPg} />
                <Landing />
                <About ref={x => this.about = x} />
                <Services ref={x => this.services = x} />
                <Portfolio ref={x => this.portfolio = x} />
                <Contact ref={x => this.contact = x} />
            </Wrapper>
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

const Wrapper = styled.div`
    @media screen and (max-width: 600px) {
        &:before {
            content: "";
            display: block;
            position: fixed;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            z-index: -9;
            opacity: 1
            background: linear-gradient(
                rgba(0, 0, 0, 0.6), 
                rgba(0, 0, 0, 0.6)
                ), url(${BackgroundOne}) no-repeat center center;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
            background-position: 0 0;
        }
    }
    
`