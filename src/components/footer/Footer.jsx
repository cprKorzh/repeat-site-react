//mainReact
import React from "react";
import { Link } from "react-router-dom";
//components
import RouteLink from "components/UI_kit/links_type/FooterLink";
//style
import classes from "./Footer.module.css";
//other
import logo from "../header/img/Logo.svg";
import { watsapp, facebook, telegramm, arrowUp } from "./img";

const Footer = () => {
	return (
		<div className={classes.footerBox}>
			<div className={classes.logoAndContacts}>
				<Link to='/'>
					<img src={logo} alt='Rus-Korea Driving Center' />
				</Link>
				<div className={classes.Contacts}>
					<a href='https://t.me/rus_korea' target='blank'>
						<img src={telegramm} alt='telegramm' />
					</a>
					<a
						href='https://www.facebook.com/groups/367094228066200/?ref=share&mibextid=jf9HGS'
						target='blank'
					>
						<img src={facebook} alt='facebook' />
					</a>
					<a href='https://wa.me/+821076653966 ' target='blank'>
						<img src={watsapp} alt='watsapp' />
					</a>
				</div>
			</div>
			<div className={classes.links}>
				<div className={classes.navigate}>
					<RouteLink title='/lessons' text='Занятия'></RouteLink>
					<RouteLink title='/about' text='О сайте'></RouteLink>
					<RouteLink title='/profile' text='Профиль'></RouteLink>
				</div>
				<div className={classes.comeback}>
					В начало
					<img src={arrowUp} alt='watsapp' />
				</div>
			</div>
			<div className={classes.offer}>
				<p>
					<span className={classes.mrGray}>
						© Rus-Korea driving center 2023
					</span>
				</p>
				<p style={{ marginLeft: "265px" }}>
					Политика конфиденциальности
				</p>
				<p>Пользовательское соглашение</p>
			</div>
		</div>
	);
};

export default Footer;
