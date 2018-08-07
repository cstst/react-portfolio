/* eslint-disable */
import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import BackgroundImage from './img/back.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default () => (

    <Wrapper>
        <h1>Derek Larson</h1>
        <Link to="about" smooth={true} duration={1000} offset={-81}>
        <PageDownButton>
            <FontAwesomeIcon icon={faChevronDown} />
        </PageDownButton>
        </Link>
    </Wrapper>
)

const Wrapper = styled.div`
    position: relative;
    margin-top: 56px;
    height: calc(100vh - 56px);
    padding: 25px;
    color: white;

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

const PageDownButton = styled.div`
    position: relative;
    width: 30px;
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