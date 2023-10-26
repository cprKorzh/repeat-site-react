import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import classes from "./ThemeItems.module.css";
import BaseButton from "components/UI_kit/buttons_type/BaseButton";

const Item = ({ title, subTitle, description, image, AOStype, to }) => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className={classes.itemBox} data-aos={AOStype}>
			<div>
				<div className={classes.headBox}>{title}</div>
				<h3>{subTitle}</h3>
				<p>{description}</p>
				<BaseButton
					to={to}
					padd='5px 10px'
					marg='5px 0px'
					fontSize='11px'
				>
					Перейти
				</BaseButton>
			</div>
			<img src={image} alt='cardImage' />
		</div>
	);
};

Item.propTypes = {
	title: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	AOStype: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
};

export default Item;
