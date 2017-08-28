import React, { Component } from 'react';

export default class About extends Component {
	render() {
		return (
			<div className="landing row animated slideInRight">
				<div className="jumbotron amber darken-4 col z-depth-5">
					<p className="display-3 shadow-white card-title text-center font-weight-bold">Meet The Designers</p>
					<br />
					<div className="d-flex row text-center">
					<div className="col"/>
						<div className="card amber lighten-1 z-depth-5 hoverable animated fadeInUpBig">
							<div className="card-header">
								<h2 className="card-title font-weight-bold mdb-color-text shadow-white">L. Rochelle Beal</h2>
								<h6 className="card-subtitle shadow-white">MERN Stack Developer</h6>
							</div>
							<div className="card-body">
								<p className="card-text">
									Navy Veteran{' '}
									<a className="card-link hoverable" href="https://ro04.github.io/Portfolio/">
										@Me
									</a>{' '}
								</p>
								<a href="mailto:bealrochelle@gmail.com" className="hoverable card-link">
									<i className="fa fa-google fa-2x shadow-white" />
									{' '}bealrochelle@gmail.com
								</a>{' '}
								<br />
								<a href="https://github.com/ro04" className="card-link hoverable">
									<i className="fa fa-github fa-2x shadow-white" />
									{' '}https://github.com/ro04
								</a>{' '}
								<br />
								<a href="https://linkedin.com/in/rochellebeal" className="card-link hoverable">
									<i className="fa fa-linkedin fa-2x shadow-white" />
									{' '}https://linkedin.com/in/rochellebeal
								</a>
							</div>
						</div>
						<div className="col-1" />
						<div className="card amber lighten-1 z-depth-5 hoverable animated fadeInUpBig">
						<div className="card-header">
							<h2 className="card-title font-weight-bold mdb-color-text shadow-white">Omar Imam</h2>
							<h6 className="card-subtitle shadow-white">Front-End Developer/Graphic Designer</h6>
							</div>
							<div className="card-body">
							<p className="card-text">
								Owner of
								<a href="https://kineticvortexflow.com/" className="hoverable">@KineticVortexFlow</a>
							</p>
							<a href="mailto:omar.imam@kineticvortex.com" className="hoverable">
									<i className="fa fa-google fa-2x shadow-white" />{' '}
								omar.imam@kineticvortex.com
							</a>{' '}
							<br />
							<a href="https://github.com/flowmar" className="hoverable card-link">
									<i className="fa fa-github fa-2x shadow-white" />{' '}
								https://github.com/flowmar
							</a>{' '}
							<br />
							<a href="https://linked.com/in/flowmar" className="hoverable">
								<i className="fa fa-linkedin fa-2x shadow-white" />{' '}
								https://linked.com/in/flowmar
							</a>
							</div>
						</div>
						<div className="col"/>
					</div>
				</div>
			</div>
		);
	}
}
