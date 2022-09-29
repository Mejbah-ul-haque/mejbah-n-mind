import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./skills.css";

const Skills = () => {
  return (
    <div>
      <div className="container mx-auto my-5">
			<div className="">
				<h2 className="text-3xl font-bold text-secondary">My Skills</h2>
				<Outlet></Outlet>
			</div>
			<div className=" ">
				<ul  className=" d-flex  text-light ">
				
					<li className="m-2 px-3 py-1">
						<Link to="/programing">Programming</Link>
					</li>
					<li className=" m-2 px-3 py-1" >
						<Link to="/tools">Tools</Link>
					</li>
					<li className=" m-2 px-3 py-1">
						<Link to="/journalism">journalism</Link>
					</li>
					<li className=" m-2 px-3 py-1">
						<Link to="/traveling">Traveling</Link>
					</li>
					<li className="m-2 px-3 py-1">
						<Link to="/others">Others</Link>
					</li>
				
				
				</ul>
			</div>
		</div>
    </div>
  );
};

export default Skills;