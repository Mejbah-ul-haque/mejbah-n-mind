import React from 'react';

const today = new Date();
const year = today.getFullYear();



const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'black' }} className='text-center mt-5 text-light py-5'>
            <p><small>copyright &copy; {year}</small></p>
        </footer>
    );
};

export default Footer;