import React from 'react'
import { Element } from 'react-scroll'
import B4 from './img/b4.jpg'
import styled from 'styled-components'

export default () => (

    <Wrapper>
        <Element name="services" />
        <h2>Services</h2>
    </Wrapper>
)

const Wrapper = styled.div`
    position: relative;
    height: 100vh;
    padding: 25px;
    background-image: url(${B4});
    background-attachment: fixed;
    background-position: 0 35px;
    :before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: hsla(210, 0%, 8%, .75);
        z-index: 0;
      }
`

