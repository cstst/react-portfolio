/* eslint-disable */
import React from 'react'
import Section from './Section'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faObjectGroup, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
export default () => (

    <Wrapper title="My Services" ScrollElement="services" scrollButtonTo="portfolio">
        <div className="service">
            <FontAwesomeIcon icon={faLaptop} transform="grow-65" />
            <h6>Development</h6>
            <p>I specialize in front-end web development using technologies such as HTML, CSS, Sass, JavaScript, jQuery &amp; React.</p>
        </div>
        <div className="service">
            <FontAwesomeIcon icon={faObjectGroup} transform="grow-65"  />
            <h6>Design</h6>
            <p>I have an eye for quality UI/UX and think beyond the functionality of the code. I will make your project beautiful!</p>
        </div>
        <div className="service">
            <FontAwesomeIcon icon={faMobileAlt} transform="grow-65"  />
            <h6>Responsiveness</h6>
            <p>Everything I develop is fully responsive across all browsers and devices using technologies such as Bootstrap, CSS
               Grid and Flexbox.</p>
        </div>
    </Wrapper>
)


const Wrapper = styled(Section)`
    display: flex;
    flex-direction: row;
    .service {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin: 10px;
        padding: 10px;
        text-align: justify;
        width: 350px;
        svg {
            height: 130px;
        }   
    }
    @media screen and (max-width: 600px) {
        flex-direction: column;
        .service {
            width: 95%;
        }
    }
`

