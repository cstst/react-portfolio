import React from 'react'
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import styled, { injectGlobal } from 'styled-components'

export default () => (
    <React.Fragment>
        <Header />
        <Body />
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
