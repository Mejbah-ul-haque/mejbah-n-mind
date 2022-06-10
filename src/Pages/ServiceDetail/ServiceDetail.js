import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ServiceDetail = () => {
    const { id } = useParams();
    const [services, setServices] = useState([]);
    const {_id, name, project, features, bodyPart1, bodyPart2, bodyPart3, bodyPart4, image, image2, image3, image4, technologies, tools} = services;
    console.log(services);

    useEffect(() => {
        fetch(`https://mejba-n-mind.herokuapp.com/service/${id}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [id])
    return (
        <div style={{ minHeight: '100vh' }} className='text-center container'>
            <h2 className='my-3 text-warning'> {name}</h2>
            {/* <p>
                <button className='btn btn-outline-warning m-3'>GitHub Client</button>
                <button className='btn btn-outline-warning m-3'>Live site</button>
                <button className='btn btn-outline-warning m-3'>GitHub Server</button>
            </p> */}
            <h4 className="text-secondary col-sm-12 col-lg-8 d-block mx-auto py-3">{features}</h4>
            <div className='container'>
            <div className='row d-block mx-auto'>
               <div className="col-sm-12 col-lg-8 my-4 d-block mx-auto"><img className='img-fluid' src={image} alt=""></img></div>
               <div className="col-sm-12 col-lg-6  d-block mx-auto my-5"><p className='text-light text-start fs-5'>{bodyPart1}</p></div>
               <div className="col-sm-12 col-lg-8 my-4 d-block mx-auto"><img className='img-fluid' src={image2} alt=""></img></div>
               <div className="col-sm-12 col-lg-6  d-block mx-auto my-5"><p className='text-light fs-5 text-start'>{bodyPart2}</p></div>
               <div className="col-sm-12 col-lg-8 my-4 d-block mx-auto"><img className='img-fluid' src={image3} alt=""></img></div>
               <div className="col-sm-12 col-lg-6  d-block mx-auto my-5"><p className='text-light text-start fs-5'>{bodyPart3}</p></div>
               <div className="col-sm-12 col-lg-8 my-4 d-block mx-auto"><img className='img-fluid' src={image4} alt=""></img></div>
               <div className="col-sm-12 col-lg-6  d-block mx-auto my-5"><p className='text-light fs-5'>{bodyPart4}</p></div>
               
               <h5 className="text-success col-sm-12 col-lg-8 d-block mx-auto text-start my-4">Technologies: <p className="text-secondary">{technologies}</p></h5>
            <h5 className="text-success col-sm-12 col-lg-8 d-block mx-auto text-start my-4">Tools: <p className="text-secondary">{tools}</p></h5>
            </div>
            </div>
            
        </div>
    );
};

export default ServiceDetail;