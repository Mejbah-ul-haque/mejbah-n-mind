import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div style={{ minHeight: '100vh' }}>
            <h2>This is Service Detail page : {serviceId}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-dark'>Proceed CheckOut</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;