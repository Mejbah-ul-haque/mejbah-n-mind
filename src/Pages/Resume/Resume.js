import React from "react";
import resume1 from "../../Images/Resume/resume1.jpg";
import resume2 from "../../Images/Resume/resume2.jpg";
import resume from "../../Images/Resume/md_mejbaul_haque_resume.pdf";
import { jsPDF } from "jspdf";
import { Link } from "react-router-dom";

const Resume = () => {
	// const doc = new jsPDF();

	// const handleClick = () =>{
	//   doc.text("resume", 10, 10);
	//   doc.save("resume");
	// }

	return (
		<div className="container">
			{/* <button onClick={handleClick} className="btn btn-danger d-block mx-auto rounded-pill px-5 my-5">Download Resume</button> */}
			<a href={resume} download>
				<button className="btn btn-danger d-block mx-auto rounded-pill px-5 my-5">
					Download Resume
				</button>
			</a>
			<div className="row">
				<div className="col-sm-12 col-lg-6 mt-3">
					<img className="img-fluid" src={resume1} alt="resume first page" />
				</div>
				<div className="col-sm-12 col-lg-6 mt-3">
					<img className="img-fluid" src={resume2} alt="resume second page" />
				</div>
			</div>
		</div>
	);
};

export default Resume;
