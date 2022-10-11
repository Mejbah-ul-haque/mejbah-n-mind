import React from "react";
import Git from "../../../../src/Images/Tools/git.png";
import GitHub from "../../../../src/Images/Tools/github.png";
import Firebase from "../../../../src/Images/Tools/firebase.png";
import Heroku from "../../../../src/Images/Tools/heroku.png";
import Netlify from "../../../../src/Images/Tools/netlify.png";
import Figma from "../../../../src/Images/Tools/figma.png";
import VScode from "../../../../src/Images/Tools/vscode.png";
import Stripe from "../../../../src/Images/Tools/stripe.png";
import JWT from "../../../../src/Images/Tools/jwt.png";
import Canva from "../../../../src/Images/Tools/canva.png";

const Tools = () => {
  return (
    <div>
			<div class="row row-cols-2 row-cols-md-3 row-cols-xl-6 g-4">
				<div class="col-xs-6 col-sm-6 col-md-4 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={Git} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold text-info border-bottom border-2 border-dark pb-3">Git</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-4 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={GitHub} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title text-warning border-bottom border-2 border-dark pb-3">GitHub</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-4 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={Firebase} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"#418a3e"}}>Firebase</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-4 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={Heroku} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"#7e12f9"}}>Heroku</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-4 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={Netlify} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"#418a3e"}}>Netlify</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-4 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={Figma} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"orange"}}>Figma</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-4 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={VScode} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title text-primary fw-bold border-bottom border-2 border-dark pb-3">VS Code</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-4 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={Stripe} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title text-info border-bottom border-2 border-dark pb-3">Stripe</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-4 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={JWT} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"#7e12f9"}}>JWT</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-4 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={Canva} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark text-info pb-3" style={{color:"#7e12f9"}}>Canva</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
};

export default Tools;