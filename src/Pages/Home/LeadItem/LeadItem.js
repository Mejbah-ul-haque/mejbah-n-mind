import React from "react";
import { Link } from "react-router-dom";
import mejbah from "../../../Images/About/mejbah1.png";
import Linkedin from "../../../Images/Social/linkedin.png";
import GitHub from "../../../Images/Social/github.png";
import Facebook from "../../../Images/Social/facebook.png";
import Instagram from "../../../Images/Social/Instagram.png";
import Twitter from "../../../Images/Social/twitter.png";
import Behance from "../../../Images/Social/behance.png";
// import background from "../../../Images/Resume/vc.png";

import "./LeadItem.css";

const LeadItem = () => {
    
    // const myStyle ={
    //     backgroundImage:`url(${background})`,
        
    //    backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     opacity: '.7'
    // }
	return (
		<div className="container d-flex justify-content-center align-items-center">
			<div className="row">
				<div  className="col-sm-12 col-md-12 col-lg-12 mx-auto p-0 mt-2 my-5" style={{borderBottom:'2px solid black', marginBottom:'50px'}}>
					<div className="card lead-card lead-shado" >
						<div  className="row g-0">
							<div className="col-md-12 col-lg-7 d-flex align-items-end">
								<div id="text-body" className="card-body text-body pb-0 ps-0 pe-4">
									
									<h2 className="fw-bold lead-heading mt-5">Hi, I'm <span className="text-danger">Mejbah</span></h2>
									<h4 className="designation-text my-3">WEB ENGINEER</h4>
									<p className="text-secondary lh-base head-text-body">
									Full Stack Web Developer and Designer. 
									<br></br>
									Not just profession! Web Engineering is my passion. 
										My power is JavaScript, ReactJS, NodeJS, HTML5, CSS3 and so
										on.
									</p>
									{/* <div className="text-center">
										<Link to="/contact"><button className="btn btn-outline-primary rounded-pill px-5 py-2 mt-4 me-3 ">HIRE ME</button></Link>
										<a target="_blank" href="https://drive.google.com/file/d/1oq2jd2nKfXv-MIqqvW7DeTMMyiACbzgG/view?usp=sharing"><button className="btn btn-outline-primary rounded-pill px-4 py-2 mt-4">MY RESUME</button></a>	
									</div> */}
									<div className="d-flex justify-content-between" style={{margin:'60px 0 50px 0'}}>
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
										<div>
											<p className="text-light text-start">Follow me</p>
											<div className="d-flex">
											<div className="social-first lead-shadow">
											<a className='text-decoration-none shadow-lg lead-shadow' target="_blank" href="https://www.facebook.com/mejbah2014">											
											<img className="img-fluid p-1" src={Facebook} alt="" style={{width:'40px'}} ></img>											
											</a>
										</div>
										<div className=" lead-shadow social-first">
											<a className='text-decoration-none shadow-lg lead-shadow' target="_blank" href="https://www.facebook.com/mejbah2014">
											<img className="img-fluid p-1" src={Instagram} alt="" style={{width:'40px'}} ></img>											
											</a>
										</div>
										<div className=" lead-shadow social-first">
											<a className='text-decoration-none shadow-lg lead-shadow' target="_blank" href="https://twitter.com/mejba_s">
											<img className="img-fluid p-1" src={Twitter} alt="" style={{width:'40px'}} ></img>											
											</a>
										</div>
											</div>
										</div>
										
									</div>
								</div>
							</div>
							<div  className="col-md-10 col-lg-5 rounded roted-background mx-auto " style={{marginTop:'200px'}}>
								<div className="lead-shadow" >
								<img className="roted-imag lead-shado w-100 pe-3 pt-4 " src={mejbah} alt="" style={{marginTop: '-195px'}} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeadItem;
