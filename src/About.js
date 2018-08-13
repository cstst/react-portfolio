/* eslint-disable */
import React from 'react'
import Section from './Section'
import { Link } from 'react-scroll'
import Derek from './img/derek.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Resume from './doc/Resume.docx'
import styled from 'styled-components'

export default () => (
    
    <Wrapper title="About Me" ScrollElement="about" scrollButtonTo="services">
        <img src={Derek}/>
        <div id="copy">
            <p>I'm <strong>Derek Larson</strong>, a front-end web developer from Seattle, Washington, currently living in Phnom Penh, Cambodia.
            I am well versed in technologies such as HTML, CSS, Sass, JavaScript, jQuery, React, Redux &amp; Git. I build dynamic,
            responsive and beautiful web applications.</p>
            <p>I have spent the last five years living in Southeast Asia &amp; traveling the world, which has given me a broader perspective
            on life and the skills needed to think oustide the box. I love a challenge and am a genuine autodidact. Get in touch
            with me for help on your project!</p>
        </div>
        <div id="links">
            <StyledLink to="contact"
                smooth={true} 
                duration={1000} 
                offset={-56}>
                    <StyledA id="resume" tooltip="Email me" href="" >
                        <FontAwesomeIcon icon={faEnvelope} transform="grow-13" />
                    </StyledA>
            </StyledLink>
            <StyledA tooltip="Visit my LinkedIn" href="https://www.linkedin.com/in/derekslarson" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} transform="grow-13" />
            </StyledA>
            <StyledA tooltip="Visit my GitHub" href="https://github.com/cstst" target="_blank">
                <FontAwesomeIcon icon={faGithub} transform="grow-13" />
            </StyledA>
        </div>
    </Wrapper>
)
 
const Wrapper = styled(Section)`    
    flex-direction: row;
    align-items: center;

    #copy {
        display: flex;
        text-align: justify;
        flex-direction: column;
        justify-content: space-between;
        height: 300px;
        margin-left: 50px;
        @media screen and (max-width: 600px) {
            margin-left: 0;
        }
    }
    img {
        width: auto;
        height: 300px;
        @media screen and (max-width: 600px) {
            display: none;
        }
    }
    #links {
        position: absolute;
        width: 35vw;
        bottom: 4.32vh;
        left: 0;
        display: flex;
        justify-content: space-between;
        margin-left: 125px;

        @media screen and (max-width: 600px) {
            position: relative;
            bottom: 0;
            margin: auto;
            width: 85vw;
        }
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

const StyledA = styled.a`
    position: relative;
    margin: 10px;
    background: transparent;
    border: none;
    color: rgb(255, 255, 255);
    transition: color .3s ease;
    width: 160px;
    text-align: center;
    &:before {
        content: '${props => props.tooltip}';
        color: white;
        white-space: nowrap;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        top: 0;
        margin: auto;
        transition: opacity .1s ease;
        opacity: 0;
        visibility: hidden;
        text-align: left;
        @media screen and (max-width: 600px) {
            font-size: 12px;
        }
    }
    &:hover {
        color: rgb(0, 0, 0);
        &:before {
            opacity: 1;
            visibility: visible;
        }
    }
`

const StyledLink = StyledA.withComponent(Link)