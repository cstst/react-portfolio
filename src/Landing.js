/* eslint-disable */
import React, { Component } from 'react'
import Section from './Section'
import BackgroundImage from './img/back.jpg'
import styled, { keyframes } from 'styled-components'

export default class Landing extends Component {
    constructor(props) {
        super(props) 
        this.carousel = React.createRef()
        this.a = React.createRef()
        this.b = React.createRef()
        this.c = React.createRef()
        this.state = {
            docWidth: '',
            aWidth: '',
            bWidth: '',
            cWidth: '',
        }
    }

    componentDidMount() {
        this.setState({
            docWidth: document.body.offsetWidth,
            aWidth: `${this.a.current.offsetWidth}px`,
            bWidth: `${this.b.current.offsetWidth}px`,
            cWidth: `${this.c.current.offsetWidth}px`,
        })

        const refs = [this.carousel.current, this.a.current, this.b.current, this.c.current]

        window.onresize = () => {
            if (this.state.docWidth !== document.body.offsetWidth) {
                refs.forEach(ref => ref.style.animation = 'none' )
                setTimeout(() => refs.forEach(ref => ref.style.animation = ''), 1)
                this.setState({
                    docWidth: document.body.offsetWidth,
                    aWidth: `${this.a.current.offsetWidth}px`,
                    bWidth: `${this.b.current.offsetWidth}px`,
                    cWidth: `${this.c.current.offsetWidth}px`,
                })
            }   
        }
    }


    render() {
        return(
            <Wrapper scrollButtonTo="about">
                <TextCarousel innerRef={this.carousel} widths={this.state}>
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
        width: calc(${props.widths.aWidth} + .15em);
    }
    44%, 55% {
        width: calc(${props.widths.bWidth} + .15em);
    }
    77%, 88% {
        width: calc(${props.widths.cWidth} + .15em);
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
    background: transparent;
    @media screen and (min-width: 600px) {
        background: linear-gradient(
            rgba(0, 0, 0, 0.6), 
            rgba(0, 0, 0, 0.6)
            ), url(${BackgroundImage}) no-repeat;
        background-size: cover;
        background-attachment: fixed;
        background-position: 0 0; 
    }

`

const TextCarousel = styled.div`
    position: relative;
    padding: 0;
    font-size: 17vw;
    @media screen and (min-width: 600px) {
        font-size: 13vw;
    }
    @media screen and (min-width: 768px) {
        font-size: 8vw;
    }

    height: 1.18em;
    animation: ${slider} 6s ease infinite;
    border-right: 1px solid white;
    overflow: hidden;


`

const CarouselWord = styled.h1`
    position: absolute;
    padding: 0;
    font-size: 1em;
    top: 0;
    left: 0;
    line-height: 1em;
    font-weight: bold;
    animation: ${hider} 6s linear infinite;

`
