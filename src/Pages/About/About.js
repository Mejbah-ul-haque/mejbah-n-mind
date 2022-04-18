import React from 'react';
import mejbah from '../../Images/About/mejbah.jpg';

const About = () => {
    return (
        <div style={{ minHeight: '100vh' }} className='container text-center'>

            <div className="row">

                <div className="col-sm-12 col-md-9 mx-auto mt-5">
                    <div className="card border-0">
                        <div className="row g-0">
                            <div className="col-md-6 d-flex align-items-center">
                                <div className="card-body text-end ">
                                    <h2 className='fw-bold'>Mejbah-ul-Haque</h2>
                                    <h5>Senior Jounalist</h5>
                                    <hr className='p-0 m-1'></hr>
                                    <h6>The Daily Bangladesh Pratidin</h6>
                                    <p></p>
                                    <p>Journalism is my dream. Reporting is my job. But now programming has become my passion. Now my only goal is to do something in the web development field that people remember for a long time.
                                        <p></p>
                                        Thank you. Stay well.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img className='w-100' src={mejbah} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;