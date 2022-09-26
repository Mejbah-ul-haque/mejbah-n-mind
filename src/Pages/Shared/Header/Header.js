import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#001133'}} sticky='top'>
                <Container style={{backgroundColor:'#111b3b'}} className=' px-3 py-2 mt-3'>
                    <Navbar.Brand style={{ fontSize: "2rem", color: 'white' }} as={Link} to="/">Mejbah<span className='text-secondary'> & </span>Mind</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav " style={{ backgroundColor: 'white'}} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ms-5">
                            <Nav.Link className='nav-style' as={Link} to="/">Home</Nav.Link>
                            <Nav.Link className='nav-style' href="home#services">My Projects</Nav.Link>
                            <Nav.Link className='nav-style' as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link className='nav-style' as={Link} to="/resume">Resume</Nav.Link>
                            

                            {/* <NavDropdown className='nav-style text-light' title="News" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/breaking/3.1">Breaking</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/world/3.2">World</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/exclusive/3.3">Exclusive</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/feature/3.4">Feature</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/travel/3.5">Travel</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/sport/3.6">Sport</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav className="ms-5">
                            <Nav.Link className='nav-style' as={Link} to="/about">About</Nav.Link>
                            <Nav.Link className='nav-style' as={Link} to="/contact">Contact Me</Nav.Link>
                            {
                                user ?
                                    <button style={{ backgroundColor: 'black', color: 'white' }} className='btn btn-link text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Nav.Link className='nav-style' as={Link} to="/login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;