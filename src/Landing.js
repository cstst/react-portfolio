/* eslint-disable */
import React from 'react'
import styled, { keyframes } from 'styled-components'
import BackgroundImage from './img/back.jpg'
import PageDown from './ScrollButton'


export default () => (

    <Wrapper>
        <h1>Derek Larson</h1>
            <TextCarousel>
                <h2 id="a">Developer</h2>
                <h2 id="b">Designer</h2>
                <h2 id="c">Traveler</h2>
            </TextCarousel>
        <PageDown to="about" />
    </Wrapper>
)

const Wrapper = styled.div`
    margin-top: 56px;
    height: calc(100vh - 56px);
    padding: 0 50px;
    color: white;
    font-family: 'Open Sans', sans-serif;
    background: linear-gradient(
        rgba(0, 0, 0, 0.45), 
        rgba(0, 0, 0, 0.45)
        ), url(${BackgroundImage});
    background-attachment: fixed;
    background-size: 100% auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 600px) {
        background-size: auto 100%;
        height: calc(100vh - 112px);
    }
    h1 {
        font-size: 150px;
    }

`

const aFrame = keyframes`
    0% {
        visibility: visible;
    }
    33% {
        visibility: hidden;
    }
    100% {
        visibility: hidden;
    }
`
const bFrame = keyframes`
    0% {
        visibility: hidden;
    }
    32% {
        visibility: hidden;
    }
    33% {
        visibility: visible;
    }
    66% {
        visibility: hidden;
    }
    100% {
        visibility: hidden;
    }

`
const cFrame = keyframes`
    0% {
        visibility: hidden;
    }
    65% {
        visibility: hidden;
    }
    66% {
        visibility: visible;
    }
    100% {
        visibility: visible;
    }
`

const hider = keyframes`
    0% {
        width: 1px;
    }
    11% {
        width: 420px;
    }
    22% {
        width: 420px;
    }
    33% {
        width: 1px;
    }
    44% {
        width: 370px;
    }
    55% {
        width: 370px;
    }

    66% {
        width: 1px;
    }
    77% {
        width: 340px;
    }
    88% {
        width: 340px;
    }
    99% {
        width: 1px;
    }
    
`


const TextCarousel = styled.div`
    position: relative;
    height: 110px;
    border-right: 1px solid white;
    animation: ${hider} 6s ease-out infinite;
    overflow: hidden;
    h2 {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 85px;
    }
    #a {
        animation: ${aFrame} 6s linear infinite;
    }
    #b {
        animation: ${bFrame} 6s linear infinite;
    }
    #c {
        animation: ${cFrame} 6s linear infinite;
    }

    @media screen and (max-width: 600px) {
        h2 {
            font-size: 65px;
        }
    }

`

