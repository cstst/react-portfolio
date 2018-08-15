import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, { injectGlobal } from 'styled-components'
import Header from "./Header"
import Landing from './Landing'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Contact from './Contact'
import BackgroundImage from './img/back.jpg'

export default class App extends Component {
    
    state = {}

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
        const about = ReactDOM.findDOMNode(this.about).offsetTop -57,
            services = ReactDOM.findDOMNode(this.services).offsetTop -57,
            portfolio = ReactDOM.findDOMNode(this.portfolio).offsetTop -57,
            contact = ReactDOM.findDOMNode(this.contact).offsetTop -57
        this.setState({
            positions: {
                about: about,
                services: services,
                portfolio: portfolio,
                contact: contact,
            },
            curPg: 'top',
        })
    }

    handleScroll = () => {
        const { positions: {
                    about, 
                    services, 
                    portfolio, 
                    contact 
                },
                curPg } = this.state,
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
            <React.Fragment> 
                <Header curPg={this.state.curPg} />
                <Landing />
                <About ref={x => this.about = x} />
                <Services ref={x => this.services = x} />
                <Portfolio ref={x => this.portfolio = x} />
                <Contact ref={x => this.contact = x} />
            </React.Fragment>
        )
    }
}

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300');

    * {   
        margin: 0;
        padding: 0;
    }
    body:before {
        content: "";
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -10;
        background: linear-gradient(
            rgba(0, 0, 0, 0.6), 
            rgba(0, 0, 0, 0.6)
            ), url(${BackgroundImage}) no-repeat center center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
      }
`

