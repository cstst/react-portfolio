/* eslint-disable */
import React from 'react'
import { Element } from 'react-scroll'
import PageDown from './ScrollButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

export default () => (

    <Wrapper>
        <Element name="services" />
        <h4>My Services</h4>
        <div>
            <h6>Development</h6>
            <p>I specialize in front-end web development using technologies such as HTML, CSS, Sass, JavaScript, jQuery &amp; React.</p>
        </div>
        <div>
            <h6>Design</h6>
            <p>I have an eye for quality UI/UX and think beyond the functionality of the code. I will make your project beautiful!</p>
        </div>
        <div>
            <h6>Responsiveness</h6>
            <p>Everything I develop is fully responsive across all browsers and devices using technologies such as Bootstrap, CSS
               Grid and Flexbox.</p>
        </div>
        <PageDown to="portfolio" icon={faChevronDown}>
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

