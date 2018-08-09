/* eslint-disable */
import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import BackgroundImage from './img/back.jpg'
import PageDown from './ScrollButton'


export default class Landing extends Component {
    
    state = {
        aWidth: 0,
        bWidth: 0,
        cWidth: 0,
    }

    componentDidMount() {
        this.setState({
            aWidth: this.a.offsetWidth,
            bWidth: this.b.offsetWidth,
            cWidth: this.c.offsetWidth,
        })
    }

    render() {
        return(
            <Wrapper>
                <h1>Derek Larson</h1>
                    <TextCarousel widths={this.state}>
                        <CarouselWord a innerRef={x => this.a = x} id="a">Developer</CarouselWord>
                        <CarouselWord b innerRef={x => this.b = x} id="b">Designer</CarouselWord>
                        <CarouselWord c innerRef={x => this.c = x} id="c">Traveler</CarouselWord>
                    </TextCarousel>
                <PageDown to="about" />
            </Wrapper>
        )
    }
}

const slider = props => keyframes`
    0% {
        width: 1px;
    }
    11% {
        width: ${props.widths.aWidth + 10}px;
    }
    22% {
        width: ${props.widths.aWidth + 10}px;
    }
    33% {
        width: 1px;
    }
    44% {
        width: ${props.widths.bWidth + 10}px;
    }
    55% {
        width: ${props.widths.bWidth + 10}px;
    }
    66% {
        width: 1px;
    }
    77% {
        width: ${props.widths.cWidth + 10}px;
    }
    88% {
        width: ${props.widths.cWidth + 10}px;
    }
    99% {
        width: 1px;
    }   
`

const hider = props => keyframes`
    0% {
        opacity: ${props.a ? '1' : '0'};
    }
    32% {
        opacity: ${props.a ? '1' : '0'};
    }
    33% {
        opacity: ${props.b ? '1' : '0'};
    }
    65% {
        opacity: ${props.b ? '1' : '0'};
    }
    66% {
        opacity: ${props.c ? '1' : '0'};
    }
    99% {
        opacity: ${props.c ? '1' : '0'};
    }
`

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
`

const TextCarousel = styled.div`
    position: relative;
    height: 110px;
    animation: ${slider} 6s ease infinite;
    border-right: 1px solid white;
    overflow: hidden;
`

const CarouselWord = styled.h2`
    position: absolute;
    top: 0;
    left: 0;
    font-size: 85px;
    animation: ${hider} 6s linear infinite;
    @media screen and (max-width: 600px) {
        font-size: 65px;
    }
`
