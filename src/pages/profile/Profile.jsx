import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
//mainReact
//components
import Header from "../../components/header/Header";

import inProccesing from "./img.svg";

import Footer from "../../components/footer/Footer";
//style
//other

const Profile = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className='mainBox'>
			<Header />
			<img
				src={inProccesing}
				alt='inProccesing'
				style={{ margin: "50px 0px" }}
				data-aos='zoom-in-up'
			/>
			<Footer />
		</div>
	);
};

export default Profile;
