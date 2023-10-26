//mainReact
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
//components
//style
import classes from "./links_style/HeaderLink.module.css";
//other

const RouteLink = props => {
	return (
		<Link to={props.title} style={{ textDecoration: "none" }}>
			<div className={classes.navLinks}>{props.text}</div>
		</Link>
	);
};

RouteLink.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default RouteLink;
