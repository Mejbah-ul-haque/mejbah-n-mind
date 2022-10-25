import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./Developer.css";

const Developer = () => {
	return (
		<div className=""style={{margin:"150px 0", borderBottom: '2px solid black', paddingBottom: '100px'}}>
      <div>
			<h6 className='text-primary text-center text-uppercase'style={{letterSpacing:'3px'}}>most Useful website links</h6>
            <h2 className='text-light lead-heading text-center mb-5'>For Developer</h2>
      </div>
			<Table bordered>
				<tbody className="tbody text-center text-light ">
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
			<div className="row row-cols-3 row-cols-md-6 row-cols-xl-6 mt-4 g-4">
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.hackerrank.com/">
            <div className="text-center social-one">
            <h6 className=" pt-2">Hackerran</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.geeksforgeeks.org/">
            <div className="text-center social-one">
            <h6 className=" pt-2">GeeksforGeeks</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.codementor.io/">
            <div className="text-center social-one">
            <h6 className=" pt-2">Codecademy</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://samakal.com/">
            <div className="text-center social-one">
            <h6 className=" pt-2">Codementor</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://stackoverflow.com/">
            <div className="text-center social-one">
            <h6 className=" pt-2">Stack Overflow</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.hackerearth.com/">
            <div className="text-center social-one">
            <h6 className=" pt-2">HackerEarth</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.hackerrank.com/">
            <div className="text-center social-one">
            <h6 className=" pt-2">Hackerran</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.geeksforgeeks.org/">
            <div className="text-center social-one">
            <h6 className=" pt-2">GeeksforGeeks</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.codementor.io/">
            <div className="text-center social-one">
            <h6 className=" pt-2">Codecademy</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://samakal.com/">
            <div className="text-center social-one">
            <h6 className=" pt-2">Codementor</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://stackoverflow.com/">
            <div className="text-center social-one">
            <h6 className=" pt-2">Stack Overflow</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.hackerearth.com/">
            <div className="text-center social-one">
            <h6 className=" pt-2">HackerEarth</h6>
            </div>
            </a>
          </div>
        </div>
      </div>
		</div>
	);
};

export default Developer;
