/* eslint-disable */
import React, { Component } from 'react'
import { Element } from 'react-scroll'
import styled from 'styled-components'

export default class Contact extends Component {
    state = {
        form: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        flashVisible: false,
    }

    handleFormChange = (e) => {
        let newState = Object.assign({}, this.state);
        newState.form[e.target.id] = e.target.value;
        this.setState(newState);
    }

    handleFormSubmit = () => {
        if (Object.keys(this.state.form).every(value => this.state.form[value].length > 0)) {
            window.open(`
                mailto:derekslarson@gmail.com?
                subject=${this.state.subject}
                &body=${this.state.message} \n ${this.state.name} \n ${this.state.email}
            `)
            this.setState({
                name: '',
                email: '',
                subject: '',
                message: '',
            })
        } else {
            this.setState({
                flashVisibile: true
            })
        }
    }

    closeFlash = () => {
        this.setState({
            flashVisibile: false
        })
    }

    render() {
        return(    
            <Wrapper>
                <Element name="contact" />
                <h4>Get In Touch</h4>
                <div>
                    <input id="name" value={this.state.name} onChange={this.handleFormChange} placeholder="Name *" />
                    <input id="email" value={this.state.email} onChange={this.handleFormChange} placeholder="Email *" />
                    <input id="subject" value={this.state.subject} onChange={this.handleFormChange} placeholder="Subject *" />
                    <textarea id="message" value={this.state.message} onChange={this.handleFormChange} placeholder="Message *" />
                    <button type="submit" onClick={this.handleFormSubmit}>Send</button>
                </div>
                <FlashBackground visibility={this.state.flashVisibile}>
                    <Flash>
                        <FlashButton onClick={this.closeFlash}>X</FlashButton>
                        Please complete every field
                    </Flash>
            	</FlashBackground>
                
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    height: calc(100vh - 55px);
    padding: 25px;
    border-bottom: 1px solid black;
    background: white;
`

const FlashBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: hsla(0, 0%, 40%, .9);
    width: 100%;
    height: 100%;
	z-index: 100;
    visibility: ${props=> props.visibility ? 'visibile' : 'hidden'};
`;


const Flash = styled.div`
    position: fixed;
    background: white;
    width: 50%;
    height: 50%;
    top: 25%;
    left: 25%;
`;

const FlashButton = styled.button`
    position: absolute;
    top: 0px;
    right: 0px;
`
