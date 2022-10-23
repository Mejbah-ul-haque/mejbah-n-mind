import React from 'react';
import Linkedin from "../../../Images/Social/linkedin.png";
import GitHub from "../../../Images/Social/github.png";
import Facebook from "../../../Images/Social/facebook.png";
import Instagram from "../../../Images/Social/Instagram.png";
import Twitter from "../../../Images/Social/twitter.png";
import Behance from "../../../Images/Social/behance.png";
import pinterest from "../../../Images/Social/pinterest.png";
import dribbble from "../../../Images/Social/dribbble.png";
import youtube from "../../../Images/Social/YouTube.png";
import Figma from "../../../Images/Tools/figma.png";
import Canva from "../../../Images/Tools/canva.png";

import "./Social.css";

const Social = () => {
  return (
    <div className='container' style={{marginTop:"200px"}}>
      <div className="row row-cols-2 row-cols-md-4 row-cols-xl-6 g-4">
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://github.com/Mejbah-ul-haque">
            <div className="d-flex justify-content-around align-items-center social-one">
            <img className="img-fluid w-25 p-1" src={GitHub} alt=""></img>
            <h6 className=" py-2 pe-3">GitHub</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.linkedin.com/in/mejba-s/">
            <div className="d-flex justify-content-around align-items-center social-one">
            <img className="img-fluid w-25 p-1" src={Linkedin} alt=""></img>
            <h6 className=" py-2 pe-3">Linkedin</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.behance.net/mejbahulhaque">
            <div className="d-flex justify-content-around align-items-center social-one">
            <img className="img-fluid w-25 p-1" src={Behance} alt=""></img>
            <h6 className=" py-2 pe-3">Behance</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://twitter.com/mejba_s">
            <div className="d-flex justify-content-around align-items-center social-one">
            <img className="img-fluid w-25 p-1" src={Twitter} alt=""></img>
            <h6 className=" py-2 pe-3">Twitter</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.facebook.com/mejbah2014">
            <div className="d-flex justify-content-around align-items-center social-one">
            <img className="img-fluid w-25 p-1" src={Facebook} alt=""></img>
            <h6 className=" py-2 pe-3">Facebook</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.instagram.com/mejbah_mcj/">
            <div className="d-flex justify-content-around align-items-center social-one">
            <img className="img-fluid w-25 p-1" src={Instagram} alt=""></img>
            <h6 className=" py-2 pe-3">Instagram</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.pinterest.com/mejbahulh/">
            <div className="d-flex justify-content-around align-items-center social-one">
            <img className="img-fluid w-25 p-1" src={pinterest} alt=""></img>
            <h6 className=" py-2 pe-3">pinterest</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://dribbble.com/Mejbah-web">
            <div className="d-flex justify-content-around align-items-center social-one">
            <img className="img-fluid w-25 p-1" src={dribbble} alt=""></img>
            <h6 className=" py-2 pe-3">dribbble</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.youtube.com/channel/UC0JHGB5QT2Dk2jTiMJzNk1w">
            <div className="d-flex justify-content-around align-items-center social-one">
            <img className="img-fluid w-25 p-1" src={youtube} alt=""></img>
            <h6 className=" py-2 pe-3">youtube</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.figma.com/files/recent?fuid=1063260698077184236">
            <div className="d-flex justify-content-around align-items-center social-one">
            <img className="img-fluid w-25 p-2" src={Figma} alt=""></img>
            <h6 className=" py-2 pe-3">Figma</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.canva.com/settings/your-account">
            <div className="d-flex justify-content-around align-items-center social-one">
            <img className="img-fluid w-25 p-2" src={Canva} alt=""></img>
            <h6 className=" py-2 pe-3">canva</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://github.com/Mejbah-ul-haque">
            <div className="d-flex justify-content-around align-items-center social-one">
            <img className="img-fluid w-25 p-1" src={GitHub} alt=""></img>
            <h6 className=" py-2 pe-3">GitHub</h6>
            </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;