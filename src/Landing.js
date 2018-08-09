/* eslint-disable */
import React, { Component } from 'react'
import Section from './Section'
import BackgroundImage from './img/back.jpg'
import styled, { keyframes } from 'styled-components'

export default class Landing extends Component {

    state = {
        aWidth: '',
        bWidth: '',
        cWidth: '',
    }

    componentDidMount() {
        this.setState({
            aWidth: `${this.a.offsetWidth + 10}px`,
            bWidth: `${this.b.offsetWidth + 10}px`,
            cWidth: `${this.c.offsetWidth + 10}px`,
        })
    }

    render() {
        return(
            <Wrapper ScrollButtonTo="about">
                <TextCarousel widths={this.state}>
                    <CarouselWord a innerRef={x => this.a = x} id="a">Developer</CarouselWord>
                    <CarouselWord b innerRef={x => this.b = x} id="b">Designer</CarouselWord>
                    <CarouselWord c innerRef={x => this.c = x} id="c">Traveler</CarouselWord>
                </TextCarousel>
            </Wrapper>
        )
    }
}

const slider = props => keyframes`
    0%, 33%, 66%, 99% {
        width: 1px;
    }
    11%, 22% {
        width: ${props.widths.aWidth};
    }
    44%, 55% {
        width: ${props.widths.bWidth};
    }
    77%, 88% {
        width: ${props.widths.cWidth};
    }
`

const hider = props => keyframes`
    0%, 32% {
        opacity: ${props.a ? '1' : '0'};
    }
    33%, 65% {
        opacity: ${props.b ? '1' : '0'};
    }
    66%, 99% {
        opacity: ${props.c ? '1' : '0'};
    }
`

const Wrapper = styled(Section)`
    margin-top: 56px;
    align-items: center;
    background: linear-gradient(
        rgba(0, 0, 0, 0.45), 
        rgba(0, 0, 0, 0.45)
        ), url(${BackgroundImage});
    background-attachment: fixed;
    background-size: 100% auto;
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
    font-weight: bold;
    animation: ${hider} 6s linear infinite;
    @media screen and (max-width: 600px) {
        font-size: 65px;
    }
`
