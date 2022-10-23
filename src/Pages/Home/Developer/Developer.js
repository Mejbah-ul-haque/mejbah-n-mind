import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./Developer.css";

const Developer = () => {
	return (
		<div className=""style={{margin: "150px 0", margin:"350px 0"}}>
      <div>
			<h6 className='text-danger text-center text-uppercase'style={{letterSpacing:'3px'}}>most Useful website links</h6>
            <h2 className='text-light lead-heading text-center mb-5'>For Developer</h2>
      </div>
			<Table bordered>
				<tbody className=" tbody text-center text-light ">
					<tr className="">
						<td className="paper_text_color_yellow">
							<a
								href="https://developer.mozilla.org/en-US/"
								target="_blank"
								className="text-decoration-none paper_text_color_text"
							>
								MDN
							</a>
						</td>
						<td className="paper_text_color_yellow">
							<a
								href="https://www.w3schools.com/"
								target="_blank"
								className="text-decoration-none paper_text_color_text"
							>
								W3school
							</a>
						</td>
						<td className="paper_text_color_yellow">
							<a
								href="https://www.freecodecamp.org/"
								target="_blank"
								className="text-decoration-none paper_text_color_text"
							>
								FreeCodeCamp
							</a>
						</td>
						
					</tr>
					<tr className="">
					<td className="paper_text_color_yellow">
							<a
								href="https://www.programming-hero.com/"
								target="_blank"
								className="text-decoration-none paper_text_color_text"
							>
								Programming Hero
							</a>
						</td>
						<td className="paper_text_color_yellow">
							<a
								href="https://www.udemy.com/"
								target="_blank"
								className="text-decoration-none paper_text_color_text"
							>
								Udemy
							</a>
						</td>
						
						<td className="paper_text_color_yellow">
							<a
								href="https://www.coursera.org/"
								target="_blank"
								className="text-decoration-none paper_text_color_text"
							>
								Coursera
							</a>
						</td>
						
					</tr>
					<tr className="">
						<td className="paper_text_color_yellow">
							<a
								href="https://github.com/"
								target="_blank"
								className="text-decoration-none paper_text_color_text"
							>
								Github
							</a>
						</td>
						<td className="paper_text_color_yellow">
							<a
								href="https://stackoverflow.com/"
								target="_blank"
								className="text-decoration-none paper_text_color_text"
							>
								Stack Overflow
							</a>
						</td>
						<td className="paper_text_color_yellow">
							<a
								href="https://www.youtube.com/"
								target="_blank"
								className="text-decoration-none paper_text_color_text"
							>
								YouTube
							</a>
						</td>
						
					</tr>
					
				</tbody>
			</Table>

			<div className="my-5 d-xl-flex justify-content-center">
        <a href="https://www.hackerrank.com/" target="_blank"><Button variant="outline-warning" className="m-3">Hackerrank</Button></a>
          <a href="https://www.geeksforgeeks.org/" target="_blank"><Button variant="outline-warning" className="m-3">GeeksforGeeks</Button></a>
          
          <a href="https://www.codecademy.com/" target="_blank"><Button variant="outline-warning" className="m-3">Codecademy</Button></a>
          <a href="https://www.codementor.io/" target="_blank"><Button variant="outline-warning" className="m-3"> Codementor</Button></a>
          <a href="https://www.hackerearth.com/" target="_blank"><Button variant="outline-warning" className="m-3"> HackerEarth</Button></a>
          <a href="https://github.com/" target="_blank"><Button variant="outline-warning" className="m-3">GitHub </Button></a>
          <a href="https://stackoverflow.com/" target="_blank"><Button variant="outline-warning" className="m-3">Stack Overflow</Button></a>
        
			</div>
		</div>
	);
};

export default Developer;
