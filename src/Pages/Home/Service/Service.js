import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Service.css"

const Service = ({ service }) => {
    const { _id, name, project, image, technologies, features } = service;
    
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='gx-5 gy-5 col-sm-12 col-md-6 col-lg-4'>
            <div className=' mt-5 rounded text-center pb-3'>
            <h5><p className=' py-2 px-4' style={{ backgroundColor: '#001133', color: 'seagreen' }}>{project}</p></h5>
                <img className='w-100 service-image' src={image} alt="" />
                
                <h5 className='my-3 text-light'>{name}</h5>
                <p className='text-start text-secondary'>Key Features :</p>

                <p className=' text-light text-start'>  {features}</p>
                <p className=' text-start text-secondary'>Technologies :</p>
                <p className='text-light text-start'>  {technologies}</p>

                <button onClick={() => navigateToServiceDetail(_id)} className='service-btn btn px-4 btn-outline-success rounded-pill py-2 my-3' >See Details</button>
            </div>
        </div>
    );
};

export default Service;