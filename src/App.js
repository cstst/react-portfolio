import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components'
import Header from "./Header"
import Landing from './Landing'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Contact from './Contact'
import BackgroundImage from './img/back.jpg'

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
        const { about: { current: about },
                services: { current: services },
                portfolio: { current: portfolio },
                contact: { current: contact }
            } = this
        window.onbeforeunload = () => window.scrollTo(0,0) 
        window.onscroll = this.handleScroll
        this.setState({
            positions: {
                about: about.offsetTop,
                services: services.offsetTop,
                portfolio: portfolio.offsetTop,
                contact: contact.offsetTop,
            },
        })
    }

    handleScroll = () => {
        const { scrollPos } = this.state,
            curScrollPos = window.pageYOffset
        if (scrollPos + 50 < curScrollPos || scrollPos - 50 > curScrollPos) {
            const scrollUp = curScrollPos < scrollPos,
                offset = window.innerHeight * .66, 
                { positions: {
                        about, 
                        services, 
                        portfolio, 
                        contact 
                    } 
                } = this.state,
                page = 
                    curScrollPos < about - offset ? 'top' :
                    curScrollPos > about - offset && curScrollPos < services - offset  ? 'about' :
                    curScrollPos > services - offset && curScrollPos < portfolio - offset ? 'services' :
                    curScrollPos > portfolio - offset && curScrollPos < contact - offset ? 'portfolio' :
                    curScrollPos > contact - offset ? 'contact' : '',
                pageHead = (
                    (curScrollPos > about - 56 && curScrollPos < about + 100) ||
                    (curScrollPos > services - 56 && curScrollPos < services + 100) ||
                    (curScrollPos > portfolio - 56 && curScrollPos < portfolio + 100) ||
                    (curScrollPos > contact - 56 && curScrollPos < contact + 100)
                )            
            this.setState({ 
                scrollPos: curScrollPos,
                pageHead: pageHead,
                scrollUp: scrollUp,
                page: page
            }) 
        }
    }

    render() {
        const { state: { pageHead, scrollUp, page}, 
                about, 
                services, 
                portfolio, 
                contact 
            } = this
        return(
            <Wrapper> 
                <Header 
                    pageHead={pageHead} 
                    scrollUp={scrollUp} 
                    page={page} 
                />
                <Landing />
                <About innerRef={about} />
                <Services innerRef={services} />
                <Portfolio innerRef={portfolio} />
                <Contact innerRef={contact} />
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
        &:before {
            content: "";
            display: block;
            position: fixed;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            z-index: -9;
            background: linear-gradient(
                rgba(0, 0, 0, 0.6), 
                rgba(0, 0, 0, 0.6)
                ), url(${BackgroundImage}) no-repeat center center;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
            background-position: 0 0;
        }
    
`