/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import ScrollButton from './ScrollButton'

export default props => (
    <Section className={props.className}>
        {props.children}
        <ScrollButton scrollButtonTo={props.scrollButtonTo} />
    </Section>
)

const Section = styled.div`
    position: relative;
    box-sizing: border-box;
    height: calc(100vh - 55px);
    border-bottom: 1px solid white;
    padding: 0 10vw 15vh 10vw;
    background: black;
    font-family: 'Open Sans', sans-serif;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`