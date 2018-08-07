import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import BackgroundImage from './img/back.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default () => (

    <Wrapper>
        <Link to="about" smooth={true} duration={1000} offset={-81}>
            <div />
            <FontAwesomeIcon icon={faChevronDown} />
        </Link>
    </Wrapper>
)

const PageDownPosition = `
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
`

const Wrapper = styled.div`
    position: relative;
    margin-top: 56px;
    height: calc(100vh - 55px);
    padding: 25px;
    background: linear-gradient(
        rgba(0, 0, 0, 0.45), 
        rgba(0, 0, 0, 0.45)
        ), url(${BackgroundImage});
    background-attachment: fixed;
    background-size: 100% auto;
    @media screen and (max-width: 600px) {
        background-size: auto 100%;
    }

    div {
        ${PageDownPosition}
        bottom: 30px;
        height: 30px;
        width: 30px;
        border-radius: 20px;
        background: rgba(255, 255, 255, .2);
        cursor: pointer;
        transition: background .3s ease, transform .3s ease;
        z-index: 2;
        &:hover {
            background: rgba(255, 255, 255, 0);
            transform: scale(1.25, 1.25);
        }
    }

    svg {
        ${PageDownPosition}
        color: white;
        bottom: 35px;
        cursor: pointer;
    }
`