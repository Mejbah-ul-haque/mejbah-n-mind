import React from 'react';
import Linkedin from "../../../Images/Social/linkedin.png";
import GitHub from "../../../Images/Social/github.png";
import Facebook from "../../../Images/Social/facebook.png";
import Instagram from "../../../Images/Social/Instagram.png";
import Twitter from "../../../Images/Social/twitter.png";
import Behance from "../../../Images/Social/behance.png";

import "./Social.css";

const Social = () => {
  return (
    <div className='container' style={{marginTop:"200px"}}>
      <div className="row row-cols-2 row-cols-xl-6">
        <div className="col-xs-6 col-sm-6 col-md-3 mt-4">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://github.com/Mejbah-ul-haque">
            <div className="d-flex justify-content-around align-items-center social-one">
            <img className="img-fluid w-25" src={GitHub} alt=""></img>
            <h4 className=" py-2">GitHub</h4>
            </div>
            </a>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-3 mt-4">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.linkedin.com/in/md-mejbaul-haque-67b67b71/">
            <div className="d-flex justify-content-around align-items-center social-one">
            <img className="img-fluid w-25" src={Linkedin} alt=""></img>
            <h4 className=" py-2">Linkedin</h4>
            </div>
            </a>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-3 mt-4">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.behance.net/mejbahulhaque">
            <div className="d-flex justify-content-around align-items-center social-one">
            <img className="img-fluid w-25" src={Behance} alt=""></img>
            <h4 className=" py-2">Behance</h4>
            </div>
            </a>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-3 mt-4">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://twitter.com/mejba_s">
            <div className="d-flex justify-content-around align-items-center social-one">
            <img className="img-fluid w-25" src={Twitter} alt=""></img>
            <h4 className=" py-2">Twitter</h4>
            </div>
            </a>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-3 mt-4">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.facebook.com/profile.php?id=100000490430612">
            <div className="d-flex justify-content-around align-items-center social-one">
            <img className="img-fluid w-25" src={Facebook} alt=""></img>
            <h4 className=" py-2">Facebook</h4>
            </div>
            </a>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-3 mt-4">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.instagram.com/mejbah_mcj/">
            <div className="d-flex justify-content-around align-items-center social-one">
            <img className="img-fluid w-25" src={Instagram} alt=""></img>
            <h4 className=" py-2">Instagram</h4>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;