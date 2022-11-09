import React from 'react';
import journalism from '../../../Images/About/journalism.jpg';

const Special = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-sm-12 col-lg-12 mx-auto" style={{borderBottom: '2px solid black', paddingBottom: '100px'}}>
                    <h6 className='text-primary text-center text-uppercase'style={{letterSpacing:'3px'}}>Not only my profession</h6>
                    <h2 className='text-light lead-heading text-center mb-5'>It's Passion !</h2>
                    <div style={{ backgroundColor: '#212428'}} className="card lead-shadow mb-3">
                        <div className="row g-0">
                        <div className="col-lg-6">
                                <img
                                    src={journalism}
                                    alt="journalism"
                                    className="img-fluid rounded-start"
                                />
                            </div>
                            <div className="col-lg-6 d-flex align-items-center">
                                <div className="card-body text-sm-center text-lg-start text-secondary pb-0">
                                    <h5 className="card-title text-light">Why Web Development is my passion?</h5>
                                    <p className="card-text">
                                    Web development and design help to promote a company’s brand name. Essentially, if a firm’s website is accessible via the World Wide Web, the company is considered operating on a worldwide scale. 

                                        
                                    </p>
                                    <p className='text-center text-lg-start'><button className='btn  w-50 mt-2' style={{ backgroundColor: 'orange', color: 'black', borderRadius: '0' }}>Read more</button></p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Special;

