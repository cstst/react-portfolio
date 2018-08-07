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
    height: calc(100vh - 55px);
    padding: 25px;
    border-bottom: 1px solid black;
`
