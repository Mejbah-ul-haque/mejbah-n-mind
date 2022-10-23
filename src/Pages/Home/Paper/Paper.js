import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./Paper.css";

const Paper = () => {
	return (
		<div className="mt-5" style={{borderBottom: '2px solid black', paddingBottom: '100px'}}>
      <div>
			<h6 className='text-danger text-center text-uppercase'style={{letterSpacing:'3px'}}>Click the link & update !</h6>
            <h2 className='text-light lead-heading text-center mb-5'>Today's Media</h2>
      </div>
			<Table bordered>
				<tbody className=" text-center text-light">
					<tr className="text-secondary">
						<td className="paper_text_color_css ">
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

			<div className="my-5 d-xl-flex justify-content-center">
        <a href="https://www.bd-pratidin.com/" target="_blank"><Button variant="outline-secondary text-success" className="m-3"><span className="text-danger">বাংলাদেশ</span> প্রতিদিন</Button></a>
          <a href="https://www.prothomalo.com/" target="_blank"><Button variant="outline-secondary" className="m-3">প্রথম আলো</Button></a>
          
          <a href="https://www.kalerkantho.com/" target="_blank"><Button variant="outline-secondary" className="m-3">কালের কণ্ঠ</Button></a>
          <a href="https://samakal.com/" target="_blank"><Button variant="outline-secondary" className="m-3">সমকাল</Button></a>
          <a href="https://www.jugantor.com/" target="_blank"><Button variant="outline-secondary" className="m-3">যুগান্তর</Button></a>
          <a href="https://www.deshrupantor.com/" target="_blank"><Button variant="outline-secondary" className="m-3">দেশ রূপান্তর</Button></a>
          <a href="https://www.ittefaq.com.bd/" target="_blank"><Button variant="outline-secondary" className="m-3">ইত্তেফাক</Button></a>
          <a href="https://www.anandabazar.com/" target="_blank"><Button variant="outline-secondary" className="m-3">আনন্দবাজার</Button></a>
        
			</div>
		</div>
	);
};

export default Paper;
