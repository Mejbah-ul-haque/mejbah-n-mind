import React from 'react';
import './Footer.css'

const today = new Date();
const year = today.getFullYear();



const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'black', marginTop: '300px' }} className='text-center text-light py-5'>
            <p><small>copyright &copy; {year}</small></p>
        </footer>
    );
};

export default Footer;