import React, { useEffect } from "react";
import classes from "./ThemeItems.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Item from "./Item";
import Images from "./img";
import PropTypes from "prop-types";

const ThemeItems = ({ marg }) => {
	useEffect(() => {
		AOS.init();
	}, []);

	const boxStyle = { margin: marg };

	return (
		<div className={classes.themeBox} data-aos='zoom-in' style={boxStyle}>
			<h2>Список тем</h2>
			<div className={classes.tableCard}>
				<Item
					title='100 вопросов'
					subTitle='Вопросы с фотографиями'
					description='В данном разделе перечислены вопросы 
					с различными дорожными ситуациями на фотографиях'
					image={Images.hum_1}
					AOStype='fade-down-right'
					to='/examplelesson'
				/>
				<Item
					title='85 вопросов'
					subTitle='Вопросы с картинками'
					description='В данном разделе перечислены вопросы 
					с различными дорожными ситуациями на картинках '
					image={Images.hum_2}
					AOStype='fade-down-left'
					to='/examplelesson'
				/>
				<Item
					title='35 вопросов'
					subTitle='Вопросы с видео'
					description='В данном разделе перечислены вопросы 
					с различными дорожными ситуациями в видеороликах '
					image={Images.hum_3}
					AOStype='fade-up-right'
					to='/examplelesson'
				/>
				<Item
					title='100 вопросов'
					subTitle='Вопросы со знаками'
					description='В данном разделе перечислены вопросы 
					с дорожными знаками безопасности '
					image={Images.hum_4}
					AOStype='fade-up-left'
					to='/examplelesson'
				/>
			</div>
		</div>
	);
};

ThemeItems.propTypes = {
	marg: PropTypes.node.isRequired,
};
export default ThemeItems;
