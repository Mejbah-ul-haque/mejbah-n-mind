import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const today = new Date();
const year = today.getFullYear();



const Footer = () => {
    return (
        <footer>
            <div className='lead-shadow' style={{ height: '50px', backgroundColor: 'gray' }}></div>
            <div className='container-fluid py-5 text-light'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 text-center pt-4">
                             <div className='footer-one py-1'>
                             <img className='rounded-circle border border-2 border-secondary text-light me-3' style={{width:'70px', height:'70px', background:'#1f2125'}} src='https://i.ibb.co/6ZB0x44/mejbah-icon.png' />
                            <h2>Mejbah <span className='text-primary fw-light'>&</span> Mind</h2>
                            <h6 className='text-secondary'>A Developer Portfolio website...</h6>
                             </div>
                        </div>
                        <div className="col-sm-6 col-md-4 text-center pt-4">
                        <p className=''><Link className='text-decoration-none btn  rounded-pill px-4' to="/contact"><span className='footer-one py-2' style={{padding:'0 43px'}}>Contact</span></Link></p>
                            <p className=''><Link className='text-decoration-none btn  rounded-pill px-5' to="/about"><span className='footer-one px-5 py-2'>About</span></Link></p>
                            
                            <p className='
                            '><Link className='text-decoration-none btn  rounded-pill px-4' to="/breaking"><span className='footer-one py-2' style={{padding:'0 42px'}}>Projects</span></Link></p>
                        </div>
                        <div className="col-sm-6 col-md-4 text-center">
                            <p className='mt-4'><Link className='text-decoration-none btn rounded-pill px-5' to="/"><span className='footer-one px-5 py-2'>Home</span></Link></p>
                            <p className=''><Link className='text-decoration-none btn  rounded-pill px-5' to="/resume"><span className='footer-one py-2' style={{padding:'0 40px' }}>Resume</span></Link></p>
                            <p className=''><Link className='text-decoration-none btn rounded-pill px-5' to="/login"><span className='footer-one px-5 py-2'>Login</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: ' #030303a7', border: '1px solid rgba(129, 129, 129, 0.534)' }} className='text-center text-secondary pt-3 pb-2'>
                <p><small> &copy; {year} Mejbah & Mind. All rights reserved.</small></p>
            </div>
        </footer>
    );
};

export default Footer;