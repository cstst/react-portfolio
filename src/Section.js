/* eslint-disable */
import { Link, Element, animateScroll as scroll } from 'react-scroll'
import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


export default React.forwardRef((props, ref) => (
    <Section 
        innerRef={ref} 
        className={props.className}
    >
        {props.ScrollElement ? <Element class="element" name={props.ScrollElement} /> : null}
        {props.title ? <h4>{props.title}</h4> : null}
        {props.children}
        <StyledLink 
                id="scroll-button"
                to={props.scrollButtonTo === "top" ? null : props.scrollButtonTo} 
                onClick={props.scrollButtonTo === "top" ? () => scroll.scrollToTop() : null} 
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
    transform: ${props => !props.to ? 'rotate(180deg)' : null};
    align-self: center;
    background: transparent;
    border: none;
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
        height: 30px;
        width: 30px;
        top: 0;
        right: 0;
        border-radius: 20px;
        background: rgba(255, 255, 255, .2);
        cursor: pointer;
        transition: background .5s ease, transform .5s ease;
        
        
    }
    &:hover:before {
        background: rgba(255, 255, 255, 0);
        transform: scale(1.25, 1.25);
    }
    svg {
        position: absolute;
        top: 9px;
        left: 8px;
        color: white;
        cursor: pointer;
    }
`
