/* eslint-disable */
import { Link, Element, animateScroll as scroll } from 'react-scroll'
import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


export default React.forwardRef(({ className, scrollElement, title, children, scrollButtonTo }, ref) => (
    <Section 
        innerRef={ref} 
        className={className}
    >
        {scrollElement ? <Element class="element" name={scrollElement} /> : null}
        {title ? <h2>{title}</h2> : null}
        {children}
        <StyledLink 
            to={scrollButtonTo !== "top" ? scrollButtonTo : null} 
            onClick={scrollButtonTo === "top" ? () => scroll.scrollToTop() : null} 
            smooth={true} 
            duration={1000}
        >   
            <FontAwesomeIcon icon={faChevronDown} />
        </StyledLink>
    </Section>
))

const Section = styled.section`
    position: relative;
    box-sizing: border-box;
    background: #111111;
    font-size: 16px;
    @media screen and (min-width: 320px) {
        font-size: calc(16px + 6 * ((100vw - 320px) / 680));
    }
    @media screen and (min-width: 1000px) {
        font-size: 22px;
    }
    font-family: 'Open Sans', sans-serif;
    color: white;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
    h4 {

    }
    h6 {
        
    }
    .element {
        position: absolute;
        top: 0;
        left: 0;
    }

`

const StyledLink = styled(Link)`
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    transform: ${props => !props.to ? 'rotate(180deg)' : null};
    background: transparent;
    outline: none;
    user-select: none;
    z-index: 0;
    &:focus {
        border: none;
        outline: none;
        user-select: none;
    }
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: -15px;
        height: 30px;
        width: 30px;
        border-radius: 30px;
        background: rgba(255, 255, 255, .2);
        cursor: pointer;
        transition: background .5s ease, transform .5s ease;      
    }
    &:hover:before {
        background: rgba(255, 255, 255, 0);
        transform: scale(1.25, 1.25);
    }
    svg {
        font-size: 15px;
        position: absolute;
        top: 9px;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        cursor: pointer;
    }
`
