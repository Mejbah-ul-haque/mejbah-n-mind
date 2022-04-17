import React from 'react';
import google from '../../../Images/Social/google.png';
import facebook from '../../../Images/Social/facebook.jpg';
import github from '../../../Images/Social/github.jpg';


const SocialLogin = () => {
    return (
        <div>
            <div className='text-center'>
                <button style={{ backgroundColor: '#333377' }} className='btn rounded-pill w-50 mt-2 text-light d-block mx-auto p-0'>
                    <img style={{ width: '40px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button style={{ backgroundColor: '#336699' }} className='btn rounded-pill w-50 mt-2 text-light d-block mx-auto p-0'>
                    <img style={{ width: '40px' }} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button style={{ backgroundColor: 'black' }} className='btn rounded-pill w-50 mt-2 text-light d-block mx-auto p-0'>
                    <img style={{ width: '40px' }} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-3 p-2'>OR</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
        </div>
    );
};

export default SocialLogin;