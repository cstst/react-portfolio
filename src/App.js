import React from 'react'
import Header from "./Header"
import Landing from './Landing'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from "./Footer"
import styled, { injectGlobal } from 'styled-components'

export default () => (
    <React.Fragment>
        <Header />
        <Landing />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
    </React.Fragment>
)

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`
