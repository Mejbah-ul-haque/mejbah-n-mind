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
      <h3 className="text-warning text-center mt-5">Contact Form</h3>
      <div className="">
        <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <lebel className="text-light ms-2">Your Name</lebel>
                <input type="text" className="form-control mb-3" placeholder="Name" name="name" />
              </div>
              <div className="col-8 form-group mx-auto">
              <lebel className="text-light ms-2">Your Name</lebel>
                <input type="email" className="form-control" placeholder="Email Address" name="email" />
              </div>
              <div className="col-8 form-group mx-auto mt-3">
              <lebel className="text-light ms-2">Your Name</lebel>
                <input type="text" className="form-control" placeholder="Subject" name="subject" />
              </div>
              <div className="col-8 form-group mx-auto mt-3">
                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" />
              </div>
              <div className="col-8 form-group mx-auto mt-4">
                <input type="submit" className="btn btn-success" value="Sent Message" />
              </div>
            </div>          
        </form>
        
      </div>
    </div>
  );
};

export default Contact;