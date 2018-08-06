import React from 'react'
import { Element } from 'react-scroll'
import styled from 'styled-components'

export default () => (
    <React.Fragment>
        
        <Element name="portfolio" />
        <Wrapper>
            <h2>Portfolio</h2>
        </Wrapper>
    </React.Fragment>
)

const Wrapper = styled.div`
    height: 100vh;
    padding: 75px;
    background: red;
`