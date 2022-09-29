import React from 'react';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import Goals from '../Goals/Goals';
import LeadItem from '../LeadItem/LeadItem';
import Developer from '../Developer/Developer';
import Paper from '../Paper/Paper';
import Services from '../Services/Services';
import Special from '../Special/Special';
import About from '../../About/About';
import Social from '../Social/Social';
import { Link, NavLink, Outlet } from 'react-router-dom';
import "./Home.css";


const Home = () => {
    return (
        <div className='container' style={{ minHeight: '100vh' }}>
            <LeadItem></LeadItem>
            {/* <Banner></Banner> */}
            
            <div className="">
				<h2 className="text-3xl font-bold text-secondary">My Skills</h2>
			</div>
			<div className="">
				<ul className=" d-flex flex-wrap justify-content-start text-light ">
					<li className="my-5 px-3 py-1">
						<NavLink className='link-style' activeClassName="active" to="/home">Programming</NavLink>
					</li>
					<li className="my-5 px-3 py-1" >
						<NavLink className='link-style' activeClassName="active" to="/home/tools">Tools</NavLink>
					</li>
					<li className="my-5 px-3 py-1">
						<NavLink className='link-style' activeClassName="active" to="/home/journalism">journalism</NavLink>
					</li>
					<li className="my-5 px-3 py-1">
						<NavLink className='link-style' activeClassName="active" to="/home/traveling">Traveling</NavLink>
					</li>
					<li className="my-5 px-3 py-1">
						<NavLink className='link-style' activeClassName="active" to="/home/education">Education</NavLink>
					</li>
					<li className="my-5 px-3 py-1">
						<NavLink className='link-style' activeClassName="active" to="/home/others">Others</NavLink>
					</li>
				</ul>
			</div>
            <Outlet></Outlet>
            
           
            <Goals></Goals>
            <Social></Social>
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