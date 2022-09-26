import React from 'react';
import mejbah from '../../Images/About/mejbah.jpg';
import "./About.css";

const About = () => {
    return (
        <div style={{ margin: '100px 0' }} className='container d-block mx-auto'>

            <div className="row">

                <div className="col-sm-12 col-md-10 mx-auto mt-5">
                    <div style={{ backgroundColor: '#001133' }} className="card border-0">
                        <div className="row g-0">
                        
                            <div className="col-md-6 d-flex align-items-center">
                                <div style={{alignItems: 'center'}} className="card-body about-body">
                                    <h6 className="btn btn-outline-warning">About Myself</h6>
                                    <h2 className='fw-bold text-light about-heading'>Md Mejbaul Haque</h2>
                                    <h5 className="text-info">Full Stack Web Developer</h5>
                                    <hr className='p-0 m-1'></hr>
                                    <h6 className='fw-bold my-3 text-success'>JavaScript, ES6, ReactJS, React-Router, React-Hooks, Typescript, Axios, Next.JS, HTML5, CSS3, Tailwind CSS, Bootstrap, DaisyUI.</h6>
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
                                <img style={{opacity: '.8'}} className='w-100' src={mejbah} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;