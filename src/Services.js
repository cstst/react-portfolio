/* eslint-disable */
import React from 'react'
import Section from './Section'
import styled from 'styled-components'

export default () => (

    <Wrapper title="My Services" ScrollElement="services" scrollButtonTo="portfolio">
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
    </Wrapper>
)


const Wrapper = styled(Section)`

`

