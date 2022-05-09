import React from 'react';
import mejbah from '../../../Images/About/mejbah.png'

const LeadItem = () => {
    return (
        <div className='container text-center'>

            <div className="row">

                <div className="col-sm-12 col-md-12 col-lg-10 mx-auto mt-2 mb-5">
                    <div className="card border-0">
                        <div className="row g-0">
                            <div className="col-md-6 d-flex align-items-center">
                                <div className="card-body text-end ">
                                    <h4 style={{ color: 'gray' }}>Do you want to be a  <span className='text-success fw-bold'>journalist?</span></h4>
                                    <h2 className='fw-bold'>Take on challenges, hard working mentality, discipline and perseverance are the great qualities of a journalist.</h2>
                                    <hr />
                                    <h5><span className='fw-bold'>Mejbah-ul-Haque,</span> <small>Senior Jounalist</small> </h5>
                                    <hr className='p-0 m-1'></hr>
                                    <p>
                                        Thank you. Stay well.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 bg-success rounded-circle">
                                <img className='' src={mejbah} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LeadItem;