import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service1 = ({ service1 }) => {
  
  const { _id, name, project, image, technologies, features, live, clientCode, serverCode } = service1;

	const navigate = useNavigate();
	const navigateToServiceDetail = (id) => {
		navigate(`/service/${id}`);
	};
  
  return (
    <div className=' col-12' style={{margin:"50px 0 100px 0"}}>
      
      <div className="text-warning text-center footer-one sent-button p-0" >
          <h4 className=' py-2 px-4 text-secondary font-monospace fw-light'> {name}</h4>
          </div>
            <div className="d-flex justify-content-center my-3">
                <a target='_blank' href={clientCode}><button className='social-one btn btn-outline-secondary m-3'>GitHub Client</button></a>
                <a target='_blank' href={live}><button className='social-one btn btn-outline-secondary rounded-pill m-3'>Live site</button></a>
                <a target='_blank' href={serverCode}><button className='social-one btn btn-outline-secondary  m-3'>GitHub Server</button></a>
            </div>
            <div className='card bg-dark text-center border-secondary footer-one rounded-0 p-2'>                               
				    <img className='w-100 p-3' src={image} alt="" />
			    
                <div class="card-body bg-dark">
                <button className='social-one fw-bold d-block mx-auto px-4 py-1 text-center mb-3' style={{marginTop:"-50px", backgroundColor:"red"}}>{project}</button>
                    <div className="text-lg-start">
                        {/* <h4 className='text-sm-center text-lg-start text-secondary fw-light'>Key Features :</h4> */}

                        <p className=' text-secondary text-sm-center text-lg-start '>  {features}</p>
                        {/* <h4 className=' text-sm-center text-lg-start text-secondary fw-light'>Technologies :</h4>
                        <p className='text-light text-sm-center text-lg-start'>  {technologies}</p> */}

                        <div className="special-shadow-one w-100 mt-5 text-center" style={{background:'#505862'}}>
                        <button onClick={() => navigateToServiceDetail(_id)} className='btn px-4 btn-outline-dark border-2 fw-bold text-uppercase' style={{margin:'2px'}}  >Explore More...</button> 
                        </div>
                    </div>
                </div>
                
                
            </div>
           
        </div>
  );
};

export default Service1;