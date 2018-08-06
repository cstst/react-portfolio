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
                <StyledNavbarBrand onClick={() => scroll.scrollToTop()}>Derek Larson</StyledNavbarBrand>
                <NavbarToggler onClick={this.toggle} style={{outline: 'none'}}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink>
                                <StyledLink to="about" smooth={true} duration={1000}>About</StyledLink>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <StyledLink to="services" smooth={true} duration={1000}>Services</StyledLink>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <StyledLink to="portfolio" smooth={true} duration={1000}>Portfolio</StyledLink>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <StyledLink to="contact" smooth={true} duration={1000}>Contact</StyledLink>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

const StyledNavbarBrand = styled(NavbarBrand)`
    cursor: pointer;
`

const StyledLink = styled(Link)`
    cursor: pointer;
`