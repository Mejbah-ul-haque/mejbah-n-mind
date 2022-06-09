import React from 'react';
import mejbah from '../../../Images/About/mejbah.png';

const LeadItem = () => {
    return (
        <div className='container text-center'>

            <div className="row my-5">

                <div className="col-sm-12 col-md-12 col-lg-12 mx-auto mt-2 mb-5">
                    <div style={{backgroundColor:' #111b3b'}} className="card border-0">
                        <div className="row g-0">
                            <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                <div className="card-body text-start">
                                    <h4 style={{ color: 'goldenrod', fontSize:'40px', fontWeight:'bold' }}>Hello, </h4>
                                    <h2 style={{ color: 'white', fontSize:'60px', fontWeight:'bold' }} className='fw-bold'>I Am Mejbah.</h2>
                                    
                                    <h5 style={{ color: 'seagreen', fontSize:'30px', fontWeight:'bold' }} className=' my-4' >Full Stack Web Developer </h5>
                                    
                                    <p style={{ color: 'white', fontSize:'20px' }} className="text-light lh-base">
                                    Not just profession! Web Development is my passion. My love. I work with JavaScript, ReactJS, NodeJS, HTML5, CSS3 and so on.
                                    </p>
                                    <button style={{ color: 'white', fontSize:'20px', backgroundColor: 'seagreen', borderRadius: '50px' }} className="btn px-5 py-2 mt-4 ">Hire Me</button>
                                </div>
                            </div>
                            <div  className="col-md-6 col-lg-5 rounded-circle">
                                <img className='w-100' src={mejbah} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LeadItem;