/* eslint-disable */
import React, { Component } from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavLink,
    NavItem } from 'reactstrap'
import styled from 'styled-components'

export default class Header extends Component {
    
    state = {
        scrollPos: 0,
        isOpen: false,
    }

    componentDidUpdate = props => {
        if (props.hidden && this.state.isOpen) {
            this.setState({ isOpen: false })
        }
    }

    render() {
        return (
            <Wrapper>
                <Navbar 
                    className={this.props.hidden ? "hidden" : this.state.isOpen ? "open" : ""} 
                    fixed="top" 
                    expand="md"
                >   
                    <NavbarToggler onClick={() => this.setState({isOpen: !this.state.isOpen})}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className={this.props.curPg ==="about" ? "active" : ""}>
                                <Link to="about" smooth={true} duration={1000}>
                                    <NavLink>About</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem className={this.props.curPg ==="services" ? "active" : ""}>
                                <Link to="services" smooth={true} duration={1000}>
                                    <NavLink>Services</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem className={this.props.curPg ==="portfolio" ? "active" : ""}>
                                <Link to="portfolio" smooth={true} duration={1000}>
                                    <NavLink>Portfolio</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem className={this.props.curPg ==="contact" ? "active" : ""}>
                                <Link to="contact" smooth={true} duration={1000}>
                                    <NavLink>Contact</NavLink>
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    .navbar {
        display: flex;
        justify-content: flex-end;
        background: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, 0)) !important;
        user-select: none;
        font-weight: 100;
        transition: all .3s ease !important;
        @media screen and (max-width: 600px) {
            background: rgba(0, 0, 0, 0) !important;
        }
        .navbar-toggler {
            outline: none;
            position: relative;
            &:before {
                content: "";
                position: absolute;
                right: .25em;
                top: .5em;
                width: 1.5em;
                height: .15em;
                background: white;
                border-radius: 2em;
                box-shadow: 
                    0 .375em 0 0 white,
                    0 .75em 0 0 white;
            }

        }
        .navbar-nav {   
            @media screen and (max-width: 600px) {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
            }
            a {
                color: white !important;
                cursor: pointer;
                
                &:hover {
                    transition: font-weight .3s ease;
                    font-weight: 500;
                }
            }
            .active {
                transition: font-weight .3s ease;
                font-weight: 500;
            }
        }
    }
    .hidden {
        transform: translateY(-56px);
    }
    .open {
        background: rgba(0, 0, 0, .8) !important;

    }
    
`