import React from 'react';
import emailjs from '@emailjs/browser';
import Mejbah from '../../Images/About/mejbah.png'
import Linkedin from "../../Images/Social/linkedin.png";
import GitHub from "../../Images/Social/github.png";
import Behance from "../../Images/Social/behance.png";
import "./Contact.css";


const Contact = () => {
  
  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs.sendForm('service_x7w4x05', 'template_cf6efrc', e.target, 'py1vok5OC94ozveHw' )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    
  }
  return (
    <div  className="container d-block mx-auto p-5">
      <h6 className='text-danger text-center text-uppercase'style={{letterSpacing:'3px'}}>Please, Sent Message !!</h6>
            <h2 className='text-light lead-heading text-center mb-5'>Contact With Me</h2>
      <div  className="row d-flex">
        <div className="col-sm-12 col-lg-4 lead-shadow">
          <div className='px-4 py-3 pt-lg-5 pt-xxl-3'>
          <div class="card border-dark" style={{background:'#212428'}}>
          <img src={Mejbah} class="card-img-top roted-image" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-danger fs-1 fw-bold">HIRE ME !</h5>
            <h5 class="text-light fs-5 fw-bold">MD MEJBAUL HAQUE</h5>
            <h5 class="text-secondary fs-5">Web Engineer</h5>
            <h5 class="text-secondary fs-6 mt-43">WhatsApp: <span className='text-light'>+8801917544593</span> </h5>
            <h5 class="text-secondary fs-6">Email: <span className='text-light'>mejba.s@gmail.com</span> </h5>
            {/* <h5 class="text-secondary fs-6">MERN Stack Developer</h5>
            <h5 class="text-secondary fs-5">Web Designer</h5> */}
            <p class="card-text text-light my-4">I am available for work. Connect with me via social media and call in to my account</p>
            <div>
											<p className="text-light text-start">Find with me</p>
											<div className="d-flex">
											<div className="social-first lead-shadow">
											<a className='text-decoration-none shadow-lg lead-shadow' target="_blank" href="https://github.com/Mejbah-ul-haque">											
											<img className="img-fluid p-1" src={GitHub} alt="" style={{width:'40px'}} ></img>											
											</a>
										</div>
										<div className=" lead-shadow social-first">
											<a className='text-decoration-none shadow-lg lead-shadow' target="_blank" href="https://www.linkedin.com/in/mejba-s/">
											<img className="img-fluid p-1" src={Linkedin} alt="" style={{width:'40px'}} ></img>											
											</a>
										</div>
										<div className=" lead-shadow social-first">
											<a className='text-decoration-none shadow-lg lead-shadow' target="_blank" href="https://www.behance.net/mejbahulhaque">
											<img className="img-fluid p-1" src={Behance} alt="" style={{width:'40px'}} ></img>											
											</a>
										</div>
											</div>
										</div>
          </div>
        </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-8  ps-lg-5 mt-5 mt-lg-0">
          <div className='lead-shadow px-4 py-5'>
          <form onSubmit={sendEmail}>
                  
                  <div className='d-flex justify-content-between'>
                    <div className='w-100 me-4'>
                      <lebel className="text-light  ms-2">Your Name</lebel>
                      <input type="text" className="form-control input-shadow p-3 mb-3 mt-1 me-3" placeholder="Name" name="name" />
                    </div>
                    <div className='w-75'>
                      <lebel className="text-light  ms-2">Your Phone</lebel>
                      <input type="text" className="form-control input-shadow p-3 mb-3 mt-1" placeholder="phone" name="phone" />
                    </div>              
                    
                  </div>

                <lebel className="text-light ms-2">Your Adsress</lebel>
                  <input type="email" className="form-control input-shadow mb-3 mt-1 p-3" placeholder="Email Address" name="email" />
                <lebel className="text-light ms-2">Subject</lebel>
                  <input type="text" className="form-control input-shadow p-3 mb-3 mt-1" placeholder="Subject" name="subject" />
                <lebel className="text-light ms-2">Write Your Message</lebel>
                  <textarea className="form-control input-shadow p-3 mb-5 mt-1" id="" cols="30" rows="8" placeholder="Your message" name="message" />
                  <input type="submit" className="btn sent-button p-3 d-block mx-auto px-5 fw-bold text-uppercase w-100" value="Sent Message" />   
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;