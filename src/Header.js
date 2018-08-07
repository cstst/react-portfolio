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
        
            <StyledNavbar color="light" light fixed="top" expand="md">
                <NavbarBrand onClick={() => scroll.scrollToTop()}>Derek Larson</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink>
                                <Link to="about" smooth={true} duration={1000} offset={-81}>About</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="services" smooth={true} duration={1000} offset={-81}>Services</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="portfolio" smooth={true} duration={1000} offset={-81}>Portfolio</Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="contact" smooth={true} duration={1000} offset={-81}>Contact</Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </StyledNavbar>

        )
    }
}


const StyledNavbar = styled(Navbar)`
    
    .navbar-brand, a {
        cursor: pointer;
        user-select: none;
    }
    .navbar-toggler {
        outline: none;
    }
`
