/* eslint-disable */

import React from 'react'
import Section from './Section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import Resume from './doc/Resume.docx'
import styled from 'styled-components'

export default () => (
    
    <Wrapper title="About Me" ScrollElement="about" scrollButtonTo="services">
        <p>I'm <strong>Derek Larson</strong>, a front-end web developer from Seattle, Washington, currently living in Phnom Penh, Cambodia.
           I am well versed in technologies such as HTML, CSS, Sass, JavaScript, jQuery, React, Redux &amp; Git. I build dynamic,
           responsive and beautiful web applications.</p>
        <p>I have spent the last five years living in Southeast Asia &amp; traveling the world, which has given me a broader perspective
           on life and the skills needed to think oustide the box. I love a challenge and am a genuine autodidact. Get in touch
           with me for help on your project!</p>
        <div id="icons">
            <StyledA name="Visit my Github" href="https://github.com/cstst" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </StyledA>
            <StyledA name="Visit my Linkedin" href="https://www.linkedin.com/in/derekslarson" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </StyledA>
            <StyledA name="Download my resume" href={Resume} download>
                <FontAwesomeIcon icon={faDownload} size="2x" />
            </StyledA>
        </div>
    </Wrapper>
)
 
const Wrapper = styled(Section)`
    #icons {
        position: relative;
    }
`

const StyledA = styled.a`
    margin: 10px;
    background: transparent;
    border: none;
    color: rgb(255, 255, 255);
    transition: color .5s ease;
    &:before {
        content: '${props => props.name}';
        position: absolute;
        color: white;
        white-space: nowrap;
        top: -40px;
        left: -5px;
        transition: opacity .5s ease;
        opacity: 0;
        visibility: hidden;
        width: 160px;
        text-align: center;
        @media screen and (max-width: 600px) {
            top: 5px;
            left: 150px;
            text-align: left;
        }
    }
    &:hover {
        color: rgb(0, 0, 255);
        &:before {
            opacity: 1;
            visibility: visible;
        
    }
`
