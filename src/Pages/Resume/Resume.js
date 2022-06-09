import React from 'react';
import resume1 from '../../Images/Resume/resume1.jpg';
import resume2 from '../../Images/Resume/resume2.jpg';

const Resume = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-lg-6 mt-3">
          <img className="img-fluid" src={resume1} alt="resume first page" />
        </div>
        <div className="col-sm-12 col-lg-6 mt-3">
        <img className="img-fluid" src={resume2} alt="resume second page" />
        </div>
      </div>
    </div>
  );
};

export default Resume;