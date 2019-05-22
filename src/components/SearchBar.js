import React from "react";

const SearchBar = ({ handleSearch }) => {
	return (
		<div className="search-container">
			<div className="search-text">Where would you like to go?</div>
			<input className="search-input search-text " onChange={handleSearch} />
			<hr />
		</div>
	);
};

export default SearchBar;
