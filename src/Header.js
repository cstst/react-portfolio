/* eslint-disable */
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

    render() {
        return (
            <StyledNavbar color="light" light fixed="top" expand="md">
                <NavbarBrand onClick={() => scroll.scrollToTop()}>Derek Larson</NavbarBrand>
                <NavbarToggler onClick={() => this.setState({isOpen: !this.state.isOpen})}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="about" smooth={true} duration={1000} offset={-81}>
                                <NavLink>About</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="services" smooth={true} duration={1000} offset={-81}>
                                <NavLink>Services</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="portfolio" smooth={true} duration={1000} offset={-81}>
                                <NavLink>Portfolio</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="contact" smooth={true} duration={1000} offset={-81}>
                                <NavLink>Contact</NavLink>
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </StyledNavbar>
        )
    }
}


const StyledNavbar = styled(Navbar)`
    user-select: none;
    .navbar-brand, a {
        cursor: pointer;
    }
    .navbar-toggler {
        outline: none;
    }
`
