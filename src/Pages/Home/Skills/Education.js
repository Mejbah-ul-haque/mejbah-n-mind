import React from "react";
import RU from "../../../../src/Images/Education/ru.png";
import School from "../../../../src/Images/Education/school.png";
import Bamandanga from "../../../../src/Images/Education/bamandanga.png";


const Education = () => {
  return (
    <div>
			<div class="row row-cols-2 row-cols-md-3 row-cols-xl-6 g-4">
				<div class="col-xs-6 col-sm-6 col-md-3 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg ">
						<img src={RU} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style pt-2">
							<h5 class="card-title fw-bold text-info">MSS</h5>
              <p className="border-top border-2 border-dark pt-0 mt-0"><small>Rajshahi University</small></p>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-3 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={RU} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style pt-2">
							<h5 class="card-title fw-bold text-info">BSS <small className="fw-lighter text-secondary">(honors)</small></h5>
              <p className="border-top border-2 border-dark pt-0 mt-0"><small>Rajshahi University</small></p>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-3 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={Bamandanga} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style pt-2">
							<h5 class="card-title fw-bold text-info">HSC</h5>
              <p className="border-top border-2 border-dark pt-0 mt-0"><small>Bamandanga College</small></p>
						</div>
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-3 col-xl-2 col-xxl-2">
					<div class="card text-white skill-bg">
						<img src={School} class="card-img logo-imag pb-3" alt="..." />
						<div class="card-img-overlay text-center lead-style pt-2">
							<h5 class="card-title fw-bold text-info">SSC</h5>
              <p className="border-top border-2 border-dark pt-0 mt-0"><small>Kathgora School</small></p>
						</div>
					</div>
				</div>
								
			</div>
		</div>
  );
};

export default Education;