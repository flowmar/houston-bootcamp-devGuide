import React, { Component } from 'react';

export default class About extends Component {
	render() {
		return (
			<div className="landing row z-depth-3 animated slideInRight">
				<div className="card col blue-grey lighten-4">
					<div className="card-body">
						<div className="container" id="about-us">
							<h1 className="display-3 card-title">Meet The Designers</h1>
							<br/>
							<div className="row"> 
								<div className="col-6">
									<h1 >L. Rochelle Beal</h1>
									<h4>MERN Stack Developer</h4>
									<h5 className="card-text">Navy Veteran <a href="https://ro04.github.io/Portfolio/">@Me</a> </h5>
									<a href="#"><i class="fa fa-google" aria-hidden="true"></i> bealrochelle@gmail.com</a> <br/>
									<a href="https://github.com/ro04"><i class="fa fa-github" aria-hidden="true"></i> https://github.com/ro04</a> <br/>
									<a href="https://linkedin.com/in/rochellebeal"><i class="fa fa-linkedin" aria-hidden="true"></i> https://linkedin.com/in/rochellebeal</a>
								</div>
								<div className="col-6">
									<h1>Omar Imam</h1>
									<h4>Front-End Developer/Graphic Designer</h4>
									<h5 className="card-text">Owner of <a href="https://kineticvortexflow.com/">@KineticVortexFlow</a></h5>
									<a href="#"><i class="fa fa-google" aria-hidden="true"></i> omar.imam@kineticvortex.com</a> <br/>
									<a href="https://github.com/flowmar"><i class="fa fa-github" aria-hidden="true"></i> https://github.com/flowmar</a> <br/>
									<a href="https://linked.com/in/flowmar"><i class="fa fa-linkedin" aria-hidden="true"></i> https://linked.com/in/flowmar</a>
								</div>
							</div> 
						</div>
					</div>
				</div>
			</div>
		);
	}
}
