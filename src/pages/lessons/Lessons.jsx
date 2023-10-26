//mainReact
import React from "react";
//components
import Header from "../../components/header/Header";

import { ThemeItems } from "pages/home/components";

import Footer from "../../components/footer/Footer";
//style
//other

const Lessons = () => {
	return (
		<div className='mainBox'>
			<Header />
			<ThemeItems marg='50px 0px 0px 0px' />
			<div className='empty'></div>
			<Footer />
		</div>
	);
};

export default Lessons;
