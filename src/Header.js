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
                    this.props.clear ? "clear" : "none"} 
                light 
                color="light" 
                fixed="top" 
                expand="md"
            >
                <NavbarBrand onClick={() => scroll.scrollToTop()}>
                    {(this.props.curPg === "about" || this.props.curPg === "top") ? '' : 'Derek Larson'}
                </NavbarBrand>
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
    color: hsl(210, 2%, 58%);
    font-weight: 100;
    top: 0;
    transition: all .3s ease;
    .navbar-brand, a {
        cursor: pointer;
    }
    .navbar-toggler {
        outline: none;
    }
    .active {
        font-weight: 500;
        color: 	hsl(0, 0%, 7%);
        transition: all .3s ease;
        
    }

`
const Wrapper = styled.div`

    .hidden {
        top: -56px !important;
    }
    .clear {
        background: transparent !important;
        a {
            color: white !important;
        }
        .navbar-toggler-icon {
                color: white;
        
        }
    }
    
`