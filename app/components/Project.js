import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../actions';

class Project extends Component {
	componentDidMount() {
		console.log(this.props.fetchProjects());
		this.props.fetchProjects();
	}
	renderProjects() {
		return this.props.projects.map(function(project, key) {
			if (project.lifecycle === 'Workflow') {
				return (
					<div className="row" key={project._id}>
						<div className="col-sm-8">
							<br />
							<div className="card">
								<h4 className="card-header">
									{project.todo}{' '}
								</h4>
								<div className="card-body" key={project.resource[key]}>
									<h4 className="card-title">Additional Resources For Help: </h4>
									<h5 className="card-text">
										{'Name: ' + project.resource[0].name}
									</h5>
									<h5 className="card-text">
										{'Description: ' + project.resource[0].description}
									</h5>
									<h5 className="card-text">
										{'Link: ' + project.resource[0].link}
									</h5>
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
			<div>
				<br />
				<br />
				<br />
				<h1> Worflow Lifecycle</h1>
				{this.renderProjects()}
				<br />
				<div className="footerBtn">
					<Link to="/project/installation" className="btn btn-primary">
						{' '}Coming Up Installation
					</Link>
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
