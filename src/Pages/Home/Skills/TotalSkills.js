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
import daisyUI from "../../../../src/Images/Programming/daisyui.png";
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

const TotalSkills = () => {
  return (
    <div style={{marginBottom: "100px", borderBottom:'2px solid black'}} className="">
      <div className="container mx-auto">
			<h6 className='text-primary text-center text-uppercase'style={{letterSpacing:'3px'}}>What is my Skills</h6>
            <h2 className='text-light lead-heading text-center mb-5'>Programming Skills</h2>
        
			</div>
			<div class="row row-cols-2 row-cols-md-4 row-cols-xl-6 g-4" style={{ marginBottom: "100px", marginTop: '100px'}}>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={react} class="card-img logo-image pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold text-info border-bottom border-2 border-dark pb-3">ReactJS</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={Javascript} class="card-img logo-image pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title text-warning border-bottom border-2 border-dark pb-3">JavaScript</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={Node} class="card-img logo-image pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"#418a3e"}}>NodeJS</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={Express} class="card-img logo-image pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"#7e12f9"}}>ExpressJS</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={Mongodb} class="card-img logo-image pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"#418a3e"}}>MongoDB</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={htmlLogo} class="card-img logo-image pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"orange"}}>HTML5</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={cssLogo} class="card-img logo-image pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title text-primary fw-bold border-bottom border-2 border-dark pb-3">CSS3</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={Tailwind} class="card-img logo-image pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title text-info border-bottom border-2 border-dark pb-3">Tailwind CSS</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={Bootstrap} class="card-img logo-image pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"#7e12f9"}}>Bootrap5</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={daisyUI} class="card-img logo-image pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"yellow"}}>daisyUI</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={Git} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold text-info border-bottom border-2 border-dark pb-3">Git</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={GitHub} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title text-warning border-bottom border-2 border-dark pb-3">GitHub</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={Firebase} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"#418a3e"}}>Firebase</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={Heroku} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"#7e12f9"}}>Heroku</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={Netlify} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"#418a3e"}}>Netlify</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={Figma} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"orange"}}>Figma</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={VScode} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title text-primary fw-bold border-bottom border-2 border-dark pb-3">VS Code</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={Stripe} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title text-info border-bottom border-2 border-dark pb-3">Stripe</h5>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="card text-white skill-bg">
						<img src={JWT} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"#7e12f9"}}>JWT</h5>
						</div>
					</div>
				</div>
				<div class="col">
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

export default TotalSkills;