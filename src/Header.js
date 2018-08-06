import React, { Component } from 'react'
import { Link,  animateScroll as scroll} from 'react-scroll'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem } from 'reactstrap'
import styled from 'styled-components'

export default class Header extends Component {
    
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <Navbar fixed="top" color="light" light expand="md">
                <NavbarBrand onClick={() => scroll.scrollToTop()} style={{cursor: 'pointer'}}>Derek Larson</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink>
                                <Link to="about" smooth={true} duration={1000} style={{cursor: 'pointer'}}>About</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="services" smooth={true} duration={1000} style={{cursor: 'pointer'}}>Services</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="portfolio" smooth={true} duration={1000} style={{cursor: 'pointer'}}>Portfolio</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="contact" smooth={true} duration={1000} style={{cursor: 'pointer'}}>Contact</Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}
