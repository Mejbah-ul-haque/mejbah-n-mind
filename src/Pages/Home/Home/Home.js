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

const Home = () => {
	return (
		<div className="container" style={{ minHeight: "100vh" }}>
			<LeadItem></LeadItem>
			{/* <Banner></Banner> */}

			<div className="" >
				<div className="lead-shadow ps-4 py-2 ">
					<span className="">
						<h2 className="text-3xl font-bold text-secondary ">My Skills</h2>
					</span>
				</div>
				<div className=" my-4 mx-0">
					<ul className=" d-flex flex-wrap justify-content-start text-light mx-0 px-0">
						<li className="my-3 pe-2 py-1">
							<NavLink
								className="link-style"
								activeClassName="active"
								to="/home/programming"
							>
								Programming
							</NavLink>
						</li>
						<li className="my-3 px-2 py-1 ">
							<NavLink
								className="link-style lead-shadow"
								activeClassName="active"
								to="/home/tools"
							>
								Tools
							</NavLink>
						</li>
						<li className="my-3 px-2 py-1">
							<NavLink
								className="link-style"
								activeClassName="active"
								to="/home/journalism"
							>
								journalism
							</NavLink>
						</li>
						<li className="my-3 px-2 py-1">
							<NavLink
								className="link-style"
								activeClassName="active"
								to="/home/traveling"
							>
								Traveling
							</NavLink>
						</li>
						<li className="my-3 px-2 py-1">
							<NavLink
								className="link-style"
								activeClassName="active"
								to="/home/education"
							>
								Education
							</NavLink>
						</li>
						<li className="my-3 px-2 py-1">
							<NavLink
								className="link-style"
								activeClassName="active"
								to="/home/others"
							>
								Others
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
			<Outlet></Outlet>

			<Social></Social>
		
			<Goals></Goals>
			<Services></Services>
			<Social></Social>
			<About></About>
			<Special></Special>
			<Developer></Developer>
			<Paper></Paper>
			<Contact></Contact>
			
		</div>
	);
};

export default Home;
