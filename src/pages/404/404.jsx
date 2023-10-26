//mainReact
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
//components
import Header from "../../components/header/Header";

import error from "./notFound.svg";

import Footer from "../../components/footer/Footer";
//style
//import classes from './404Style.module.css'
//other

const NotFound = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className='mainBox'>
			<Header />
			<img
				src={error}
				alt='error'
				style={{ margin: "50px 0px" }}
				data-aos='zoom-in-up'
			/>
			<Footer />
		</div>
	);
};

export default NotFound;
