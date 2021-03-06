/* eslint-disable */
import React, { Component } from 'react'
import Section from './Section'
import BackgroundImage from './img/back.jpg'
import styled, { keyframes } from 'styled-components'

export default class Landing extends Component {
    constructor(props) {
        super(props) 
        this.a = React.createRef()
        this.b = React.createRef()
        this.c = React.createRef()
        this.state = {
            aWidth: '',
            bWidth: '',
            cWidth: '',
        }
    }

    componentDidMount() {
        this.setState({
            aWidth: `${this.a.current.offsetWidth + 10}px`,
            bWidth: `${this.b.current.offsetWidth + 10}px`,
            cWidth: `${this.c.current.offsetWidth + 10}px`,
        })
    }

    render() {
        return(
            <Wrapper scrollButtonTo="about">
                <TextCarousel widths={this.state}>
                    <CarouselWord a innerRef={this.a} id="a">Developer</CarouselWord>
                    <CarouselWord b innerRef={this.b} id="b">Designer</CarouselWord>
                    <CarouselWord c innerRef={this.c} id="c">Traveler</CarouselWord>
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
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    border: none;
    background: linear-gradient(
        rgba(0, 0, 0, 0.6), 
        rgba(0, 0, 0, 0.6)
        ), url(${BackgroundImage}) no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
    background-position: 0 0; 
    @media screen and (max-width: 600px) {
        background: transparent;
        height: calc(100vh - 112px);
    }
    @media screen and (max-width: 600px) {
        #scroll-button {
            bottom: 20vh;
        }
    }
`

const TextCarousel = styled.div`
    position: relative;
    height: 110px;
    animation: ${slider} 6s ease infinite;
    border-right: 1px solid white;
    overflow: hidden;
    @media screen and (max-width: 600px) {
        height: 90px;
        bottom: 7px;
    }

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
