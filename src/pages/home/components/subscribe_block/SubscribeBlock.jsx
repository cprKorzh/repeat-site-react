import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import classes from "./SubscribeBlock.module.css";
import MailInput from "../../../../components/UI_kit/inputs_type/MailInput";
import BaseButton from "components/UI_kit/buttons_type/BaseButton";
import subScrb from "./img/subscrb.svg";

const SubscribeBlock = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className={classes.subScrbBox} data-aos='zoom-in'>
			<div
				className={classes.descriptions}
				data-aos='fade-right'
				data-aos-offset='300'
				data-aos-easing='ease-in-sine'
			>
				<div className={classes.descriptionsNews}>
					Получайте все новости
				</div>
				<h3 className={classes.newsHeader}>
					Подпишитесь на email рассылку
				</h3>
				<div className={classes.sendBox}>
					<MailInput />
					<BaseButton>Подписаться</BaseButton>
				</div>
			</div>
			<img
				src={subScrb}
				alt='subScrb'
				style={{ zIndex: "2", marginRight: "92px" }}
				data-aos='fade-left'
				data-aos-offset='300'
				data-aos-easing='ease-in-sine'
			/>
			<div
				className={classes.circle}
				data-aos='fade-left'
				data-aos-offset='300'
				data-aos-easing='ease-in-sine'
			></div>
		</div>
	);
};

export default SubscribeBlock;
