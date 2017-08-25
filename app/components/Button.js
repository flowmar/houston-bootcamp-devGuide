import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ text, className, href, onClick }) =>
	<Link to={href}>
		<button className={className}>
			{text}
		</button>
	</Link>;

Button.propTypes = {
	text: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	href: PropTypes.string,
	onClick: PropTypes.func
};

export default Button;
