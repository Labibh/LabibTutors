import React, {useState} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-scroll';
import styled from 'styled-components';

const NavbarStyled = styled.div`
  .link-pointer {
    cursor: pointer;
  }

  .active {
    color: black;
  }
`;

const NavbarComp = props => {
    const [expanded, setExpanded] = useState(false);

    return (
        <NavbarStyled>
            <Navbar expanded={expanded} bg="light" expand="lg" fixed="top">
                <Navbar.Brand className="link-pointer" as={Link} to="landing" spy={true} smooth={true} duration={1000}>LabibTutors</Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")}
                               aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto link-pointer">
                        <Nav.Link as={Link} activeClass="active" to="landing" spy={true} smooth={true} duration={1000} onClick={() => setExpanded(false)}>Home</Nav.Link>
                        <Nav.Link as={Link} activeClass="active" to="about" spy={true} smooth={true} duration={1000} onClick={() => setExpanded(false)}>About</Nav.Link>
                        <Nav.Link as={Link} activeClass="active" to="subjects" spy={true} smooth={true} duration={1000} onClick={() => setExpanded(false)}>Subjects</Nav.Link>
                        <Nav.Link as={Link} activeClass="active" to="services" spy={true} smooth={true} duration={1000} onClick={() => setExpanded(false)}>Services</Nav.Link>
                        <Nav.Link as={Link} activeClass="active" to="contact" spy={true} smooth={true} duration={1000} onClick={() => setExpanded(false)}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </NavbarStyled>
    );
}
export default NavbarComp;