import React from "react";
import react from "../../../../src/Images/Programming/react.png";
import Javascript from "../../../../src/Images/Programming/javascript.png";
import Node from "../../../../src/Images/Programming/nodejs.png";
import Express from "../../../../src/Images/Programming/expressjs.png";
import Mongodb from "../../../../src/Images/Programming/mongobd.png";
import HTML from "../../../../src/Images/Programming/html5.png";
import CSS from "../../../../src/Images/Programming/css3.png";
import Tailwind from "../../../../src/Images/Programming/tailwind.png";
import Bootstrap from "../../../../src/Images/Programming/bootstrap5.png";

import "./Programming.css";

const Programming = () => {
	return (
		<div>
			<div class="row row-cols-1 row-cols-md-5 g-4">
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={react} class="card-img logo-image " alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title text-info">ReactJS</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={Javascript} class="card-img logo-imag " alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title text-warning">JavaScript</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={Node} class="card-img logo-imag " alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title text-success">NodeJS</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={Express} class="card-img logo-imag " alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title text-success">ExpressJS</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={Mongodb} class="card-img logo-imag " alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title text-success">MongoDB</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={HTML} class="card-img logo-imag " alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title text-success">HTML5</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={CSS} class="card-img logo-imag " alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title text-success">CSS3</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={Tailwind} class="card-img logo-imag " alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title text-success">Tailwind CSS</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={Bootstrap} class="card-img logo-imag " alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title text-success">Bootrap5</h5>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default Programming;
