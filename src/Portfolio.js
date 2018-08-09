/* eslint-disable */
import React from 'react'
import { Element } from 'react-scroll'
import Section from './Section'
import styled from 'styled-components'

export default () => (

    <Wrapper ScrollButtonTo="contact">
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
    </Wrapper>
)

const Wrapper = styled(Section)`

`
