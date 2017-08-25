import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from './Button';
import Project from './Project';

class Navbar extends Component {
	renderContent() {
		switch (this.props.auth) {
			// if null
			case null:
				return;
			//if user isn't logged in
			case false:
				return (
					<li>
						<Button className="btn btn-amber amber darken-5" href="/auth/google" text="Login With Google" />
					</li>
				);
			// user is logged in
			default:
				return [
					<li key="1">
						<Link to="/about" className="btn btn-cyan z-depth-3" > 
							About Us
						</Link>
					</li>,
					<li key="2">
						<Link to="/project" className="btn btn-amber amber darken-3 z-depth-3">
							New Project
						</Link>
					</li>,
					<li key="3">
						<Button className="btn btn-amber amber darken-5 z-depth-3" href="/api/logout" text="Logout" />
					</li>
				];
		}
	}

	render() {
		var logoStyle = {};
		return (
			<div className="row z-depth-5 animated slideInDown mb-2">
				{/* Navigation  */}
				<nav id="mainNav" className="navbar col indigo darken-4">
					<div className="navbar-header">
						<Link to={this.props.auth ? '/project' : '/'} className="navbar-brand" style={logoStyle}>
							<img src="./images/d-logo.png" className="nav-logo z-depth-2 img-fluid rounded" />
						</Link>
					</div>
					<div className="navbar-right animated fadeIn" id="myNavbar">
						<ul className="nav navbar-right list-inline">
							{this.renderContent()}
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

// Connect helper
// Make Navbar aware if the user is logged in by hooking it up to the redux store.
// pull off the auth piece of state
function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Navbar);
