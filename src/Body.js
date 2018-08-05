import React from 'react'
import Landing from './Landing'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Contact from './Contact'
import styled from 'styled-components'

export default () => (
    <Wrapper>
        <Landing />
        <About />
        <Services />
        <Portfolio />
        <Contact />
    </Wrapper>
)

const Wrapper = styled.div`

`
