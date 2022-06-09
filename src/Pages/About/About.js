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
                                    <h2 className='fw-bold'>Md Mejbaul Haque</h2>
                                    <h5>Full Stack Web Developer</h5>
                                    <hr className='p-0 m-1'></hr>
                                    <h6 className='fw-bold my-3'>JavaScript, ES6, ReactJS, React-Router, React-Hooks, Typescript, Axios, Next.JS, HTML5, CSS3, Tailwind CSS, Bootstrap, DaisyUI.</h6>
                                    <p></p>
                                    <p>I am very passionate about web development. Created several projects using JavaScript, ReactJS, NodeJS, Express.JS, HTML3, CSS3, Tailwind CSS and Bootstrap. With my programming knowledge I can lead your company to greater success -this is my confidence.
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