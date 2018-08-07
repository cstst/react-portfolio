/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import {animateScroll as scroll} from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default () => (
    
    <Wrapper>
        <PageUpButton onClick={() => scroll.scrollToTop()}>
            <FontAwesomeIcon icon={faChevronUp} />
        </PageUpButton>
    </Wrapper>
)

const Wrapper = styled.div`
    height: 100px;
    box-sizing: border-box;
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`
const PageUpButton = styled.div`
    position: relative;
    width: 30px;
    height: 30px;
    bottom: 6vh;
    &:before {
        content: '';
        position: absolute;
        height: 30px;
        width: 30px;
        border-radius: 20px;
        background: rgba(255, 255, 255, .2);
        cursor: pointer;
        transition: background .5s ease, transform .5s ease;
        z-index: 2;    
    }
    &:hover:before {
        background:  rgba(255, 255, 255, 0);
        transform: scale(1.25, 1.25);
    }
    svg {
        position: absolute;
        top: 7px;
        left: 8px;
        color: white;
        cursor: pointer;
    }
`