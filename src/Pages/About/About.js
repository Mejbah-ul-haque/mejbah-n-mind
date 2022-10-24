import React from 'react';
import mejbah from '../../Images/About/mejbah.jpg';
import "./About.css";

const About = () => {
    return (
        <div style={{ margin: '200px 0', borderBottom: '2px solid black', paddingBottom: '100px' }} className='container d-block mx-auto'>

            <div className="row">
            <h6 className='text-primary text-center text-uppercase'style={{letterSpacing:'3px'}}>This is myself !!</h6>
            <h2 className='text-light lead-heading text-center mb-5'>About Me</h2>
                <div className="col-sm-12 col-md-12 col-xl-12 mx-auto mt-5">
                    <div style={{ backgroundColor: '#212428',  marginTop:'50px' }} className="card lead-shadow">
                        <div className="row g-0">
                        
                            <div className="col-md-6 d-flex align-items-center p-3">
                                <div style={{alignItems: 'center'}} className="card-body about-body">
                                    
                                    <h2 className='fw-bold text-light font-monospace about-heading'>Md Mejbaul Haque</h2>
                                    <h5 className="text-primary my-3">Full Stack Web Developer</h5>
                                    
                                    <h6 className='my-3 fs-5 fw-lighter text-light lh-base'>JavaScript, ES6, ReactJS, NodeJS, ExpressJs, MongoDB, HTML5, CSS3, Tailwind CSS, Bootstrap, DaisyUI.</h6>
                                    <p></p>
                                    <p className="text-secondary about-text-body">I am very passionate about web development. Created several projects using JavaScript, ReactJS, NodeJS, Express.JS, HTML3, CSS3, Tailwind CSS and Bootstrap. With my programming knowledge I can lead your company to greater success -this is my confidence.
                                        <p></p>
                                        I am a very passionate person. Very sincere and dedicated about my task. I am very stubborn and do whatever I want and do it anyways. 
                                        For example, after 12 years of journalism, I think the web development field seems to be perfect for me. So let's start learning. Easy to say, but hard to do. I've had a lot of trouble. But I did not give up. In the end I succeeded.
                                        Besides a  full time  job and maintaining my family I have to spend 7-8 hours every day. This is where you realize how hard I can work! 
                                        The web development field is very challenging. I like to take challenges.
                                        <p></p>
                                        Thank you. Stay well.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img className='w-100 plus-style' src={mejbah} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;