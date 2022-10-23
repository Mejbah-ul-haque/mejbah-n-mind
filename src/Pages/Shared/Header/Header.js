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
            <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#212428'}} sticky='top' className='navbar-style'>
                <Container fluid className='mt-3'>
                    <img className='rounded-circle border border-2 border-secondary me-3' style={{width:'70px', height:'70px', background:'#1f2125'}} src='https://i.ibb.co/6ZB0x44/mejbah-icon.png' />
                    <Navbar.Brand className='text-uppercase' style={{ fontSize: "1.5rem", color: 'lightGray' }} as={Link} to="/">
                        Mejbah<span className='text-danger'> & </span>Mind
                        </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav " className='text-secondary bg-secondary' style={{ backgroundColor: '#1f2125'}} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ms-5">
                            
                            

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
                        <Nav className="me-auto ms-5">
                            
                            

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
                        <Nav className="mx-5">
                        <Nav.Link className='nav-style' as={Link} to="/">HOME</Nav.Link>
                            <Nav.Link className='nav-style' href="home#services">FEATURES</Nav.Link>
                            <Nav.Link className='nav-style' href="home#services">BLOG</Nav.Link>
                            <Nav.Link className='nav-style' href="home#services">PROJECTS</Nav.Link>
                            {/* <Nav.Link className='nav-style' as={Link} to="/blogs">Blogs</Nav.Link> */}
                            <Nav.Link className='nav-style' as={Link} to="/resume">RESUME</Nav.Link>
                            <Nav.Link className='nav-style' as={Link} to="/about">ABOUT</Nav.Link>
                            
                            <Nav.Link className='nav-style' as={Link} to="/contact">CONTACTS</Nav.Link>
                            <Nav.Link className='nav-style' as={Link} to="/journalism/report">JOURNALISM</Nav.Link>
                            {user && <Nav.Link className='nav-style' as={Link} to="/dashboard">DASHBOARD</Nav.Link>}
                            
                            
                            {
                                user ?
                                    <button style={{ color: 'red' }} className='btn btn-link text-decoration-none text-start' onClick={handleSignOut}>SIGNOUT</button>
                                    :
                                    <Nav.Link style={{ color: '#1f2125' }} as={Link} to="/login">
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