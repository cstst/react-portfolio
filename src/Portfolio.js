import React from 'react'
import styled from 'styled-components'

export default () => (
    <React.Fragment>
        <a name="portfolio">
            <div/>
        </a>
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