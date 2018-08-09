/* eslint-disable */

import React from 'react'
import { Element } from 'react-scroll'
import Section from './Section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

export default () => (
    
    <Wrapper scrollButtonTo="services">
        <Element name="about" />
        <h4>About Me</h4>
        <p>I'm <strong>Derek Larson</strong>, a front-end web developer from Seattle, Washington, currently living in Phnom Penh, Cambodia.
           I am well versed in technologies such as HTML, CSS, Sass, JavaScript, jQuery, React, Redux &amp; Git. I build dynamic,
           responsive and beautiful web applications.</p>
        <p>I have spent the last five years living in Southeast Asia &amp; traveling the world, which has given me a broader perspective
           on life and the skills needed to think oustide the box. I love a challenge and am a genuine autodidact. Get in touch
           with me for help on your project!</p>
        <div>
            <button>
                <FontAwesomeIcon icon={faGithub} />
            </button>
            <button>
                <FontAwesomeIcon icon={faLinkedin} />
            </button>
            <button>
                <FontAwesomeIcon icon={faDownload} />
            </button>
        </div>
    </Wrapper>
)
 
const Wrapper = styled(Section)`

    button {
        background: transparent;
        border: none;
        color: white;
    }
`
