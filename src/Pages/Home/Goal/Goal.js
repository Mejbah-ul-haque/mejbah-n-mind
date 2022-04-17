import React from 'react';

const Goal = ({ goal }) => {
    const { title, text } = goal;
    return (
        <div className='g-4 col-sm-12 col-md-6 col-lg-4'>
            <div className='bg-light p-2 text-center'>
                <h5 className='my-2 text-dark'>{title}</h5>
                <p className='p-2'>{text}</p>
            </div>
        </div>

    );
};

export default Goal;