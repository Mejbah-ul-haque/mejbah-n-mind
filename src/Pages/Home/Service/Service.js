import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, price, image, description } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='gx-4 gy-5 col-sm-12 col-md-6 col-lg-4'>
            <div className='bg-light text-center pb-3'>
                <img className='w-100' src={image} alt="" />
                <h5 className='mb-4'><span className='rounded-circle border border-3 border-light bg-dark py-3 px-2 text-white'>${price}<small className='fs-6 fw-normal'>/m</small></span></h5>
                <h5 className='my-2 text-dark'>{name}</h5>

                <p className='p-2'>{description}</p>

                <button onClick={() => navigateToServiceDetail(id)} className='btn btn-secondary w-80'>Book : {name}</button>
            </div>
        </div>
    );
};

export default Service;