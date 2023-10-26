import React from "react";
import { Link } from "react-router-dom";
import classes from "./buttons_style/BaseButton.module.css";
import PropTypes from "prop-types";

const BaseButton = ({ children, to, padd, marg, fontSize }) => {
	const buttonStyle = {
		padding: padd,
		margin: marg,
		fontSize: fontSize,
	};
	return (
		<Link to={to} style={{ textDecoration: "none" }}>
			<button className={classes.baseBtn} style={buttonStyle}>
				{children}
			</button>
		</Link>
	);
};

BaseButton.propTypes = {
	children: PropTypes.node.isRequired,
	to: PropTypes.node.isRequired,
	padd: PropTypes.node.isRequired,
	marg: PropTypes.node.isRequired,
	fontSize: PropTypes.node.isRequired,
};

export default BaseButton;
