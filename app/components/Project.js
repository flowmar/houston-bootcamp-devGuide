import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../actions';

class Project extends Component {
	componentDidMount() {
		//console.log(this.props.fetchProjects());
		this.props.fetchProjects();
	}
	renderProjects() {
		return this.props.projects.map(function(project, key) {
			if (project.lifecycle === 'Workflow') {
				return (
					<div className="row justify-content-center" key={project._id}>
						<div className="col-6">
							<br />
							<div className="card z-depth-5 hoverable blue-grey lighten-4 animated rollIn">
								<p className="card-header text-center font-weight-bold display-4 shadow-white">
									{project.todo}
								</p>
								<div className="card-body" key={project.resource[key]}>
									<p className="card-title text-center">Additional Resources For Help: </p>
									<p className="card-text text-center dark-grey-text">
										{project.resource[0].name}
									</p>
									<p className="card-text dark-grey-text font-weight-bold text-center">
										{project.resource[0].description}
									</p>
									<p className="card-text">
										<a href={project.resource[0].link}>
											<button className="btn btn-orange btn-block">
												{project.resource[0].name}
											</button>
										</a>
									</p>
									<br />
									{/* <Link to="/project/installation" className="btn btn-primary"> Coming Up Installation</Link> */}
								</div>
							</div>
						</div>
					</div>
				);
			}
		});
	}

	render() {
		return (
			<div className="card light-blue darken-2 animated slideInLeft">
				<br />
				<br />
				<br />
				<div className="row justify-content-center">
					<div className="text-center col">
						<p className="display-2 deep-orange-text shadow-black font-weight-bold"> Workflow Phase</p>
					</div>
				</div>
				{this.renderProjects()}
				<br />
				<div className="row justify-content-end">
					<div className="col" />
					<div className="col">
						<Link to="/project/installation" className="btn btn-amber z-depth-2">
							{' '}Coming Up Installation
						</Link>
						<div className="col" />
					</div>
				</div>
				<br />
				<br />
				<br />
			</div>
		);
	}
}

// Connect helper
// Make Navbar aware if the user is logged in by hooking it up to the redux store.
// pull off the auth piece of state
function mapStateToProps({ projects }) {
	return { projects };
}

export default connect(mapStateToProps, { fetchProjects })(Project);
