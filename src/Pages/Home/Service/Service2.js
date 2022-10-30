import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service2 = ({ service2 }) => {
	const { _id, name, project, image, technologies, features, live, clientCode, serverCode } = service2;

	const navigate = useNavigate();
	const navigateToServiceDetail = (id) => {
		navigate(`/service/${id}`);
	};

	return (
		
		 <div className=' col-12' style={{marginBottom:"100px"}}>
            {/* <div className="card-style text-warning text-center footer-one sent-button row p-0" style={{ backgroundColor: 'black' }}>
                    <h4 className=' py-2 px-4 text-primary fw-light'> {name}</h4>
                    
            </div> */}
            <div className="d-flex justify-content-center my-3">
                <a target='_blank' href={clientCode}><button className='social-one btn btn-outline-secondary m-3'>GitHub Client</button></a>
                <a target='_blank' href={live} ><button className='social-one btn btn-outline-secondary text-light rounded-pill m-3' style={{backgroundColor:"red"}}>Live site</button></a>
                <a target='_blank' href={serverCode}><button className='social-one btn btn-outline-secondary  m-3'>GitHub Server</button></a>
            </div>
            <div className='row text-center lead-shadow card-background p-4'>
                
                <div class="col-lg-6 p-0 card-style ">
				    <img className='w-100 service-image' src={image} alt="" />
			    </div>
                <div class="col-lg-6 card-style p-xl-4 ps-md-4 d-flex align-items-center  Others_bg">
                    <div className="text-lg-start">
                        <h4 className='text-sm-center text-lg-start text-secondary fw-light'>Key Features :</h4>

                        <p className=' text-light text-sm-center text-lg-start '>  {features}</p>
                        <h4 className=' text-sm-center text-lg-start text-secondary fw-light'>Technologies :</h4>
                        <p className='text-light text-sm-center text-lg-start'>  {technologies}</p>

                        <div className="special-shadow-one w-100 mt-5" style={{background:'#505862'}}>
                        <button onClick={() => navigateToServiceDetail(_id)} className='btn px-4 btn-outline-dark border-2 fw-bold text-uppercase' style={{margin:'2px'}}  >Explore More...</button> 
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
        
        );
};

export default Service2;