/* eslint-disable */
import React, { Component } from 'react'
import { Input, Button } from 'reactstrap'
import background from './img/b4.jpg'
import Section from './Section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

export default class Contact extends Component {

    state = {
        flashVisible: false,
        flashMessage: '',
        form: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
    }


    handleFormChange = (e) => {
        const { id, value } = e.target
        this.setState({
            form: {
                ...this.state.form,
                [id]: value
            }
        });
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
            <Wrapper title="Get In Touch" ScrollElement="contact" scrollButtonTo="top">
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
                <Flash visibile={this.state.flashVisibile}>
                    <div>
                        <h2>{this.state.flashMessage}</h2>
                        <button onClick={() => this.setState({ flashVisibile: false })}>
                            OK
                        </button>
                    </div>
            	</Flash>
            </Wrapper>
        )
    }
}

const Wrapper = styled(Section)`
    justify-content: flex-end;
    background: linear-gradient(
        rgba(0, 0, 0, 0.8), 
        rgba(0, 0, 0, 0.8)
        ), url(${background});
    background-attachment: fixed;
    background-size: cover;
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
        color: white;
        border: none;
        cursor: pointer;
        &:before {
            content: 'Send Message';
            color: white;
            white-space: nowrap;
            position: absolute;
            top: 0;
            right: -10px;
            margin: auto;
            font-size: 15px;
            transition: opacity .1s ease;
            opacity: 0;
            visibility: hidden;
            text-align: left;
            z-index: 10;
            @media screen and (max-width: 600px) {
                font-size: 12px;
            }
        }
        &:hover {
            color: rgba(0, 0, 0, 0);
            &:before {
                opacity: 1;
                visibility: visible;
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