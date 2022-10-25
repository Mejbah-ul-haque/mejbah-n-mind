import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./Paper.css";

const Paper = () => {
	return (
		<div className="mt-5" style={{borderBottom: '2px solid black', paddingBottom: '100px'}}>
      <div>
			<h6 className='text-primary text-center text-uppercase'style={{letterSpacing:'3px'}}>Click the link & update !</h6>
            <h2 className='text-light lead-heading text-center mb-5'>Today's Media</h2>
      </div>
			<Table bordered>
				<tbody className=" text-center text-light">
					<tr className="">
						<td className="paper_text_color_css">
							<a
								href="https://www.theguardian.com/"
								target="_blank"
								className="text-decoration-none paper_text_color_text"
							>
								The Guardian
							</a>
						</td>
						<td className="paper_text_color_css">
							<a
								href="https://www.bbc.com/"
								target="_blank"
								className="text-decoration-none paper_text_color_text"
							>
								BBC
							</a>
						</td>
						<td className="paper_text_color_css">
							<a
								href="https://www.nytimes.com/"
								target="_blank"
								className="text-decoration-none  paper_text_color_text"
							>
								New York Times
							</a>
						</td>
						
					</tr>
					<tr className="">
						<td className="paper_text_color_css">
							<a
								href="https://www.thedailystar.net/"
								target="_blank"
								className="text-decoration-none  paper_text_color_text"
							>
								The Daily Star
							</a>
						</td>
						<td className="paper_text_color_css">
							<a
								href="https://www.daily-sun.com/"
								target="_blank"
								className="text-decoration-none paper_text_color_text"
							>
								Daily Sun
							</a>
						</td>
						<td className="paper_text_color_css">
							<a
								href="https://www.dhakatribune.com/"
								target="_blank"
								className="text-decoration-none paper_text_color_text"
							>
								Dhaka Tribune
							</a>
						</td>
						
					</tr>
					<tr className="">
						<td className="paper_text_color_css">
							<a
								href="https://www.dw.com/en/top-stories/s-9097"
								target="_blank"
								className="text-decoration-none paper_text_color_text"
							>
								Deutsche welle
							</a>
						</td>
						<td className="paper_text_color_css">
							<a
								href="https://edition.cnn.com/"
								target="_blank"
								className="text-decoration-none paper_text_color_text"
							>
								CNN
							</a>
						</td>
						<td className="paper_text_color_css">
							<a
								href="https://www.aljazeera.com/"
								target="_blank"
								className="text-decoration-none paper_text_color_text"
							>
								aljazeera
							</a>
						</td>
						
					</tr>
					
				</tbody>
			</Table>

		
			<div className="row row-cols-3 row-cols-md-6 row-cols-xl-6 mt-4 g-4">
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.bd-pratidin.com/">
            <div className="text-center social-one">
            <h6 className=" pt-2 text-danger">বাংলাদেশ <span className="text-success">প্রতিদিন</span></h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.prothomalo.com/">
            <div className="text-center social-one">
            <h6 className=" pt-2">প্রথম আলো</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.kalerkantho.com/">
            <div className="text-center social-one">
            <h6 className=" pt-2">কালের কণ্ঠ</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://samakal.com/">
            <div className="text-center social-one">
            <h6 className=" pt-2">সমকাল</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.jugantor.com/">
            <div className="text-center social-one">
            <h6 className=" pt-2">যুগান্তর</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.anandabazar.com/">
            <div className="text-center social-one">
            <h6 className=" pt-2">আনন্দবাজার</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.ittefaq.com.bd/">
            <div className="text-center social-one">
            <h6 className=" pt-2">ইত্তেফাক</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.prothomalo.com/">
            <div className="text-center social-one">
            <h6 className=" pt-2">কালবেলা</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.jaijaidinbd.com/">
            <div className="text-center social-one">
            <h6 className=" pt-2 text-primary"><em>যায়যায়দিন</em></h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://mzamin.com/">
            <div className="text-center social-one">
            <h6 className=" pt-2 text-danger"><em>মানবজমিন</em></h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://bangla.bdnews24.com/">
            <div className="text-center social-one">
            <h6 className=" pt-2 text-danger">bdnews24.com</h6>
            </div>
            </a>
          </div>
        </div>
        <div className="col">
          <div className=" shadow-lg">
            <a className='text-decoration-none' target="_blank" href="https://www.thedhakapost.com/bn/">
            <div className="text-center social-one">
            <h6 className=" pt-2">ঢাকা পোস্ট</h6>
            </div>
            </a>
          </div>
        </div>
      </div>	
		</div>
	);
};

export default Paper;
