import React from 'react';

const Service = ({ service }) => {

    const { name, price, image, description } = service;
    console.log(image);

    return (
        <div className='gx-4 gy-5 col-sm-12 col-md-6 col-lg-4'>
            <div className='bg-light text-center border'>
                <img className='w-100' src={image} alt="" />
                <h5 className='mb-4'><span className='rounded-circle border border-3 border-light bg-dark py-3 px-2 text-white'>${price}<small className='fs-6 fw-normal'>/m</small></span></h5>
                <h5 className='my-2 text-dark'>{name}</h5>

                <p className='p-2'>{description}</p>

                <button className='btn btn-secondary w-100'>Book : {name}</button>
            </div>
        </div>
    );
};

export default Service;