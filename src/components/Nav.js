import React from "react";
import logo from "../tablet-logo-445x110@2x.png";
import { Link } from "react-router-dom";

const Nav = ({ location }) => {
	console.log(location);
	return (
		<div data-test="component-nav" className="flex-between">
			<img src={logo} alt="logo" className="App-logo nav-item" />
			{location.pathname === "/" ? (
				<Link to="/bookmarked-hotels">
					<div className="nav-item">My Favorite Hotels</div>
				</Link>
			) : (
				<Link to="/">
					<div className="nav-item">Back To Search</div>
				</Link>
			)}
		</div>
	);
};

export default Nav;
