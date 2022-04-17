import React from 'react';

const Goal = ({ goal }) => {
    const { title, text, logo } = goal;
    return (
        <div className='g-4 col-sm-12 col-md-6 col-lg-4'>
            <div className='bg-light text-center'>
                <h3 className='mb-4'><span style={{ backgroundColor: 'black' }} className='rounded-circle px-4 py-3 text-white'>{logo}<small className='fs-6 fw-normal'></small></span></h3>
                <h5 className='my-2 text-dark'>{title}</h5>
                <p className='p-2'>{text}</p>
            </div>
        </div>

    );
};

export default Goal;