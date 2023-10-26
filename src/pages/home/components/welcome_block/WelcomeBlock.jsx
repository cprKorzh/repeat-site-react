//mainReact
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
//components
import BaseButton from "../../../../components/UI_kit/buttons_type/BaseButton";
//style
import classes from "./WelcomeBlock.module.css";
//other
import team from "./img/team.svg";

const WelcomeBlock = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className={classes.welcomeBox}>
			<div
				className={classes.descriptions}
				alt='work_team'
				data-aos='fade-right'
				data-aos-anchor='#example-anchor'
				data-aos-offset='500'
				data-aos-duration='500'
			>
				<h1>Повтор занятий по теории</h1>
				<p>
					Мы предоставляем замечательную возможность повтора
					материала, в любое удобное для Вас время.
				</p>
				<div className={classes.runButton}>
					<BaseButton to='/lessons' style={{ width: "209px" }}>
						Начать урок
					</BaseButton>
					<p>
						Пропустили{" "}
						<span className={classes.mrPink}>материал</span> и
						хотите{" "}
						<span className={classes.mrPink}>
							повторить занятие?
						</span>
					</p>
				</div>
			</div>
			<img
				src={team}
				alt='work_team'
				data-aos='fade-left'
				data-aos-anchor='#example-anchor'
				data-aos-offset='500'
				data-aos-duration='500'
			/>
		</div>
	);
};

export default WelcomeBlock;
