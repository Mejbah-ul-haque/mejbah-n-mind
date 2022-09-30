import React from "react";
import react from "../../../../src/Images/Programming/react.png";
import Javascript from "../../../../src/Images/Programming/javascript.png";
import Node from "../../../../src/Images/Programming/nodejs.png";
import Express from "../../../../src/Images/Programming/expressjs.png";
import Mongodb from "../../../../src/Images/Programming/mongobd.png";
import htmlLogo from "../../../../src/Images/Programming/html5.png";
import cssLogo from "../../../../src/Images/Programming/css3.png";
import Tailwind from "../../../../src/Images/Programming/tailwind.png";
import Bootstrap from "../../../../src/Images/Programming/bootstrap5.png";

import "./Programming.css";

const Programming = () => {
	return (
		<div>
			<div class="row row-cols-2 row-cols-md-3 row-cols-xl-6 g-4">
				<div class="col-xs-6 col-sm-6 col-md-4 col-xl-3 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={react} class="card-img logo-image pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold text-info border-bottom border-2 border-dark pb-3">ReactJS</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-4 col-xl-3 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={Javascript} class="card-img logo-image pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title text-warning border-bottom border-2 border-dark pb-3">JavaScript</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-4 col-xl-3 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={Node} class="card-img logo-image pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"#418a3e"}}>NodeJS</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-4 col-xl-3 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={Express} class="card-img logo-image pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"#7e12f9"}}>ExpressJS</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-4 col-xl-3 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={Mongodb} class="card-img logo-image pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"#418a3e"}}>MongoDB</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-4 col-xl-3 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={htmlLogo} class="card-img logo-image pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"orange"}}>HTML5</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-4 col-xl-3 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={cssLogo} class="card-img logo-image pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title text-primary fw-bold border-bottom border-2 border-dark pb-3">CSS3</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-4 col-xl-3 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={Tailwind} class="card-img logo-image pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title text-info border-bottom border-2 border-dark pb-3">Tailwind CSS</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-4 col-xl-3 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={Bootstrap} class="card-img logo-image pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"#7e12f9"}}>Bootrap5</h5>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default Programming;
