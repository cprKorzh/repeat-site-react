import React from "react";
import classes from "./inputs_style/MailInput.module.css";

const MailInput = () => {
	return (
		<input
			className={classes.mailInput}
			type='email'
			placeholder='Ваш email'
		/>
	);
};

export default MailInput;
