import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components'
import Header from "./Header"
import Landing from './Landing'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Contact from './Contact'
import BackgroundOne from './img/back.jpg'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.about = React.createRef()
        this.services = React.createRef()
        this.portfolio = React.createRef()
        this.contact = React.createRef()
        this.state = {
            page: 'top',
            scrollPos: 0,
            pageHead: false,
            scrollUp: false,
            positions: {
                about: null,
                services: null,
                portfolio: null,
                contact: null,
            },
        }
    }

    componentDidMount = () => {
        window.onbeforeunload = () => window.scrollTo(0,0) 
        window.addEventListener('scroll', this.handleScroll)
        this.setState({
            positions: {
                about: this.about.current.offsetTop,
                services: this.services.current.offsetTop,
                portfolio: this.portfolio.current.offsetTop,
                contact: this.contact.current.offsetTop,
            },
        })
    }

    handleScroll = () => {
        const { scrollPos } = this.state,
            curScrollPos = window.pageYOffset
        if (scrollPos + 50 < curScrollPos || scrollPos - 50 > curScrollPos) {
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
                pageHead = (
                    (curScrollPos > about - 56 && curScrollPos < about + 100) ||
                    (curScrollPos > services - 56 && curScrollPos < services + 100) ||
                    (curScrollPos > portfolio - 56 && curScrollPos < portfolio + 100) ||
                    (curScrollPos > contact - 56 && curScrollPos < contact + 100)),
                scrollUp = curScrollPos < scrollPos
            this.setState({ 
                scrollPos: curScrollPos,
                pageHead: pageHead,
                scrollUp: scrollUp,
                page: curPage
            }) 
        }
    }

    render() {
        return(
            <Wrapper> 
                <Header 
                    pageHead={this.state.pageHead} 
                    scrollUp={this.state.scrollUp} 
                    page={this.state.page} 
                />
                <Landing />
                <About innerRef={this.about} />
                <Services innerRef={this.services} />
                <Portfolio innerRef={this.portfolio} />
                <Contact innerRef={this.contact} />
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