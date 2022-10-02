import React from "react";
import SouthKorea from "../../../../src/Images/Traveling/South_Korea.png";
import England from "../../../../src/Images/Traveling/England.png";
import India from "../../../../src/Images/Traveling/India.png";
import China from "../../../../src/Images/Traveling/china.png";
import Scotland from "../../../../src/Images/Traveling/Scotland.png";
import Wales from "../../../../src/Images/Traveling/Wales.png";
import UAE from "../../../../src/Images/Traveling/UAE.png";
import Oman from "../../../../src/Images/Traveling/Oman.png";
import Australia from "../../../../src/Images/Traveling/Australia.png";

const Journalism = () => {
  return (
    <div>
			<div class="row row-cols-2 row-cols-md-3 row-cols-xl-6 g-4">
				<div class="col-xs-6 col-sm-6 col-md-3 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={SouthKorea} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold text-info border-bottom border-2 border-dark pb-3">South Korea</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-3 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={England} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title text-warning border-bottom border-2 border-dark pb-3">England</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-3 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={India} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"#418a3e"}}>India</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-3 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={China} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"red"}}>China</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-3 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={Scotland} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"#418a3e"}}>Scotland</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-3 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={Wales} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"orange"}}>Wales</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-3 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={UAE} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title text-primary fw-bold border-bottom border-2 border-dark pb-3">UAE</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-3 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={Oman} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title text-info border-bottom border-2 border-dark pb-3">Oman</h5>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-3 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={Australia} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style">
							<h5 class="card-title fw-bold border-bottom border-2 border-dark pb-3" style={{color:"#7e12f9"}}>Australia</h5>
						</div>
					</div>
				</div>
				
			</div>
		</div>
  );
};

export default Journalism;