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
            <StyledNavbar 
                className={this.props.hidden && this.props.clear ? "hidden clear" : 
                    this.props.hidden ? "hidden" : 
                    this.props.clear ? "clear" : ""} 
                light 
                color="light" 
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
            </StyledNavbar>
            </Wrapper>
        )
    }
}


const StyledNavbar = styled(Navbar)`
    user-select: none;
    font-weight: 100;
    top: 0;
    transition: all .3s ease;
    .navbar-toggler {
        outline: none;
    }
    .active {
        font-weight: 500;
        transition: all .3s ease;
    }

`
const Wrapper = styled.div`
    transition: all 1s ease !important;
    .navbar {
        background: rgba(0, 0, 0, .7) !important;
        a {
            color: white !important;
            cursor: pointer;
        }
        .navbar-toggler {
                color: white;
        
        }
        display: flex !important;
        justify-content: flex-end !important;
        .navbar-nav {
        }
    }
    .hidden {
        top: -56px !important;
    }
    .clear {
        background: rgba(0, 0, 0, 0) !important;

    }
    
`