/* eslint-disable */
import React, { Component } from 'react'
import { Input, Fade, Button } from 'reactstrap'
import BackgroundImage from './img/back.jpg'
import Section from './Section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flashVisible: false,
            flashMessage: '',
            form: {
                name: '',
                email: '',
                subject: '',
                message: '',
            },
        }    
    }
    
    handleFormChange = e => {
        const { id, value } = e.target
        this.setState({
            form: {
                ...this.state.form,
                [id]: value
            }
        })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        const { form } = this.state
        if (Object.keys(form).every(key => form[key] !== '')) {
            window.open("mailto:derekslarson@gmail.com?" + 
                `subject=${form.subject}` + 
                `&body=${form.message} ${form.name} ${form.email}`)
            this.setState({
                flashVisibile: true,
                flashMessage: "Thank you for reaching out! I'll get back to you as soon as I can!",
                form: {
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                }
            })
            setTimeout(() => {
                this.setState({ flashVisibile: false })
            }, 5000)        
        } else {
            this.setState({
                flashMessage: "Please complete every field.",
                flashVisibile: true,
            })
        }
    }

    render() {
        return(    
            <Wrapper innerRef={this.props.innerRef} title="Get In Touch" scrollElement="contact" scrollButtonTo="top">
                <ContactForm onSubmit={this.handleFormSubmit}>
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
                    <button type="submit">
                        <FontAwesomeIcon icon={faPaperPlane} transform="grow-15" />
                    </button>
                </ContactForm>
                <Fade in={this.state.flashVisibile} exit>
                    <Flash visibile={this.state.flashVisibile}>
                        <div id="flash">
                            <h2>{this.state.flashMessage}</h2>
                            <Button onClick={() => this.setState({ flashVisibile: false })}>
                                OK
                            </Button>
                        </div>
                    </Flash>
                </Fade>
            </Wrapper>
        )
    }
}

const Wrapper = styled(Section)`
    min-height: 100vh;
    background: linear-gradient(
        rgba(0, 0, 0, 0.6), 
        rgba(0, 0, 0, 0.6)
        ), url(${BackgroundImage}) no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
    background-position: 0 0; 
    @media screen and (max-width: 600px) {
        background: transparent;
    }

`

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-self: center;
    width: 60%;
    position: relative;
    @media screen and (max-width: 600px) {
        width: 95%;
    }

    input, button, #message {
        margin: 5px 0;
    }
    button {
        position: absolute;
        bottom: -50px;
        right: 15px;
        background: transparent;
        color: rgba(255, 255, 255, 1);
        transition: color .3s ease-out;
        border: none;
        cursor: pointer;
        &:before {
            content: 'Send Message';
            color: rgba(255, 255, 255, 1);
            white-space: nowrap;
            position: absolute;
            top: 0;
            right: -10px;
            margin: auto;
            font-size: 15px;
            opacity: 0;
            text-align: left;
            z-index: 0;
            @media screen and (max-width: 600px) {
                font-size: 12px;
                right: 50px;
            }
        }
        &:focus {
            outline: none;
        }
        &:hover {
            color: rgba(0, 0, 0, 0);
            &:before {
                transition: opacity .3s ease-in;
                opacity: 1;
            }
        }
    }
    
    #message {
        height: 190px;
        resize: none;
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
    background: rgba(0, 0, 0, .6);
    width: 100%;
    height: 100%;
    z-index: 100;
    visibility: ${props=> props.visibile ? 'visibile' : 'hidden'};

    #flash {
        position: fixed;
        background: hsla(210, 2%, 18%, 1);
        width: 40%;
        border-radius: 5px;
        height: 40%;
        top: 30%;
        left: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 100;
        padding: 20px;
        text-align: center;
        font-size: 20px;
        button {
            margin: 20px;
        }
        @media screen and (max-width: 600px) {
            width: 100%;
            left: 0;
        }
    }
`