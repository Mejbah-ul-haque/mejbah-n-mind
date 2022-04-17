import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" sticky='top' variant="light">
                <Container>
                    <Navbar.Brand style={{ fontWeight: 'bold', fontSize: "1.4rem" }} as={Link} to="/">Mejbah & Mind</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/journalism">Journalism</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>

                            <NavDropdown title="News" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/breaking/3.1">Breaking</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/world/3.2">World</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/exclusive/3.3">Exclusive</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/feature/3.4">Feature</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/travel/3.5">Travel</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/sport/3.6">Sport</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/login">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;