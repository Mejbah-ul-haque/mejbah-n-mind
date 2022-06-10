import React from 'react';
import emailjs from '@emailjs/browser';


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
    <div style={{ minHeight: '100vh' }} className="container">
      <h3 className="text-warning text-center mt-5"><span className="border border-warning rounded-pill px-5 py-2">Contact Form</span></h3>
      <div className="">
        <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <lebel className="text-secondary fw-bold ms-2">Your Name</lebel>
                <input type="text" className="form-control mb-3 mt-1" placeholder="Name" name="name" />
              </div>
              <div className="col-8 form-group mx-auto">
              <lebel className="text-secondary fw-bold ms-2">Your Adsress</lebel>
                <input type="email" className="form-control mt-1" placeholder="Email Address" name="email" />
              </div>
              <div className="col-8 form-group mx-auto mt-3">
              <lebel className="text-secondary fw-bold ms-2">Subject</lebel>
                <input type="text" className="form-control mt-1" placeholder="Subject" name="subject" />
              </div>
              <div className="col-8 form-group mx-auto mt-3">
              <lebel className="text-secondary fw-bold ms-2">Write Your Message</lebel>
                <textarea className="form-control mt-1" id="" cols="30" rows="8" placeholder="Your message" name="message" />
              </div>
              <div className="col-8 form-group mx-auto mt-4">
                <input type="submit" className="btn btn-warning rounded-pill d-block mx-auto px-5 py-2 fw-bold text-uppercase" value="Sent Message" />
              </div>
            </div>          
        </form>
        
      </div>
    </div>
  );
};

export default Contact;