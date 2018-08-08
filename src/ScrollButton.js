import React from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'


export default props => (
    <StyledLink to={props.to} up={props.up} onClick={props.onClick} smooth={true} duration={1000} offset={-81}>
            <FontAwesomeIcon icon={props.up ? faChevronUp : faChevronDown} />
    </StyledLink>
) 

const StyledLink = styled(Link)`
    position: relative;
    align-self: center;
    width: 30px;
    bottom: 6vh;
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
        top: ${props => props.up ? '6px' : '8px'};
        left: 8px;
        color: white;
        cursor: pointer;
    }
`
