import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://mejba-n-mind.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services" className='container' style={{margin:"200px 0 120px 0",}}>
            <h6 className='text-danger text-center text-uppercase'style={{letterSpacing:'3px'}}>Please, visit my Projects</h6>
            <h2 className='text-light lead-heading text-center mb-5'>My Works</h2>
            <div className='row'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;