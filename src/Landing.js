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
    padding: 25px;
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

`

const aFrame = keyframes`
    0% {
        opacity: 1;
    }
    32% {
        opacity: 1;
    }
    33% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
`
const bFrame = keyframes`
    0% {
        opacity: 0;
    }
    32% {
        opacity: 0;
    }
    33% {
        opacity: 1;
    }
    65% {
        opacity: 1;
    }
    66% {
        opacity: 0;
    }
    100% {
        opacity: 0;
    }

`
const cFrame = keyframes`
    0% {
        opacity: 0;
    }
    65% {
        opacity: 0;
    }
    66% {
        opacity: 1;
    }
    100% {
        opacity: 1;
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
    padding-left: 10px;
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

