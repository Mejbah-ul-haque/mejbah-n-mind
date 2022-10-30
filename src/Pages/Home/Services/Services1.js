import React, { useEffect, useState } from 'react';
import Service1 from '../Service/Service1';

const Services1 = () => {
  
  const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://mejba-n-mind.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
  return (
    <div id="services" className='container' style={{margin:"200px 0 120px 0", borderBottom:'2px solid black'}}>
            <h6 className='text-primary text-center text-uppercase'style={{letterSpacing:'3px'}}>Please, visit my website</h6>
            <h2 className='text-light lead-heading text-center mb-5'>Explore</h2>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5'>
                {
                    services.slice(0, 3).map(service1 => <Service1
                        key={service1._id}
                        service1={service1}
                    ></Service1>)
                }
            </div>
        </div>
  );
};

export default Services1;