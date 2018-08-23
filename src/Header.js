/* eslint-disable */
import React, { Component } from 'react'
import { Link } from 'react-scroll'
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
        isOpen: false,
    }

    componentDidUpdate = () => { 
        const { props: { scrollUp }, state: { isOpen } } = this
        if (!scrollUp && isOpen) {
            this.setState({ isOpen: false })
        }
    }

    render() {
        const { state: { isOpen }, props: { scrollUp, pageHead, page } } = this
        return (
            <Wrapper>
                <Navbar 
                    className={
                        scrollUp ? "scroll-up" : 
                        pageHead ? "page-head" :
                        isOpen ? "open" : ""
                    } 
                    fixed="top" 
                    expand="md"
                >   
                    <NavbarToggler onClick={() => this.setState({isOpen: !isOpen})}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className={page ==="about" ? "active" : ""}>
                                <Link to="about" smooth={true} duration={1000}>
                                    <p className="nav-link">About</p>
                                </Link>
                            </NavItem>
                            <NavItem className={page ==="services" ? "active" : ""}>
                                <Link to="services" smooth={true} duration={1000}>
                                    <p className="nav-link">Services</p>
                                </Link>
                            </NavItem>
                            <NavItem className={page ==="portfolio" ? "active" : ""}>
                                <Link to="portfolio" smooth={true} duration={1000}>
                                    <p className="nav-link">Portfolio</p>
                                </Link>
                            </NavItem>
                            <NavItem className={page ==="contact" ? "active" : ""}>
                                <Link to="contact" smooth={true} duration={1000}>
                                    <p className="nav-link">Contact</p>
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
        background: rgba(0, 0, 0, 0) !important;
        user-select: none;
        font-weight: 100;
        top: -56px;
        transition: all .3s ease !important;
        @media screen and (min-width: 600px) {
            background: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, 0)) !important;
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
    .scroll-up {
        transform: translateY(56px);    
    }
    .page-head {
        @media screen and (min-width: 600px) {
            transform: translateY(56px);     
        }
    }
    .open {
        background: rgba(0, 0, 0, .8) !important;

    }
    
`