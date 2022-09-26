import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
	const { _id, name, project, image, technologies, features, live, clientCode, serverCode } = service;

	const navigate = useNavigate();
	const navigateToServiceDetail = (id) => {
		navigate(`/service/${id}`);
	};

	return (
		
		 <div className=' col-12' style={{margin:"50px 0 120px 0",}}>
            <div className="card-style text-warning text-center row p-0" style={{ backgroundColor: '#001133', color: 'seagreen' }}>
                    <h4 className=' py-2 px-4' >{project} : {name}</h4>
                    
            </div>
            <div className="d-flex justify-content-center">
                <a target='_blank' href={clientCode}><button className='btn btn-outline-secondary rounded-pill m-3'>GitHub Client</button></a>
                <a target='_blank' href={live}><button className='btn btn-outline-secondary rounded-pill m-3'>Live site</button></a>
                <a target='_blank' href={serverCode}><button className='btn btn-outline-secondary rounded-pill m-3'>GitHub Server</button></a>
            </div>
            <div className='row rounded text-center pb-3 '>
                
                <div class="col-md-6 p-0 card-style">
				    <img className='w-100 service-image' src={image} alt="" />
			    </div>
                <div class="col-md-6 card-style p-4 d-flex align-items-center">
                    <div className="text-lg-start">
                        <h4 className='text-sm-center text-lg-start text-secondary'>Key Features :</h4>

                        <p className=' text-light text-sm-center text-lg-start'>  {features}</p>
                        <h4 className=' text-sm-center text-lg-start text-secondary'>Technologies :</h4>
                        <p className='text-light text-sm-center text-lg-start'>  {technologies}</p>

                        <button onClick={() => navigateToServiceDetail(_id)} className='service-btn btn px-4 btn-outline-warning rounded-pill py-2 my-3' >See Details</button>
                    </div>
                </div>
                
                
            </div>
        </div>
        
        // <div class="card mb-3" style="max-width: 540px;">
		// 	<div class="row g-0">
		// 		<div class="col-md-4">
		// 			<img src="..." class="img-fluid rounded-start" alt="..." />
		// 		</div>
		// 		<div class="col-md-8">
		// 			<div class="card-body">
		// 				<h5 class="card-title">Card title</h5>
		// 				<p class="card-text">
		// 					This is a wider card with supporting text below as a natural
		// 					lead-in to additional content. This content is a little bit
		// 					longer.
		// 				</p>
		// 				<p class="card-text">
		// 					<small class="text-muted">Last updated 3 mins ago</small>
		// 				</p>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
        
        
        
        
        // <div className='gx-5 gy-5 col-sm-12 col-md-6 col-lg-4'>
        //     <div className=' mt-5 rounded text-center pb-3'>
        //     <h5><p className=' py-2 px-4' style={{ backgroundColor: '#001133', color: 'seagreen' }}>{project}</p></h5>
        //         <img className='w-100 service-image' src={image} alt="" />
                
        //         <h5 className='my-3 text-light'>{name}</h5>
        //         <p className='text-sm-center text-lg-start text-secondary'>Key Features :</p>

        //         <p className=' text-light text-sm-center text-lg-start'>  {features}</p>
        //         <p className=' text-sm-center text-lg-start text-secondary'>Technologies :</p>
        //         <p className='text-light text-sm-center text-lg-start'>  {technologies}</p>

        //         <button onClick={() => navigateToServiceDetail(_id)} className='service-btn btn px-4 btn-outline-success rounded-pill py-2 my-3' >See Details</button>
        //     </div>
        // </div>
	);
};

export default Service;
