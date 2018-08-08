/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import {animateScroll as scroll} from 'react-scroll'
import PageUpButton from './ScrollButton'
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