import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div style={{ minHeight: '100vh' }} className='text-center'>
            <h2 className='my-5'>Thank You. Now Have to create an account.</h2>
            <h3>Please Click the button to Proceed</h3>
            <div className='text-center mt-5'>
                <Link to="/checkout">
                    <button className='btn btn-dark px-5'>PROCEED</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;