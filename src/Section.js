/* eslint-disable */
import { Link, Element, animateScroll as scroll } from 'react-scroll'
import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


export default props => (
    <Section className={props.className}>
        {props.ScrollElement ? <Element name={props.ScrollElement} /> : null}
        {props.title ? <h4>{props.title}</h4> : null}
        {props.children}
        <StyledLink to={props.scrollButtonTo === "top" ? null : props.scrollButtonTo} 
                onClick={props.scrollButtonTo === "top" ? () => scroll.scrollToTop() : null} 
                smooth={true} 
                duration={1000} 
                offset={-156}>
            <FontAwesomeIcon icon={faChevronDown} />
        </StyledLink>
    </Section>
)

const Section = styled.div`
    position: relative;
    padding: 100px;
    box-sizing: border-box;
    min-height: calc(100vh - 55px);
    border-bottom: 1px solid white;
    background: black;
    font-family: 'Open Sans', sans-serif;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4 {
        position: absolute;
        top: 50px;
        left: 50px;
        @media screen and (max-width: 600px) {
            left: 10px;
        }
    }
    @media screen and (max-width: 600px) {
        padding: 100px 10px 75px 10px;
    }
`

const StyledLink = styled(Link)`
    position: absolute;
    transform: ${props => !props.to ? 'rotate(180deg)' : null};
    align-self: center;
    width: 30px;
    bottom: ${props => props.to ? '10vh' : '5vh'};
    background: transparent;
    border: none;
    outline: none;
    user-select: none;
    &:focus {
        border: none;
        outline: none;
        user-select: none;
    }
    &:before {
        content: '';
        position: absolute;
        height: 30px;
        width: 30px;
        top: 0;
        right: 0;
        border-radius: 20px;
        background: rgba(255, 255, 255, .2);
        cursor: pointer;
        transition: background .5s ease, transform .5s ease;
        z-index: 2;
        
    }
    &:hover:before {
        background: rgba(255, 255, 255, 0);
        transform: scale(1.25, 1.25);
    }
    svg {
        position: absolute;
        top: 8px;
        left: 8px;
        color: white;
        cursor: pointer;
    }
`
