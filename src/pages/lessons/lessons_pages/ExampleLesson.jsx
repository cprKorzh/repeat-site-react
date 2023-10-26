import React, { useEffect } from "react";
import classes from "./style/ExampleLessons.module.css";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const ExampleLesson = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className='mainBox'>
			<Header />
			<div className={classes.mainFrame} data-aos='zoom-in'>
				<iframe
					data-aos='zoom-in'
					className={classes.auxiliaryFrame}
					src='https://kinescope.io/embed/dxspjh61RoFnHbeZnPRWcx'
					allow='autoplay; fullscreen; pictureInPicture; encryptedMedia;'
					allowfullscreen
				></iframe>
			</div>
			<div className='empty'></div>
			<Footer />
		</div>
	);
};

export default ExampleLesson;
