import React from 'react'
import { Element } from 'react-scroll'
import styled from 'styled-components'

export default () => (
    
    <Wrapper>
        <Element name="contact" />
        <h2>Contact</h2>
    </Wrapper>
)

const Wrapper = styled.div`
    position: relative;
    height: 100vh;
    padding: 25px;
    background: blue;
`
