import React, { Component } from 'react'
import styled from 'styled-components'

export default class Footer extends Component {
    
    render() {
        return (
            <Wrapper>
                <h2>Footer</h2>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    background: #555555;
    padding: 15px 75px;
`
