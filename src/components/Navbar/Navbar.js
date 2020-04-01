import React, {Component} from "react";
import {NavLink, withRouter} from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
					<NavLink className="navbar-brand" to='/'>
						Apis-Consumer
					</NavLink>
					<button className="navbar-toggler" type="button" data-toggle="collapse"
							data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
							aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarCollapse">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<NavLink className="nav-link" to="/">Home</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/about">About</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/contact">Contact</NavLink>
							</li>
						</ul>
						<form className="form-inline mt-2 mt-md-0">
							<input className="form-control mr-sm-2 form-control-sm" type="text" placeholder="Search"
								   aria-label="Search"/>
							<button className="btn btn-info btn-sm my-2 my-sm-0" type="button">Search</button>
						</form>
					</div>
				</nav>
			</div>
		)
	}
}

export default withRouter(Navbar);
