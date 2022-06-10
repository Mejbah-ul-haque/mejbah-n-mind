import React from 'react';

const Detail = ({service}) => {
  const {id, name, project, features, bodyPart1, bodyPart2, bodyPart, bodyPart4, imade, imade2, imade3, imade4, technologies, tools} = service;
  return (
    <div>
      <div className="row"> {features}</div>
    </div>
  );
};

export default Detail;