/* eslint-disable */
import React from 'react'
import Section from './Section'
import styled from 'styled-components'
import MovieDatabase from './img/Movie Database.png'
import Pomodoro from './img/Pomodoro Timer.png'
import Simon from './img/Simon.png'

export default props => (
    <Wrapper innerRef={props.innerRef} title="My Portfolio" ScrollElement="portfolio" scrollButtonTo="contact">
        <div id="projects">
            <div>
                <img src={MovieDatabase} />
                <h6>LUMDB</h6>
                <p>A Netflix-like movie database with a search function.</p>
            </div>
            <div>
                <img src={Pomodoro} />
                <h6>Pomodoro Timer</h6>
                <p>A timer to break down work into intervals separated by short breaks.</p>
            </div>
            <div>
                <img src={Simon} />
                <h6>Simon</h6>
                <p>A re-creation of the popular hand-held game.</p>
            </div>
        </div>
    </Wrapper>
)


const Wrapper = styled(Section)`
    min-height: 100vh;
    #projects {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-self: center;
        div {
            display: flex;
            flex-direction: column;
            margin: 20px;
            width: 250px;
            img {
                height: auto;
                width: 250px;
            }
            h6 {
                align-self: center;
                margin: 10px 0;
            }
        }
    }
    @media screen and (max-width: 600px) {
        height: auto;
    }
`
