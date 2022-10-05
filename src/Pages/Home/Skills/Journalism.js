import React from "react";

import GolfMag1 from "../../../../src/Images/Journalism/golf_mag1.png";
import GolfMag2 from "../../../../src/Images/Journalism/golf_mag2.png";
import Security1 from "../../../../src/Images/Journalism/security1.png";
import Security2 from "../../../../src/Images/Journalism/security2.png";
import Pratidin from "../../../../src/Images/Journalism/pratidin.png";
import NewsLetter from "../../../../src/Images/Journalism/news_letter.png";
import { Link } from "react-router-dom";
import "./Journalism.css";


const Journalism = () => {
  return (
    <div>
			<div class="row row-cols-2 row-cols-md-3 row-cols-xl-6 g-4">
				<div class="col-xs-6 col-sm-6 col-md-3 col-xl-2 col-xxl-2">
					<Link to="/journalism/report">
					<div class="card text-white skill-bg skill-hover">
						<img src={Pratidin} class="card-img logo-imag pt-5 pb-2" alt="..." />
						<div class="card-img-overlay text-center lead-style pt-2">
							<h5 class="card-title fs-6 text-info">Senior Reporter</h5>
              <p className="border-top border-2 border-dark text-danger py-0 my-1"><small>Bangladesh <span className="text-success">Pratidin</span></small></p>
              <p className="border-top border-2 border-dark text-secondary py-0 mt-0"><small>Daily Newspaper</small></p>
						</div>
					</div>
					</Link>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-3 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={GolfMag1} class="card-img logo-imag pt-5 pb-2" alt="..." />
						<div class="card-img-overlay text-center lead-style pt-2">
							<h5 class="card-title fs-6 text-info">Founder Editor</h5>
              <p className="border-top border-2 border-dark text-danger py-0 my-1"><small>Golf Bangladesh</small></p>
              <p className="border-top border-2 border-dark text-secondary py-0 my-0"><small>Magazine, v.1</small> </p>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-3 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={GolfMag2} class="card-img logo-imag pt-5 pb-2" alt="..." />
						<div class="card-img-overlay text-center lead-style pt-2">
							<h5 class="card-title fs-6 text-info">Editor</h5>
              <p className="border-top border-2 border-dark text-danger py-0 my-1"><small>Golf Bangladesh</small></p>
              <p className="border-top border-2 border-dark text-secondary py-0 mt-0"><small>Magazine, v.2</small></p>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-3 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={GolfMag1} class="card-img logo-imag pt-5 pb-2" alt="..." />
						<div class="card-img-overlay text-center lead-style pt-2">
							<h5 class="card-title fs-6 text-info">Editor</h5>
              <p className="border-top border-2 border-dark text-danger py-0 my-1"><small>Golf Bangladesh</small></p>
              <p className="border-top border-2 border-dark text-secondary py-0 mt-0"><small>Magazine, v.3</small></p>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-3 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={Security1} class="card-img logo-imag pt-5 pb-2" alt="..." />
						<div class="card-img-overlay text-center lead-style pt-2">
							<h5 class="card-title fs-6 text-info">Editor</h5>
              <p className="border-top border-2 border-dark text-danger py-0 my-1"><small>The Security</small></p>
              <p className="border-top border-2 border-dark text-secondary py-0 mt-0"><small>Magazine, v.1</small></p>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-3 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={Security2} class="card-img logo-imag pt-5 pb-2" alt="..." />
						<div class="card-img-overlay text-center lead-style pt-2">
							<h5 class="card-title fs-6 text-info">Editor</h5>
              <p className="border-top border-2 border-dark text-danger py-0 my-1"><small>The Security</small></p>
              <p className="border-top border-2 border-dark text-secondary py-0 mt-0"><small>Magazine, v.2</small></p>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-3 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={GolfMag1} class="card-img logo-imag pt-5 pb-2" alt="..." />
						<div class="card-img-overlay text-center lead-style pt-2">
							<h5 class="card-title fs-6 text-info">Editor</h5>
              <p className="border-top border-2 border-dark text-danger py-0 my-1"><small>The Security</small></p>
              <p className="border-top border-2 border-dark text-secondary py-0 mt-0"><small>Magazine, v.3</small></p>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-3 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={NewsLetter} class="card-img logo-imag pt-5 pb-2" alt="..." />
						<div class="card-img-overlay text-center lead-style pt-2">
							<h5 class="card-title fs-6 text-info">Editor</h5>
              <p className="border-top border-2 border-dark text-danger py-0 my-1"><small>Golf Bangladesh</small></p>
              <p className="border-top border-2 border-dark text-secondary py-0 mt-0"><small>News Letter, v.1</small></p>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-3 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={NewsLetter} class="card-img logo-imag pt-5 pb-2" alt="..." />
						<div class="card-img-overlay text-center lead-style pt-2">
							<h5 class="card-title fs-6 text-info">Editor</h5>
              <p className="border-top border-2 border-dark text-danger py-0 my-1"><small>Golf Bangladesh</small></p>
              <p className="border-top border-2 border-dark text-secondary py-0 mt-0"><small>News Letter, v.2</small></p>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-3 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={NewsLetter} class="card-img logo-imag pt-5 pb-2" alt="..." />
						<div class="card-img-overlay text-center lead-style pt-2">
							<h5 class="card-title fs-6 text-info">Editor</h5>
              <p className="border-top border-2 border-dark text-danger py-0 my-1"><small>Golf Bangladesh</small></p>
              <p className="border-top border-2 border-dark text-secondary py-0 mt-0"><small>News Letter, v.3</small></p>
						</div>
					</div>
				</div>

								
			</div>
		</div>
  );
};

export default Journalism;