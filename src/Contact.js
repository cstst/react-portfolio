import React from 'react'
import { Element } from 'react-scroll'
import styled from 'styled-components'

export default () => (
    
    <React.Fragment>
        <Element name="contact" />
        <Wrapper>
            <h2>Contact</h2>
        </Wrapper>
    </React.Fragment>
)

const Wrapper = styled.div`
    height: 100vh;
    padding: 75px;
    background: blue;
`