/* eslint-disable */
import React, { Component } from 'react'
import { Input, Button } from 'reactstrap'
import Section from './Section'
import styled from 'styled-components'

export default class Contact extends Component {

    state = {
        flashVisible: false,
        form: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
    }


    handleFormChange = (e) => {
        let newState = Object.assign({}, this.state)
        newState.form[ e.target.id] = e.target.value
        this.setState(newState);
    }

    handleFormSubmit = () => {
        if (Object.keys(this.state.form).every(value => this.state.form[value] !== '')) {
            window.open("mailto:derekslarson@gmail.com?" + 
                `subject=${this.state.form.subject}` + 
                `body=${this.state.form.message} ${this.state.form.name} ${this.state.form.email}`)
            this.setState({
                form: {
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                }
            })
        } else {
            this.setState({
                flashVisibile: true,
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
            <Wrapper title="Get In Touch" ScrollElement="contact" scrollButtonTo="top">
                <ContactForm>
                    <div>
                        <Input id="name" 
                            value={this.state.form.name} 
                            onChange={this.handleFormChange} 
                            placeholder="Name *" />
                        <Input type="email" 
                            id="email" 
                            value={this.state.form.email} 
                            onChange={this.handleFormChange} 
                            placeholder="Email *" />
                    </div>
                    <Input id="subject" 
                        value={this.state.form.subject} 
                        onChange={this.handleFormChange} 
                        placeholder="Subject *" />
                    <Input type="textarea" 
                        id="message" 
                        value={this.state.form.message} 
                        onChange={this.handleFormChange} 
                        placeholder="Message *" />
                    <Button onClick={this.handleFormSubmit}>Send</Button>
                </ContactForm>
                <Flash visibile={this.state.flashVisibile}>
                    <div>
                        <h2>Please complete every field</h2>
                        <button onClick={this.closeFlash}>OK</button>
                    </div>
            	</Flash>
            </Wrapper>
        )
    }
}

const Wrapper = styled(Section)`
    justify-content: center;
    border: none;

`

const ContactForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-self: center;
    width: 60%;
    @media screen and (max-width: 600px) {
        width: 95%;
    }

    input, textarea, button {
        margin: 5px 0;
    }
    button {
        width: 30%;
    }
    
    #message {
        height: 100px;
    }

    div {
        display: flex;
        justify-content: space-between;
        width: 100%;
        input {
            width: calc(50% - 5px);
        }
    }
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px white inset;
    }
`

const Flash = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: hsla(0, 0%, 40%, .9);
    width: 100%;
    height: 100%;
	z-index: 100;
    visibility: ${props=> props.visibile ? 'visibile' : 'hidden'};

    div {
        position: fixed;
        background: black;
        width: 50%;
        height: 50%;
        top: calc(25% + 20px);
        left: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 600px) {
            width: 100%;
            left: 0;
        }
    }
`