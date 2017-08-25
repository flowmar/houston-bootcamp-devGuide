import React, { Component } from 'react';

export default class About extends Component {
	render() {
		var rochelleUrl = 'http://example.com/image.jpg';
		return (
			<div className="landing row z-depth-3 animated slideInRight">
				<div className="border border-dark card col warning-color border border-dark">
					<div className="card-body">
						<h1 className="display-3 text-center card-title">About</h1>
						<div className="d-flex p-3">
							<div className="col card warning-color-dark z-depth-5 animated rollIn border border-dark hoverable">
								<img src={rochelleUrl} />Image Goes Here
								<h3 className="card-title text-center text-light display-5">Rochelle</h3>
								<div className="card-body">Bio Goes Here</div>
							</div>
							<div className="col-1" />
							<div className="col card warning-color-dark z-depth-5 animated rollIn border border-dark hoverable">
								<h3 className="card-title text-center display-5">Steven</h3>
							</div>
							<div className="col-1" />
							<div className="col card warning-color-dark z-depth-5 animated rollIn border border-dark hoverable">
								<h3 className="card-title text-center display-5">Omar</h3>
							</div>
							<br />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
