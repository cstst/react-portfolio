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
        page: 'top',
        scrollPos: 0,
        hideNav: true,
        positions: {
            about: null,
            services: null,
            portfolio: null,
            contact: null,
        },
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll)
        const about = ReactDOM.findDOMNode(this.about).offsetTop,
            services = ReactDOM.findDOMNode(this.services).offsetTop,
            portfolio = ReactDOM.findDOMNode(this.portfolio).offsetTop,
            contact = ReactDOM.findDOMNode(this.contact).offsetTop
        this.setState({
            positions: {
                about: about,
                services: services,
                portfolio: portfolio,
                contact: contact,
            },
        })
    }

    handleScroll = () => {
        const { scrollPos } = this.state,
            curScrollPos = window.pageYOffset
        if (scrollPos + 40 < curScrollPos || scrollPos - 40 > curScrollPos) {
            const { positions: {
                        about, 
                        services, 
                        portfolio, 
                        contact 
                    } 
                } = this.state,
                offset = window.innerHeight * .66,
                curPage = 
                    curScrollPos < about - offset ? 'top' :
                    curScrollPos > about - offset && curScrollPos < services - offset  ? 'about' :
                    curScrollPos > services - offset && curScrollPos < portfolio - offset ? 'services' :
                    curScrollPos > portfolio - offset && curScrollPos < contact - offset ? 'portfolio' :
                    curScrollPos > contact - offset ? 'contact' : '',
                hideNav = !(
                    (curScrollPos > about - 56 && curScrollPos < about + 100) ||
                    (curScrollPos > services - 56 && curScrollPos < services + 100) ||
                    (curScrollPos > portfolio - 56 && curScrollPos < portfolio + 100) ||
                    (curScrollPos > contact - 56 && curScrollPos < contact + 100) ||
                    curScrollPos < scrollPos
                )    
            console.log(ReactDOM.findDOMNode(this.portfolio).scrollHeight)
            this.setState({ 
                scrollPos: curScrollPos,
                hideNav: hideNav,
                page: curPage
            }) 
        }
    }
    render() {
        
        return(
            <Wrapper> 
                <Header hidden={this.state.hideNav} clear={this.state.clearNav} page={this.state.page} />
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