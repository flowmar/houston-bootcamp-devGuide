import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, className, href, onClick }) => (
    <button className={className}><a href={href}>{text}</a></button>
)

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    href: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;
