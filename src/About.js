/* eslint-disable */

import React from 'react'
import { Element } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

export default () => (
    
    <Wrapper>
        <Element name="about" />
        <h4>About Me</h4>
        <p>I'm <strong>Derek Larson</strong>, a front-end web developer from Seattle, Washington, currently living in Phnom Penh, Cambodia.
           I am well versed in technologies such as HTML, CSS, Sass, JavaScript, jQuery, React, Redux &amp; Git. I build dynamic,
           responsive and beautiful web applications.</p>
        <p>I have spent the last five years living in Southeast Asia &amp; traveling the world, which has given me a broader perspective
           on life and the skills needed to think oustide the box. I love a challenge and am a genuine autodidact. Get in touch
           with me for help on your project!</p>
        <button>
            <FontAwesomeIcon icon={faGithub} size={100} />
        </button>
        <button>
            <FontAwesomeIcon icon={faLinkedin} size={100} />
        </button>
        <button>
            <FontAwesomeIcon icon={faDownload} size={100} />
        </button>
    </Wrapper>
)

const Wrapper = styled.div`
    height: calc(100vh - 55px);
    padding: 25px;
    border-bottom: 1px solid black;
    background: white;
    button {
        background: transparent;
        border: none;
    }
`
