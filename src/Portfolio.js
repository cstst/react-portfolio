/* eslint-disable */
import React from 'react'
import { Element } from 'react-scroll'
import PageDown from './ScrollButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

export default () => (

    <Wrapper>
        <Element name="portfolio" />
        <h4>My Portfolio</h4>
        <div>
            <h6>E-Commerce Store</h6>
            <p>A mock up of an e-commerce store.</p>
        </div>
        <div>
            <h6>Movie Database</h6>
            <p>A Netflix-like movie database</p>
        </div>
        <div>
            <h6>Music Player</h6>
            <p>A functioning music player.</p>
        </div>
        <div>
            <h6>Simon</h6>
            <p>A recreation of the popular hand-held game.</p>
        </div>
        <PageDown to="contact">
            <FontAwesomeIcon icon={faChevronDown} />
        </PageDown>
    </Wrapper>
)

const Wrapper = styled.div`
    height: calc(100vh - 55px);
    padding: 25px;
    border-bottom: 1px solid white;
    background: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
