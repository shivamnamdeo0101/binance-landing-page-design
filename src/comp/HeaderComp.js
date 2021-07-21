import React from 'react';
import logo from "../assets/logo.png";
import "../App.css";

const HeaderComp = () => {
	return (
		<div className="header">
			<img src={logo} alt="logo"/>

			<div className="right_header header">
				<button className="grey_button yellow_button">Login</button>
				<button className="yellow_button ">Register</button>
				<h3>Downloads</h3>
				<h3>English(India)</h3>
				<h3>USD</h3>
			</div>
		</div>
	)
}

export default HeaderComp