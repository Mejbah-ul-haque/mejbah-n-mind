import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
	return (
		<div className="container">
			<h2 className="text-center fw-bold text-secondary mt-5">Dashboard</h2>

			<div class="drawer drawer-left drawer-static show">
				<div class="drawer-content drawer-content-scrollable">
					<div class="drawer-header">
						{/* <h5 class="drawer-title">Dashboard</h5> */}
       
					</div>
					
          <div className="d-flex">
            <ul className="mt-5">
              <li><Link to="/dashboard" className="dashboard_button"> My Dashboard</Link></li>
              <li className="mt-3"><Link to="/dashboard/addProject" className="dashboard_button"> Add Project</Link></li>
              <li className="mt-3"><Link to="/dashboard/addReport" className="dashboard_button">Add Report</Link></li>
              <li className="mt-3"><Link to="/dashboard" className="dashboard_button"> My Dashboard</Link></li>
            </ul>
            <Outlet></Outlet>
          </div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
