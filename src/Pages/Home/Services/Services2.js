import React, { useEffect, useState } from 'react';
import Service2 from '../Service/Service2';

const Services2 = () => {
  
  const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://mejba-n-mind.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
  return (
    <div id="services" className='container' style={{margin:"200px 0 120px 0", borderBottom:'2px solid black'}}>
            <h6 className='text-primary text-center text-uppercase'style={{letterSpacing:'3px'}}>Please, click on the <span className='text-danger'>LIVE</span> button!</h6>
            <h2 className='text-light lead-heading text-center mb-5'>Dashboard <span className='text-secondary'>is my latest project</span> <span className='text-danger'>!</span></h2>
            <div className='row'>
                {
                    services.slice(0, 1).map(service2 => <Service2
                        key={service2._id}
                        service2={service2}
                    ></Service2>)
                }
            </div>
        </div>
  );
};

export default Services2;