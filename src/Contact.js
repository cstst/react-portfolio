/* eslint-disable */
import React, { Component } from 'react'
import { Input, Button } from 'reactstrap'
import { Element, animateScroll as scroll } from 'react-scroll'
import PageUp from './ScrollButton'
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
            console
            window.open(`
                mailto:derekslarson@gmail.com?subject=${this.state.form.subject}&body=${this.state.form.message} \n ${this.state.form.name} \n ${this.state.form.email}
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
                <ContactForm>
                    <Input id="name" value={this.state.form.name} onChange={this.handleFormChange} placeholder="Name *" />
                    <Input type="email" id="email" value={this.state.form.email} onChange={this.handleFormChange} placeholder="Email *" />
                    <Input id="subject" value={this.state.form.subject} onChange={this.handleFormChange} placeholder="Subject *" />
                    <Input type="textarea" id="message" value={this.state.form.message} onChange={this.handleFormChange} placeholder="Message *" />
                    <Button onClick={this.handleFormSubmit}>Send</Button>
                </ContactForm>
                <Flash visibility={this.state.flashVisibile}>
                    <div>
                        <button onClick={this.closeFlash}>X</button>
                        Please complete every field
                    </div>
            	</Flash>
                <PageUp up onClick={() => scroll.scrollToTop()} />
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    height: calc(100vh - 55px);
    border-bottom: 1px solid white;
    padding: 0 50px;
    background: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ContactForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 70%;
    input, textarea, button {
        margin: 5px 0;
    }
    button {
        width: 30%;
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
    visibility: ${props=> props.visibility ? 'visibile' : 'hidden'};

    div {
        position: fixed;
        background: white;
        width: 50%;
        height: 50%;
        top: 25%;
        left: 25%;
        
        button {
            position: absolute;
            top: 0px;
            right: 0px;
        }
    }
`