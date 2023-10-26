//mainReact
import React from "react";
import { Link } from "react-router-dom";
//style
import classes from "./Header.module.css";
//components
import RouteLink from "../UI_kit/links_type/HeaderLink";
//other
import logo from "./img/Logo.svg";

const Header = () => {
	return (
		<div className={classes.headerBox}>
			<div className={classes.logoBox}>
				<Link to='/'>
					<img src={logo} alt='Rus-Korea Driving Center' />
				</Link>
			</div>
			<div className={classes.buttonsBox}>
				<RouteLink title='/' text='Главная страница'></RouteLink>
				<RouteLink title='/lessons' text='Занятия'></RouteLink>
				<RouteLink title='/about' text='О сайте'></RouteLink>
				<RouteLink title='/profile' text='Профиль'></RouteLink>
			</div>
		</div>
	);
};

export default Header;
