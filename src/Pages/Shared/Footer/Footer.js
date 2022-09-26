import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const today = new Date();
const year = today.getFullYear();



const Footer = () => {
    return (
        <footer>
            <div style={{ height: '50px', backgroundColor: 'lightgray' }}></div>
            <div className='container-fluid py-5 text-light'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 text-center border-end pt-5">
                            <h2>Mejbah & Mind</h2>
                            <h6 className='text-primary'>A Developer Portfolio website...</h6>
                        </div>
                        <div className="col-sm-12 col-md-4 text-center border-end pt-4">
                            <p className=''><Link className='text-decoration-none btn btn-outline-warning rounded-pill px-5' to="/about">About</Link></p>
                            <p className=''><Link className='text-decoration-none btn btn-outline-warning rounded-pill px-4' to="/contact">Contant Me</Link></p>
                            <p className='
                            '><Link className='text-decoration-none btn btn-outline-warning rounded-pill px-4' to="/breaking">My Projects</Link></p>
                        </div>
                        <div className="col-sm-12 col-md-4 text-center">
                            <p className='mt-4'><Link className='text-decoration-none btn btn-outline-warning rounded-pill px-5' to="/">Home</Link></p>
                            <p className=''><Link className='text-decoration-none btn btn-outline-warning rounded-pill px-5' to="/resume">Resume</Link></p>
                            <p className=''><Link className='text-decoration-none btn btn-outline-warning rounded-pill px-5' to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: ' #010819' }} className='text-center text-secondary py-2'>
                <p><small> &copy; {year} Mejbah & Mind. All rights reserved.</small></p>
            </div>
        </footer>
    );
};

export default Footer;