import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { NotFound, About, Home, Lessons, Profile, ExampleLesson } from "../pages";

const LiksRoute = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/about" element={<About/>} />
				<Route path="/lessons" element={<Lessons/>} />
				<Route path="/profile" element={<Profile/>} />

				<Route path="/examplelesson" element={<ExampleLesson/>} />

				<Route path="*" element={<Navigate to="/404"/>} />
				<Route path="/404" element={<NotFound/>} />
			</Routes>
		</Router>
	);
};

export default LiksRoute;