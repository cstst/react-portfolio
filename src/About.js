/* eslint-disable */
import React from 'react'
import Section from './Section'
import { Link } from 'react-scroll'
import Derek from './img/derek.jpg'
import Resume from './doc/Resume.docx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

export default props => (    
    <Wrapper innerRef={props.innerRef} title="About Me" scrollElement="about" scrollButtonTo="services">
        <div id="headshot-holder">
            <img id="headshot" src={Derek} alt="headshot"/>
        </div>
        <div id="copy">
            <p>
                I'm <strong>Derek Larson</strong>, a front-end web developer from Seattle, Washington, currently living in Phnom Penh, Cambodia.
                I am well versed in technologies such as HTML, CSS, Sass, JavaScript, jQuery, React, Redux &amp; Git. I build dynamic,
                responsive and beautiful web applications.
            </p>
            <p>
                I have spent the last five years living in Southeast Asia &amp; traveling the world, which has given me a broader perspective
                on life and the skills needed to think outside the box. I love a challenge and am a genuine autodidact. Get in touch
                with me for help on your project!
            </p>
        </div>
        <div id="links">
            <StyledLink id="emailOne" to="contact"
                smooth={true} 
                duration={1000} 
                offset={-56}>
                    <StyledA tooltip="Email me" href="" >
                        <FontAwesomeIcon icon={faEnvelope} transform="grow-8" />
                    </StyledA>
            </StyledLink>
            <StyledA tooltip="Visit my LinkedIn" href="https://www.linkedin.com/in/derekslarson" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} transform="grow-8" />
            </StyledA>
            <StyledA tooltip="Visit my GitHub" href="https://github.com/cstst" target="_blank">
                <FontAwesomeIcon icon={faGithub} transform="grow-8" />
            </StyledA>
        </div>
        <div id="resume">
            <StyledLink to="contact"
                smooth={true} 
                duration={1000} 
                offset={-56}>
                    <StyledA tooltip="Email me" href="" >
                        <FontAwesomeIcon icon={faEnvelope} transform="grow-8" />
                    </StyledA>
            </StyledLink>
            <StyledA tooltip="Download my resume" href={Resume} download>
                <FontAwesomeIcon icon={faDownload} transform="grow-8" />
            </StyledA>
        </div>
    </Wrapper>
)
const Wrapper = styled(Section)`   

    flex-direction: row;
    align-items: flex-end;
    #headshot-holder {
        position: relative;    
        &:before {
            content: '';
            position: absolute;
            top: 5px;
            left: 5px;
            transition: all 0.3s ease;
            height: 100%;
            width: 100%;
            background: hsl(210, 2%, 18%);
        }
        img {
            position: relative;
            top: -5px;
            left: -5px;
            transition: all 0.3s ease;
            width: 15em;
            height: auto;
        }
        &:hover {
            &:before {
                top: -5px;
                left: -5px;
                background: hsl(210, 2%, 28%);
            }
            img {
                top: 5px;
                left: 5px;
            }
        }
        @media screen and (max-width: 600px) {
            display: none;
        }
    }
    #copy {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }
    #links {
        position: absolute;

        display: flex;
        justify-content: flex-end;
 
        #emailOne {
            display: none;
        }
        @media screen and (max-width: 600px) {
            position: relative;

            #emailOne {
                display: block;
            }
            svg {
                transform: scale(1.4, 1.4);
            } 
        }
    }
    #resume {
        position: absolute;

        display: flex;
        justify-content: flex-start;
        @media screen and (max-width: 600px) {
            display: none;
        }
    }
    @media screen and (max-width: 600px) {
        flex-direction: column;
        #scroll-button {
        }
    }
    @media screen and (max-width: 600px) {
        
    }
`
const StyledA = styled.a`
    position: relative;

    background: transparent;
    border: none;
    color: rgb(255, 255, 255);
    transition: color .3s ease-out;
    text-align: center;
    &:before {
        content: '${props => props.tooltip}';
        color: white;
        white-space: nowrap;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        margin: auto;
        opacity: 0;
        text-align: left;
        z-index: 0;

    }
    &:hover {
        color: rgba(0, 0, 0, 0);
        &:before {
            transition: opacity .3s ease-in;
            opacity: 1;
        }
    }
`
const StyledLink = styled(Link)`

    text-align: center;
`