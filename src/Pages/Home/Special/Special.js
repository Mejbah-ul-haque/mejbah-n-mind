import React from 'react';
import journalism from '../../../Images/About/journalism.jpg';

const Special = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-sm-12 col-lg-12 mx-auto mt-5">
                    <h1 className='text-center text-warning my-5'>It's Passion!!</h1>
                    <div style={{opacity:".7", backgroundColor: '#021a4e', border: "1px solid rgba(129, 129, 129, 0.534)"}} className="card lead-shadow mb-3">
                        <div className="row g-0">
                        <div className="col-md-6">
                                <img
                                    src={journalism}
                                    alt="journalism"
                                    className="img-fluid rounded-start"
                                />
                            </div>
                            <div className="col-md-6 d-flex align-items-center">
                                <div className="card-body text-sm-center text-lg-start text-secondary">
                                    <h4 className="card-title">Why Web Development is my passion?</h4>
                                    <p className="card-text">
                                        Suppose we take a look at the journalist job description. In that case, we’ll find it includes writing for local or national news organisations to keep readers up to date with current affairs and what is happening in the community around them.

                                        
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

