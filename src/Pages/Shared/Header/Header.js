import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand style={{ fontWeight: 'bold', fontSize: "1.4rem" }} href="#home">Mejbah & Mind</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#journalism">Journalism</Nav.Link>
                        <Nav.Link href="#books">Books</Nav.Link>
                        <Nav.Link href="#news">News</Nav.Link>
                        <Nav.Link href="#blogs">Blogs</Nav.Link>
                        <Nav.Link href="#about">About me</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;