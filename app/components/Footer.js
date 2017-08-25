import React, { Component } from 'react';

export default class Footer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="row mt-5 footer text-center animated indigo darken-4 slideInLeft p-5 z-depth-5 card hoverable">
				<p className="col text-muted text-center">©2017 DevGuide</p>
			</div>
		);
	}
}
