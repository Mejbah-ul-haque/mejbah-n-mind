import React from "react";
import { Link } from "react-router-dom";
import mejbah from "../../../Images/About/mejbah.png";
import background from "../../../Images/Resume/vc.png";

import "./LeadItem.css";

const LeadItem = () => {
    
    const myStyle ={
        backgroundImage:`url(${background})`,
        
       backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: '.7'
    }
	return (
		<div className="container d-flex justify-content-center align-items-center min-vh-100">
			<div className="row my-5">
				<div  className="col-sm-12 col-md-12 col-lg-12 mx-auto mt-2 mb-5">
					<div className="card lead-card p-4 lead-shadow">
						<div  className="row g-0">
							<div className="col-md-12 col-lg-7 d-flex align-items-center">
								<div id="text-body" className="card-body text-body">
									<h4 className="hello-heading">Hello</h4>
									<h2 className="fw-bold lead-heading">I Am Mejbah</h2>
									<h4 className="designation-text my-3">WEB ENGINEER</h4>
									<p className="text-secondary lh-base head-text-body">
									Full Stack Web Developer and Designer. 
									<br></br>
									Not just profession! Web Development is my passion. My love.
										My power is JavaScript, ReactJS, NodeJS, HTML5, CSS3 and so
										on.
									</p>
									<Link to="/contact"><button className="btn btn-warning rounded-pill fw-bold px-5 py-2 mt-4 me-3 ">Hire Me</button></Link>
									<a target="_blank" href="https://drive.google.com/file/d/1oq2jd2nKfXv-MIqqvW7DeTMMyiACbzgG/view?usp=sharing"><button className="btn btn-outline-warning rounded-pill px-4 py-2 mt-4">My Resume</button></a>
								</div>
							</div>
							<div style={myStyle} className="col-md-10 col-lg-5 rounded-circle p-5 roted-background mx-auto">
								<img className="w-100 roted-image" src={mejbah} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeadItem;
