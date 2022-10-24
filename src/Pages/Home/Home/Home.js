import React from "react";
import Contact from "../../Contact/Contact";
import Banner from "../Banner/Banner";
import Goals from "../Goals/Goals";
import LeadItem from "../LeadItem/LeadItem";
import Developer from "../Developer/Developer";
import Paper from "../Paper/Paper";
import Services from "../Services/Services";
import Special from "../Special/Special";
import About from "../../About/About";
import Social from "../Social/Social";
import { NavLink, Outlet } from "react-router-dom";
import "./Home.css";
import TotalSkills from "../Skills/TotalSkills";

const Home = () => {
	return (
		<div className="container" style={{ minHeight: "" }}>
			<LeadItem></LeadItem>
			{/* <Banner></Banner> */}
			<Goals></Goals>
			<Services></Services>
			<TotalSkills></TotalSkills>
			
			
			<div className=""  style={{borderBottom:'2px solid black', paddingBottom:'100px'}}>
				<div className=" ps-4 py-2">
				<h6 className='text-primary text-center text-uppercase'style={{letterSpacing:'3px'}}>2+ Years of experience</h6>
            <h2 className='text-light lead-heading text-center mb-5'>My Resume</h2>
					
				</div>
				<div className=" my-4 mx-0">
					<ul className=" d-flex flex-wrap justify-content-start text-light mx-0 px-0">
						<li className="my-3 pe-2 py-1 ">
							<NavLink
								className="link-style special-shadow py-2"
								activeClassName="active"
								to="/home"
							>
								Programming
							</NavLink>
						</li>
						<li className="my-3 px-2 py-1 ">
							<NavLink
								className="link-style special-shadow py-2"
								activeClassName="active"
								to="/home/tools"
							>
								Tools
							</NavLink>
						</li>
						<li className="my-3 px-2 py-1">
							<NavLink
								className="link-style special-shadow py-2"
								activeClassName="active"
								to="/home/journalism"
							>
								journalism
							</NavLink>
						</li>
						<li className="my-3 px-2 py-1">
							<NavLink
								className="link-style special-shadow py-2"
								activeClassName="active"
								to="/home/traveling"
							>
								Traveling
							</NavLink>
						</li>
						<li className="my-3 px-2 py-1">
							<NavLink
								className="link-style special-shadow py-2"
								activeClassName="active"
								to="/home/education"
							>
								Education
							</NavLink>
						</li>
						<li className="my-3 px-3 py-1">
							<NavLink
								className="link-style special-shadow py-2"
								activeClassName="active"
								to="/home/others"
							>
								Others
							</NavLink>
						</li>
					</ul>
				</div>
				<Outlet></Outlet>
			</div>
			

		
		
		
			<About></About>
			<Special></Special>
			<Developer></Developer>
			<Paper></Paper>
			<Contact></Contact>
			<Social></Social>
			
		</div>
	);
};

export default Home;
