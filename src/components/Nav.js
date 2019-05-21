import React from "react";
import logo from "../tablet-logo-445x110@2x.png";

const Nav = ({ ui, changeUI }) => {
	return (
		<div data-test="component-nav" className="flex-between">
			<img src={logo} alt="logo" className="App-logo nav-item" />
			{ui === "search" ? (
				<div
					data-ui="favorites"
					className="nav-item"
					onClick={changeUI}
				>
					My Favorite Hotels
				</div>
			) : (
				<div data-ui="search" className="nav-item" onClick={changeUI}>
					Back To Search
				</div>
			)}
		</div>
	);
};

export default Nav;
