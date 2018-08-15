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
        const about = ReactDOM.findDOMNode(this.about).offsetTop,
            services = ReactDOM.findDOMNode(this.services).offsetTop,
            portfolio = ReactDOM.findDOMNode(this.portfolio).offsetTop,
            contact = ReactDOM.findDOMNode(this.contact).offsetTop
        this.setState({
            about: {
                position: about,
                current: false,
            },
            services: {
                position: services,
                current: false,
            },
            portfolio: {
                position: portfolio,
                current: false,
            },
            contact:{
                position: contact,
                current: false,
            },
        })
    }

    handleScroll = () => {
        const  { 
                about: { position: abPos }, 
                services: { position: servPos }, 
                portfolio: { position: portPos },
                contact: { position: contPos } 
            } = this.state,
            curPos = window.scrollY
        
        
    }
    render() {
        
        return(
            <div> 
                <Header />
                <Landing />
                <About current={this.state.current} ref={x => this.about = x} />
                <Services ref={x => this.services = x} />
                <Portfolio ref={x => this.portfolio = x} />
                <Contact ref={x => this.contact = x} />
            </div>
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

