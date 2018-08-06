import React from 'react'
import { Element } from 'react-scroll'
import styled from 'styled-components'

export default () => (
    
    <Wrapper>
        <StyledElement name="about" />
        <h2>About</h2>
    </Wrapper>
)

const Wrapper = styled.div`
    position: relative;
    height: 100vh;
    padding: 25px;
    background: green;
`

const StyledElement = styled(Element)`
    position: absolute;
    top: -50px;
`