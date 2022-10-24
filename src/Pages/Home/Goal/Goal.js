import React from 'react';
import './Goal.css';

const Goal = ({ goal }) => {
    const { title, text, logo } = goal;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4 mb-4' >
            
            <div className=' rounded  text-center pb-4 px-4 goal-bo lead-shadow' style={{marginBottom:'100px'}}>
                <h1 className='mb-5 logo-bg '><span style={{ backgroundColor: '#000' }} className='rounded-circle p-4  text-secondary fw-bold lead-shadow '>{logo}<small className='fs-6 fw-normal'></small></span></h1>
                <h5 className='mt-5 text-primary'>{title}</h5>
                <p className='p-2 text-secondary'>{text}</p>
            </div>
        </div>

    );
};

export default Goal;
