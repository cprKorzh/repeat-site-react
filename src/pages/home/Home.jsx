//mainReact
import React, { useEffect } from "react";
import AOS from "aos";
//style
import "aos/dist/aos.css";
//components
import Header from "../../components/header/Header";

import { WelcomeBlock, ThemeItems, SubscribeBlock } from "./components";

import Footer from "../../components/footer/Footer";
//other

const Home = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div className='mainBox'>
			<Header />
			<WelcomeBlock />
			<ThemeItems />
			<SubscribeBlock />
			<Footer />
		</div>
	);
};

export default Home;
